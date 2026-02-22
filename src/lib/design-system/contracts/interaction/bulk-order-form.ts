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

// Presets moved from presets\bulk-order-form.ts

// Default values for BulkOrderForm component
export const DEFAULT_BULK_ORDER_FORM_PROPS = {
  products: [] as BulkOrderFormProduct[],
  initialItems: [] as BulkOrderFormItem[],
  title: 'Bulk Order',
  description: 'Add multiple products to your order',
  showTotal: true,
  showNotes: true,
  allowFileUpload: true,
  currency: 'USD',
  locale: 'en-US'
};

// Preset configurations for common use cases
export const BULK_ORDER_FORM_PRESETS = {
  basic: {
    showTotal: true,
    showNotes: false,
    allowFileUpload: false
  },
  fullFeatured: {
    showTotal: true,
    showNotes: true,
    allowFileUpload: true
  },
  minimal: {
    showTotal: false,
    showNotes: false,
    allowFileUpload: false
  }
};

