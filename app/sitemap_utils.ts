import fs from 'fs';
import path from 'path';

// Get all routes from the app directory
export function getAllRoutes(): string[] {
  const appDir = path.join(process.cwd(), 'app');
  const routes: string[] = [];
  
  // Skip these directories
  const excludeDirs = [
    'api',
    'favicon.ico',
    'robots.txt',
    'sitemap.xml',
    'sitemap_pages.xml',
    'sitemap_services.xml',
    'sitemap_solutions.xml',
    'sitemap_industries.xml',
    'sitemap_blogs.xml',
    'sitemap_platforms.xml',
    'components',
    'content',
    'hooks',
    'lib',
    'utils',
    'styles',
    'public',
    'node_modules',
    'sitemap_utils.ts',
    'sitemap_utils.d.ts',
    'debug-routes',
    'debug-blogs',
    'debug-services',
    'debug-pages',
    'debug-platforms',
    'debug-industries',
    '(landing)',
  ];

  function scanDirectory(dir: string, basePath: string = '') {
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        // Skip excluded directories
        if (excludeDirs.includes(item)) continue;
        
        // Skip directories that start with ( ) like (landing)
        if (item.startsWith('(') && item.endsWith(')')) continue;
        
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          // Check if this directory contains a page file
          const files = fs.readdirSync(itemPath);
          const hasPageFile = files.some(file => 
            file.match(/^page\.(tsx|jsx|js|ts)$/)
          );
          
          // Check if it's a dynamic route (has [slug] or [...slug])
          const isDynamic = item.includes('[') && item.includes(']');
          
          if (hasPageFile && !isDynamic) {
            // This is a route
            let routePath = basePath + '/' + item;
            // Clean up the route
            let cleanRoute = routePath.replace(/\/index$/, '').replace(/\/page$/, '');
            
            // Convert to lowercase for consistency
            cleanRoute = cleanRoute.toLowerCase();
            
            if (cleanRoute && !cleanRoute.includes('[')) {
              routes.push(cleanRoute);
            }
          }
          
          // Recursively scan subdirectories
          scanDirectory(itemPath, basePath + '/' + item);
        }
      }
    } catch (error) {
      console.error('Error scanning directory:', error);
    }
  }

  scanDirectory(appDir);
  
  // Add root route if not present
  if (!routes.includes('')) {
    routes.unshift('');
  }
  
  // Remove duplicates and sort
  const uniqueRoutes = [...new Set(routes)];
  uniqueRoutes.sort();
  
  return uniqueRoutes;
}

// Get only static pages
export function getStaticPages(): string[] {
  const allRoutes = getAllRoutes();
  
  const mainPages = [
    '',           // Home page
    '/about',
    '/blog',
    '/contact',
    '/platforms',
    '/industries',
  ];
  
  const existingMainPages = mainPages.filter(route => 
    allRoutes.includes(route) || route === ''
  );
  
  return existingMainPages;
}

// Get services
export function getServices(): { path: string; subPages: string[] }[] {
  const allRoutes = getAllRoutes();
  
  const mainServices = [
    '/core-automation',
    '/ai-agents-and-assistants',
    '/automation-by-function',
    '/ai-strategy-development',
  ];
  
  const existingMainServices = mainServices.filter(route => 
    allRoutes.includes(route)
  );
  
  if (existingMainServices.length > 0) {
    const result: { path: string; subPages: string[] }[] = [];
    
    for (const servicePath of existingMainServices) {
      const subPages = allRoutes.filter(route => 
        route.startsWith(servicePath + '/') && 
        route !== servicePath &&
        !route.includes('[') &&
        !route.includes('...')
      );
      
      result.push({
        path: servicePath,
        subPages: subPages,
      });
    }
    
    return result;
  }
  
  // Hardcoded fallback
  return [
    {
      path: '/core-automation',
      subPages: [
        '/core-automation/ai-workflow-automation',
        '/core-automation/business-process-automation',
        '/core-automation/robotic-process-automation',
      ]
    },
    {
      path: '/ai-agents-and-assistants',
      subPages: [
        '/ai-agents-and-assistants/ai-agent-development',
        '/ai-agents-and-assistants/ai-chatbot-automation',
        '/ai-agents-and-assistants/ai-voice-agents',
        '/ai-agents-and-assistants/ai-knowledge-assistants',
      ]
    },
    {
      path: '/automation-by-function',
      subPages: [
        '/automation-by-function/ai-sales-automation',
        '/automation-by-function/ai-marketing-automation',
        '/automation-by-function/ai-customer-support-automation',
        '/automation-by-function/ai-data-document-automation',
        '/automation-by-function/ai-integration-services',
      ]
    },
    {
      path: '/ai-strategy-development',
      subPages: [
        '/ai-strategy-development/ai-consulting-services',
        '/ai-strategy-development/custom-ai-development',
        '/ai-strategy-development/ai-reporting-automation',
        '/ai-strategy-development/ai-lead-generation',
      ]
    }
  ];
}

