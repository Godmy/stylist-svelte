<script lang="ts">
  import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
  import { Icon as BaseIcon } from '$stylist';
const ShoppingCart = 'shopping-cart';
const Plus = 'plus';
const Minus = 'minus';
const X = 'x';
const Package = 'package';
const Truck = 'truck';
const BadgePercent = 'badge-percent';
const RotateCcw = 'rotate-ccw';

  import { Button } from '$stylist';

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

  type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;

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
        <h2 class="text-xl font-bold text-[var(--color-text-primary)] flex items-center">
          <BaseIcon name={ShoppingCart} class="h-6 w-6 mr-2" />
          Shopping Cart
        </h2>
        <span class="text-[var(--color-text-secondary)]">{items.length} {items.length === 1 ? 'item' : 'items'}</span>
      </div>

      <div class="space-y-6">
        {#if items.length === 0}
          <div class="text-center py-12">
            <BaseIcon name={Package} class="h-12 w-12 text-[var(--color-text-tertiary)] mx-auto" />
            <h3 class="mt-2 text-lg font-medium text-[var(--color-text-primary)]">Your cart is empty</h3>
            <p class="mt-1 text-[var(--color-text-secondary)]">Start adding some products to your cart</p>
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
                    <div class="w-full h-full bg-[var(--color-background-tertiary)] flex items-center justify-center">
                      <BaseIcon name={Package} class="h-8 w-8 text-[var(--color-text-tertiary)]" />
                    </div>
                  {/if}
                </div>
              {/if}

              <div class="flex-1 min-w-0">
                <div class="flex items-baseline justify-between">
                  <h3 class="text-sm font-medium text-[var(--color-text-primary)] truncate">{item.name}</h3>
                  <p class="ml-4 text-sm font-medium text-[var(--color-text-primary)]">
                    {formatCurrency(item.price * item.quantity)}
                  </p>
                </div>

                {#if item.originalPrice && item.originalPrice > item.price}
                  <p class="mt-1 text-sm text-[var(--color-text-secondary)] line-through">
                    {formatCurrency(item.originalPrice * item.quantity)}
                  </p>
                {/if}

                {#if item.discountPercent}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--color-success-100)] text-[var(--color-success-800)] mt-1">
                    -{item.discountPercent}% OFF
                  </span>
                {/if}

                <div class="mt-2 flex items-center">
                  <div class="flex items-center border rounded-md">
                    <button
                      type="button"
                      class="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
                      onclick={() => decrementQuantity(item)}
                      disabled={!item.inStock}
                    >
                      <BaseIcon name={Minus} class="h-4 w-4" />
                    </button>

                    <input
                      type="number"
                      class="w-10 text-center border-y-0 border-[var(--color-border-primary)] focus:outline-none"
                      value={item.quantity}
                      min="1"
                      max={item.maxQuantity}
                      onchange={(e) => changeQuantity(item, parseInt((e.target as HTMLInputElement).value) || 1)}
                    />

                    <button
                      type="button"
                      class="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none"
                      onclick={() => incrementQuantity(item)}
                      disabled={
                        !item.inStock ||
                        (item.maxQuantity !== undefined && item.quantity >= item.maxQuantity)
                      }
                    >
                      <BaseIcon name={Plus} class="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    class="ml-4 flex items-center text-sm font-medium text-[var(--color-danger-600)] hover:text-[var(--color-danger-500)]"
                    onclick={() => removeItem(item.id)}
                  >
                    <BaseIcon name={X} class="h-4 w-4 mr-1" />
                    Remove
                  </button>

                  {#if !item.inStock}
                    <span class="ml-4 text-sm text-[var(--color-danger-600)]">Out of stock</span>
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
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Order Summary</h3>

      <div class="mt-6 space-y-4">
        <div class="flex justify-between text-sm">
          <dt class="text-[var(--color-text-secondary)]">Subtotal</dt>
          <dd class="text-[var(--color-text-primary)]">{formattedSubtotal}</dd>
        </div>

        {#if showDiscounts && discountAmount > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-[var(--color-text-secondary)]">Discount</dt>
            <dd class="text-[var(--color-success-600)]">-{formattedDiscount}</dd>
          </div>
        {/if}

        {#if showShipping && shippingCost > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-[var(--color-text-secondary)]">Shipping</dt>
            <dd class="text-[var(--color-text-primary)]">{formattedShipping}</dd>
          </div>
        {/if}

        {#if showTaxes && taxCost > 0}
          <div class="flex justify-between text-sm">
            <dt class="text-[var(--color-text-secondary)]">Taxes</dt>
            <dd class="text-[var(--color-text-primary)]">{formattedTax}</dd>
          </div>
        {/if}

        <!-- Applied promotions -->
        {#if appliedPromotions.length > 0}
          <div class="pt-4 border-t border-[var(--color-border-primary)]">
            {#each appliedPromotions as promotion}
              <div class="flex justify-between text-sm">
                <dt class="text-[var(--color-text-secondary)] flex items-center">
                  <BaseIcon name={BadgePercent} class="h-4 w-4 mr-1 text-[var(--color-success-600)]" />
                  Promotion: {promotion.code}
                </dt>
                <dd class="text-[var(--color-success-600)]">
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
          <div class="pt-4 border-t border-[var(--color-border-primary)]">
            <div class="flex">
              <input
                type="text"
                class="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-[var(--color-border-primary)] shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] sm:text-sm"
                placeholder="Promo code"
                value={promoCode}
                oninput={(e) => promoCode = (e.target as HTMLInputElement).value}
                onkeypress={(e) => e.key === 'Enter' && applyPromoCode()}
              />
              <button
                type="button"
                class="inline-flex items-center px-3 rounded-r-md border border-l-0 border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] sm:text-sm"
                onclick={applyPromoCode}
              >
                Apply
              </button>
            </div>
          </div>
        {/if}

        <div class="flex justify-between text-base font-medium text-[var(--color-text-primary)] pt-4 border-t border-[var(--color-border-primary)]">
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

      <div class="mt-6 flex justify-center text-sm text-center text-[var(--color-text-secondary)]">
        <p>
          or <button type="button" class="text-[var(--color-primary-600)] font-medium hover:text-[var(--color-primary-500)]" onclick={() => window.history.back()}>
            Continue Shopping
          </button>
        </p>
      </div>
    </div>
  </div>
</div>






