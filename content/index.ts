// content/index.ts
import { ServiceContent } from './type';
import { aiWorkflowAutomation } from './ai-workflow-automation';
import { aiWorkflowAutomationService } from './ai-workflow-automation-service';
import { businessProcessAutomation } from './business-process-automation';
import { aiAgentDevelopment } from './ai-agent-development';
import { aiIntegrationServices } from './ai-integration-service';
import { roboticProcessAutomation } from './robotic-process-automation';
import { aiChatbotAutomation } from './ai-chatbot-automation';
import { aiSalesAutomation } from './ai-sales-automation';
import { aiCustomerSupportAutomation } from './ai-customer-support-automation';
import { aiDataDocumentAutomation } from './ai-data-document-automation';
import { aiVoiceAgents } from './ai-voice-agents';
import { aiKnowledgeAssistants } from './ai-knowledge-assistants';
import { aiMarketingAutomation } from './ai-marketing-automation';

import DefaultTemplate from '@/components/templates/ServiceTemplate';
const contentMap: Record<string, ServiceContent> = {};
function registerService(service: ServiceContent) {
  if (!service.slug) return;
  contentMap[service.slug] = service;
}

registerService(aiWorkflowAutomation);
registerService(aiWorkflowAutomationService);
registerService(businessProcessAutomation);
registerService(aiAgentDevelopment);
registerService(aiIntegrationServices);
registerService(roboticProcessAutomation);
registerService(aiChatbotAutomation); 
registerService(aiSalesAutomation);
registerService(aiCustomerSupportAutomation);
registerService(aiDataDocumentAutomation); 
registerService(aiVoiceAgents);
registerService(aiKnowledgeAssistants);
registerService(aiMarketingAutomation);


export const serviceCategories = [
  {
    title: 'Core Automation',
    services: [
      { title: 'AI Workflow Automation', path: '/services/ai-workflow-automation' },
      { title: 'Business Process Automation', path: '/services/business-process-automation' },
      { title: 'Robotic Process Automation (RPA)', path: '/services/robotic-process-automation' },
    ]
  },
  {
    title: 'AI Agents & Assistants',
    services: [
      { title: 'AI Agent Development', path: '/services/ai-agent-development' },
      { title: 'AI Chatbot Automation', path: '/services/ai-chatbot-automation' },
      { title: 'AI Voice Agents', path: '/services/ai-voice-agents' },
      { title: 'AI Knowledge Assistants', path: '/services/ai-knowledge-assistants' },
    ]
  },
  {
    title: 'Automation by Function',
    services: [
      { title: 'AI Sales Automation', path: '/services/ai-sales-automation' },
      { title: 'AI Marketing Automation', path: '/services/ai-marketing-automation' },
      { title: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation' },
      { title: 'AI Data & Document Automation', path: '/services/ai-data-document-automation' },
      { title: 'AI Integration Services', path: '/services/ai-integration-services' },
    ]
  },
];

// All service entries for the navbar (flat list)
export const allServices: { slug: string; title: string; path: string }[] = [
  // Flatten services from categories
  ...serviceCategories.flatMap(cat => cat.services.map(s => ({
    slug: s.path.replace('/services/', ''),
    title: s.title,
    path: s.path,
  }))),
  // Add the pillar page (top-level)
  { slug: 'ai-automation-agency', title: 'AI Automation Agency', path: '/ai-automation-agency' },
];

// Helper: get full content by slug
export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return contentMap[slug];
}

// Helper: get all slugs for static generation
export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}

// Helper: get the appropriate template for a service
export function getTemplate(slug: string) {
  return DefaultTemplate;
}

// ──────────────────────────────────────────────
// ── PLATFORM DATA FOR NAV DROPDOWN ──
// ──────────────────────────────────────────────

export interface PlatformItem {
  title: string;
  path: string;
  description?: string;
}

export interface PlatformCategory {
  title: string;
  platforms: PlatformItem[];
}

export const platformCategories: PlatformCategory[] = [
  {
    title: 'Zapier',
    platforms: [
      {
        title: 'Zapier Experts',
        path: '/platforms/zapier-automation-services',
        description: 'Build, fix, and scale automations',
      },
    ],
  },
  {
    title: 'Make (Integromat)',
    platforms: [
      {
        title: 'Make Automation',
        path: '/platforms/make-automation-services',
        description: 'Visual workflows with real logic',
      },
    ],
  },
  {
    title: 'n8n',
    platforms: [
      {
        title: 'n8n Automation',
        path: '/platforms/n8n-automation-services',
        description: 'Self-hosted, AI-native workflows',
      },
    ],
  },
  
  {
    title: 'HubSpot',
    platforms: [
      {
        title: 'HubSpot Automation',
        path: '/platforms/hubspot-automation-services',
        description: 'Workflows, lead routing, data hygiene',
      },
    ],
  },
  {
    title: 'GoHighLevel',
    platforms: [
      {
        title: 'GHL Automation',
        path: '/platforms/gohighlevel-automation-services',
        description: 'Funnels, pipelines, AI follow-up',
      },
    ],
  }
];

export interface IndustryItem {
  title: string;
  path: string;
  description?: string;
}

export interface IndustryCategory {
  title: string;
  industries: IndustryItem[];
}

export const industryCategories: IndustryCategory[] = [
  {
    title: 'Industries',
    industries: [
      {
        title: 'Finance & Accounting',
        path: '/industries/finance-accounting',
        description: 'Automate invoicing, reconciliation, and reporting',
      },
        {
        title: 'Healthcare',
        path: '/industries/healthcare',
        description: 'Appointment scheduling, intake, reminders, and follow-up',
      },
       {
        title: 'Law Firms',
        path: '/industries/law-firms',
        description: 'Client intake, document generation, deadline tracking',
      },
      {
        title: 'E-commerce',
        path: '/industries/ecommerce',
        description: 'Support, orders, cart recovery, and marketing',
      },
       {
        title: 'SaaS',
        path: '/industries/saas',
        description: 'Onboarding, support deflection, churn signals, and revenue ops',
      },
    ],
  },
];