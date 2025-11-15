<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, Plus, Minus, Trash2, Upload, Download, FileText, Image as ImageIcon } from 'lucide-svelte';
  import Input from '../../atoms/input/base/Input.svelte';
  import { Button } from '$lib/components/atoms';
  import ProductCard from './ProductCard.svelte';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    inStock?: boolean;
    stockCount?: number;
    category?: string;
    minOrderQuantity?: number;
  };

  type BulkOrderItem = {
    id: string;
    productId: string;
    quantity: number;
    price: number;
    note?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    initialItems?: BulkOrderItem[];
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
    onOrderSubmit?: (items: BulkOrderItem[]) => void;
    onItemsChange?: (items: BulkOrderItem[]) => void;
    currency?: string;
    locale?: string;
  };

  let {
    products = [],
    initialItems = [],
    title = 'Bulk Order',
    description = 'Add multiple products to your order',
    showTotal = true,
    showNotes = true,
    allowFileUpload = true,
    class: hostClass = '',
    headerClass = '',
    formClass = '',
    itemClass = '',
    actionsClass = '',
    onOrderSubmit,
    onItemsChange,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let items = $state<BulkOrderItem[]>(initialItems);
  let selectedProduct: string | null = $state(null);
  let quantity = $state(1);
  let note = $state('');

  $effect(() => {
    // Initialize with initial items if provided
    if (initialItems.length > 0) {
      items = [...initialItems];
    }
  });

  function addProduct() {
    if (!selectedProduct) return;
    
    const product = products.find(p => p.id === selectedProduct);
    if (!product) return;
    
    // Check if product is already in the list
    const existingItemIndex = items.findIndex(item => item.productId === selectedProduct);
    
    if (existingItemIndex !== -1) {
      // Update quantity if product already exists
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity
      };
      items = updatedItems;
    } else {
      // Add new item
      items = [...items, {
        id: Date.now().toString(),
        productId: selectedProduct,
        quantity: quantity,
        price: product.price,
        note: showNotes ? note : undefined
      }];
    }
    
    // Reset form values
    selectedProduct = null;
    quantity = 1;
    note = '';
    
    onItemsChange?.(items);
  }

  function removeItem(itemId: string) {
    items = items.filter(item => item.id !== itemId);
    onItemsChange?.(items);
  }

  function updateQuantity(itemId: string, newQuantity: number) {
    if (newQuantity < 1) return;
    
    items = items.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity } 
        : item
    );
    
    onItemsChange?.(items);
  }

  function updateNote(itemId: string, newNote: string) {
    items = items.map(item => 
      item.id === itemId 
        ? { ...item, note: newNote } 
        : item
    );
    
    onItemsChange?.(items);
  }

  function handleSubmit() {
    onOrderSubmit?.(items);
  }

  function calculateTotal(): number {
    return items.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  let total = $derived(calculateTotal());
</script>

<div class={`bulk-order-form ${hostClass}`} {...restProps}>
  <div class={`mb-6 ${headerClass}`}>
    <div class="flex items-center">
      <Package class="h-6 w-6 text-blue-500 mr-2" />
      <h2 class="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    
    {#if description}
      <p class="mt-1 text-gray-600">{description}</p>
    {/if}
  </div>
  
  <div class={`border rounded-lg p-6 ${formClass}`}>
    <!-- Product selection form -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div class="md:col-span-2">
        <label for="product-select" class="block text-sm font-medium text-gray-700 mb-1">
          Select Product
        </label>
        <select
          id="product-select"
          class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedProduct || ''}
          onchange={(e) => selectedProduct = (e.target as HTMLSelectElement).value || null}
        >
          <option value="" disabled>Select a product</option>
          {#each products as product}
            <option value={product.id}>{product.name}</option>
          {/each}
        </select>
      </div>
      
      <div>
        <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">
          Quantity
        </label>
        <div class="relative rounded-md shadow-sm">
          <input
            type="number"
            id="quantity"
            min="1"
            class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-300 rounded-md"
            placeholder="1"
            value={quantity}
            oninput={(e) => quantity = parseInt((e.target as HTMLInputElement).value) || 1}
          />
        </div>
      </div>
      
      <div class="flex items-end">
        <Button
          variant="primary"
          class="w-full"
          onclick={addProduct}
          disabled={!selectedProduct}
        >
          <Plus class="h-4 w-4 mr-2" />
          Add to Order
        </Button>
      </div>
    </div>
    
    {#if showNotes}
      <div class="mb-6">
        <label for="note" class="block text-sm font-medium text-gray-700 mb-1">
          Note (optional)
        </label>
        <input
          type="text"
          id="note"
          class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Special instructions for this item"
          value={note}
          oninput={(e) => note = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}
    
    {#if allowFileUpload}
      <div class="mb-6 flex items-center">
        <Button variant="outline" class="mr-3">
          <Upload class="h-4 w-4 mr-2" />
          Upload CSV
        </Button>
        <Button variant="outline">
          <Download class="h-4 w-4 mr-2" />
          Download Template
        </Button>
      </div>
    {/if}
    
    <!-- Items list -->
    <div class="mb-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
      
      {#if items.length === 0}
        <div class="text-center py-8 border-2 border-dashed rounded-lg">
          <Package class="h-12 w-12 text-gray-400 mx-auto" />
          <h3 class="mt-2 text-sm font-medium text-gray-900">No items added</h3>
          <p class="mt-1 text-sm text-gray-500">Add some products to your bulk order.</p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each items as item}
            {@const product = products.find(p => p.id === item.productId)}
            {#if product}
              <div class={`border rounded-lg p-4 flex items-center ${itemClass}`}>
                <div class="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                  {#if product.thumbnail}
                    <img 
                      src={product.thumbnail} 
                      alt={product.name} 
                      class="w-full h-full object-cover"
                    />
                  {:else}
                    <div class="w-full h-full flex items-center justify-center text-gray-400">
                      <ImageIcon class="h-8 w-8" />
                    </div>
                  {/if}
                </div>
                
                <div class="ml-4 flex-1 min-w-0">
                  <div class="flex items-baseline justify-between">
                    <h4 class="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
                    <p class="ml-4 text-sm font-medium text-gray-900">
                      {formatPrice(product.price * item.quantity)}
                    </p>
                  </div>
                  
                  <div class="mt-1 flex items-center text-xs text-gray-500">
                    <span>Price: {formatPrice(product.price)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class="ml-2 line-through text-gray-400">
                        {formatPrice(product.originalPrice)}
                      </span>
                    {/if}
                  </div>
                  
                  {#if showNotes && item.note}
                    <div class="mt-2 text-sm text-gray-600">
                      <span class="font-medium">Note:</span> {item.note}
                    </div>
                  {/if}
                  
                  <div class="mt-2 flex items-center">
                    <div class="flex items-center border rounded-md">
                      <button
                        type="button"
                        class="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onclick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus class="h-4 w-4" />
                      </button>
                      
                      <input
                        type="number"
                        class="w-12 text-center border-y-0 border-gray-300 focus:outline-none"
                        value={item.quantity}
                        min="1"
                        oninput={(e) => updateQuantity(item.id, parseInt((e.target as HTMLInputElement).value) || 1)}
                      />
                      
                      <button
                        type="button"
                        class="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
                        onclick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus class="h-4 w-4" />
                      </button>
                    </div>
                    
                    <button
                      type="button"
                      class="ml-4 flex items-center text-sm font-medium text-red-600 hover:text-red-500"
                      onclick={() => removeItem(item.id)}
                    >
                      <Trash2 class="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    </div>
    
    <!-- Order summary -->
    {#if showTotal && items.length > 0}
      <div class="border-t border-gray-200 pt-6">
        <div class="flex justify-between text-base font-medium text-gray-900 mb-1">
          <p>Subtotal</p>
          <p>{formatPrice(total)}</p>
        </div>
        
        <div class="flex justify-between text-base font-medium text-gray-900 mt-4">
          <p>Total</p>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    {/if}
    
    <!-- Actions -->
    <div class={`mt-6 flex justify-end space-x-3 ${actionsClass}`}>
      <Button variant="outline">
        Save Draft
      </Button>
      <Button 
        variant="primary" 
        onclick={handleSubmit}
        disabled={items.length === 0}
      >
        Place Bulk Order
      </Button>
    </div>
  </div>
</div>
