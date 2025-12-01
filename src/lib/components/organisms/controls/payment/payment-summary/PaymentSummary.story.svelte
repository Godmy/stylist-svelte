<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PaymentSummary from './PaymentSummary.svelte';

  type Props = {
    title: string;
    showItems: boolean;
    showDiscounts: boolean;
    showTaxes: boolean;
    showPaymentInfo: boolean;
    showStatus: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Payment Summary'
    },
    {
      name: 'showItems',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showDiscounts',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showTaxes',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showPaymentInfo',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showStatus',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-payment-summary"
  title="PaymentSummary"
  component={PaymentSummary}
  category="Molecules"
  description="A component to display a summary of payment details."
  tags={['payment', 'summary', 'billing']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">{props.title}</h2>
      <PaymentSummary
        title={props.title}
        items={[
          { id: '1', name: 'Product 1', quantity: 1, price: 100, total: 100 },
          { id: '2', name: 'Product 2', quantity: 2, price: 50, total: 100 }
        ]}
        discounts={[
          { id: 'disc1', name: 'Promo Code', amount: 20, type: 'fixed' }
        ]}
        taxes={[
          { id: 'tax1', name: 'Sales Tax', rate: 8.5, amount: 17 }
        ]}
        total={197}
        showItems={props.showItems}
        showDiscounts={props.showDiscounts}
        showTaxes={props.showTaxes}
        showPaymentInfo={props.showPaymentInfo}
        showStatus={props.showStatus}
      />
    </div>
  {/snippet}
</Story>