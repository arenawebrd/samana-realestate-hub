import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

config();

const API_KEY = process.env.PEXEL_API;
const BASE_URL = 'https://api.pexels.com/v1/search';

const queries = {
  // Homepage
  'home/hero': 'Dominican Republic beach luxury real estate',
  
  // Locations
  'locations/santa-barbara-de-samana': 'Samana city Dominican Republic aerial view',
  'locations/las-terrenas': 'Las Terrenas beach Dominican Republic',
  'locations/sanchez': 'Sanchez Samana Dominican Republic town',
  'locations/el-valle': 'El Valle Samana Dominican Republic beach',
  'locations/las-galeras': 'Las Galeras beach Dominican Republic tropical',
  'locations/el-limon': 'El Limon waterfall Samana Dominican Republic',
  'locations/arroyo-barril': 'Arroyo Barril Samana Dominican Republic coast',
  
  // Categories
  'categories/real-estate-agency': 'real estate agency office modern',
  'categories/real-estate-agent': 'real estate agent showing property',
  'categories/real-estate-developer': 'real estate development construction modern',
  'categories/vacation-home-rental': 'vacation rental villa Caribbean beach',
  'categories/property-management': 'property management apartment building',
  'categories/real-estate-consultant': 'business meeting real estate consultation',
  'categories/apartment-complex': 'modern apartment complex tropical',
  'categories/home-builder': 'home construction builder modern house',
  'categories/real-estate-attorney': 'real estate legal documents signing',
  'categories/real-estate-appraiser': 'property appraisal house evaluation',
};

async function fetchImage(query, filename) {
  try {
    const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&size=large`, {
      headers: { 'Authorization': API_KEY }
    });
    
    if (!response.ok) {
      console.error(`Error fetching ${query}: ${response.statusText}`);
      return null;
    }
    
    const data = await response.json();
    
    if (data.photos && data.photos.length > 0) {
      const photo = data.photos[0];
      const imageUrl = photo.src.large2x || photo.src.large;
      const photographer = photo.photographer;
      const photographerUrl = photo.photographer_url;
      
      // Download image
      const imgResponse = await fetch(imageUrl);
      const buffer = await imgResponse.arrayBuffer();
      
      const publicDir = join(process.cwd(), 'public', 'images');
      const dir = join(publicDir, filename.split('/').slice(0, -1).join('/'));
      
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
      
      const filePath = join(publicDir, `${filename}.jpg`);
      writeFileSync(filePath, Buffer.from(buffer));
      
      console.log(`✓ ${filename}.jpg - Photo by ${photographer}`);
      
      return {
        id: photo.id,
        url: photo.url,
        photographer,
        photographerUrl,
        width: photo.width,
        height: photo.height,
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching ${query}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Fetching images from Pexels...\n');
  
  const metadata = {};
  
  for (const [key, query] of Object.entries(queries)) {
    console.log(`Fetching: ${query}`);
    const result = await fetchImage(query, key);
    if (result) {
      metadata[key] = result;
    }
    // Rate limiting
    await new Promise(r => setTimeout(r, 200));
  }
  
  // Save metadata
  const metadataPath = join(process.cwd(), 'public', 'images', 'metadata.json');
  writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
  console.log(`\nMetadata saved to public/images/metadata.json`);
  
  console.log('\nDone!');
}

main().catch(console.error);
