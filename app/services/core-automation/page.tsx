import { Metadata } from 'next';
import CoreAutomationClient from './CoreAutomationClient';

export const metadata: Metadata = {
  title: 'Core Automation Services | ClickMasters',
  description:
    'Eliminate manual work at scale. ClickMasters builds robust process automation systems that run 24/7 saving time, reducing errors, and freeing your team to do real work.',
};

export default function Page() {
  return <CoreAutomationClient />;
}