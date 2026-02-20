import type { BulkOrderFormProduct, BulkOrderFormItem } from '../props/bulk-order-form';

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