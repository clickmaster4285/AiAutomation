// lib/icons.ts
import {
  Workflow,
  Cpu,
  Bot,
  MessageSquare,
  Mic,
  Brain,
  TrendingUp,
  Megaphone,
  Headphones,
  FileText,
  Link,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Workflow': Workflow,
  'Cpu': Cpu,
  'Bot': Bot,
  'MessageSquare': MessageSquare,
  'Mic': Mic,
  'Brain': Brain,
  'TrendingUp': TrendingUp,
  'Megaphone': Megaphone,
  'Headphones': Headphones,
  'FileText': FileText,
  'Link': Link,
};

export function getServiceIcon(iconName: string): LucideIcon | null {
  return iconMap[iconName] || null;
}