// content/Platforms/make-automation-services.ts
import { ServiceContent } from '../type';

export const makeAutomationService: ServiceContent = {
  slug: 'make-automation-services',
  title: 'Make (Integromat) Automation Services | Clickmasters',
  metaDescription:
    'Clickmasters designs Make automations — visual, multi-step workflows with real logic — at lower run-cost than enterprise tools. Build, migrate, and scale on Make.',
  keywords: 'make automation agency, make automation services, integromat, make integromat',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'Make Automation Services',
      subheading:
        'Powerful visual workflows for teams that have outgrown simple tools but want lower run-costs than enterprise platforms.',
      content: [
        'Clickmasters designs and builds Make automations for businesses that have outgrown the simplest tools but do not want the cost or complexity of enterprise platforms. Make — formerly Integromat — sits in a genuinely useful middle ground: a visual canvas for building multi-step workflows with real branching logic, at a per-operation price that is usually friendlier than Zapier\'s per-task model once volume climbs. For a lot of growing operations teams, it is the sweet spot.',
        'This page explains what Make is good at, when it is the right choice, the services we provide, and how it compares to the alternatives, so you can decide whether it fits your situation.',
      ],
      stats: [
        { label: 'WORKFLOWS BUILT', value: '200+' },
        { label: 'CLIENTS', value: '95+' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/make-hero.png',
        alt: 'Make Automation Services',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: What Make Is Good At ==========
    {
      type: 'text',
      heading: 'What Make Is Good At',
      content: [
        'Make\'s defining strength is its visual scenario builder. Instead of the linear, step-after-step model of simpler tools, Make gives you a canvas where you can see the whole workflow, branch it down multiple paths, loop over data, and handle real conditional logic. For workflows that are more than a straight line — where what happens next depends on the data, or where one trigger fans out into several actions — that visual clarity is a real advantage, both for building and for understanding what a workflow does later.',
        'Its second strength is cost at volume. Make charges per operation rather than per task, and for many real-world workflows that works out cheaper than the equivalent on Zapier, especially as the number of steps and runs grows. It is not always cheaper — it depends on the workflow shape — but for multi-step automations at volume, Make frequently wins on economics while offering more logical power.',
      ],
    },

    // ========== TEXT: When Make Is the Right Choice ==========
    {
      type: 'text',
      heading: 'When Make Is the Right Choice',
      content: [
        'Make is the right tool when your automations have real complexity — multiple steps, branching, conditional logic, data transformation — but you do not need the self-hosting or full data control that pushes a project toward n8n, and you have outgrown the simplicity ceiling of Zapier. It suits operations teams at small and mid-sized businesses who want to see and manage their workflows visually and who care about keeping run-costs reasonable as volume grows.',
        'It is less ideal at the extremes. For a genuinely simple, linear automation and a non-technical user who wants it live in minutes, Zapier is often easier. For high-volume, data-sensitive, or AI-heavy production workflows where self-hosting and no per-run fees matter, n8n is usually the better home. We will tell you honestly which end of that spectrum your project sits on rather than pushing Make for everything.',
      ],
    },

    // ========== FEATURES: Our Make Services ==========
    {
      type: 'features',
      heading: 'Our Make Services',
      items: [
        {
          title: 'Make scenario design',
          description:
            'Multi-step visual workflows with branching, routing, and data handling built around your actual processes.',
          icon: 'GitBranch',
        },
        {
          title: 'Migration to Make',
          description:
            'Moving workflows from Zapier when per-task pricing has become expensive, capturing the same automation at lower run-cost.',
          icon: 'ArrowRight',
        },
        {
          title: 'Make plus AI',
          description:
            'Adding OpenAI or Claude steps for drafting, classification, and decisions inside your Make scenarios.',
          icon: 'Brain',
        },
        {
          title: 'Audit and optimization',
          description:
            'Reviewing existing scenarios to cut operation usage, fix fragile logic, and improve reliability.',
          icon: 'Search',
        },
        {
          title: 'Ongoing management',
          description:
            'Monitoring and scaling your Make automations as your processes and volume grow.',
          icon: 'RefreshCw',
        },
        {
      title: 'Custom API & webhook integration',
      description:
        'Extending Make scenarios with custom API calls, webhooks, and external services to connect tools that don\'t have native integrations.',
      icon: 'Code',
    },
      ],
    },

    // ========== GRID: Comparison Table (Make vs Zapier vs n8n) ==========
    {
      type: 'grid',
      heading: 'Make vs. Zapier vs. n8n',
      subheading:
        'Since these three come up together constantly, here is the honest comparison for choosing between them.',
      items: [
        {
          title: 'Best for',
          description: 'Visual multi-step logic',
          icon: 'GitBranch',
        },
        {
          title: 'Pricing',
          description: 'Per operation (often cheaper at volume)',
          icon: 'DollarSign',
        },
        {
          title: 'Learning curve',
          description: 'Moderate',
          icon: 'Brain',
        },
        {
          title: 'Self-hosting',
          description: 'No',
          icon: 'Cloud',
        },
        {
          title: 'Data control',
          description: 'Cloud only',
          icon: 'Database',
        },
         {
      title: 'AI & LLM Support',
      description: 'Native AI nodes for building agents and LLM workflows',
      icon: 'Brain',
    },
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Platform-honest',
          description:
            'We use Make where it fits and tell you when Zapier or n8n would serve you better.',
          icon: 'Shield',
        },
        {
          title: 'Reliability-first',
          description:
            'Scenarios built with error handling and efficient design, not just the happy path.',
          icon: 'Target',
        },
        {
          title: 'Cost-aware',
          description:
            'We design to keep operation usage — and your bill — under control.',
          icon: 'DollarSign',
        },
        {
          title: 'You own it',
          description: 'Documented, transparent scenarios you control.',
          icon: 'Award',
        },
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is Make used for?',
          description:
            'Make (formerly Integromat) is a visual automation platform for building multi-step workflows that connect apps with branching logic — a middle ground between Zapier\'s simplicity and developer-level tools, well suited to operations teams with real workflow complexity.',
        },
        {
          title: 'Is Make cheaper than Zapier?',
          description:
            'Often, yes. Make\'s per-operation pricing is usually more cost-effective than Zapier\'s per-task model at comparable volume, particularly for multi-step workflows — though it depends on the specific workflow shape.',
        },
        {
          title: 'Should I use Make or n8n?',
          description:
            'Make is cloud-only and visual, ideal when you want a managed platform with strong logic. n8n adds self-hosting and full data control, better for high-volume, data-sensitive, or AI-heavy production workflows. We help you choose based on your data needs and volume.',
        },
        {
          title: 'Can Make use AI?',
          description:
            'Yes. We add OpenAI or Claude steps inside Make scenarios for drafting, classification, and decision-making, extending your automations beyond simple rule-based actions.',
        },
        {
          title: 'Can you migrate our Zapier workflows to Make?',
          description:
            'Yes. When Zapier\'s per-task pricing has become expensive, we migrate the right workflows to Make to cut run-cost while preserving the automation — and we tell you honestly when a migration is and isn\'t worth it.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Wondering if Make is right for your workflows?',
      subheading:
        "Book a free automation audit — we'll recommend the platform that fits, honestly.",
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};