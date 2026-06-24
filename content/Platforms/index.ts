// content/Platforms/index.ts
import { ServiceContent } from '../type';
import { zapierAutomationService } from './zapier-automation-service'; 
import { makeAutomationService } from './make-automation-service';
import { n8nAutomationService } from './n8n-automation-service';
import { hubspotAutomationService } from './hubspot-automation-service';
import { gohighlevelAutomationService } from './go-highlevel-automation-service';  
export const platformContent: Record<string, ServiceContent> = {
  'zapier-automation-services': zapierAutomationService,
  'make-automation-services': makeAutomationService,
  'n8n-automation-services': n8nAutomationService,
  'hubspot-automation-services': hubspotAutomationService,
  'gohighlevel-automation-services': gohighlevelAutomationService,
};

// For static path generation
export const platformSlugs = Object.keys(platformContent);


export const getPlatformBySlug = (slug: string): ServiceContent | undefined => {
  return platformContent[slug];
};









