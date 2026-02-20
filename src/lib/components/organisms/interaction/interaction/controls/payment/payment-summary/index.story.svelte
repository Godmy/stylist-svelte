<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { PaymentSummaryItem, PaymentSummaryDiscount, PaymentSummaryTax } from '$stylist/design-system/props';
  import PaymentSummary from './index.svelte';

  type Props = {
    showItems: boolean;
    showDiscounts: boolean;
    showTaxes: boolean;
    showPaymentMethod: boolean;
    showTransactionId: boolean;
    total: number;
  };

  const controls: ControlConfig[] = [
    { name: 'showItems', type: 'boolean', defaultValue: true },
    { name: 'showDiscounts', type: 'boolean', defaultValue: true },
    { name: 'showTaxes', type: 'boolean', defaultValue: true },
    { name: 'showPaymentMethod', type: 'boolean', defaultValue: true },
    { name: 'showTransactionId', type: 'boolean', defaultValue: true },
    { name: 'total', type: 'number', defaultValue: 114 }
  ];

  const items: PaymentSummaryItem[] = [
    { id: '1', name: 'Item A', quantity: 2, price: 30, total: 60 },
    { id: '2', name: 'Item B', quantity: 1, price: 45, total: 45 }
  ];
  
  const discounts: PaymentSummaryDiscount[] = [
    { id: 'd1', name: 'Promo', amount: 10, type: 'fixed' }
  ];
  
  const taxes: PaymentSummaryTax[] = [
    { id: 't1', name: 'VAT', rate: 20, amount: 19 }
  ];
</script>

<Story
  id="organisms-payment-summary"
  title="Organisms / Interaction / Controls / Payment / Payment Summary"
  component={PaymentSummary}
  category="Organisms/Interaction/Controls/Payment"
  description="A payment summary component displaying order items, discounts, taxes, and total."
  tags={['payment', 'summary', 'order', 'checkout']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-payment-summary p-4">
      <h1 class="text-lg font-semibold mb-4">PaymentSummary Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive PaymentSummary</h2>
        <div class="max-w-md">
          <PaymentSummary 
            items={values.showItems ? items : []}
            discounts={values.showDiscounts ? discounts : []}
            taxes={values.showTaxes ? taxes : []}
            total={values.total}
            paymentMethod={values.showPaymentMethod ? 'Visa **** 1111' : undefined}
            transactionId={values.showTransactionId ? 'TX-1001' : undefined}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>


