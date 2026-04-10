export interface Props {
  componentName?: string;
  category?: string;
  subcategory?: string;
  description?: string;
  propsCount?: number;
  examples?: string[];
  npmPackage?: string;
  version?: string;
  author?: string;
  lastUpdated?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
