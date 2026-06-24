// content/services/ai-workflow-automation.ts
import { ServiceContent } from './type';  

export const aiWorkflowAutomation: ServiceContent = {
  slug: 'ai-automation-agency',
  title: 'AI Automation Agency | Custom AI Workflows & Agents — Clickmasters',
  metaDescription: 'Clickmasters is a US AI automation agency building custom AI agents, workflow automation, and business process systems that cut manual work and scale teams.',
  keywords: 'ai automation agency, ai automation company, ai automation services, automation agency ai',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Automation Agency',
      subheading: 'Custom AI agents, workflow automation, and business process systems for US businesses that want to scale without hiring.',
      content: [
        'Clickmasters is a US-based AI automation agency. We design and build the systems that take repetitive, manual work off your team\'s plate — custom AI agents, connected workflow automation, and end-to-end business process automation — so the people you pay to think can stop doing the work that software should be doing instead.',
        'If your team copies data between apps by hand, loses leads because nobody followed up fast enough, or rebuilds the same report every week, you don\'t have an AI problem. You have a manual-work problem. This page explains exactly how an AI automation agency solves it, what we build, how we work, and how to decide whether automation is worth it for your business.'
      ],
      stats: [
        { label: 'PROJECTS', value: '500+' },
        { label: 'CLIENTS', value: '120+' }
      ],
      ctas: [
        { text: 'Book a Free Automation Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/agency-hero.png',
        alt: 'AI Automation Agency illustration',
        width: 600,
        height: 400
      }
    },

    // ========== STATS ==========
    {
      type: 'stats',
      heading: 'Numbers that matter.',
      items: [
        {
          title: 'Automation Accuracy',
          value: 98,
          suffix: '%',
          description: 'Mean performance across our workflows since deployment.'
        },
        {
          title: 'Time Saved',
          value: 75,
          suffix: '%',
          description: 'Average time reclaimed per workflow per employee.'
        },
        {
          title: 'Lead Conversion',
          value: 3,
          suffix: '×',
          description: 'Lift in pipeline conversion since automation rollout.'
        },
        {
          title: 'Cost Reduction',
          value: 40,
          suffix: '%',
          description: 'Average operational cost savings vs. manual ops.'
        }
      ]
    },

    // ========== PAIN POINT ==========
    {
      type: 'painpoint',
      heading: 'Stop doing work that AI can do.',
      subheading: 'Every hour your team spends on manual, repetitive tasks is an hour not spent on strategy, relationships, and growth.',
      items: [
        { title: 'HRS/WEEK WASTED', value: '40+', icon: 'Clock' },
        { title: 'AVG WASTED COST', value: '$180K', icon: 'DollarSign' },
        { title: 'Manual Tasks' },
        { title: 'Slow Operations' }
      ]
    },

    // ========== TEXT SECTION 1 ==========
    {
      type: 'text',
      heading: 'What an AI Automation Agency Actually Does',
      content: [
        'The phrase "AI automation" gets thrown around loosely, so it\'s worth being precise. Most businesses already own plenty of software — a CRM, an email platform, a help desk, spreadsheets, project tools. The problem is rarely a missing tool. The problem is the manual labor that lives in the gaps between those tools: the human who copies a lead from a form into the CRM, the person who reads each invoice and types the numbers into accounting, the rep who remembers (or forgets) to follow up on day three.',
        'An AI automation agency closes those gaps. Instead of selling you yet another disconnected app, we build systems that connect the tools you already use, move information between them automatically, make routine decisions, and take action — all without a person in the loop for the repetitive parts.',
        'At Clickmasters, that work falls into three connected categories. They overlap in practice, but it helps to understand them separately.'
      ]
    },

    // ========== FEATURES ==========
    {
      type: 'features',
      heading: 'The Three Categories of Automation',
      items: [
        {
          title: 'AI Agents',
          description: 'Software that can reason about a goal, use your tools, take several steps, and act inside your systems. An agent doesn\'t just answer a question — it qualifies the lead, drafts the reply, updates the record, and books the call. It\'s the difference between a calculator and an assistant.',
          icon: 'Bot'
        },
        {
          title: 'Workflow Automation',
          description: 'The plumbing that connects your apps so data and triggers move on their own. A form submission enriches a contact, scores it, routes it to the right rep, and starts a follow-up sequence — automatically, every time, without anyone touching it.',
          icon: 'Zap'
        },
        {
          title: 'Business Process Automation',
          description: 'Taking an entire repeatable process — client onboarding, invoicing, monthly reporting — and running it end to end. This is where the biggest time savings live, because you\'re not automating a task, you\'re automating a whole chain of them.',
          icon: 'Layers'
        }
      ]
    },

    // ========== TEXT SECTION 2 ==========
    {
      type: 'text',
      content: 'The right solution for your business is usually a combination. A lead-management system, for example, might use workflow automation to move data, an AI agent to qualify and personalize, and process automation to handle the full journey from first touch to booked meeting.'
    },

    // ========== GRID: Services ==========
    {
      type: 'grid',
      heading: 'Our AI Automation Services',
      subheading: 'We build across the full range of business automation. Each of these is a dedicated capability with its own approach, and most engagements combine several.',
      items: [
        {
          title: 'AI Workflow Automation',
          description: 'Connecting your apps and automating multi-step processes across sales, operations, and finance, so information moves without manual hand-offs.',
          link: '/ai-workflow-automation',
          icon: 'Zap'
        },
        {
          title: 'Business Process Automation',
          description: 'Automating complete processes end to end: onboarding, invoicing, approvals, reporting.',
          link: '/business-process-automation',
          icon: 'Layers'
        },
        {
          title: 'Robotic Process Automation (RPA)',
          description: 'Software bots that handle rule-based, high-volume tasks, including in legacy systems that have no API.',
          link: '/robotic-process-automation',
          icon: 'Bot'
        },
        {
          title: 'AI Agent Development',
          description: 'Custom agents that qualify leads, handle support, generate proposals, and act inside your real workflows.',
          link: '/ai-agent-development',
          icon: 'Brain'
        },
        {
          title: 'AI Chatbot Automation',
          description: 'Conversational AI that answers from your own documentation, books appointments, and routes to humans when needed.',
          link: '/ai-chatbot-automation',
          icon: 'MessageSquare'
        },
        {
          title: 'AI Voice Agents',
          description: 'AI that answers and makes calls in natural speech, capturing leads you\'d otherwise miss after hours.',
          link: '/ai-voice-agents',
          icon: 'Phone'
        },
        {
          title: 'AI Knowledge Assistants',
          description: 'Internal assistants that answer your team\'s questions from your company\'s own documents and data.',
          link: '/ai-knowledge-assistants',
          icon: 'BookOpen'
        },
        {
          title: 'AI Sales Automation',
          description: 'Lead enrichment, scoring, follow-up, and CRM hygiene so reps spend time selling, not on data entry.',
          link: '/ai-sales-automation',
          icon: 'TrendingUp'
        },
        {
          title: 'AI Marketing Automation',
          description: 'Content generation, lead nurturing, and lifecycle campaigns that run themselves.',
          link: '/ai-marketing-automation',
          icon: 'Megaphone'
        },
        {
          title: 'AI Customer Support Automation',
          description: 'AI that resolves repetitive tickets around the clock and escalates the rest with full context.',
          link: '/ai-customer-support-automation',
          icon: 'Headphones'
        },
        {
          title: 'AI Data & Document Automation',
          description: 'Extracting, validating, and routing data from invoices, PDFs, and forms — no more manual keying.',
          link: '/ai-data-document-automation',
          icon: 'FileText'
        },
        {
          title: 'AI Integration Services',
          description: 'Wiring AI models directly into your CRM, help desk, and tools so they take action inside real workflows.',
          link: '/ai-integration-services',
          icon: 'Link2'
        }
      ]
    },

    // ========== TEXT SECTION 3 ==========
    {
      type: 'text',
      content: 'Not sure which of these you need? That\'s normal, and it\'s exactly what the free automation audit is for — we map your processes and tell you where the highest return is, before you commit to anything.'
    },

    // ========== TEXT SECTION 4 ==========
    {
      type: 'text',
      heading: 'The Platforms We Build On',
      content: [
        'We are deliberately platform-agnostic. We don\'t resell one tool and bend every project to fit it. We pick the right platform for your budget, your data requirements, and the complexity of what you\'re automating — and we\'ll tell you honestly when a cheaper option is the better fit, even though that sometimes means less work for us.',
        'Here\'s how the major platforms compare and when each makes sense.'
      ]
    },

    // ========== GRID: Platforms (now 6 items) ==========
    {
      type: 'grid',
      heading: 'Platform Comparison',
      items: [
        {
          title: 'Zapier',
          description: 'Best for: Fast, simple, linear automations for non-technical teams. Trade-off: Per-task pricing climbs quickly at volume.',
          icon: 'Zap'
        },
        {
          title: 'Make',
          description: 'Best for: Visual multi-step workflows with real logic, lower run-cost. Trade-off: Slightly steeper learning curve than Zapier.',
          icon: 'GitBranch'
        },
        {
          title: 'n8n',
          description: 'Best for: Self-hosted, full data control, deep AI/LLM nodes, no per-task fees. Trade-off: Needs technical capability to run well.',
          icon: 'Database'
        },
        {
          title: 'HubSpot / GoHighLevel',
          description: 'Best for: Automation inside your existing CRM and marketing stack. Trade-off: Best when you already live in that ecosystem.',
          icon: 'Cloud'
        },
        {
          title: 'OpenAI / Claude / Gemini',
          description: 'Best for: The reasoning layer that powers custom agents. Trade-off: Chosen per task based on strengths and cost.',
          icon: 'Brain'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Custom Code / APIs',
          description: 'Best for: When no-code platforms hit a ceiling – we write custom code to handle edge cases, complex logic, and heavy lifting that off-the-shelf tools cannot.',
          icon: 'Code'
        }
      ]
    },

    // ========== TEXT SECTION 5 ==========
    {
      type: 'text',
      content: 'For most growing businesses the answer isn\'t one platform — it\'s the right mix. Zapier for the simple connectors, Make or n8n for the heavy workflows, custom code where the platforms hit a ceiling, and an AI model layered in where judgment is needed. The skill isn\'t loyalty to a tool; it\'s matching each job to the cheapest thing that does it reliably.'
    },

    // ========== STEPS ==========
    {
      type: 'steps',
      heading: 'How We Work',
      subheading: 'Automation projects fail in predictable ways: they boil the ocean instead of starting with one high-value win, they get built as black boxes the client can\'t maintain, or they never make it from a flashy demo into something that survives real-world use. Our process is designed to avoid all three.',
      items: [
        {
          title: 'Free automation audit',
          description: 'We map your manual processes and identify the single highest-ROI automation to start with. You get a clear recommendation — including an honest "you don\'t need us for this yet" when that\'s the truth.'
        },
        {
          title: 'Build and integrate',
          description: 'We build in two-to-four-week sprints, connected to your real tools and data, with you reviewing each step. No months-long disappearing act.'
        },
        {
          title: 'Test and hand off',
          description: 'We deliver documented, transparent systems that you own. No black boxes, no lock-in, no dependency on us to make a small change.'
        },
        {
          title: 'Optimize',
          description: 'We monitor, refine, and expand the system as your needs grow — on an ongoing basis if you want it, or you take the wheel yourself.'
        }
      ]
    },

    // ========== TEXT SECTION 6 ==========
    {
      type: 'text',
      content: 'Starting with one well-chosen automation matters more than it sounds. It proves the ROI, builds your team\'s trust in the system, and gives us the real-world feedback to make the next automation better. Businesses that try to automate everything at once usually end up automating nothing well.'
    },

    // ========== FEATURES: Why Choose ==========
    {
      type: 'features',
      heading: 'Why Businesses Choose Clickmasters',
      items: [
        {
          title: 'You own everything we build',
          description: 'Every workflow is transparent and documented, built on tools you control. If you want to bring it in-house, change a step, or work with someone else later, you can. We don\'t trap clients in systems only we understand.',
          icon: 'Shield'
        },
        {
          title: 'We\'re ROI-first, not hype-first',
          description: 'We automate the processes that save real hours and dollars, and we measure the result. "AI transformation" with no measurable outcome is exactly what we\'re built to avoid.',
          icon: 'Target'
        },
        {
          title: 'We\'re platform-honest',
          description: 'We recommend the tool that fits your situation, even when it\'s the cheaper one or means a smaller engagement. That honesty is why clients keep coming back and referring others.',
          icon: 'Award'
        }
        // fourth item removed
      ]
    },

    // ========== TEXT SECTION 7 ==========
    {
      type: 'text',
      heading: 'What AI Automation Is Actually Worth',
      content: [
        'It\'s fair to be skeptical. Plenty of businesses have spent money on "AI" and gotten a chatbot that frustrates customers or a pilot that never reached production. So it\'s worth being concrete about where the return actually comes from.',
        'The value shows up in four places. First, time: hours of repetitive work per week handed back to your team. Second, speed: leads answered in seconds instead of hours, invoices processed same-day instead of in a weekly batch, tickets resolved around the clock. Third, accuracy: automated processes don\'t get tired, skip a step, or fat-finger a number the way manual work does. Fourth, capacity: the ability to handle more volume without proportionally more headcount — which is the entire point for a business trying to scale.',
        'The risk, honestly, is automating the wrong thing — pouring effort into a process that\'s rare, low-value, or about to change. That\'s why we start with an audit that prioritizes by return, not by what\'s technically interesting. The best first automation is usually boring, high-volume, and universally hated by the people who currently do it by hand.'
      ]
    },

    // ========== IMAGE-TEXT SECTION (Common Automations intro) ==========
    {
      type: 'image-text',
      heading: 'Common Automations We Build',
      subheading: 'Abstract descriptions of "workflow automation" only get you so far. Here are concrete examples of systems we build, drawn from the kinds of processes nearly every business runs manually. Each one replaces hours of repetitive work and tends to pay for itself quickly.',
      image: {
        src: '/images/robo-side.png',
        alt: 'Robot illustration for automation',
        width: 500,
        height: 400
      }
    },

    // ========== GRID: Common Automations ==========
    {
      type: 'grid',
      heading: 'Common Automations We Build',
      subheading: '',
      items: [
        {
          title: 'Speed-to-lead systems',
          description: 'The moment a lead fills out a form, an AI agent enriches it with company and contact data, scores it against your ideal-customer profile, routes it to the right rep, and fires a personalized first response — often within seconds. Most businesses lose deals simply because a competitor replied first; this closes that gap permanently.',
          icon: 'Rocket'
        },
        {
          title: 'Invoice and document processing',
          description: 'Incoming invoices and documents are read by AI and OCR, the relevant fields are extracted and validated, and the data is pushed straight into your accounting or CRM system. Exceptions get flagged for a human; everything else flows through untouched. A task that consumes hours a week disappears almost entirely.',
          icon: 'FileText'
        },
        {
          title: 'Automated reporting',
          description: 'Instead of someone rebuilding the same dashboard or status report every Monday, the report assembles itself from live data on a schedule and lands in the right inbox or channel. Finance closes faster; leadership gets numbers without chasing them.',
          icon: 'BarChart3'
        },
        {
          title: 'Customer support deflection',
          description: 'An AI support agent answers common questions from your own documentation around the clock, resolves what it can, and escalates the rest to your team with the full context attached. Response times drop and your people focus on the genuinely hard cases.',
          icon: 'Headphones'
        },
        {
          title: 'Onboarding sequences',
          description: 'When a new client or employee comes aboard, the entire onboarding chain — document collection, account setup, welcome communications, task assignment — runs automatically, with people involved only where a human decision is actually required.',
          icon: 'Users'
        },
        {
          title: 'Custom AI Agent Development',
          description: 'Build intelligent agents that handle complex, multi‑step tasks like lead qualification, proposal generation, and customer follow‑up – freeing your team for high‑value work.',
          icon: 'Brain'
        }
      ]
    },

    // ========== TEXT SECTION 8 ==========
    {
      type: 'text',
      content: 'These are starting points, not a menu. The audit exists precisely to find the version of these that fits your business and ranks highest on return.'
    },

    // ========== GRID: Industries ==========
    {
      type: 'grid',
      heading: 'Industries We Serve',
      subheading: 'Automation principles are universal, but the highest-value processes differ by industry. We build for businesses across the US economy, with particular depth in a few verticals where the manual-work burden is heaviest.',
      items: [
        {
          title: 'Finance and accounting',
          description: 'Invoice processing, reconciliation, reporting, and AP/AR automation.',
          link: '/industries/finance-accounting',
          icon: 'Briefcase'
        },
        {
          title: 'Real estate',
          description: 'Instant lead response, showing scheduling, nurture, and transaction coordination.',
          link: '/industries/real-estate',
          icon: 'Building'
        },
        {
          title: 'Healthcare',
          description: 'Scheduling, patient intake, reminders, and follow-up, built with privacy in mind.',
          link: '/industries/healthcare',
          icon: 'Heart'
        },
        {
          title: 'Law firms',
          description: 'Client intake, document generation, deadline tracking, and client communication.',
          link: '/industries/law-firms',
          icon: 'Scale'
        },
        {
          title: 'E-commerce',
          description: 'Support automation, order workflows, cart recovery, and lifecycle marketing.',
          link: '/industries/ecommerce',
          icon: 'ShoppingCart'
        },
        {
          title: 'SaaS',
          description: 'Onboarding, support deflection, churn signals, and revenue operations.',
          link: '/industries/saas',
          icon: 'Cloud'
        }
      ]
    },

    // ========== TEXT SECTION 9 ==========
    {
      type: 'text',
      content: 'If your industry isn\'t listed, that rarely matters — the underlying processes (lead handling, data entry, follow-up, reporting) are common to almost every business. The vertical mostly determines which automation we start with.'
    },

    // ========== TEXT SECTION 10 ==========
    {
      type: 'text',
      heading: 'How to Choose an AI Automation Agency',
      content: [
        'Whether or not you work with us, it\'s worth knowing how to evaluate an automation partner, because the market is crowded with firms that added "AI automation" to their homepage last year. Five questions separate the real builders from the rest.'
      ]
    },

    // ========== FEATURES: Questions ==========
    {
      type: 'features',
      heading: 'Five Questions to Ask',
      items: [
        {
          title: 'Do they build production systems, or just write strategy?',
          description: 'Ask to see something running. Most failed AI projects die between the pilot and production.',
          icon: 'Code'
        },
        {
          title: 'Are they platform-honest?',
          description: 'A good partner recommends the right tool for your situation — sometimes the cheap one — rather than forcing their preferred stack.',
          icon: 'Award'
        },
        {
          title: 'Do you own the output?',
          description: 'Insist on transparent, documented workflows you control. A black box you can\'t touch is a liability, not an asset.',
          icon: 'Shield'
        },
        {
          title: 'Can they point to measurable ROI?',
          description: 'Hours or dollars saved, not vague "transformation." If they can\'t measure it, they can\'t be held to it.',
          icon: 'Target'
        },
        {
          title: 'Are they right-sized for you?',
          description: 'An enterprise consultancy will over-serve and over-charge an SMB; a solo freelancer may under-deliver for a scaling team. Match the partner to your stage.',
          icon: 'Users'
        }
      ]
    },

    // ========== TEXT SECTION 11 ==========
    {
      type: 'text',
      content: 'Clickmasters is built to clear all five — but the questions are worth asking of anyone, including us.'
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is an AI automation agency?',
          description: 'An AI automation agency designs and builds custom systems — AI agents, workflow automation, and business process automation — that handle repetitive work automatically. It connects the tools a business already uses so information and decisions move without manual effort, rather than selling another standalone piece of software.'
        },
        {
          title: 'How much does AI automation cost?',
          description: 'Most projects start with a fixed-scope first automation, so you see a return before committing to more. Total cost depends on how many processes you\'re automating, how many systems they touch, and whether you want ongoing optimization. A free audit gives you a concrete number rather than a vague range.'
        },
        {
          title: 'What\'s the difference between an AI automation agency and an AI consulting firm?',
          description: 'A consulting firm typically writes strategy and roadmaps. An automation agency builds and ships the working systems. Most failed AI initiatives die in the gap between a strategy deck and a system in production. Clickmasters does the building — production systems you own, not slides.'
        },
        {
          title: 'Which platform do you use — Zapier, Make, or n8n?',
          description: 'All of them, plus custom code where it\'s needed. We choose per project: Zapier for simple linear flows, Make for visual multi-step logic, n8n for self-hosted production systems with full data control. We\'re not tied to one platform, so the recommendation is based on your needs, not ours.'
        },
        {
          title: 'Do I need technical staff to maintain what you build?',
          description: 'No. We hand off documented, transparent systems, and we offer ongoing optimization if you\'d rather not manage them in-house. The point is that you have the choice — the system isn\'t a black box only we can touch.'
        },
        {
          title: 'How quickly can we see results?',
          description: 'Because we start with one high-ROI automation built in short sprints, most clients see a working system and measurable time savings within the first few weeks, not months. Larger process-automation projects roll out in stages so value arrives early and keeps compounding.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Stop paying people to do what software can.',
      subheading: 'Book a free automation audit — we\'ll map your highest-ROI automation in 30 minutes, with no obligation.',
      cta: {
        text: 'Book Your Free Automation Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};