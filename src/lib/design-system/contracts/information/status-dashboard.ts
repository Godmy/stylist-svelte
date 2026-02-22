// Props for StatusDashboard component
export interface StatusDashboardProps {
  title?: string;
  subtitle?: string;
  items: StatusItem[];
  layout?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  class?: string;
  itemClass?: string;
  headerClass?: string;
  variant?: 'default' | 'compact' | 'minimal';
}

export interface StatusItem {
  id: string;
  title: string;
  description?: string;
  status: 'success' | 'warning' | 'error' | 'pending' | 'info';
  value?: string | number;
  footer?: any; // Snippet type
  actions?: any; // Snippet type
}