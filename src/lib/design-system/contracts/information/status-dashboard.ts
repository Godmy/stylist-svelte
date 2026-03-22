import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenOrientation } from '$stylist/design-system/tokens/architecture/ownership/orientation';
// Props for StatusDashboard component
export interface StatusDashboardProps {
  title?: string;
  subtitle?: string;
  items: StatusItem[];
  layout?: TokenOrientation;
  size?: TokenSize;
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


