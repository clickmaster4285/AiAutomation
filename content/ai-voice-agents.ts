// content/services/ai-voice-agents.ts
import { ServiceContent } from './type';

export const aiVoiceAgents: ServiceContent = {
  slug: 'ai-voice-agents',
  title: 'AI Voice Agent Development | 24/7 AI Phone Agents — Clickmasters',
  metaDescription:
    'Clickmasters builds AI voice agents that handle inbound and outbound calls — answering, booking, qualifying, and routing to your team, around the clock.',
  keywords: 'ai voice agent, voice ai, conversational ai, call automation',
  sections: [
    // ========== HERO ==========
    {
      type: 'hero',
      heading: 'AI Voice Agent Development',
      subheading:
        'AI that answers the phone, makes calls, books, and qualifies — in natural speech, around the clock — so you stop losing leads to missed calls.',
      content: [
        'Clickmasters builds AI voice agents that hold natural phone conversations — answering inbound calls, making outbound ones, booking appointments, qualifying leads, and routing to your team, twenty-four hours a day. For any business that loses leads to missed calls, voicemail, or after-hours gaps, a voice agent captures the revenue that currently slips away every time the phone rings and no one can pick up.',
        'This page explains what an AI voice agent is, why missed calls cost more than most businesses realize, what voice agents can and cannot do today, the kinds we build, and an honest take on where the technology shines and where a human still needs to take the call.',
      ],
      stats: [
        { label: 'PROJECTS', value: '110+' },
        { label: 'CLIENTS', value: '55+' },
      ],
      ctas: [
        { text: 'Book a Free Audit', link: '/free-automation-audit', primary: true },
        { text: 'View Work', link: '/work', primary: false },
      ],
      image: {
        src: '/images/ai-voice-agent.png',
        alt: 'AI Voice Agent illustration',
        width: 1200,
        height: 1000,
        fadeEdges: true, // ✅ added
      },
    },

    // ========== TEXT: The Hidden Cost of Missed Calls ==========
    {
      type: 'text',
      heading: 'The Hidden Cost of Missed Calls',
      content: [
        'Phone calls remain one of the highest-intent ways a customer reaches a business. Someone who picks up the phone is usually closer to buying or booking than someone idly browsing. Yet missed and mishandled calls are endemic: calls that come in while the team is busy with other customers, calls after hours and on weekends, calls that go to voicemail and are never returned, calls during a lunchtime lull when no one is at the desk.',
        'Each missed call is often a lost customer, not a deferred one. People calling a service business — a clinic, a contractor, a salon, a firm — frequently call the next name on the list when no one answers, rather than waiting for a callback. The cost is not the call; it is the booking, the job, or the client that went to a competitor who happened to pick up. Because the lost business never appears in your records, this cost is almost completely invisible, which is exactly why it persists.',
        'An AI voice agent closes that gap. It answers every call, instantly, at any hour, so the lead that would have hit voicemail at eight in the evening is instead greeted, helped, and booked. For many businesses this is the single clearest ROI in the whole automation landscape, because the lost revenue it recovers is both large and entirely unaddressed today.',
      ],
    },

    // ========== TEXT: What AI Voice Agents Can Do ==========
    {
      type: 'text',
      heading: 'What AI Voice Agents Can Do',
      content: [
        'A modern AI voice agent listens, understands natural speech, responds in a natural-sounding voice, and takes action. It is not a phone tree of "press one for sales." It is a conversation. The agent can answer common questions, capture caller details, qualify the reason for the call, check availability and book an appointment, and route the call to the right person when a human is needed — all in a single, fluid interaction.',
      ],
    },

    // ========== FEATURES: Voice Agent Capabilities ==========
    {
      type: 'features',
      heading: 'What We Build',
      items: [
        {
          title: 'Inbound call handling',
          description:
            'Answer, understand, qualify, and route inbound calls around the clock, so no call goes unanswered.',
          icon: 'Phone',
        },
        {
          title: 'AI receptionist',
          description:
            'A virtual receptionist that greets callers, answers frequent questions, and books appointments — covering the front desk at every hour.',
          icon: 'Users',
        },
        {
          title: 'Appointment booking',
          description:
            'Voice-driven scheduling that checks real availability and books directly into your calendar.',
          icon: 'Calendar',
        },
        {
          title: 'Outbound and follow-up calls',
          description:
            'Automated reminders, follow-ups, confirmations, and qualification calls, made consistently and at scale.',
          icon: 'Send',
        },
        {
          title: 'CRM-connected',
          description:
            'Every call logged and every record updated automatically, so the phone channel feeds your systems like any other.',
          icon: 'Database',
        },
      ],
    },

    // ========== TEXT: An Honest Take on What Voice Can and Can't Do ==========
    {
      type: 'text',
      heading: "An Honest Take on What Voice Can and Can't Do",
      content: [
        'Voice AI has advanced remarkably, and it is worth being straight about both its strengths and its current limits. On the strength side: for structured, common interactions — booking an appointment, answering frequent questions, qualifying a caller, taking a message, confirming details — modern voice agents are genuinely good, fast, and available at every hour a human is not. They handle these high-volume, repetitive calls reliably and at a fraction of the cost of staffing the phone around the clock.',
        'On the limits side: highly complex, emotional, or sensitive calls are still best routed to a human, and a well-designed voice system does exactly that rather than forcing the agent to muddle through. The aim is not to replace your team on every call; it is to handle the high-volume routine calls — which are the ones most often missed — and to pass the rest to a person with context. We design voice agents to know the difference and to escalate gracefully, because a voice agent that tries to handle a call it should not is worse than one that hands off cleanly.',
        'We will give you a realistic picture of where a voice agent will perform well for your specific business and where humans should stay in the loop, rather than overselling. The technology is impressive, but honesty about its edges is part of deploying it responsibly.',
      ],
    },

    // ========== GRID: Platforms and Integration ==========
    {
      type: 'grid',
      heading: 'Platforms and Integration',
      subheading:
        'We build voice agents on the leading voice-AI platforms and connect them to the systems behind your phone line.',
      items: [
        {
          title: 'Voice platforms',
          description: 'Vapi, Retell, Synthflow, and similar, chosen for your needs.',
          icon: 'Microphone',
        },
        {
          title: 'Telephony',
          description: 'Twilio and other providers to handle the actual calls.',
          icon: 'Phone',
        },
        {
          title: 'Calendar',
          description: 'Real-time availability and booking into your scheduling system.',
          icon: 'Calendar',
        },
        {
          title: 'CRM',
          description: 'Call logging, caller context, and record updates.',
          icon: 'Briefcase',
        },
        {
          title: 'Routing',
          description: 'Clean handoff to the right human team member when needed.',
          icon: 'GitBranch',
        },
        {
          title: 'Analytics & compliance',
          description:
            'Built‑in call recording, transcription, and compliance monitoring to meet industry regulations (HIPAA, PCI, etc.) — with full audit trails and data retention policies.',
          icon: 'Shield',
        },
      ],
    },

    // ========== FEATURES: Why Clickmasters ==========
    {
      type: 'features',
      heading: 'Why Clickmasters',
      items: [
        {
          title: "Capture the calls you're losing",
          description:
            'Every call answered, at every hour, so leads stop slipping to voicemail and competitors.',
          icon: 'Target',
        },
        {
          title: 'Natural, action-taking conversations',
          description:
            'Booking, qualifying, and routing in fluid speech, not a rigid phone tree.',
          icon: 'MessageSquare',
        },
        {
          title: 'Honest about the edges',
          description:
            'We handle the routine calls well and route complex ones to humans, rather than overselling.',
          icon: 'Shield',
        },
        {
          title: 'You own it',
          description: 'Documented, integrated voice systems you control.',
          icon: 'Award',
        },
        {
          title: 'Seamless integration',
          description:
            'We plug voice agents directly into your CRM, calendar, and helpdesk — so every call becomes a data point, and every booking appears instantly where it belongs.',
          icon: 'Link2',
        },
      ],
    },

    // ========== GRID: Industries Where Voice Agents Pay Off Fastest ==========
    {
      type: 'grid',
      heading: 'Industries Where Voice Agents Pay Off Fastest',
      subheading:
        'Voice agents deliver the clearest return in businesses where the phone is a primary channel and missed calls translate directly into lost revenue.',
      items: [
        {
          title: 'Home services',
          description:
            'Contractors, plumbers, HVAC, and similar, where callers simply dial the next company if no one answers.',
          icon: 'Home',
        },
        {
          title: 'Healthcare and dental practices',
          description:
            'Handling appointment booking, rescheduling, and common questions without tying up front-desk staff.',
          icon: 'Heart',
        },
        {
          title: 'Salons, spas, and clinics',
          description:
            'Booking and answering while staff are with clients and unable to reach the phone.',
          icon: 'Sparkles',
        },
        {
          title: 'Real estate',
          description:
            'Capturing and qualifying buyer and renter enquiries the moment they call, day or night.',
          icon: 'Building',
        },
        {
          title: 'Professional services',
          description:
            'Ensuring every prospect call is answered and qualified rather than lost to voicemail.',
          icon: 'Briefcase',
        },
        {
          title: 'Education & training',
          description:
            'Handling enrolment inquiries, scheduling consultations, and sending reminders — so prospective students get immediate responses and staff focus on teaching, not admin.',
          icon: 'GraduationCap',
        },
      ],
    },

    // ========== TEXT: Voice Agent vs. Answering Service vs. Voicemail ==========
    {
      type: 'text',
      heading: 'Voice Agent vs. Answering Service vs. Voicemail',
      content: [
        'It helps to compare the realistic options for handling calls you cannot always take in person. Voicemail is the default, and it is the worst: most callers do not leave a message, and those who do often are not called back fast enough to matter. A human answering service handles calls live but is expensive at scale, can introduce its own delays and inconsistency, and usually cannot take action in your systems like booking directly into your calendar.',
        'An AI voice agent occupies a different point: it answers every call instantly at any hour, holds a natural conversation, takes real action like booking and qualifying, logs everything to your CRM, and costs a fraction of round-the-clock human staffing — while routing the genuinely complex calls to a person. It is not the right tool for every call, but for the high-volume routine calls that make up most of what gets missed, it is usually both the most effective and the most economical option.',
      ],
    },

    // ========== FAQ ==========
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      items: [
        {
          title: 'What is an AI voice agent?',
          description:
            'An AI voice agent is software that holds natural spoken phone conversations — understanding callers, answering questions, booking appointments, and routing calls — using AI speech and language models. It is a conversation, not a press-one phone tree.',
        },
        {
          title: 'Can AI answer business phone calls?',
          description:
            'Yes. AI voice agents can handle inbound and outbound calls around the clock — qualifying leads, answering questions, booking appointments, and escalating to humans when needed — so no call goes unanswered.',
        },
        {
          title: 'Does it sound robotic?',
          description:
            'Modern voice agents use natural-sounding speech and hold fluid conversations. They handle structured, common calls well; for complex or sensitive calls, a good system routes to a human rather than forcing the agent to struggle.',
        },
        {
          title: 'What happens with a complex or unusual call?',
          description:
            'The agent routes it to the right human team member with context. We design voice systems to handle the high-volume routine calls and escalate gracefully on anything outside their remit, because a clean handoff beats a bot out of its depth.',
        },
        {
          title: 'Will it work with our calendar and CRM?',
          description:
            'Yes. We connect voice agents to your scheduling system for real-time booking and to your CRM for call logging and caller context, so the phone channel feeds your systems automatically.',
        },
        {
          title: 'How quickly can a voice agent be live?',
          description:
            'For a defined scope — answering common questions and booking, for example — a voice agent can typically be live within a few weeks, then expanded as it proves itself on your real call mix.',
        },
      ],
    },

    // ========== CTA ==========
    {
      type: 'cta',
      heading: 'Stop losing leads to missed calls.',
      subheading:
        "Book a free automation audit — we'll map where a voice agent recovers the most revenue.",
      cta: {
        text: 'Book Your Free Audit',
        link: '/free-automation-audit',
        primary: true,
      },
    },
  ],
};