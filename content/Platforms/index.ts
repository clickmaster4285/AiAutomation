// content/Platforms/index.ts
import { ServiceContent } from '../type';
import { zapierAutomationService } from './zapier-automation-service'; 
import { makeAutomationService } from './make-automation-service';
import { n8nAutomationService } from './n8n-automation-service';
import { hubspotAutomationService } from './hubspot-automation-service';
import { gohighlevelAutomationService } from './go-highlevel-automation-service';
import { airtableAutomationService } from './airtable-automation-service';

export const platformContent: Record<string, ServiceContent> = {
  'zapier-automation-services': zapierAutomationService,
  'make-automation-services': makeAutomationService,
  'n8n-automation-services': n8nAutomationService,
  'hubspot-automation-services': hubspotAutomationService,
  'gohighlevel-automation-services': gohighlevelAutomationService,
  'airtable-automation-services': airtableAutomationService,
};

export const platformSlugs = Object.keys(platformContent);

export const getPlatformBySlug = (slug: string): ServiceContent | undefined => {
  return platformContent[slug];
};

export const getAllPlatforms = (): ServiceContent[] => {
  return Object.values(platformContent);
};

export const searchPlatforms = (query: string): ServiceContent[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(platformContent).filter(platform => {
    // Safe checks with optional chaining and fallback to empty string
    const title = platform.title?.toLowerCase() || '';
    const metaDesc = platform.metaDescription?.toLowerCase() || '';
    const keywords = platform.keywords?.toLowerCase() || '';
    
    return title.includes(lowerQuery) ||
           metaDesc.includes(lowerQuery) ||
           keywords.includes(lowerQuery);
  });
};

// Alternative: More concise version using optional chaining
export const searchPlatformsConcise = (query: string): ServiceContent[] => {
  const lowerQuery = query.toLowerCase();
  return Object.values(platformContent).filter(platform => 
    (platform.title?.toLowerCase() || '').includes(lowerQuery) ||
    (platform.metaDescription?.toLowerCase() || '').includes(lowerQuery) ||
    (platform.keywords?.toLowerCase() || '').includes(lowerQuery)
  );
};