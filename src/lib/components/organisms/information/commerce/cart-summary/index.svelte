<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ShoppingCart, Plus, Minus, X, Package, Truck, BadgePercent, RotateCcw } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    originalPrice?: number;
    discountPercent?: number;
    thumbnail?: string;
    inStock?: boolean;
    maxQuantity?: number;
  };

  type CartPromotion = {
    id: string;
    code: string;
    description: string;
    discountType: 'percentage' | 'fixed';
    discountValue: number;
    applied: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    items: CartItem[];
    promotions?: CartPromotion[];
    shippingCost?: number;
    taxCost?: number;
    discountAmount?: number;
    subtotal?: number;
    total?: number;
    class?: string;
    itemClass?: string;
    summaryClass?: string;
    showItemThumbnails?: boolean;
    showDiscounts?: boolean;
    showShipping?: boolean;
    showTaxes?: boolean;
    showPromoCode?: boolean;
    onQuantityChange?: (itemId: string, newQuantity: number) => void;
    onItemRemove?: (itemId: string) => void;
    onApplyPromotion?: (code: string) => void;
    onCheckout?: () => void;
    currency?: string;
    locale?: string;
  };

  let {
    items = [],
    promotions = [],
    shippingCost = 0,
    taxCost = 0,
    discountAmount = 0,
    subtotal: propSubtotal,
    total: propTotal,
    class: hostClass = '',
    itemClass = '',
    summaryClass = '',
    showItemThumbnails = true,
    showDiscounts = true,
    showShipping = true,
    showTaxes = true,
    showPromoCode = true,
    onQuantityChange,
    onItemRemove,
    onApplyPromotion,
    onCheckout,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let promoCode = $state('');
  let appliedPromotions = $state<CartPromotion[]>([]);

  // Calculate subtotal if not provided
  let subtotal = $derived(propSubtotal || items.reduce((sum, item) => sum + (item.price * item.quantity), 0));

  // Calculate total if not provided
  let total = $derived(
    propTotal !== undefined
      ? propTotal
      : subtotal - discountAmount + shippingCost + taxCost
  );

  $effect(() => {
    // Update applied promotions when props change
    const updatedPromotions = promotions.filter(promo => promo.applied);
    appliedPromotions = updatedPromotions;
  });

  function incrementQuantity(item: CartItem) {
    if (item.maxQuantity && item.quantity >= item.maxQuantity) return;
    onQuantityChange?.(item.id, item.quantity + 1);
  }

  function decrementQuantity(item: CartItem) {
    if (item.quantity <= 1) return;
    onQuantityChange?.(item.id, item.quantity - 1);
  }

  function changeQuantity(item: CartItem, newQuantity: number) {
    if (newQuantity < 1) newQuantity = 1;
    if (item.maxQuantity && newQuantity > item.maxQuantity) newQuantity = item.maxQuantity;
    onQuantityChange?.(item.id, newQuantity);
  }

  function removeItem(itemId: string) {
    onItemRemove?.(itemId);
  }

  function handleCheckout() {
    onCheckout?.();
  }

  function applyPromoCode() {
    if (promoCode.trim()) {
      onApplyPromotion?.(promoCode.trim());
      promoCode = '';
    }
  }

  function formatCurrency(amount: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  let formattedSubtotal = $derived(formatCurrency(subtotal));
  let formattedTotal = $derived(formatCurrency(total));
  let formattedShipping = $derived(formatCurrency(shippingCost));
  let formattedTax = $derived(formatCurrency(taxCost));
  let formattedDiscount = $derived(formatCurrency(discountAmount));
</script>

<div class={`c-cart-summary ${hostClass}`} {...restProps}>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <!-- Cart items -->
    <div class="md:col-span-2">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold text-gray-900 flex items-center">
          <ShoppingCart class="h-6 w-6 mr-2" />
          Shopping Cart
        </h2>
        <span class="text-gray-500">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
      </div>

      <div class="space-y-6">
        {#if items.length === 0}
          <div class="text-center py-12">
            <Package class="h-12 w-12 text-gray-400 mx-auto" />
            <h3 class="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h3>
            <p class="mt-1 text-gray-500">Start adding some products to your cart</p>
          </div>
        {:else}
          {#each items as item}
            <div class={`flex items-center border-b pb-6 ${itemClass}`}>
              {#if showItemThumbnails}
                <div class="flex-shrink-0 w-24 h-24 rounded-md overflow-hidden mr-4">
                  {#if item.thumbnail}
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      class="w-full h-full object-cover"
                    />
                  {:else}
                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                      <Package class="h-8 w-8 text-gray-400" />
                    </div>
                  {/if}
                </div>
              {/if}

              <div class="flex-1 min-w-0">
                <div class="flex items-baseline justify-between">
                  <h3 class="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
                  <p class="ml-4 text-sm font-medium text-gray-900">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>

                {#if item.originalPrice && item.originalPrice > item.price}
                  <p class="mt-1 text-sm text-gray-500 line-through">
                    {formatCurrency(item.originalPrice * item.quantity)}
                  </p>
                {/if}

                {#if item.discountPercent}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                    -{item.discountPercent}% OFF
                  </span>
                {/if}

                <div class="mt-2 flex items-center">
                  <div class="flex items-center border rounded-md">
                    <button
                      type="button"
                      class="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                      onclick={() => decrementQuantity(item)}
                      disabled={!item.inStock}
                    >
                      <Minus class="h-4 w-4" />
                    </button>

                    <input
                      type="number"
                      class="w-10 text-center border-y-0 border-gray-300 focus:outline-none"
                      value={item.quantity}
                      min="1"
                      max={item.maxQuantity}
                      onchange={(e) => changeQuantity(item, parseInt((e.target as HTMLInputElement).value) || 1)}
                    />

                    <button
                      type="button"
                      class="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                      onclick={() => incrementQuantity(item)}
                      disabled={
                        !item.inStock ||
                        (item.maxQuantity !== undefined && item.quantity >= item.maxQuantity)
                      }
                    >
                      <Plus class="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    class="ml-4 flex items-center text-sm font-medium text-red-600 hover:text-red-500"
                    onclick={() => removeItem(item.id)}
                  >
                    <X class="h-4 w-4 mr-1" />
                    Remove
                  </button>

                  {#if !item.inStock}
                    <span class="ml-4 text-sm text-red-600">Out of stock</span>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>

    <!-- Order summary -->
    <div class={`border rounded-lg p-6 ${summaryClass}`}>
      <h3 class="text-lg font-medium text-gray-900">Order Summary</h3>

      <div class="mt-6 space-y-4">
        <div class="flex justify-between text-sm">
          <dt class="text-gray-600">Subtotal</dt>
          <dd class="text-gray-900">{formattedSubtotal}</dd>
        </div>

        {#if showDiscounts && discountAmount > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-gray-600">Discount</dt>
            <dd class="text-green-600">-{formattedDiscount}</dd>
          </div>
        {/if}

        {#if showShipping && shippingCost > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-gray-600">Shipping</dt>
            <dd class="text-gray-900">{formattedShipping}</dd>
          </div>
        {/if}

        {#if showTaxes && taxCost > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-gray-600">Taxes</dt>
            <dd class="text-gray-900">{formattedTax}</dd>
          </div>
        {/if}

        <!-- Applied promotions -->
        {#if appliedPromotions.length > 0}
          <div class="pt-4 border-t border-gray-200">
            {#each appliedPromotions as promotion}
              <div class="flex justify-between text-sm">
                <dt class="text-gray-600 flex items-center">
                  <BadgePercent class="h-4 w-4 mr-1 text-green-600" />
                  Promotion: {promotion.code}
                </dt>
                <dd class="text-green-600">
                  {promotion.discountType === 'percentage'
                    ? `-${promotion.discountValue}%`
                    : `-${formatCurrency(promotion.discountValue)}`}
                </dd>
              </div>
            {/each}
          </div>
        {/if}

        <!-- Promo code input -->
        {#if showPromoCode}
          <div class="pt-4 border-t border-gray-200">
            <div class="flex">
              <input
                type="text"
                class="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Promo code"
                value={promoCode}
                oninput={(e) => promoCode = (e.target as HTMLInputElement).value}
                onkeypress={(e) => e.key === 'Enter' && applyPromoCode()}
              />
              <button
                type="button"
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 hover:bg-gray-100 sm:text-sm"
                onclick={applyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
        {/if}

        <div class="flex justify-between text-base font-medium text-gray-900 pt-4 border-t border-gray-200">
          <dt>Total</dt>
          <dd>{formattedTotal}</dd>
        </div>
      </div>

      <div class="mt-6">
        <Button
          variant="primary"
          size="lg"
          class="w-full"
          onclick={handleCheckout}
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>

      <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
        <p>
          or <button type="button" class="text-blue-600 font-medium hover:text-blue-500" onclick={() => window.history.back()}>
            Continue Shopping
          </button>
        </p>
      </div>
    </div>
  </div>
</div>

