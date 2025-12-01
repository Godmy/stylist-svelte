<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PaymentInfo from './PaymentInfo.svelte';

  type PaymentInfoStoryProps = {
    showMethods: boolean;
    showSecurity: boolean;
    showAcceptedCards: boolean;
    showFees: boolean;
    showProcessingTime: boolean;
    showFAQ: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showMethods',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showSecurity',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showAcceptedCards',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showFees',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showProcessingTime',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showFAQ',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-payment-info"
  title="PaymentInfo"
  component={PaymentInfo}
  category="Molecules"
  description="A component to display payment information."
  tags={['payment', 'info', 'billing']}
  controls={controls}
>
  {#snippet children(props: PaymentInfoStoryProps)}
    <div class="p-6 max-w-2xl mx-auto">
      <h2 class="text-xl font-semibold mb-6">Payment Information</h2>
      <PaymentInfo
        paymentMethods={[
          { id: 'card', type: 'credit_card', name: 'Credit/Debit Card', description: 'Pay with your major credit or debit card' },
          { id: 'paypal', type: 'paypal', name: 'PayPal', description: 'Secure payments with PayPal' },
          { id: 'bank', type: 'bank_transfer', name: 'Bank Transfer', description: 'Direct bank transfer payment' }
        ]}
        acceptedCards={['visa', 'mastercard', 'amex', 'discover']}
        showMethods={props.showMethods}
        showSecurity={props.showSecurity}
        showAcceptedCards={props.showAcceptedCards}
        showFees={props.showFees}
        showProcessingTime={props.showProcessingTime}
        showFAQ={props.showFAQ}
      />
    </div>
  {/snippet}
</Story>