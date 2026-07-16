import { Metadata } from 'next';
import AIAgentsClient from './AiAgentClient';

export const metadata: Metadata = {
  title: 'AI Agents & Assistants | ClickMasters',
  description:
    'Deploy intelligent AI agents that think, decide, and act handling customer support, research, outreach, and internal operations around the clock.',
};

export default function Page() {
  return <AIAgentsClient />;
}