export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  thumbnail?: string;
  minOrder?: number;
  available?: number;
};

export type OrderItem = {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  note?: string;
};

export type BulkOrderFormProps = {
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
};