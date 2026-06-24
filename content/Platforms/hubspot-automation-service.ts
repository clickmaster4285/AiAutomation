// content/Platforms/hubspot-automation-services.ts
import { ServiceContent } from '../type';

export const hubspotAutomationService: ServiceContent = {
  slug: 'hubspot-automation-services',
  title: 'HubSpot Automation Services | Clickmasters',
  metaDescription:
    'Clickmasters automates HubSpot — workflows, lead routing, data hygiene, and AI-enhanced sequences — so your CRM works for you instead of becoming a data-entry chore.',
  keywords: 'hubspot automation agency, hubspot consultant, hubspot workflows',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'HubSpot Automation Services',
      subheading:
        'Make HubSpot do more — automatically. Workflows, lead routing, data hygiene, and AI-enhanced sequences beyond the native features.',
      content: [
        'Clickmasters automates HubSpot so it works for you rather than becoming another system your team has to feed by hand. HubSpot is a powerful CRM and marketing platform, but most businesses use a fraction of what it can do, and many find it quietly becoming a data-entry chore. We build the workflows, routing, data hygiene, and AI-enhanced automation that turn HubSpot from a place you log information into a system that drives your sales and marketing on its own.',
        'This page explains where HubSpot automation delivers value beyond the built-in features, what we build, how we add AI, and how we work inside your existing instance.',
      ],
      stats: [
        { label: 'WORKFLOWS BUILT', value: '180+' },
        { label: 'CLIENTS', value: '70+' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/hubspot-hero.png',
        alt: 'HubSpot Automation Services',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: Beyond HubSpot's Built-In Automation ==========
    {
      type: 'text',
      heading: 'Beyond HubSpot\'s Built-In Automation',
      content: [
        'HubSpot has solid native automation — workflows, sequences, basic routing — and for straightforward needs it is enough. The value we add begins where the native features hit their limits: more sophisticated lead routing and scoring than the standard rules allow, data hygiene that keeps your CRM genuinely clean rather than slowly degrading, AI-drafted and personalized content inside workflows, and connections between HubSpot and the rest of your stack so it is not an island.',
        'The recurring problem we solve is the gap between what HubSpot could do and what a business actually has set up. Most instances are underused — workflows that were never built, data that is never cleaned, integrations that were never connected — because doing it well takes time and expertise the in-house team does not have to spare. We close that gap.',
      ],
    },

    // ========== FEATURES: Our HubSpot Services ==========
    {
      type: 'features',
      heading: 'Our HubSpot Services',
      items: [
        {
          title: 'HubSpot workflow automation',
          description:
            'Lead routing, nurturing, internal task automation, and process workflows built to your actual sales and marketing motions.',
          icon: 'GitBranch',
        },
        {
          title: 'CRM data hygiene',
          description:
            'Automated cleaning, deduplication, and enrichment so your HubSpot data stays accurate and your reporting stays trustworthy.',
          icon: 'Database',
        },
        {
          title: 'HubSpot plus AI',
          description:
            'AI-drafted emails, smarter lead scoring, and content generation inside your HubSpot workflows.',
          icon: 'Brain',
        },
        {
          title: 'Integrations',
          description:
            'Connecting HubSpot to your wider stack — billing, support, data tools — so information flows both ways automatically.',
          icon: 'Link2',
        },
        {
          title: 'Reporting automation',
          description:
            'Automated dashboards and pipeline reports assembled from live HubSpot data.',
          icon: 'BarChart',
        },
        {
      title: 'HubSpot custom objects & properties automation',
      description:
        'Automating custom objects and property management – syncing, updating, and enriching custom data models across your HubSpot ecosystem.',
      icon: 'Database',
    },
      ],
    },

    // ========== TEXT: Adding AI to HubSpot ==========
    {
      type: 'text',
      heading: 'Adding AI to HubSpot',
      content: [
        'HubSpot\'s data is a strong foundation for AI automation, because the AI has context to work with — contact history, deal stage, engagement. We layer AI onto that foundation: drafting personalized emails and sequences that reflect where a contact actually is, scoring leads on richer signals than a single field, generating content inside workflows, and adding decision-making that the standard rule-based workflows cannot do.',
        'As always, this is human-in-the-loop where it matters: AI drafts and suggests, your team approves where appropriate, and the automation runs the routine. The result is a HubSpot instance that does more of the thinking — personalizing and prioritizing — rather than just executing fixed rules and storing data.',
      ],
    },

    // ========== TEXT: How We Work Inside Your Instance ==========
    {
      type: 'text',
      heading: 'How We Work Inside Your Instance',
      content: [
        'We build within your existing HubSpot account, working with your setup rather than imposing a new system. Everything we create — workflows, integrations, automations — is documented and transparent, so your team understands it and can maintain it. We integrate HubSpot with your other tools through reliable connections, and we keep the whole thing aligned with how your sales and marketing actually operate. You own all of it, and you are never locked into depending on us to make a change.',
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Unlock what HubSpot can do',
          description:
            'Closing the gap between your instance\'s potential and its current setup.',
          icon: 'Target',
        },
        {
          title: 'AI-enhanced',
          description:
            'Going beyond native rules with drafting, scoring, and decisions.',
          icon: 'Brain',
        },
        {
          title: 'Connected',
          description:
            'HubSpot integrated with your wider stack, not an island.',
          icon: 'Link2',
        },
        {
          title: 'You own it',
          description:
            'Documented, transparent automation in your own instance.',
          icon: 'Award',
        },
      ],
    },

    // ========== TEXT: The State of Most HubSpot Instances ==========
    {
      type: 'text',
      heading: 'The State of Most HubSpot Instances',
      content: [
        'When we audit a business\'s HubSpot, a familiar picture emerges. The company is paying for a capable platform but using a slice of it. A handful of basic workflows exist, often built years ago by someone who has since left. The data has degraded — duplicates, incomplete records, stale information — so reporting is not fully trusted. Leads come in but are not scored or routed sophisticatedly, so good ones wait while reps work through the pile. Integrations that would connect HubSpot to the rest of the business were planned but never finished. None of this is unusual; it is the default state, because getting HubSpot to its potential takes dedicated time and expertise that busy teams rarely have.',
        'The opportunity, then, is rarely about buying more software — you already have the platform. It is about actually configuring and automating what you are paying for. That is usually the highest-return work available, because the foundation is already there and the cost is already sunk; we are unlocking value you have already purchased rather than adding new expense.',
      ],
    },

    // ========== TEXT: A Worked Example: Lead Routing and Follow-Up ==========
    {
      type: 'text',
      heading: 'A Worked Example: Lead Routing and Follow-Up',
      content: [
        'Take a common scenario: inbound leads arrive in HubSpot and a rep eventually works through them in roughly the order they came in. Good-fit leads wait behind poor-fit ones, follow-up is manual and inconsistent, and some leads never get a timely response at all. The pipeline data is patchy because activity logging depends on reps remembering.',
        'Automated, the same flow transforms: each lead is enriched and scored on fit the moment it arrives, routed instantly to the right rep, and entered into a personalized follow-up sequence that begins immediately and adapts to engagement. Activity is logged automatically, so the pipeline reflects reality. Reps spend their time on the highest-scoring leads, follow-up never slips, and management finally has data it can trust. This is HubSpot doing what it was bought to do — and it is entirely achievable within the platform you already have.',
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'Can HubSpot be automated beyond its built-in workflows?',
          description:
            'Yes. Beyond native workflows HubSpot can be connected to external automation and AI for advanced routing, enrichment, content generation, and cross-system processes — going well past what the standard features do.',
        },

        {
          title: 'Do you work inside our HubSpot instance?',
          description:
            'Yes. We build within your existing HubSpot account and integrate it with your other tools, with documented, transparent workflows you own and can maintain.',
        },
        
        {
          title: 'Can AI write emails in HubSpot?',
          description:
            'Yes. AI steps can draft and personalize emails and sequences inside HubSpot workflows, using your CRM context, with your team approving as needed.',
        },
        {
          title: 'Can you keep our HubSpot data clean automatically?',
          description:
            'Yes. We build automated cleaning, deduplication, and enrichment so your HubSpot data stays accurate over time — which keeps your reporting and automation trustworthy.',
        },
        {
          title: 'Can HubSpot connect to our other tools?',
          description:
            'Yes. We integrate HubSpot with your billing, support, data, and other systems so information flows automatically between them rather than being re-entered by hand.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Get more out of the HubSpot you already pay for.',
      subheading:
        "Book a free automation audit — we'll find the highest-value automation first.",
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};