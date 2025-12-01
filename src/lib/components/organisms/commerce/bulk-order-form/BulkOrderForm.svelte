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
  import { Button } from '$lib/components/atoms';
  import { BulkOrderFormStyleManager } from './styles';
  import type { IBulkOrderFormProps } from './types';

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
  }: IBulkOrderFormProps = $props();

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

<div class={BulkOrderFormStyleManager.getContainerClasses(hostClass)} {...restProps}>
  <div class={BulkOrderFormStyleManager.getHeaderClasses(headerClass)}>
    <div class="flex items-center">
      <Package class="h-6 w-6 text-[--color-primary-600] mr-2" />
      <h2 class={BulkOrderFormStyleManager.getTitleClasses()}>{title}</h2>
    </div>

    {#if description}
      <p class={BulkOrderFormStyleManager.getDescriptionClasses()}>{description}</p>
    {/if}
  </div>

  <div class={BulkOrderFormStyleManager.getFormClasses(formClass)}>
    <!-- Product selection form -->
    <div class={BulkOrderFormStyleManager.getProductSelectionFormClasses()}>
      <div class={BulkOrderFormStyleManager.getProductSelectionCellClasses(2)}>
        <label for="product-select" class={BulkOrderFormStyleManager.getLabelClasses()}>
          Select Product
        </label>
        <select
          id="product-select"
          class={BulkOrderFormStyleManager.getSelectClasses()}
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
        <label for="quantity" class={BulkOrderFormStyleManager.getLabelClasses()}>
          Quantity
        </label>
        <div class="relative rounded-md shadow-sm">
          <input
            type="number"
            id="quantity"
            min="1"
            class={BulkOrderFormStyleManager.getInputClasses()}
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
        <label for="note" class={BulkOrderFormStyleManager.getLabelClasses()}>
          Note (optional)
        </label>
        <input
          type="text"
          id="note"
          class={BulkOrderFormStyleManager.getInputClasses()}
          placeholder="Special instructions for this item"
          value={note}
          oninput={(e) => note = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}

    {#if allowFileUpload}
      <div class={BulkOrderFormStyleManager.getFileAreaClasses()}>
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
    <div class={BulkOrderFormStyleManager.getItemsListClasses()}>
      <h3 class={BulkOrderFormStyleManager.getItemsListTitleClasses()}>Order Items</h3>

      {#if items.length === 0}
        <div class={BulkOrderFormStyleManager.getEmptyStateClasses()}>
          <Package class="h-12 w-12 text-[--color-text-tertiary] mx-auto" />
          <h3 class="mt-2 text-sm font-medium text-[--color-text-primary]">No items added</h3>
          <p class="mt-1 text-sm text-[--color-text-secondary]">Add some products to your bulk order.</p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each items as item}
            {@const product = products.find(p => p.id === item.productId)}
            {#if product}
              <div class={BulkOrderFormStyleManager.getItemContainerClasses(itemClass)}>
                <div class={BulkOrderFormStyleManager.getItemImageAreaClasses()}>
                  {#if product.thumbnail}
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      class={BulkOrderFormStyleManager.getItemImageClasses()}
                    />
                  {:else}
                    <div class={BulkOrderFormStyleManager.getDefaultImageIconClasses()}>
                      <ImageIcon class="h-8 w-8" />
                    </div>
                  {/if}
                </div>

                <div class="ml-4 flex-1 min-w-0">
                  <div class="flex items-baseline justify-between">
                    <h4 class={BulkOrderFormStyleManager.getItemNameClasses()}>{product.name}</h4>
                    <p class={BulkOrderFormStyleManager.getItemPriceClasses()}>
                      {formatPrice(product.price * item.quantity)}
                    </p>
                  </div>

                  <div class={BulkOrderFormStyleManager.getItemTextPriceClasses()}>
                    <span>Price: {formatPrice(product.price)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class={BulkOrderFormStyleManager.getStrikethroughPriceClasses()}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    {/if}
                  </div>

                  {#if showNotes && item.note}
                    <div class={BulkOrderFormStyleManager.getItemNoteClasses()}>
                      <span class="font-medium">Note:</span> {item.note}
                    </div>
                  {/if}

                  <div class={BulkOrderFormStyleManager.getQuantityAreaClasses()}>
                    <div class={BulkOrderFormStyleManager.getQuantityChangeContainerClasses()}>
                      <button
                        type="button"
                        class={BulkOrderFormStyleManager.getQuantityChangeButtonClasses()}
                        onclick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus class="h-4 w-4" />
                      </button>

                      <input
                        type="number"
                        class={BulkOrderFormStyleManager.getQuantityInputClasses()}
                        value={item.quantity}
                        min="1"
                        oninput={(e) => updateQuantity(item.id, parseInt((e.target as HTMLInputElement).value) || 1)}
                      />

                      <button
                        type="button"
                        class={BulkOrderFormStyleManager.getQuantityChangeButtonClasses()}
                        onclick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus class="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      class={BulkOrderFormStyleManager.getRemoveButtonClasses()}
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
      <div class={BulkOrderFormStyleManager.getDividerClasses()}>
        <div class={BulkOrderFormStyleManager.getTotalClasses() + ' mb-1'}>
          <p>Subtotal</p>
          <p>{formatPrice(total)}</p>
        </div>

        <div class={BulkOrderFormStyleManager.getTotalClasses() + ' mt-4'}>
          <p>Total</p>
          <p>{formatPrice(total)}</p>
        </div>
      </div>
    {/if}

    <!-- Actions -->
    <div class={BulkOrderFormStyleManager.getActionsAreaClasses(actionsClass)}>
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
