<script lang="ts">
  import { PaymentSummaryStyleManager } from '$stylist/commerce/class/style-manager/payment-summary-style-manager';
  import type { PaymentSummaryProps } from '$stylist/commerce/type/struct/payment-summary-props';
  import type { PaymentSummaryDiscount } from '$stylist/commerce/type/struct/payment-summary-discount';
  import type { PaymentSummaryItem } from '$stylist/commerce/type/struct/payment-summary-item';
  import type { PaymentSummaryTax } from '$stylist/commerce/type/struct/payment-summary-tax';

  let {
    title = 'Payment Summary',
    subtitle = '',
    items = [],
    discounts = [],
    taxes = [],
    total = 0,
    currency = 'USD',
    paymentMethod,
    transactionId,
    date = new Date(),
    status = 'completed',
    class: className = '',
    ...restProps
  }: PaymentSummaryProps = $props();

  function money(v: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(v);
  }

  const subtotal = $derived(items.reduce((sum: number, item: PaymentSummaryItem) => sum + item.total, 0));
  const discountTotal = $derived(discounts.reduce((sum: number, discount: PaymentSummaryDiscount) => sum + discount.amount, 0));
  const taxTotal = $derived(taxes.reduce((sum: number, tax: PaymentSummaryTax) => sum + tax.amount, 0));
</script>

<div class={PaymentSummaryStyleManager.root(className)} {...restProps}>
  <div class="border-b px-6 py-4">
    <h3 class="text-lg font-semibold">{title}</h3>
    {#if subtitle}<p class="text-sm text-[var(--color-text-secondary)]">{subtitle}</p>{/if}
  </div>
  <div class="p-6 grid gap-6 md:grid-cols-2">
    <div>
      <div class="font-medium mb-2">Items</div>
      <div class="space-y-2">
        {#each items as item}
          <div class="flex justify-between text-sm border rounded p-2">
            <span>{item.name} x{item.quantity}</span>
            <span>{money(item.total)}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="border rounded p-4 bg-[var(--color-background-secondary)] text-sm space-y-2">
      <div class="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
      <div class="flex justify-between"><span>Discounts</span><span>-{money(discountTotal)}</span></div>
      <div class="flex justify-between"><span>Taxes</span><span>{money(taxTotal)}</span></div>
      <div class="border-t pt-2 font-semibold flex justify-between"><span>Total</span><span>{money(total)}</span></div>
      {#if paymentMethod}<div>Method: {paymentMethod}</div>{/if}
      {#if transactionId}<div>ID: {transactionId}</div>{/if}
      <div>Status: {status}</div>
      <div>Date: {date.toLocaleDateString()}</div>
    </div>
  </div>
</div>




