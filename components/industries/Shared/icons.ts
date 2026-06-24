// components/industries/Shared/icons.ts
import * as LucideIcons from 'lucide-react';

export const iconMap: Record<string, React.ComponentType<any>> = {
  // Common
  Zap: LucideIcons.Zap,
  Search: LucideIcons.Search,
  Brain: LucideIcons.Brain,
  GitBranch: LucideIcons.GitBranch,
  RefreshCw: LucideIcons.RefreshCw,
  Shield: LucideIcons.Shield,
  DollarSign: LucideIcons.DollarSign,
  Award: LucideIcons.Award,
  AlertTriangle: LucideIcons.AlertTriangle,
  EyeOff: LucideIcons.EyeOff,

  // Industries specific
  FileText: LucideIcons.FileText,
  CreditCard: LucideIcons.CreditCard,
  BarChart: LucideIcons.BarChart,
  Database: LucideIcons.Database,
  Link2: LucideIcons.Link2,
  Table: LucideIcons.Table,
  Briefcase: LucideIcons.Briefcase,
  Target: LucideIcons.Target,

  // Platform specific (for reuse)
  Microphone: LucideIcons.Mic,
  Phone: LucideIcons.Phone,
  Calendar: LucideIcons.Calendar,
  MessageSquare: LucideIcons.MessageSquare,
  Clipboard: LucideIcons.Clipboard,
  Scale: LucideIcons.Scale,
  Truck: LucideIcons.Truck,
  Users: LucideIcons.Users,
  Check: LucideIcons.Check,

  // Navigation
  ArrowRight: LucideIcons.ArrowRight,
  ChevronDown: LucideIcons.ChevronDown,
  Menu: LucideIcons.Menu,
  X: LucideIcons.X,
};

export const getIcon = (iconName: string): React.ComponentType<any> | null => {
  return iconMap[iconName] || null;
};