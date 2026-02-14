<script lang="ts">
  /**
   * Компонент BulkOrderForm
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает за предоставление интерфейса для массового заказа
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, заданному интерфейсом IBulkOrderFormProps
   * - ISP: Интерфейс пропсов разделен на конкретные, необходимые части
   * - DIP: Зависит от абстракций (типов и стилей), а не от деталей реализации
   *
   * Следует Atomic Design: Это молекула, объединяющая различные атомы и молекулы
   */

  import type { HTMLAttributes } from 'svelte/elements';
  import { Package, Plus, Minus, Trash2, Upload, Download, Image as ImageIcon } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { cn } from '$stylist/utils';
  import type { BulkOrderFormProps } from './types';

  type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    minOrder?: number;
    available?: number;
  };

  type OrderItem = {
    id: string;
    productId: string;
    quantity: number;
    price: number;
    note?: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLElement>, 'class'>;

  type Props = RestProps & BulkOrderFormProps;

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

  let items = $state(initialItems);
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

<div class={cn('c-bulk-order-form', hostClass)} {...restProps}>
  <div class="c-bulk-order-form__header">
    <div class="flex items-center">
      <Package class="h-6 w-6 text-[--color-primary-600] mr-2" />
      <h2 class="text-xl font-semibold text-[--color-text-primary]">{title}</h2>
    </div>

    {#if description}
      <p class="text-[--color-text-secondary] mt-1">{description}</p>
    {/if}
  </div>

  <div class="c-bulk-order-form__form">
    <!-- Product selection form -->
    <div class="c-bulk-order-form__product-selection-form mb-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label for="product-select" class="block text-sm font-medium text-[--color-text-primary] mb-1">
            Select Product
          </label>
          <select
            id="product-select"
            class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
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
          <label for="quantity" class="block text-sm font-medium text-[--color-text-primary] mb-1">
            Quantity
          </label>
          <div class="relative rounded-md shadow-sm">
            <input
              type="number"
              id="quantity"
              min="1"
              class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
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
    </div>

    {#if showNotes}
      <div class="mb-6">
        <label for="note" class="block text-sm font-medium text-[--color-text-primary] mb-1">
          Note (optional)
        </label>
        <input
          type="text"
          id="note"
          class="block w-full rounded-md border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-2 shadow-sm focus:border-[--color-primary-500] focus:outline-none focus:ring-1 focus:ring-[--color-primary-500]"
          placeholder="Special instructions for this item"
          value={note}
          oninput={(e) => note = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}

    {#if allowFileUpload}
      <div class="mb-6 flex flex-wrap gap-2">
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
    <div class="c-bulk-order-form__items-list mb-6">
      <h3 class="text-lg font-medium text-[--color-text-primary] mb-4">Order Items</h3>

      {#if items.length === 0}
        <div class="c-bulk-order-form__empty-state text-center py-8">
          <Package class="h-12 w-12 text-[--color-text-tertiary] mx-auto" />
          <h3 class="mt-2 text-sm font-medium text-[--color-text-primary]">No items added</h3>
          <p class="mt-1 text-sm text-[--color-text-secondary]">Add some products to your bulk order.</p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each items as item}
            {@const product = products.find(p => p.id === item.productId)}
            {#if product}
              <div class={cn('c-bulk-order-form__item-container', itemClass)}>
                <div class="c-bulk-order-form__item-image-area flex-shrink-0">
                  {#if product.thumbnail}
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      class="h-16 w-16 rounded object-cover"
                    />
                  {:else}
                    <div class="c-bulk-order-form__default-image-icon flex h-16 w-16 items-center justify-center rounded bg-[--color-background-secondary]">
                      <ImageIcon class="h-8 w-8" />
                    </div>
                  {/if}
                </div>

                <div class="ml-4 flex-1 min-w-0">
                  <div class="flex items-baseline justify-between">
                    <h4 class="text-[--color-text-primary] font-medium truncate">{product.name}</h4>
                    <p class="text-[--color-text-primary] font-semibold ml-4">
                      {formatPrice(product.price * item.quantity)}
                    </p>
                  </div>

                  <div class="c-bulk-order-form__item-text-price text-sm text-[--color-text-secondary] mt-1">
                    <span>Price: {formatPrice(product.price)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class="ml-2 line-through text-[--color-text-tertiary]">
                        {formatPrice(product.originalPrice)}
                      </span>
                    {/if}
                  </div>

                  {#if showNotes && item.note}
                    <div class="c-bulk-order-form__item-note mt-1 text-sm">
                      <span class="font-medium">Note:</span> {item.note}
                    </div>
                  {/if}

                  <div class="c-bulk-order-form__quantity-area mt-2 flex items-center justify-between">
                    <div class="c-bulk-order-form__quantity-change-container flex items-center">
                      <button
                        type="button"
                        class="c-bulk-order-form__quantity-change-button inline-flex h-8 w-8 items-center justify-center rounded-l-md border border-r-0 border-[--color-border-primary] bg-[--color-background-secondary] text-[--color-text-secondary] hover:bg-[--color-background-tertiary] disabled:cursor-not-allowed disabled:opacity-50"
                        onclick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus class="h-4 w-4" />
                      </button>

                      <input
                        type="number"
                        class="c-bulk-order-form__quantity-input block h-8 w-16 border-y border-[--color-border-primary] text-center text-sm [-moz-appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        value={item.quantity}
                        min="1"
                        oninput={(e) => updateQuantity(item.id, parseInt((e.target as HTMLInputElement).value) || 1)}
                      />

                      <button
                        type="button"
                        class="c-bulk-order-form__quantity-change-button inline-flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-[--color-border-primary] bg-[--color-background-secondary] text-[--color-text-secondary] hover:bg-[--color-background-tertiary]"
                        onclick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus class="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      class="c-bulk-order-form__remove-button inline-flex items-center rounded-md bg-red-50 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-100"
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
      <div class="c-bulk-order-form__divider border-t border-[--color-border-primary] pt-4 mt-4">
        <div class="c-bulk-order-form__total flex justify-between">
          <p>Subtotal</p>
          <p>{formatPrice(total)}</p>
        </div>

        <div class="c-bulk-order-form__total flex justify-between mt-4">
          <p>Total</p>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    {/if}

    <!-- Actions -->
    <div class={cn('c-bulk-order-form__actions-area flex justify-end space-x-3 pt-6', actionsClass)}>
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
