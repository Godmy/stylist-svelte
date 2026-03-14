import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { Orientation } from '$stylist/design-system/tokens/architecture/orientations';
// Props for StatusDashboard component
export interface StatusDashboardProps {
  title?: string;
  subtitle?: string;
  items: StatusItem[];
  layout?: Orientation;
  size?: ComponentSize;
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

