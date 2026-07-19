// content/Platforms/airtable-automation-service.ts
import { ServiceContent } from '../type';

export const airtableAutomationService: ServiceContent = {
  slug: 'airtable-automation-services',
  title: 'Airtable Automation Services | Custom Builds & AI Clickmasters',
  metaDescription:
    'Clickmasters builds Airtable automation custom operational systems, AI-connected bases, and integrations that turn Airtable from a database into the system your business runs on.',
  keywords: 'airtable automation, airtable ai, airtable api, airtable integration, airtable workflow automation, airtable custom builds',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'Airtable Automation Services',
      subheading:
        'Turn Airtable from a database into the system your business runs on.',
      content: [
        'Clickmasters builds Airtable automation: custom operational systems on the platform thousands of teams already quietly run their business on.',
        "Airtable's genius is that it looks like a spreadsheet and behaves like a database which is why operations teams adopt it without an IT project. Its limitation is that most teams use it as a place where records sit. Automation is what turns those bases into systems: records that update themselves, workflows that fire on changes, AI that reads and enriches your data, and connections to the rest of your stack."
      ],
      stats: [
        { label: 'BASES BUILT', value: '200+' },
        { label: 'WORKFLOWS', value: '1,000+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/airtable-hero.png',
        alt: 'Airtable Automation Services',
        width: 1200,
        height: 1000,
        fadeEdges: true
      }
    },

    // ========== TEXT: What Airtable Automation Actually Means ==========
    {
      type: 'text',
      heading: 'What Airtable Automation Actually Means',
      image: '/images/rob.png',
      content: [
        'Three layers, in increasing power:',
        '**Native Airtable automations.** Trigger-action rules inside Airtable itself when a record changes, send an email; when a form is submitted, create a record. Useful, and most teams underuse them. We build these where they\'re sufficient.',
        '**Airtable + automation platforms.** Airtable connected to n8n, Make, or Zapier, which unlocks the real workflows: multi-step processes across systems, data flowing between Airtable and your CRM, accounting tools, communication channels, and anything with an API. This is where Airtable stops being an island.',
        '**Airtable + AI.** Language models reading, classifying, enriching, and generating against your Airtable data an intake base where AI summarizes and routes each submission, a content pipeline where drafts are generated into records for review, a CRM base where every company is auto-enriched. This layer is newest and least exploited, and it\'s where we do our most interesting Airtable work.'
      ]
    },

    // ========== FEATURES: What We Build ==========
    {
      type: 'features',
      heading: 'What We Build',
      items: [
        {
          title: 'Custom Operational Systems',
          description:
            'Project trackers, client pipelines, intake systems, content calendars, inventory bases designed around your workflow and automated so they run rather than merely record.',
          icon: 'Workflow'
        },
        {
          title: 'Airtable as Lightweight CRM',
          description:
            'For teams that don\'t need a heavyweight CRM, an automated Airtable base enrichment, follow-up triggers, activity logging often does the job at a fraction of the cost and complexity.',
          icon: 'Database'
        },
        {
          title: 'Integration with Your Stack',
          description:
            'Airtable synced bidirectionally with your accounting, e-commerce, support, and marketing tools, so it reflects reality without manual updates.',
          icon: 'Link2'
        },
        {
          title: 'AI-Powered Airtable',
          description:
            'Classification, enrichment, summarization, and drafting running against your records with human review built in where judgment matters.',
          icon: 'Brain'
        },
        {
          title: 'Interface and Portal Builds',
          description:
            'Airtable Interfaces configured so your team (or clients) work with clean, purpose-built views instead of raw tables.',
          icon: 'Layout'
        },
        {
          title: 'Rescue and Restructuring',
          description:
            'The very common case: a base that grew organically into a load-bearing mess. We restructure for scale and reliability without losing your data or your team\'s muscle memory.',
          icon: 'RefreshCw'
        }
      ]
    },

    // ========== TEXT: Airtable's Honest Limits ==========
    {
      type: 'text',
      heading: 'Airtable\'s Honest Limits',
      content: [
        'We recommend platforms honestly, so: Airtable is not the right home for everything. Record limits and per-seat pricing bite at scale; heavy relational complexity eventually wants a real database; and deeply regulated data may belong in more controlled infrastructure.',
        'Part of our audit is telling you whether Airtable is the right foundation for the system you want and when it is (which is often, for operational tooling at SMB and mid-market scale), building it properly.'
      ]
    },

    // ========== STEPS: How We Work ==========
    {
      type: 'steps',
      heading: 'How We Work',
      items: [
        {
          title: 'Free Audit',
          description: 'We look at your current bases and workflow, and scope the highest-return build.'
        },
        {
          title: 'Design and Build',
          description: 'Structure, automations, integrations, and AI layers, built against your real data.'
        },
        {
          title: 'Documented Hand-off',
          description: 'Your team understands and owns the system; Airtable\'s approachability means they can genuinely maintain it.'
        },
        {
          title: 'Extend',
          description: 'New workflows added as the system proves itself.'
        }
      ]
    },

    // ========== TEXT: A Worked Example ==========
    {
      type: 'text',
      heading: 'A Worked Example: Project Intake and Client Onboarding',
      content: [
        'Take a typical operations team: project requests arrive by email, get added to a spreadsheet, assigned in meetings, and tracked in an Airtable base that\'s updated manually. Projects fall through the cracks, status is always out of date, and the team spends Monday mornings catching up on what happened last week.',
        'Automated, the same flow transforms: a form captures every request and creates an Airtable record automatically. AI classifies the request type, extracts key details, and suggests a priority. A workflow assigns it to the right person, creates follow-up tasks, and triggers onboarding steps. Status updates happen automatically as the work progresses through stages. The team works on the work, not on tracking it, and the Airtable base finally reflects reality without manual effort.'
      ]
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'Airtable Specialists',
          description:
            'We understand Airtable\'s strengths, limits, and how to build systems that last.',
          icon: 'Target'
        },
        {
          title: 'AI-Enhanced Airtable',
          description:
            'We layer AI onto your Airtable bases for classification, enrichment, and summarization.',
          icon: 'Brain'
        },
        {
          title: 'Connected',
          description:
            'Airtable integrated with your CRM, accounting, and other tools.',
          icon: 'Link2'
        },
        {
          title: 'You Own It',
          description:
            'Documented, transparent automation in your own workspace.',
          icon: 'Award'
        }
      ]
    },

    // ========== TEXT: The State of Most Airtable Bases ==========
    {
      type: 'text',
      heading: 'The State of Most Airtable Bases',
      content: [
        'When we audit a business\'s Airtable workspace, a familiar picture emerges. There are bases that started as simple spreadsheets and grew into load-bearing systems. They\'re used daily, but they\'re fragile data breaks, no one knows how to modify them safely, and they\'re maintained by whoever has the most institutional knowledge at the moment. Records are entered manually. Statuses are updated by memory. Reports are exported and reformatted by hand.',
        'The opportunity is rarely about buying more software. You already have Airtable. The work is about turning those fragile, manual bases into reliable, automated systems. That\'s where the return lies, because the foundation is already there and your team already knows how to work with it.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What are Airtable automation services?',
          description:
            'Airtable automation services design and build automated systems on Airtable native automations, integrations with other tools via platforms like n8n and Make, and AI layers that read and enrich your data turning Airtable bases from static records into running operational systems.'
        },
        {
          title: 'Can Airtable really replace a CRM or project tool?',
          description:
            'For many SMB workflows, yes an automated Airtable base handles pipeline, projects, or intake at a fraction of dedicated-tool cost, with exactly the fields and flow you want. At larger scale or complexity, dedicated tools win; the audit gives you an honest read for your case.'
        },
        {
          title: 'Does Airtable work with AI?',
          description:
            'Yes, and it\'s underused: AI models can classify, summarize, enrich, and generate content against Airtable records, with results written back automatically. It\'s one of the fastest paths to useful AI in a business because the data is already structured.'
        },
        {
          title: 'What does an Airtable build cost?',
          description:
            'Scoped per project a focused single-workflow build is modest; a full operational system is more. The free audit produces a real number, and Airtable projects tend to be among the most affordable custom systems we build.'
        },
        {
          title: 'We already have a messy base can you fix it?',
          description:
            'That\'s one of our most common Airtable engagements. We restructure for reliability and scale, preserve your data, and automate the workflow around it usually without disrupting day-to-day use during the transition.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Want your Airtable bases to run themselves?',
      subheading:
        'Book a free automation audit we\'ll scope the highest-return build in your workspace.',
      cta: {
        text: 'Book a Free Automation Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};

export default airtableAutomationService;