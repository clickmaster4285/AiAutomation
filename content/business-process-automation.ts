// content/services/business-process-automation.ts
import { ServiceContent } from './type';  

export const businessProcessAutomation: ServiceContent = {
  slug: 'business-process-automation',
  title: 'Business Process Automation Services | Clickmasters',
  metaDescription: 'Clickmasters automates complete business processes end to end — onboarding, invoicing, reporting, approvals — so whole workflows run themselves.',
  keywords: 'business process automation, bpa services, process automation, workflow automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'Business Process Automation',
      subheading: 'Automate entire processes end to end — not just single tasks — with people involved only where judgment is genuinely needed.',
      content: [
        'Clickmasters automates complete business processes from start to finish. There is a simple way to understand the value: task automation saves minutes, but process automation saves a department\'s worth of hours. Where workflow automation connects a handful of steps, business process automation — BPA — takes an entire repeatable process, with every step, every system, and every hand-off, and runs it automatically. AI handles the parts that used to require a person to read, judge, or decide.',
        'This page explains what business process automation actually is, how it differs from automating individual tasks and why that difference determines the size of the return, which processes deliver the most value, how we approach a BPA project so it reaches production instead of dying as a pilot, and the honest trade-offs involved. It is written for an operations leader trying to work out where automation would genuinely move the needle.'
      ],
      stats: [
        { label: 'PROJECTS', value: '200+' },
        { label: 'CLIENTS', value: '80+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/bussiness.png',
        alt: 'Business Process Automation illustration',
        width: 800,
        height: 600
      }
    },

    // ========== TEXT: What Is Business Process Automation? ==========
    {
      type: 'text',
      heading: 'What Is Business Process Automation?',
      content: [
        'A business process is a complete, repeatable sequence that produces a defined outcome. Onboarding a new client. Processing an invoice from receipt through to payment. Closing the books each month. Handling a customer request from first contact to resolution. Each of these is not a single task but a chain of them, often spanning several people, several systems, and several days of elapsed time even when the actual work involved is only an hour.',
        'Business process automation automates the whole sequence, not just one task within it. The distinction is everything. Automating "send the welcome email" is task automation — helpful, but small. Automating the entire onboarding process is BPA: collecting documents, setting up accounts, sending the right communications at the right moments, assigning internal tasks to the right people, and tracking the whole thing to completion — coordinating across every tool and team involved, with humans stepping in only where a genuine decision is required.',
        'Modern BPA is not one technology but a combination. Workflow automation moves work along between steps. Robotic process automation handles older systems that have no clean way to connect. AI reads documents, classifies inputs, drafts communications, and makes the routine decisions that used to require a person\'s attention. The goal is not to automate a step. It is to make an entire process run with minimal human touch, end to end.'
      ]
    },

    // ========== TEXT: Task Automation vs. Process Automation ==========
    {
      type: 'text',
      heading: 'Task Automation vs. Process Automation: Why the Distinction Decides the Prize',
      content: [
        'It is worth dwelling on this difference because it determines how much you stand to gain. Automating a single task — auto-filling one field, sending one notification — saves seconds per instance. Genuinely useful when multiplied across thousands of instances, but bounded. Automating a process saves the cumulative time of every task within it, plus something most businesses never account for: the hand-off time between the tasks.',
        'The hand-offs are where the real waste hides, and they are nearly invisible on an org chart. A process that touches five people and three systems loses time at every boundary. Work sits in an inbox waiting to be noticed. It waits in a queue for someone to get to it. It gets re-keyed from one tool into another, with the attendant risk of error. It stalls because the person who needs to act is on holiday and nobody picks it up. Add up all that waiting and re-entry and it routinely dwarfs the time spent on the actual work.',
        'Process automation removes those boundaries. Work flows through continuously instead of stopping and starting, because the system does not take lunch, go on holiday, or forget. This is why the return on automating a whole process is so much larger than the sum of automating its individual tasks: you are not just speeding up the work, you are eliminating the dead time between the pieces of it.'
      ]
    },

    // ========== FEATURES: Our Business Process Automation Services ==========
    {
      type: 'features',
      heading: 'Our Business Process Automation Services',
      items: [
        {
          title: 'Process mapping and audit',
          description: 'We document your process end to end — the real version, not the idealized one in the handbook — identify the bottlenecks and the highest-cost steps, and automate the parts with the best return first. The mapping alone often surprises businesses, revealing steps and delays nobody had consciously accounted for.',
          icon: 'Search'
        },
        {
          title: 'CRM and ERP automation',
          description: 'We automate record updates, routing, and status changes across your core systems so they stay in sync and move work along without manual entry, keeping your single source of truth actually true.',
          icon: 'Database'
        },
        {
          title: 'Approval and routing workflows',
          description: 'Automated approvals, escalations, and hand-offs that keep processes moving instead of stalling in someone\'s inbox for three days. Requests go to the right approver, get chased if they sit, and escalate if they are blocked.',
          icon: 'GitBranch'
        },
        {
          title: 'Invoice and finance processes',
          description: 'End-to-end accounts payable and receivable, reconciliation, and reporting automation. Finance is one of the most common and highest-return starting points because the work is high-volume, rule-driven, and currently manual almost everywhere.',
          icon: 'FileText'
        },
        {
          title: 'HR and onboarding automation',
          description: 'Automate employee onboarding, document collection, and internal request handling so people-operations work runs itself, freeing your HR team for the human parts of the job.',
          icon: 'Users'
        }
      ]
    },

    // ========== GRID: Processes That Deliver the Biggest Return ==========
    {
      type: 'grid',
      heading: 'Processes That Deliver the Biggest Return',
      subheading: 'Not every process is worth automating, and being honest about that is part of doing this well. The best candidates share a clear profile: high volume, genuinely repeatable, driven by rules or routine judgment rather than novel decisions, and currently consuming skilled people\'s time on work beneath their pay grade.',
      items: [
        {
          title: 'Client and employee onboarding',
          description: 'High-volume, multi-step, and a poor first impression when done slowly or inconsistently by hand. Automation makes every onboarding fast and identical.',
          icon: 'Users'
        },
        {
          title: 'Invoice processing and AP/AR',
          description: 'From receipt and data extraction through approval and payment, this is repetitive, error-sensitive, and universally manual, which makes it ideal.',
          icon: 'FileText'
        },
        {
          title: 'Monthly and weekly reporting',
          description: 'Assembling and distributing reports from live data, replacing the recurring scramble to rebuild the same numbers every cycle.',
          icon: 'BarChart3'
        },
        {
          title: 'Order-to-cash',
          description: 'Order processing, fulfillment triggers, invoicing, and follow-up, where delays directly cost revenue and cash flow.',
          icon: 'ShoppingCart'
        },
        {
          title: 'Request handling',
          description: 'Intake, classification, routing, and resolution tracking for internal or customer requests, where things currently fall through the cracks.',
          icon: 'MessageSquare'
        },
        // ✅ NEW 6th card – makes 2 rows of 3
        {
          title: 'Customer Feedback & Review Automation',
          description: 'Automatically collect, analyze, and respond to customer feedback and reviews across multiple platforms. The system aggregates feedback, identifies sentiment trends, and drafts appropriate responses—ensuring you never miss an opportunity to engage with your customers.',
          icon: 'Star'
        }
      ]
    },

    // ========== STEPS: How We Approach a BPA Project ==========
    {
      type: 'steps',
      heading: 'How We Approach a BPA Project',
      subheading: 'Process automation is where ambition most often outruns execution. The classic failure is trying to automate a sprawling, end-to-end process all at once, producing something complex and fragile that nobody fully understands and nobody trusts. When it breaks — and a too-big first build always breaks somewhere — the whole initiative loses credibility. Our approach is deliberately incremental for exactly this reason.',
      items: [
        {
          title: 'Map the process and find the bottlenecks',
          description: 'We document reality, including the awkward manual workarounds people have quietly developed, and identify where time and money actually leak. You cannot automate a process you have not honestly described.'
        },
        {
          title: 'Automate the highest-ROI segment first',
          description: 'We do not boil the ocean. We take the part of the process with the clearest, largest return, automate it well, and prove it works in real use.'
        },
        {
          title: 'Expand across the process',
          description: 'With the first segment proven and trusted, we extend automation across the full chain, segment by segment, so complexity is added in controlled increments rather than all at once.'
        },
        {
          title: 'Keep humans where judgment lives',
          description: 'We design for human-in-the-loop at the points where a person genuinely needs to decide or where an error would be costly, and full automation everywhere the work is routine and low-risk.'
        }
      ]
    },

    // ========== TEXT: Keeping Automated Processes Accurate and Safe ==========
    {
      type: 'text',
      heading: 'Keeping Automated Processes Accurate and Safe',
      content: [
        'When you automate a whole process, the stakes of a mistake go up, because the mistake can propagate through every downstream step before anyone notices. We design against that from the start. At the points where an error would be costly — a payment, a customer-facing communication, a compliance-sensitive step — we build in validation checks and human-in-the-loop review, so the system pauses for a person rather than pushing bad data through. Everywhere the risk is low and the work is routine, it runs fully automatically.',
        'Just as important, the system flags exceptions instead of silently mishandling them. When something does not fit the expected pattern — an unusual invoice, an incomplete record, an edge case the process did not anticipate — it routes to a human with context, rather than guessing. A well-built automated process is not one that never encounters surprises; it is one that knows the difference between a routine case it can handle and a surprise it should hand off.'
      ]
    },

    // ========== TEXT: Common Objections ==========
    {
      type: 'text',
      heading: 'Common Objections, Answered Honestly',
      content: [
        '"Our process is too complicated to automate." Complicated processes are often the best candidates precisely because their complexity is where the most time is lost. We do not automate the whole thing at once; we take it segment by segment. The genuinely complicated decision points stay with humans; the connective tissue around them automates.',
        '"We\'ll lose control if it\'s automated." The opposite is usually true. A manual process is opaque — you cannot see where things are stuck or why. An automated process is logged and monitored end to end, so you have more visibility and control, not less. You can see exactly where every item is at any moment.',
        '"What happens when something unexpected comes up?" It gets flagged and routed to a person with context. We design processes to handle the routine automatically and escalate the exceptions, which is exactly how a good human-run process should work too — just faster and more consistently.'
      ]
    },

    // ========== TEXT: Why Clickmasters ==========
    {
      type: 'text',
      heading: 'Why Clickmasters',
      content: [
        'We automate processes, not just tasks. We look at the whole chain and the hand-offs between steps, where most of the waste actually hides.',
        'Production-focused. We build systems that survive real-world use, with validation, error handling, and monitoring built in.',
        'You own it. Documented, transparent automation on tools you control, so you are never locked in or in the dark.',
        'Honest about scope. We start where the return is clearest and tell you plainly when a process is not worth automating yet.'
      ]
    },

    // ========== TEXT: A Worked Example ==========
    {
      type: 'text',
      heading: 'A Worked Example: Automating Invoice Processing End to End',
      content: [
        'To make the end-to-end idea concrete, consider invoice processing — one of the most common starting points. Done manually, the process looks like this: an invoice arrives by email; someone opens it, reads it, and keys the vendor, amount, date, and line items into the accounting system; routes it to the right person for approval; chases that approval when it stalls; schedules payment; and files the document. Across a month\'s worth of invoices, that is a substantial, error-prone, universally disliked workload.',
        'Automated end to end, it looks like this instead: the invoice arrives and is captured automatically; AI and OCR extract the vendor, amount, date, and line items and validate them against the purchase order or expected values; the system routes it to the correct approver based on amount and category, chases the approval if it stalls, and escalates if needed; on approval, payment is scheduled and the record updated; the document is filed automatically. A human touches it only when something does not match — an unexpected amount, a missing PO, a vendor not on file — at which point it is flagged with context for a person to resolve.',
        'The same shape applies to onboarding, order-to-cash, reporting, and request handling: capture, extract or validate, route, act, and file, with humans reserved for the exceptions. Once you see the pattern, you start to recognize it across your whole operation.'
      ]
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is business process automation?',
          description: 'Business process automation (BPA) is the use of software and AI to run an entire business process — all its steps, systems, and hand-offs — automatically, rather than automating just one task. It typically combines workflow automation, robotic process automation, and AI to make a whole process run with minimal human touch.'
        },
        {
          title: 'What processes can be automated?',
          description: 'Common ones include client and employee onboarding, invoicing and AP/AR, reporting, approvals, order-to-cash, and request handling — essentially any repeatable, high-volume process driven by rules or routine judgment rather than novel decisions.'
        },
        {
          title: 'Is BPA the same as RPA?',
          description: 'No. RPA (robotic process automation) is one technique — software bots that mimic human clicks, particularly useful for legacy systems without APIs. BPA is the broader goal of automating a whole process, often combining RPA with workflow automation and AI.'
        },
        {
          title: 'Will automation replace our staff?',
          description: 'It removes repetitive, low-value work so your people focus on judgment, relationships, and growth. The usual outcome is the same team handling considerably more volume, not a smaller team — which is what matters most for a business trying to scale without hiring in lockstep.'
        },
        {
          title: 'How do you keep automated processes accurate?',
          description: 'We build validation checks and human-in-the-loop review at the points where errors would be costly, with full automation everywhere the risk is low. The system flags anything unusual for a person rather than pushing bad data through the rest of the process.'
        },
        {
          title: 'How long does a process automation project take?',
          description: 'We start by automating the highest-ROI segment, which typically takes a few weeks and proves the value early. We then expand across the full process in controlled stages, so you see returns quickly rather than waiting for one large build to finish.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Find the process that\'s quietly costing you the most.',
      subheading: 'Book a free automation audit — 30 minutes, no obligation, and an honest read on what\'s worth automating.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};