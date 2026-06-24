// content/services/ai-agent-development.ts
import { ServiceContent } from './type';

export const aiAgentDevelopment: ServiceContent = {
  slug: 'ai-agent-development',
  title: 'AI Agent Development Services | Custom AI Agents — Clickmasters',
  metaDescription: 'Clickmasters builds custom AI agents that qualify leads, handle support, generate proposals, and act inside your systems — taking action, not just answering.',
  keywords: 'ai agent development, custom ai agents, intelligent automation, ai assistant',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Agent Development',
      subheading: 'Custom AI agents that reason, use your tools, take multiple steps, and act inside your real systems — not just answer questions.',
      content: [
        'Clickmasters builds custom AI agents that do real work inside your business. An AI agent is more than a chatbot: it can reason about a goal, use your tools, take several steps, and act inside your systems — qualifying a lead, drafting and sending a reply, updating a record, booking a meeting — largely on its own, with human oversight where it matters. The result is not a smarter FAQ box. It is a tireless operator that handles work your team currently does by hand.',
        'This page explains what an AI agent actually is, how it differs from a chatbot in ways that matter for what you can delegate to it, the specific kinds of agents we build, how they connect to your systems to take real action, and — most importantly — how we make an agent reliable enough to trust with genuine responsibility. That last part is where most agent projects succeed or fail.'
      ],
      stats: [
        { label: 'PROJECTS', value: '150+' },
        { label: 'CLIENTS', value: '60+' }
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false }
      ],
      image: {
        src: '/images/agent.png',
        alt: 'AI Agent Development illustration',
        width: 1000,
        height: 800
      }
    },

    // ========== TEXT: What Is an AI Agent? ==========
    {
      type: 'text',
      heading: 'What Is an AI Agent?',
      content: [
        'A chatbot responds to messages. An AI agent pursues a goal. Given an objective — qualify this lead, resolve this ticket, prepare this report — an agent can break it into steps, work out what information it needs, use tools to get that information, take action, observe the result, and adjust. It is the difference between something that talks and something that does.',
        'Technically, an agent combines three things: a language model that serves as the reasoning engine, a set of tools it is allowed to use (your CRM, your database, your email, your calendar, your internal systems), and a loop that lets it take multiple steps toward a goal instead of producing a single one-shot response. That architecture is what allows an agent to handle work that previously required a person to sit there and do it step by step.',
        'The practical upshot is significant. An agent does not just tell a customer where their order is — it looks up the order, checks the shipping status, drafts an accurate answer, and sends it. It does not just suggest that a follow-up would be a good idea — it writes the follow-up, schedules it, and logs the activity to the CRM. The agent closes the loop, which is precisely the part that, done by hand, eats your team\'s time.'
      ]
    },

    // ========== TEXT: AI Agents vs. Chatbots ==========
    {
      type: 'text',
      heading: 'AI Agents vs. Chatbots: Why the Difference Matters',
      content: [
        'This distinction is not pedantic — it determines what you can actually hand off. A traditional chatbot is reactive and conversational. It answers what it is asked, within a script, and when the conversation goes off-script it falls apart or escalates. It informs, but it does not act, which means a human still has to do everything the conversation was about.',
        'An AI agent is proactive and operational. It takes action across systems to complete a task, not just to answer a question about it. Consider a refund request. A support chatbot can tell the customer your refund policy. An AI support agent can actually process the refund: verify the order exists, check it against the policy, confirm eligibility, issue the refund in your payment system, update the record, and confirm to the customer — escalating to a human only if something falls outside the rules. The chatbot informs; the agent resolves.',
        'That is why agents, built and supervised properly, replace far more manual work than chatbots ever could. A chatbot deflects a question. An agent completes the job behind the question. For a business measuring return in hours of work removed, that gap is the whole point.'
      ]
    },

    // ========== FEATURES: Our AI Agent Development Services ==========
    {
      type: 'features',
      heading: 'Our AI Agent Development Services',
      items: [
        {
          title: 'Custom AI agents',
          description: 'Agents designed around your specific workflows and goals, connected to your specific tools — not a generic template dressed up for your brand. The value of an agent comes from how well it fits the way your business actually works.',
          icon: 'Bot'
        },
        {
          title: 'Lead qualification agents',
          description: 'Agents that enrich inbound leads, score them against your ideal-customer profile, route them to the right person, and begin personalized outreach — so your sales team spends time on conversations, not triage.',
          icon: 'Target'
        },
        {
          title: 'Support and service agents',
          description: 'Agents that resolve common requests end to end, answering from your own documentation and taking action in your systems, and escalating the genuinely complex cases to humans with full context attached.',
          icon: 'Headphones'
        },
        {
          title: 'Internal and operations agents',
          description: 'Agents that pull data, generate reports, update systems, and run multi-step internal tasks on demand or on a schedule — the operational equivalent of an assistant who never forgets and never sleeps.',
          icon: 'BarChart3'
        },
        {
          title: 'Multi-agent systems',
          description: 'Coordinated sets of agents that handle complex processes, each responsible for part of the work and handing off to the others, for cases too involved for a single agent to manage cleanly.',
          icon: 'Network'
        }
      ]
    },

    // ========== TEXT: How Agents Connect to Your Systems ==========
    {
      type: 'text',
      heading: 'How Agents Connect to Your Systems',
      content: [
        'An agent is only as useful as the tools it can reach. An agent that can only talk is a chatbot; an agent that can act needs to be wired into the systems where your work actually happens. We connect agents to your CRM, help desk, databases, email, calendar, and internal tools through secure integrations and automation platforms. The agent reads context from those systems and takes action in them, which is what turns it from a clever demonstration into a working part of your operations.',
        'Where an agent needs to answer from your specific knowledge — your policies, your product details, your documentation, your data — we use retrieval-augmented generation, usually shortened to RAG. Instead of relying on the model\'s general training, the agent retrieves the relevant information from your own content and answers based on that. This keeps responses accurate, current, on-brand, and grounded in what is actually true for your business, rather than plausible-sounding but wrong. For most business agents, this grounding is essential; it is the difference between an agent you can trust in front of customers and one you cannot.'
      ]
    },

    // ========== FEATURES: Making Agents Reliable ==========
    {
      type: 'features',
      heading: 'Making Agents Reliable Enough to Trust',
      subheading: 'Here is the part that matters most, and the part inexperienced builders underestimate. Getting an agent to work once, in a demo, is not hard. Making it reliable enough to hand real responsibility to — to let it touch customer interactions, financial actions, or production data without someone checking every move — is the actual job. We design for that from the very start, not as an afterthought.',
      items: [
        {
          title: 'Guardrails',
          description: 'Explicit boundaries on what an agent can and cannot do, so it stays inside safe, intended behavior and cannot take actions it was never meant to.',
          icon: 'Shield'
        },
        {
          title: 'Human-in-the-loop',
          description: 'Checkpoints where a person approves or reviews before consequential actions, especially in the early period while you build confidence in the agent\'s judgment.',
          icon: 'Users'
        },
        {
          title: 'Grounding',
          description: 'Answers and decisions based on your real data via RAG, sharply reducing the chance of the agent inventing information or acting on a misunderstanding.',
          icon: 'Database'
        },
        {
          title: 'Monitoring and logging',
          description: 'Full visibility into what the agent did and why, so you can audit its behavior, catch problems early, and improve it over time.',
          icon: 'BarChart3'
        },
        {
          title: 'Graceful escalation',
          description: 'When an agent encounters something it should not handle, it hands off to a human with full context rather than guessing and hoping.',
          icon: 'GitBranch'
        }
      ]
    },

    // ========== TEXT: Where Agents Deliver the Most Value ==========
    {
      type: 'text',
      heading: 'Where Agents Deliver the Most Value',
      content: [
        'Agents earn their keep in the same kinds of places workflow automation does, but they go further because they can handle judgment, not just sequence. The strongest use cases share a profile: high volume, repetitive at the core but with enough variation that simple rules fall short, and currently consuming skilled people\'s time on work that does not require their skill.',
        'Lead qualification is a classic example — high volume, judgment-laden, and a poor use of a salesperson\'s time until the lead is actually worth a conversation. Front-line customer support is another: a large share of tickets are variations on a small number of questions, perfect for an agent to resolve, leaving the genuinely hard cases for humans. Internal operations — pulling together data, generating routine reports, updating records across systems — is a third, often overlooked because it is invisible back-office work that nonetheless eats hours every week.',
        'The audit exists to find your version of these: the place where an agent removes the most manual work for the least risk, so you can prove the value before extending agents into more sensitive territory.'
      ]
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: 'We build agents that act, not just chat',
          description: 'Connected to your real systems and taking real action — the part that actually removes work.',
          icon: 'Zap'
        },
        {
          title: 'Reliability by design',
          description: 'Guardrails, grounding, human-in-the-loop, and monitoring built in from the start, not bolted on after something goes wrong.',
          icon: 'Shield'
        },
        {
          title: 'Model-agnostic',
          description: 'We use OpenAI, Claude, or Gemini based on the task, not a single vendor relationship, so the agent runs on whatever performs best for your use case.',
          icon: 'Brain'
        },
        {
          title: 'You own it',
          description: 'Documented, transparent agents you control and can maintain or extend without depending on us.',
          icon: 'Award'
        },
        // ✅ NEW CARD 5
        {
          title: 'Security-first approach',
          description: 'We build agents with enterprise-grade security, including data encryption, access controls, and compliance with your industry standards — so your sensitive data stays protected.',
          icon: 'Lock'
        }
      ]
    },

    // ========== GRID: Worked Examples ==========
    {
      type: 'grid',
      heading: 'Worked Examples: Agents Doing Real Work',
      subheading: 'To make this concrete, here are six agents of the kind we build, described in enough detail that you can picture the equivalent in your own operation.',
      items: [
        {
          title: 'Inbound lead qualification agent',
          description: 'A lead submits an enquiry. The agent reads the message, enriches the contact with company and role information, and assesses how well the lead fits your ideal customer — not with a rigid score on one field, but by weighing several signals the way a thoughtful SDR would. It writes a genuinely relevant first response that references what the prospect actually asked, books a call if the lead is ready, or starts a nurture sequence if it is not, and logs everything to the CRM with a short summary for the rep. The salesperson wakes up to qualified, contextualized opportunities instead of a pile of raw form fills to triage.',
          icon: 'Rocket'
        },
        {
          title: 'Customer support resolution agent',
          description: 'A ticket arrives. The agent classifies it, retrieves the relevant policy and product information from your documentation via RAG, and determines whether it can resolve the issue itself. For the large share of tickets that are variations on common questions, it drafts and sends an accurate answer, takes any necessary action in your systems, and closes the ticket. For the genuinely complex or sensitive cases, it escalates to a human agent with the full history and a summary attached, so the person starts from context rather than scratch. Response times drop sharply, and your team\'s attention goes to the cases that actually need a human.',
          icon: 'Headphones'
        },
        {
          title: 'Internal operations agent',
          description: 'On a schedule, or on request in Slack, the agent pulls data from across your systems, assembles a report or answers a question, and delivers it where your team works. "What\'s our pipeline coverage this quarter by region?" becomes a question someone can simply ask, rather than a task that requires exporting data and building a spreadsheet. The agent does the gathering and assembling; the human does the deciding.',
          icon: 'BarChart3'
        },
        {
          title: 'Sales outreach agent',
          description: 'The agent autonomously identifies high‑value prospects from your CRM and external data sources, crafts personalized outreach messages, and sends them via email or LinkedIn. It tracks engagement, schedules follow‑ups, and notifies your sales team when a prospect shows strong interest — turning prospecting from a manual chore into an automated pipeline‑building machine.',
          icon: 'TrendingUp'
        },
        {
          title: 'Data analysis and insight agent',
          description: 'The agent connects to your data warehouse, BI tools, and spreadsheets. On demand or on a schedule, it runs complex queries, generates visualizations, and delivers a plain‑English summary of key insights. Whether it\'s weekly performance, customer segmentation, or anomaly detection, the agent makes data accessible to everyone — no SQL expertise required.',
          icon: 'Database'
        },
        {
          title: 'Employee onboarding agent',
          description: 'When a new team member joins, the agent takes over the entire onboarding workflow: sends welcome materials, schedules training sessions, provisions necessary accounts, and answers common HR and IT questions. It adapts the onboarding sequence based on the new hire\'s role and department, ensuring a smooth, consistent, and personalized start — without tying up your HR or IT staff.',
          icon: 'Users'
        }
      ]
    },

    // ========== STEPS: How We Build an Agent ==========
    {
      type: 'steps',
      heading: 'How We Build an Agent',
      subheading: 'Our build process is deliberately staged so that trust is earned before autonomy is granted.',
      items: [
        {
          title: 'Scope and design',
          description: 'We define exactly what the agent should do, what tools it needs, where its boundaries are, and where humans must stay in the loop. A tightly scoped agent that does one thing reliably beats an ambitious one that does many things unpredictably.'
        },
        {
          title: 'Build and ground',
          description: 'We construct the agent, connect it to your systems, and ground it in your real data through RAG so its answers and decisions are based on what is actually true for your business.'
        },
        {
          title: 'Supervised rollout',
          description: 'The agent runs with human-in-the-loop review on consequential actions, so you see its judgment in practice and can correct it before it operates more freely.'
        },
        {
          title: 'Expand autonomy',
          description: 'As the agent proves reliable on the routine cases, we widen what it can do on its own, always keeping escalation paths for the cases it should not handle alone.'
        }
      ]
    },

    // ========== TEXT: Staging Note ==========
    {
      type: 'text',
      content: 'This staging is the responsible way to deploy agents. It lets you capture the value quickly on low-risk work while building the confidence and the evidence to extend the agent into more sensitive territory over time.'
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is an AI agent?',
          description: 'An AI agent is software that uses an AI model to reason about a goal, use tools, and take multi-step action inside real systems — qualifying leads, resolving tickets, updating records — rather than simply answering questions the way a chatbot does. It pursues an objective and closes the loop.'
        },
        {
          title: 'What can AI agents do for a business?',
          description: 'They can qualify and route leads, handle customer support, generate proposals and reports, pull and update data, and run multi-step internal processes — autonomously for the routine cases, with human oversight on the consequential decisions.'
        },
        {
          title: 'How are AI agents different from chatbots?',
          description: 'Chatbots respond to messages within a script and inform; agents pursue goals, take action across systems, and complete tasks over multiple steps. A chatbot can tell a customer your refund policy; an agent can process the refund.'
        },
        {
          title: 'Are AI agents safe to let act on their own?',
          description: 'With proper guardrails, grounding in your real data, human-in-the-loop checkpoints, and monitoring, yes. We design agents to operate within clear boundaries and to escalate to a human whenever they hit something outside those boundaries, rather than guessing.'
        },
        {
          title: 'Which AI models do you use to build agents?',
          description: 'We use OpenAI, Claude, and Gemini, chosen per task based on their strengths and cost. Being model-agnostic means we select what performs best for your specific use case rather than defaulting to one vendor.'
        },
        {
          title: 'How long before an agent is doing real work?',
          description: 'We typically start with one well-scoped agent and a human-in-the-loop period so you can build trust as it proves itself. Most clients have an agent handling real, routine work within a few weeks, with its autonomy expanding as its reliability is demonstrated.'
        }
      ]
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'See what an AI agent could take off your team\'s plate.',
      subheading: 'Book a free automation audit — 30 minutes, no obligation.',
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true
      }
    }
  ]
};