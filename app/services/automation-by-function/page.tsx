import { Metadata } from 'next';
import AutomationByFunctionClient from './AutomationByFunctionClient';

export const metadata: Metadata = {
  title: 'Automation by Business Function | ClickMasters',
  description:
    'Automation built around how your business actually works Sales, Marketing, Finance, HR, Operations, and Customer Support. Pick your function, we handle the rest.',
};

export default function Page() {
  return <AutomationByFunctionClient />;
}