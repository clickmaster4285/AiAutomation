// content/Solutions/index.ts
import { SolutionData } from '@/content/type';
import { aiChatbotsWithZapier } from './ai-chatbots-with-zapier';
import { aiChatbotsWithSalesforce } from './ai-chatbots-with-salesforce';
import { aiWorkflowAutomationWithHubspot } from './ai-workflow-automation-with-hubspot';
import { aiWorkflowAutomationWithN8n } from './ai-workflow-automation-with-n8n';
import { aiWorkflowAutomationWithSalesforce } from './ai-workflow-automation-with-salesforce';
import { aiWorkflowAutomationWithZapier } from './ai-workflow-automation-with-zapier';
import { crmAutomationWithAirtable } from './crm-automation-with-airtable';
import { crmAutomationWithHubspot } from './crm-automation-with-hubspot';
import { crmAutomationWithSalesforce } from './crm-automation-with-salesforce';
import { documentAutomationWithAirtable } from './document-automation-with-airtable';
import { documentAutomationWithN8n } from './document-automation-with-n8n';
import { documentAutomationWithSalesforce } from './document-automation-with-salesforce';
import { leadGenerationAutomationWithHubspot } from './lead-generation-automation-with-hubspot';
import { leadGenerationAutomationWithSalesforce } from './lead-generation-automation-with-salesforce';
import { customerSupportAutomationWithZapier } from './customer-support-automation-with-zapier';
import { marketingAutomationWithHubspot } from './marketing-automation-with-hubspot';
import { marketingAutomationWithSalesforce } from './marketing-automation-with-salesforce';
import { reportingAutomationWithN8n } from './reporting-automation-with-n8n';
import { reportingAutomationWithSalesforce } from './reporting-automation-with-salesforce';
// Import Sales Automation solution
import { salesAutomationWithHubspot } from './sales-automation-with-hubspot';

// Export types
export type { 
  SolutionData, 
  FAQ, 
  SolutionFeature, 
  SolutionProcessStep, 
  SolutionStat, 
  RelatedSolution 
} from '@/content/type';

// Export individual solutions
export { aiChatbotsWithZapier } from './ai-chatbots-with-zapier';
export { aiChatbotsWithSalesforce } from './ai-chatbots-with-salesforce';
export { aiWorkflowAutomationWithHubspot } from './ai-workflow-automation-with-hubspot';
export { aiWorkflowAutomationWithN8n } from './ai-workflow-automation-with-n8n';
export { aiWorkflowAutomationWithSalesforce } from './ai-workflow-automation-with-salesforce';
export { aiWorkflowAutomationWithZapier } from './ai-workflow-automation-with-zapier';
export { crmAutomationWithAirtable } from './crm-automation-with-airtable';
export { crmAutomationWithHubspot } from './crm-automation-with-hubspot';
export { crmAutomationWithSalesforce } from './crm-automation-with-salesforce';
export { documentAutomationWithAirtable } from './document-automation-with-airtable';
export { documentAutomationWithN8n } from './document-automation-with-n8n';
export { documentAutomationWithSalesforce } from './document-automation-with-salesforce';
export { leadGenerationAutomationWithHubspot } from './lead-generation-automation-with-hubspot';
export { leadGenerationAutomationWithSalesforce } from './lead-generation-automation-with-salesforce';
export { customerSupportAutomationWithZapier } from './customer-support-automation-with-zapier';
export { marketingAutomationWithHubspot } from './marketing-automation-with-hubspot';
export { marketingAutomationWithSalesforce } from './marketing-automation-with-salesforce';
export { reportingAutomationWithN8n } from './reporting-automation-with-n8n';
export { reportingAutomationWithSalesforce } from './reporting-automation-with-salesforce';
export { salesAutomationWithHubspot } from './sales-automation-with-hubspot';

// Export all solutions as a record
export const solutionsContent: Record<string, SolutionData> = {
  'ai-chatbots/with-zapier': aiChatbotsWithZapier,
  'ai-chatbots/with-salesforce': aiChatbotsWithSalesforce,
  'ai-workflow-automation/with-hubspot': aiWorkflowAutomationWithHubspot,
  'ai-workflow-automation/with-n8n': aiWorkflowAutomationWithN8n,
  'ai-workflow-automation/with-salesforce': aiWorkflowAutomationWithSalesforce,
  'ai-workflow-automation/with-zapier': aiWorkflowAutomationWithZapier,
  'crm-automation/with-airtable': crmAutomationWithAirtable,
  'crm-automation/with-hubspot': crmAutomationWithHubspot,
  'crm-automation/with-salesforce': crmAutomationWithSalesforce,
  'document-automation/with-airtable': documentAutomationWithAirtable,
  'document-automation/with-n8n': documentAutomationWithN8n,
  'document-automation/with-salesforce': documentAutomationWithSalesforce,
  'lead-generation-automation/with-hubspot': leadGenerationAutomationWithHubspot,
  'lead-generation-automation/with-salesforce': leadGenerationAutomationWithSalesforce,
  'customer-support-automation/with-zapier': customerSupportAutomationWithZapier,
  'marketing-automation/with-hubspot': marketingAutomationWithHubspot,
  'marketing-automation/with-salesforce': marketingAutomationWithSalesforce,
  'reporting-automation/with-n8n': reportingAutomationWithN8n,
  'reporting-automation/with-salesforce': reportingAutomationWithSalesforce,
  'sales-automation/with-hubspot': salesAutomationWithHubspot,
};

// Helper functions
export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutionsContent[slug];
}

export function getAllSolutions(): SolutionData[] {
  return Object.values(solutionsContent);
}

export function getSolutionsByCategory(category: string): SolutionData[] {
  return Object.entries(solutionsContent)
    .filter(([slug]) => slug.startsWith(category))
    .map(([, content]) => content);
}

export const allSolutions = Object.values(solutionsContent);

export default solutionsContent;