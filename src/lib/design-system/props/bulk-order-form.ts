import type { HTMLAttributes } from 'svelte/elements';

export type BulkOrderFormProduct = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  thumbnail?: string;
  minOrder?: number;
  available?: number;
};

export type BulkOrderFormItem = {
  id: string;
  productId: string;
  quantity: number;
  price: number;
  note?: string;
};

export type BulkOrderFormRestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

export type BulkOrderFormProps = BulkOrderFormRestProps & {
  products: BulkOrderFormProduct[];
  initialItems?: BulkOrderFormItem[];
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
  onOrderSubmit?: (items: BulkOrderFormItem[]) => void;
  onItemsChange?: (items: BulkOrderFormItem[]) => void;
  currency?: string;
  locale?: string;
};