// Get solutions
export function getSolutions(): string[] {
  const allRoutes = getAllRoutes();
  
  const solutionRoutes = allRoutes.filter(route => 
    route.startsWith('/solutions') && 
    route !== '/solutions' &&
    !route.includes('[')
  );
  
  // If no solutions found, return hardcoded list
  if (solutionRoutes.length === 0) {
    return [
      'ai-chatbots',
      'ai-voice-agents',
      'ai-workflow-automation',
      'appointment-booking-automation',
      'bussiness-process-automation',
      'crm-automation',
      'document-automation',
      'invoice-automation',
      'lead-generation-automation',
      'customer-support-automation',
      'marketing-automation',
      'reporting-automation',
      'sales-automation',
      'ai-agents',
    ];
  }
  
  return solutionRoutes.map(route => route.replace('/solutions/', ''));
}

// Get industries - FIXED VERSION
export function getIndustries(): { slug: string; subPages: string[] }[] {
  const allRoutes = getAllRoutes();
  
  // Try to find industries in the routes
  const industryRoutes = allRoutes.filter(route => 
    route.startsWith('/industries') && 
    route !== '/industries' &&
    !route.includes('[')
  );
  
  // If industries found, extract them
  if (industryRoutes.length > 0) {
    const mainIndustries: string[] = [];
    const subPages: { [key: string]: string[] } = {};
    
    for (const route of industryRoutes) {
      const parts = route.split('/').filter(p => p !== '');
      if (parts.length === 2) {
        const slug = parts[1];
        if (!mainIndustries.includes(slug)) {
          mainIndustries.push(slug);
        }
      } else if (parts.length > 2) {
        const industrySlug = parts[1];
        if (!subPages[industrySlug]) {
          subPages[industrySlug] = [];
        }
        if (!subPages[industrySlug].includes(route)) {
          subPages[industrySlug].push(route);
        }
      }
    }
    
    return mainIndustries.map(slug => ({
      slug: slug,
      subPages: subPages[slug] || [],
    }));
  }
  
  // Hardcoded fallback for industries
  return [
    {
      slug: 'finance-accounting',
      subPages: [],
    },
    {
      slug: 'healthcare',
      subPages: [],
    },
    {
      slug: 'law-firms',
      subPages: [],
    },
    {
      slug: 'ecommerce',
      subPages: [],
    },
    {
      slug: 'saas',
      subPages: [],
    },
    {
      slug: 'professional-services',
      subPages: [],
    },
    {
      slug: 'logistics-supply-chain',
      subPages: [],
    },
    {
      slug: 'real-estate',
      subPages: [],
    },
    {
      slug: 'education',
      subPages: [],
    }
  ];
}

// Get blogs - FIXED VERSION
export function getBlogPosts(): { slug: string; subPages: string[]; date?: string }[] {
   return [
    {
      slug: '', // An empty slug means the base /blog path.
      subPages: [], // No sub-pages for the main page.
      date: new Date().toISOString().split('T')[0], // Today's date.
    },
  ];
}

// Get platforms
export function getPlatforms(): string[] {
  const allRoutes = getAllRoutes();
  
  const platformRoutes = allRoutes.filter(route => 
    route.startsWith('/platforms') && 
    route !== '/platforms' &&
    !route.includes('[')
  );
  
  if (platformRoutes.length > 0) {
    return platformRoutes.map(route => route.replace('/platforms/', ''));
  }
  
  // Return hardcoded platforms
  return [
    'zapier-automation-services',
    'make-automation-services',
    'n8n-automation-services',
    'hubspot-automation-services',
    'gohighlevel-automation-services',
    'airtable-automation-services',
  ];
}