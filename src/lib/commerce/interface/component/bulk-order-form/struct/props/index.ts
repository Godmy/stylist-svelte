import type { Product } from '$stylist/commerce/type/struct/bulk-order-form/product';
import type { OrderItem } from '$stylist/commerce/type/struct/bulk-order-form/order-item';

// BulkOrderForm props interface
export interface BulkOrderFormProps {
  products: Product[];
  initialItems?: OrderItem[];
  title?: string;
  description?: string;
  showTotal?: boolean;
  showNotes?: boolean;
  allowFileUpload?: boolean;
  class?: string;
  headerClass?: string;
  formClass?: string;
  itemClass?: string;
  actionsClass?: string;
  onOrderSubmit?: (items: OrderItem[]) => void;
  onItemsChange?: (items: OrderItem[]) => void;
  currency?: string;
  locale?: string;
}
