// content/robotic-process-automation.ts
import { ServiceContent } from './type';  

export const roboticProcessAutomation: ServiceContent = {
  slug: 'robotic-process-automation',
  title: 'Robotic Process Automation (RPA) Services | Clickmasters',
  metaDescription: 'Clickmasters builds RPA and AI-RPA that automate rule-based, high-volume tasks across your systems — including legacy apps without APIs.',
  keywords: 'robotic process automation, rpa services, software robots, automation bots',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'Robotic Process Automation (RPA)',
      subheading: 'Software bots that handle the repetitive, rule-based clicks — including in legacy systems that have no API to connect to.',
      content: [
        'Clickmasters builds robotic process automation that takes the repetitive, rule-based work off your team — including the work trapped inside old systems that nothing else can connect to. RPA uses software bots to do what a person does on screen: log in, copy data, fill forms, move files between applications. Combined with AI, those bots can also read documents and make routine decisions, handling work that pure rule-based automation never could.',
        'This page explains what RPA is, where it fits relative to workflow and AI automation, why its ability to operate legacy and API-less systems makes it uniquely valuable, what we build, and how to tell whether RPA is the right tool for a given task — because sometimes it is, and sometimes a cleaner integration is the better answer.'
      ],
      stats: [
        { label: 'PROJECTS', value: '150+' },
        { label: 'CLIENTS', value: '70+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/robotic.png',
        alt: 'Robotic Process Automation illustration',
        width: 1200,
        height: 1000
      }
    },

    // ========== TEXT: What Is Robotic Process Automation? ==========
    {
      type: 'text',
      heading: 'What Is Robotic Process Automation?',
      content: [
        'RPA uses software \'bots\' that operate applications the same way a person does — through the user interface. The bot logs in, navigates screens, reads fields, copies data, types into forms, clicks buttons, and moves information between systems. To the applications involved, the bot looks essentially like a very fast, very consistent human user who never gets bored, never mistypes, and never takes a break.',
        'That UI-level approach is RPA\'s defining characteristic and its greatest strength. Most modern automation connects systems through APIs — clean, programmatic interfaces designed for software to talk to software. But a great deal of business-critical software, especially in finance, healthcare, insurance, and government-adjacent sectors, is old. It has no API, or no usable one. You cannot integrate with it in the normal way. RPA can still automate it, because it operates the software through the same screens a person uses.',
        'When you add AI to RPA — sometimes called intelligent automation — the bots gain the ability to handle the parts that rigid rules cannot: reading an unstructured document and extracting the right values, classifying an input, deciding which path to take. A pure RPA bot follows a fixed script; an AI-enhanced bot can deal with variation, which is what most real-world work actually contains.'
      ]
    },

    // ========== TEXT: Where RPA Fits — and Where It Doesn't ==========
    {
      type: 'text',
      heading: 'Where RPA Fits — and Where It Doesn\'t',
      content: [
        'Honesty matters here, because RPA is sometimes the right tool and sometimes a workaround for a problem better solved another way. When a system has a good API, integrating through it is usually cleaner, faster, and more robust than driving its user interface with a bot — APIs do not break when a button moves or a screen is redesigned. So our default, where a clean integration is available, is to use it.',
        'RPA earns its place when that option does not exist: legacy systems with no API, applications you cannot modify, vendor software that locks you out of direct integration, or processes that span several such systems. In those cases, RPA is often the only practical way to automate the work at all, and it can deliver substantial returns precisely because that work has been stuck as manual for years with no other path forward.',
        'We will tell you which situation you are in. If a clean integration will do the job better, we will recommend that even though it is different work. If RPA is genuinely the right tool, we will build it well — with the resilience that UI-driven automation specifically requires.'
      ]
    },

    // ========== FEATURES: Our RPA Services ==========
    {
      type: 'features',
      heading: 'Our RPA Services',
      items: [
        {
          title: 'Rule-based task bots',
          description: 'Bots that automate repetitive, high-volume data tasks across applications — the data entry, transfers, and lookups that consume hours of staff time.',
          icon: 'Bot'
        },
        {
          title: 'AI-enhanced RPA (intelligent automation)',
          description: 'Bots augmented with AI to read documents, classify inputs, and make routine decisions, so they handle real-world variation rather than only perfectly uniform cases.',
          icon: 'Brain'
        },
        {
          title: 'Legacy system automation',
          description: 'Automating applications that have no API by operating them through the user interface — often the only way to automate this work at all.',
          icon: 'Cpu'
        },
        {
          title: 'Data migration and entry',
          description: 'Bulk movement and entry of data between systems, reliably and without the errors that creep into manual transfer.',
          icon: 'Database'
        },
        {
          title: 'Reconciliation and validation',
          description: 'Automated cross-system checking that matches records, flags discrepancies, and routes exceptions to a human for review.',
          icon: 'Check'
        }
      ]
    },

    // ========== TEXT: What Makes RPA Reliable (or Fragile) ==========
    {
      type: 'text',
      heading: 'What Makes RPA Reliable (or Fragile)',
      content: [
        'RPA has a reputation in some quarters for being brittle, and that reputation is earned by bots built carelessly. Because a UI-driven bot depends on the screens it operates, a poorly built bot breaks the moment a button moves, a field is renamed, or a screen is redesigned. The difference between RPA that runs for years and RPA that breaks every month is entirely in how it is built.',
        'We build for resilience: bots that locate elements robustly rather than by fragile coordinates, that handle the variations and pop-ups real applications throw up, that retry sensibly when something is slow, and that alert a human when they genuinely cannot proceed rather than silently failing or, worse, doing the wrong thing. We also monitor bots in production, so when an underlying application does change, the issue surfaces immediately and is fixed before it causes a backlog.',
        'This is the part that separates a bot that quietly saves hours every week from one that becomes a maintenance headache nobody trusts. It is unglamorous engineering discipline, and it is exactly where corners get cut by people selling RPA as a quick win.'
      ]
    },

    // ========== TEXT: Example: Automating a Legacy Data-Entry Process ==========
    {
      type: 'text',
      heading: 'Example: Automating a Legacy Data-Entry Process',
      content: [
        'A common scenario: a business receives orders or records in one system — email, a portal, a spreadsheet — and a person re-keys each one into an old line-of-business application that has no API. It is pure manual transfer, hours a day, and error-prone because attention wanders. There is no clean integration available because the old system simply does not offer one.',
        'An RPA bot handles this directly. It reads the incoming records (with AI extracting the relevant fields where the input is unstructured), logs into the legacy application, navigates to the right screen, enters the data accurately, and confirms each entry — flagging anything that does not look right for a human to check. The manual transfer disappears, the error rate drops, and the work that was stuck as unavoidable manual labor for years is simply done, reliably, by the bot.'
      ]
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'We use the right tool',
          description: 'Where a clean integration beats a bot, we say so. We use RPA where it genuinely fits, not as a default.',
          icon: 'Target'
        },
        {
          title: 'Built for resilience',
          description: 'Robust element handling, monitoring, and graceful failure — the difference between RPA that lasts and RPA that breaks.',
          icon: 'Shield'
        },
        {
          title: 'AI-enhanced where it helps',
          description: 'We add document reading and decision-making so bots handle real-world variation, not just uniform cases.',
          icon: 'Brain'
        },
        {
          title: 'You own it',
          description: 'Documented, transparent automation you control.',
          icon: 'Award'
        }
      ]
    },

    // ========== GRID: Industries Where RPA Matters Most (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Industries Where RPA Matters Most',
      subheading: 'RPA delivers outsized value in sectors where critical work is locked inside older systems.',
      items: [
        {
          title: 'Finance and accounting',
          description: 'Automates data entry, reconciliation, and reporting across systems that often predate modern APIs.',
          icon: 'Briefcase'
        },
        {
          title: 'Insurance',
          description: 'Handles claims data entry, policy administration, and transfer of information between legacy platforms.',
          icon: 'Shield'
        },
        {
          title: 'Healthcare administration',
          description: 'Moves data between scheduling, billing, and records systems that rarely connect cleanly.',
          icon: 'Heart'
        },
        {
          title: 'Logistics and operations',
          description: 'Reconciles orders, tracking, and inventory across a patchwork of tools.',
          icon: 'Truck'
        },
        // ✅ NEW 5th card
        {
          title: 'Manufacturing',
          description: 'Automates data entry, inventory tracking, and quality control reporting across legacy production systems and modern ERPs.',
          icon: 'Factory'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Retail & E-commerce',
          description: 'Automates order processing, inventory synchronization, and customer data management across POS systems, CRMs, and online platforms.',
          icon: 'ShoppingBag'
        }
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is robotic process automation?',
          description: 'RPA uses software bots to automate repetitive, rule-based tasks by mimicking how a person interacts with applications — clicking, copying, entering data — across systems, including ones that have no API. It operates software through the user interface, the way a human user would.'
        },
        {
          title: 'What\'s the difference between RPA and AI automation?',
          description: 'RPA follows fixed rules and is excellent at repetitive, structured tasks. AI automation adds reasoning — reading unstructured input and making decisions. "Intelligent automation" combines the two: bots that also read documents and handle variation.'
        },
        {
          title: 'Can RPA work with old software that has no API?',
          description: 'Yes — that is one of RPA\'s greatest strengths. Because it operates software through the user interface rather than through a programmatic connection, it can automate legacy and API-less applications that nothing else can reach.'
        },
        {
          title: 'Is RPA fragile? I\'ve heard bots break easily.',
          description: 'Poorly built bots are fragile because they depend on the screens they operate. Well-built bots locate elements robustly, handle variation, retry sensibly, alert on genuine problems, and are monitored in production. Resilience is entirely a function of how the bot is built.'
        },
        {
          title: 'When should we use RPA versus a normal integration?',
          description: 'When a system has a good API, a direct integration is usually cleaner and more robust. RPA is the right choice when no usable API exists — legacy systems, locked-down vendor software, or processes spanning several such systems. We will tell you which applies to your case.'
        },
        {
          title: 'Can RPA handle documents and unstructured data?',
          description: 'With AI enhancement, yes. AI-RPA can read invoices, forms, and other documents, extract the relevant data, and feed it into the bot\'s process — extending RPA well beyond the perfectly uniform inputs that pure rule-based bots require.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Got work trapped in an old system nothing can connect to?',
      subheading: 'Book a free automation audit — we\'ll tell you honestly whether RPA is the answer.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};