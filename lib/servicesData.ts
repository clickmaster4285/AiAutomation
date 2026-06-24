// lib/servicesData.ts

export interface ServiceContent {
  title: string;
  metaDescription: string;
  primaryKeyword: string;
  tagline: string;
  introduction: string;
  categories: {
    name: string;
    description: string;
  }[];
  platforms: string[];
}

export const servicesData: Record<string, ServiceContent> = {
  "ai-automation-agency": {
    title: "AI Automation Agency | Custom AI Workflows & Agents — Clickmasters",
    metaDescription: "Clickmasters is a US AI automation agency building custom AI agents, workflow automation, and business process systems that cut manual work and scale teams.",
    primaryKeyword: "ai automation agency",
    tagline: "Custom AI agents, workflow automation, and business process systems for US businesses that want to scale without hiring.",
    introduction: "We design and build the systems that take repetitive, manual work off your team's plate so the people you pay to think can stop doing the work that software should be doing instead.",
    categories: [
      {
        name: "AI Workflows & Process Automation",
        description: "Connecting your apps, automating multi-step processes across sales, operations, and finance, and utilizing Robotic Process Automation (RPA) for legacy systems."
      },
      {
        name: "AI Agents & Assistants",
        description: "Custom agents that qualify leads, conversational AI chatbots that book appointments, and internal knowledge assistants built on your documentation."
      },
      {
        name: "Functional Automation",
        description: "Deep automation for Sales, Marketing, Customer Support, and Data/Document processing to extract and route information seamlessly."
      }
    ],
    platforms: ["Zapier", "Make", "n8n", "HubSpot", "GoHighLevel", "OpenAI / Claude / Gemini"]
  }
  // You can easily add more services here later (e.g., "ai-workflow-automation": { ... })
};