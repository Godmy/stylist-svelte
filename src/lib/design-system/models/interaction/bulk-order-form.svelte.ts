import type { BulkOrderFormProduct, BulkOrderFormItem, BulkOrderFormProps } from '../../props/interaction/bulk-order-form';

export class BulkOrderFormModel {
  items = $state<BulkOrderFormItem[]>([]);
  selectedProduct: string | null = $state(null);
  quantity = $state(1);
  note = $state('');
  
  constructor(props: BulkOrderFormProps) {
    this.items = props.initialItems || [];
    this.updateFromProps(props);
  }
  
  updateFromProps(props: BulkOrderFormProps) {
    if (props.initialItems && props.initialItems.length > 0) {
      this.items = [...props.initialItems];
    }
  }
  
  addProduct(products: BulkOrderFormProduct[], onItemsChange?: (items: BulkOrderFormItem[]) => void) {
    if (!this.selectedProduct) return;

    const product = products.find(p => p.id === this.selectedProduct);
    if (!product) return;

    // Check if product is already in the list
    const existingItemIndex = this.items.findIndex(item => item.productId === this.selectedProduct);

    if (existingItemIndex !== -1) {
      // Update quantity if product already exists
      const updatedItems = [...this.items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + this.quantity
      };
      this.items = updatedItems;
    } else {
      // Add new item
      this.items = [...this.items, {
        id: Date.now().toString(),
        productId: this.selectedProduct,
        quantity: this.quantity,
        price: product.price,
        note: this.note
      }];
    }

    // Reset form values
    this.selectedProduct = null;
    this.quantity = 1;
    this.note = '';

    onItemsChange?.(this.items);
  }

  removeItem(itemId: string, onItemsChange?: (items: BulkOrderFormItem[]) => void) {
    this.items = this.items.filter(item => item.id !== itemId);
    onItemsChange?.(this.items);
  }

  updateQuantity(itemId: string, newQuantity: number, onItemsChange?: (items: BulkOrderFormItem[]) => void) {
    if (newQuantity < 1) return;

    this.items = this.items.map(item =>
      item.id === itemId
        ? { ...item, quantity: newQuantity }
        : item
    );

    onItemsChange?.(this.items);
  }

  updateNote(itemId: string, newNote: string, onItemsChange?: (items: BulkOrderFormItem[]) => void) {
    this.items = this.items.map(item =>
      item.id === itemId
        ? { ...item, note: newNote }
        : item
    );

    onItemsChange?.(this.items);
  }

  handleSubmit(items: BulkOrderFormItem[], onOrderSubmit?: (items: BulkOrderFormItem[]) => void) {
    onOrderSubmit?.(items);
  }

  calculateTotal(products: BulkOrderFormProduct[]): number {
    return this.items.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  formatPrice(price: number, currency: string = 'USD', locale: string = 'en-US'): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }
}

export default BulkOrderFormModel;