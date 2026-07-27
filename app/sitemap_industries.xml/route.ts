import { getIndustries } from '../sitemap_utils';

const siteUrl = "https://clickmastersaiautomation.com";

export async function GET() {
  const lastModified = new Date().toISOString();
  
  // Get all industries and their sub-pages from the app directory
  const industries = getIndustries();

  // Debug: Log what we found
  console.log('Generating industries sitemap with:', industries);

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // If no industries found, add a default message or use hardcoded fallback
  if (industries.length === 0) {
    // Add a comment but still generate valid XML
    sitemap += `
  <!-- No industry pages found - please check your folder structure -->`;
    
    // You can optionally add hardcoded URLs here as a fallback
    const fallbackIndustries = [
      'finance-accounting',
      'healthcare',
      'law-firms',
      'ecommerce',
      'saas',
      'professional-services',
      'logistics-supply-chain',
      'real-estate',
      'education'
    ];
    
    for (const slug of fallbackIndustries) {
      sitemap += `
  <url>
    <loc>${siteUrl}/industries/${slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    }
  }

  // Add all industries and their sub-pages
  for (const industry of industries) {
    // Add the main industry page
    sitemap += `
  <url>
    <loc>${siteUrl}/industries/${industry.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    
    // Add sub-pages if they exist
    if (industry.subPages && industry.subPages.length > 0) {
      for (const subPage of industry.subPages) {
        const cleanSubPage = subPage.replace(/\/index$/, '').replace(/\/page$/, '');
        sitemap += `
  <url>
    <loc>${siteUrl}${cleanSubPage}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      }
    }
  }

  sitemap += `
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}