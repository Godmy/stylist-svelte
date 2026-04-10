<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist';
const Package = 'package';
const Plus = 'plus';
const Minus = 'minus';
const Trash2 = 'trash-2';
const Upload = 'upload';
const Download = 'download';
const ImageIcon = 'image';

  import { Button } from '$stylist';
  import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
  import { BulkOrderFormModel } from '$stylist/commerce/function/state/bulk-order-form';
  import type { BulkOrderFormProps } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-props';
  import { BulkOrderFormStyleManager } from '$stylist/commerce/class/style-manager/bulk-order-form';

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
  }: BulkOrderFormProps & Omit<InteractionHTMLAttributes<HTMLElement>, 'class'> = $props();

  const state = BulkOrderFormModel({
    products,
    initialItems,
    title,
    description,
    showTotal,
    showNotes,
    allowFileUpload,
    class: hostClass,
    headerClass,
    formClass,
    itemClass,
    actionsClass,
    onOrderSubmit,
    onItemsChange,
    currency,
    locale
  });
  
  $effect(() => {
    state.updateFromProps({
      products,
      initialItems,
      title,
      description,
      showTotal,
      showNotes,
      allowFileUpload,
      class: hostClass,
      headerClass,
      formClass,
      itemClass,
      actionsClass,
      onOrderSubmit,
      onItemsChange,
      currency,
      locale
    });
  });

  let total = $derived(state.calculateTotal(products));
</script>

<div class={mergeClassNames(BulkOrderFormStyleManager.getContainerClasses(hostClass), hostClass)} {...restProps}>
  <div class={BulkOrderFormStyleManager.getHeaderClasses(headerClass)}>
    <div class="flex items-center">
      <BaseIcon name={Package} class="h-6 w-6 text-[--color-primary-600] mr-2" />
      <h2 class={BulkOrderFormStyleManager.getTitleClasses()}>{title}</h2>
    </div>

    {#if description}
      <p class={BulkOrderFormStyleManager.getDescriptionClasses()}>{description}</p>
    {/if}
  </div>

  <div class={BulkOrderFormStyleManager.getFormClasses(formClass)}>
    <div class={BulkOrderFormStyleManager.getProductSelectionFormClasses()}>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label for="product-select" class={BulkOrderFormStyleManager.getLabelClasses()}>
            Select Product
          </label>
          <select
            id="product-select"
            class={BulkOrderFormStyleManager.getSelectClasses()}
            value={state.selectedProduct || ''}
            onchange={(e) => state.selectedProduct = (e.target as HTMLSelectElement).value || null}
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
              value={state.quantity}
              oninput={(e) => state.quantity = parseInt((e.target as HTMLInputElement).value) || 1}
            />
          </div>
        </div>

        <div class="flex items-end">
          <Button
            variant="primary"
            class="w-full"
            onclick={() => state.addProduct(products, onItemsChange)}
            disabled={!state.selectedProduct}
          >
            <BaseIcon name={Plus} class="h-4 w-4 mr-2" />
            Add to Order
          </Button>
        </div>
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
          value={state.note}
          oninput={(e) => state.note = (e.target as HTMLInputElement).value}
        />
      </div>
    {/if}

    {#if allowFileUpload}
      <div class={BulkOrderFormStyleManager.getFileAreaClasses()}>
        <Button variant="outline" class="mr-3">
          <BaseIcon name={Upload} class="h-4 w-4 mr-2" />
          Upload CSV
        </Button>
        <Button variant="outline">
          <BaseIcon name={Download} class="h-4 w-4 mr-2" />
          Download Template
        </Button>
      </div>
    {/if}

    <div class={BulkOrderFormStyleManager.getItemsListClasses()}>
      <h3 class={BulkOrderFormStyleManager.getItemsListTitleClasses()}>Order Items</h3>

      {#if state.items.length === 0}
        <div class={BulkOrderFormStyleManager.getEmptyStateClasses()}>
          <BaseIcon name={Package} class="h-12 w-12 text-[--color-text-tertiary] mx-auto" />
          <h3 class="mt-2 text-sm font-medium text-[--color-text-primary]">No items added</h3>
          <p class="mt-1 text-sm text-[--color-text-secondary]">Add some products to your bulk order.</p>
        </div>
      {:else}
        <div class="space-y-4">
          {#each state.items as item}
            {@const product = products.find(p => p.id === item.productId)}
            {#if product}
              <div class={mergeClassNames(BulkOrderFormStyleManager.getItemContainerClasses(itemClass), itemClass)}>
                <div class={BulkOrderFormStyleManager.getItemImageAreaClasses()}>
                  {#if product.thumbnail}
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      class={BulkOrderFormStyleManager.getItemImageClasses()}
                    />
                  {:else}
                    <div class={BulkOrderFormStyleManager.getDefaultImageIconClasses()}>
                      <BaseIcon name={ImageIcon} class="h-8 w-8" />
                    </div>
                  {/if}
                </div>

                <div class="ml-4 flex-1 min-w-0">
                  <div class="flex items-baseline justify-between">
                    <h4 class={BulkOrderFormStyleManager.getItemNameClasses()}>{product.name}</h4>
                    <p class={BulkOrderFormStyleManager.getItemPriceClasses()}>
                      {state.formatPrice(product.price * item.quantity, currency, locale)}
                    </p>
                  </div>

                  <div class={BulkOrderFormStyleManager.getItemTextPriceClasses()}>
                    <span>Price: {state.formatPrice(product.price, currency, locale)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class={BulkOrderFormStyleManager.getStrikethroughPriceClasses()}>
                        {state.formatPrice(product.originalPrice, currency, locale)}
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
                        onclick={() => state.updateQuantity(item.id, item.quantity - 1, onItemsChange)}
                        disabled={item.quantity <= 1}
                      >
                        <BaseIcon name={Minus} class="h-4 w-4" />
                      </button>

                      <input
                        type="number"
                        class={BulkOrderFormStyleManager.getQuantityInputClasses()}
                        value={item.quantity}
                        min="1"
                        oninput={(e) => state.updateQuantity(item.id, parseInt((e.target as HTMLInputElement).value) || 1, onItemsChange)}
                      />

                      <button
                        type="button"
                        class={BulkOrderFormStyleManager.getQuantityChangeButtonClasses()}
                        onclick={() => state.updateQuantity(item.id, item.quantity + 1, onItemsChange)}
                      >
                        <BaseIcon name={Plus} class="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      type="button"
                      class={BulkOrderFormStyleManager.getRemoveButtonClasses()}
                      onclick={() => state.removeItem(item.id, onItemsChange)}
                    >
                      <BaseIcon name={Trash2} class="h-4 w-4 mr-1" />
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

    {#if showTotal && state.items.length > 0}
      <div class={BulkOrderFormStyleManager.getDividerClasses()}>
        <div class={BulkOrderFormStyleManager.getTotalClasses()}>
          <p>Subtotal</p>
          <p>{state.formatPrice(total, currency, locale)}</p>
        </div>

        <div class={BulkOrderFormStyleManager.getTotalClasses()}>
          <p>Total</p>
          <p>{state.formatPrice(total, currency, locale)}</p>
        </div>
      </div>
    {/if}

    <div class={mergeClassNames(BulkOrderFormStyleManager.getActionsAreaClasses(actionsClass), actionsClass)}>
      <Button variant="outline">
        Save Draft
      </Button>
      <Button
        variant="primary"
        onclick={() => state.handleSubmit(state.items, onOrderSubmit)}
        disabled={state.items.length === 0}
      >
        Place Bulk Order
      </Button>
    </div>
  </div>
</div>
