// content/Platforms/n8n-automation-services.ts
import { ServiceContent } from '../type';

export const n8nAutomationService: ServiceContent = {
  slug: 'n8n-automation-services',
  title: 'n8n Automation Services & Development | Clickmasters',
  metaDescription:
    'Clickmasters builds and hosts n8n automations — production workflows with deep AI/LLM nodes, full data control, and no per-task fees. Ideal for scaling teams.',
  keywords: 'n8n automation agency, n8n development, n8n consultant',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'n8n Automation Services',
      subheading:
        'Self-hosted, AI-native automation with full data control and no per-task fees — for scaling and data-sensitive teams.',
      content: [
        'Clickmasters builds, deploys, and manages n8n automations for businesses that want power, data control, and freedom from per-task fees. n8n is the most capable of the major automation platforms for technical and production use: open-source, self-hostable, with the deepest support for AI and large-language-model workflows and no per-execution pricing to constrain how much you automate. For scaling teams, data-sensitive industries, and AI-heavy workflows, it is usually the right home.',
        'This page explains what makes n8n different, when it is the right choice, the services we provide including hosting, and how it compares to the cloud-only alternatives.',
      ],
      stats: [
        { label: 'WORKFLOWS BUILT', value: '150+' },
        { label: 'CLIENTS', value: '60+' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/n8n-hero.png',
        alt: 'n8n Automation Services',
        width: 1200,
        height: 1000,
        fadeEdges: true,
      },
    },

    // ========== TEXT: What Makes n8n Different ==========
    {
      type: 'text',
      heading: 'What Makes n8n Different',
      content: [
        'Three things set n8n apart from Zapier and Make. First, it is self-hostable: you can run it on your own infrastructure, which means your data never leaves your environment — a decisive advantage for regulated industries and anyone handling sensitive information. Second, it has no per-task or per-operation fees when self-hosted; you pay for the server, and you can run as many workflows and executions as that server handles, which transforms the economics at volume. Third, it has the deepest AI and LLM support of the mainstream platforms, with native nodes for building AI agents and complex AI-driven workflows.',
        'The trade-off is honest to state: n8n has the steepest learning curve, and self-hosting requires technical capability to do well — secure setup, maintenance, updates, backups. That is precisely where an experienced partner earns their place. Built and managed properly, n8n delivers capability and economics the cloud-only tools cannot match; built carelessly, self-hosting becomes a liability. The platform rewards expertise.',
      ],
    },

    // ========== TEXT: When n8n Is the Right Choice ==========
    {
      type: 'text',
      heading: 'When n8n Is the Right Choice',
      content: [
        'n8n is the right tool when one or more of these is true: you run high volumes where per-task pricing on other platforms would be punishing; you handle sensitive data that should not flow through a third-party cloud; you are building AI agents or LLM-heavy workflows that need deep model integration; or you want to avoid vendor lock-in and own your automation infrastructure outright. Startups building customer-facing AI workflows, agencies delivering to clients, and regulated teams with data-residency requirements are typical fits.',
        'It is overkill when your needs are simple and your volume is low — a non-technical team automating a few straightforward connectors is usually better served by Zapier\'s ease of use, and we will say so. n8n\'s power is worth its complexity only when you actually need that power.',
      ],
    },

    // ========== FEATURES: Our n8n Services ==========
    {
      type: 'features',
      heading: 'Our n8n Services',
      items: [
        {
          title: 'n8n workflow development',
          description:
            'Production-grade workflows with custom logic, code nodes, and the reliability that real use demands.',
          icon: 'GitBranch',
        },
        {
          title: 'Self-hosted n8n setup',
          description:
            'Secure, properly configured n8n on your infrastructure — with the reverse proxy, SSL, authentication, and backups that production requires.',
          icon: 'Server',
        },
        {
          title: 'n8n plus AI agents',
          description:
            'Building AI agents and LLM-driven workflows using n8n\'s native AI nodes, connected to your systems and data.',
          icon: 'Brain',
        },
        {
          title: 'Migration to n8n',
          description:
            'Moving heavy or sensitive workflows off per-task platforms to cut cost and gain control.',
          icon: 'ArrowRight',
        },
        {
          title: 'Ongoing management',
          description:
            'Monitoring, updates, and scaling, so your self-hosted instance stays secure and reliable without becoming your burden.',
          icon: 'RefreshCw',
        },
        {
      title: 'Custom n8n node development',
      description:
        'Building custom nodes and extending n8n with tailored logic, connectors, and integrations for your unique requirements.',
      icon: 'Code',
    },
      ],
    },

    // ========== TEXT: On Self-Hosting: Done Right vs. Done Badly ==========
    {
      type: 'text',
      heading: 'On Self-Hosting: Done Right vs. Done Badly',
      content: [
        'Self-hosting is where n8n\'s biggest advantages and biggest risks both live. Done right, a self-hosted instance gives you unlimited executions for the cost of a server, complete data control, and full flexibility — at a fraction of what equivalent volume would cost on a per-task platform. Done badly, it becomes a security exposure and a maintenance headache: an unprotected editor open to the internet, secrets hardcoded where they shouldn\'t be, no backups, no monitoring, and an instance that breaks and takes your automations down with it.',
        'We deploy n8n the right way: behind a reverse proxy with SSL, with proper authentication, secrets managed securely, regular backups, and monitoring so problems surface immediately. We can host and manage it for you, or set it up and hand it off documented. The point is that you get n8n\'s real advantages without inheriting the risks that careless self-hosting brings.',
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Production-grade builds',
          description:
            'Reliable, secure workflows and instances built for real use, not demos.',
          icon: 'Shield',
        },
        {
          title: 'Self-hosting expertise',
          description:
            'Secure deployment and management, so you get the upside without the risk.',
          icon: 'Server',
        },
        {
          title: 'AI-native',
          description:
            'Deep use of n8n\'s AI nodes for agents and LLM workflows.',
          icon: 'Brain',
        },
        {
          title: 'You own it',
          description:
            'Open-source, documented, no lock-in — the infrastructure is yours.',
          icon: 'Award',
        },
      ],
    },

    // ========== TEXT: A Worked Example: The Economics at Volume ==========
    {
      type: 'text',
      heading: 'A Worked Example: The Economics at Volume',
      content: [
        'The clearest way to understand n8n\'s appeal is to follow the economics. Imagine a business running a workflow that fires thousands of times a month, each run involving several steps — a common situation once you automate something genuinely useful, like enriching and routing every inbound lead or processing every order. On a per-task platform, every step of every run is billed, and at that volume the monthly cost can climb into a tier that makes you hesitate to automate more, which is exactly backwards from what you want.',
        'On a self-hosted n8n instance, that same workflow runs for the cost of the server it sits on, whether it fires a thousand times or a hundred thousand. The marginal cost of another execution is effectively zero. This changes behavior: instead of rationing automation to control the bill, you automate freely because volume no longer penalizes you. For a scaling business, that shift — from automation as a metered expense to automation as a fixed-cost capability — is transformative, and it is the single most common reason teams move their heavy workflows to n8n.',
        'The catch, again, is that this only holds if the instance is run properly. A poorly managed self-hosted setup can cost you more in downtime and maintenance than you saved in fees. The economics are real, but they assume competent hosting — which is the part we handle.',
      ],
    },

    // ========== TEXT: n8n for AI Agents and LLM Workflows ==========
    {
      type: 'text',
      heading: 'n8n for AI Agents and LLM Workflows',
      content: [
        'Beyond economics, n8n has become a favored platform for building AI agents and LLM-driven workflows, because its native AI nodes and code flexibility let you construct things the simpler platforms cannot. You can build an agent that reasons over multiple steps, calls your tools, retrieves from your data via RAG, and acts inside your systems — all within n8n, self-hosted so your data and prompts stay in your environment.',
        'For businesses building customer-facing or data-sensitive AI, this combination of deep AI capability and self-hosting is hard to match. It is why we often reach for n8n specifically when an engagement involves serious AI agent work rather than straightforward app-to-app connection.',
      ],
    },

    // ========== GRID: Comparison (optional) – we already have text sections, so skip grid for now ==========
    // We can add a grid for "n8n vs others" if needed, but the content is already covered in text.

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is n8n used for?',
          description:
            'n8n is an open-source, self-hostable automation platform used to build workflows with full data control, no per-task fees, and deep AI/LLM capabilities — favored by developers, agencies, scaling teams, and regulated industries.',
        },
        {
          title: 'Is n8n better than Zapier?',
          description:
            'For technical teams needing self-hosting, data control, AI depth, and volume economics, yes. For non-technical users wanting simplicity and the largest app library, Zapier is easier. They serve different needs, and we recommend based on yours.',
        },
        {
          title: 'Can you host n8n for us?',
          description:
            'Yes. We deploy secure, production-ready n8n instances — with proper authentication, SSL, secrets management, backups, and monitoring — and either manage them for you or hand them off documented.',
        },
        {
          title: 'Is self-hosted n8n secure?',
          description:
            'It can be very secure when built correctly — behind a reverse proxy with SSL, proper authentication, and secure secret management — and your data stays in your own environment. Security depends entirely on doing the setup right, which is where expertise matters.',
        },
        {
          title: 'Is n8n really free?',
          description:
            'The self-hosted community edition is free to run; you pay only for the server. Some advanced and enterprise features require a license. For high volume, the no-per-task-fee model often makes it dramatically cheaper than cloud alternatives.',
        },
        {
          title: 'When should we NOT use n8n?',
          description:
            'When your needs are simple and volume is low, and no one on your team is technical — a straightforward set of connectors is usually easier on Zapier. n8n\'s power is worth its complexity only when you actually need self-hosting, data control, AI depth, or volume economics.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Need n8n built and hosted properly?',
      subheading:
        "Book a free automation audit — we'll scope a secure, production-ready setup.",
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};