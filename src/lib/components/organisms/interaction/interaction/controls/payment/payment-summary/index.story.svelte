<script lang="ts">
  import { Story } from '$lib/design-system/playground';
  import type { PaymentSummaryDiscount, PaymentSummaryItem, PaymentSummaryTax } from '$lib/design-system/props';
  import PaymentSummary from './index.svelte';

  const items: PaymentSummaryItem[] = [
    { id: '1', name: 'Item A', quantity: 2, price: 30, total: 60 },
    { id: '2', name: 'Item B', quantity: 1, price: 45, total: 45 }
  ];
  const discounts: PaymentSummaryDiscount[] = [{ id: 'd1', name: 'Promo', amount: 10, type: 'fixed' }];
  const taxes: PaymentSummaryTax[] = [{ id: 't1', name: 'VAT', rate: 20, amount: 19 }];
</script>

<Story id="organisms-payment-summary" title="Organisms / Interaction / Controls / Payment / Payment Summary" component={PaymentSummary} category="Organisms/Interaction/Controls/Payment">
  {#snippet children()}
    <div class="sb-organisms-payment-summary p-4">
      <PaymentSummary {items} {discounts} {taxes} total={114} paymentMethod="Visa **** 1111" transactionId="TX-1001" />
    </div>
  {/snippet}
</Story>

