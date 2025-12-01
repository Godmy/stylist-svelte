<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PaymentMethodSelector from './PaymentMethodSelector.svelte';

  type Props = {
    title: string;
    showAddButton: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Select Payment Method'
    },
    {
      name: 'showAddButton',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-payment-method-selector"
  title="PaymentMethodSelector"
  component={PaymentMethodSelector}
  category="Molecules"
  description="A component for selecting a payment method."
  tags={['payment', 'selector', 'method']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">{props.title}</h2>
      <PaymentMethodSelector
        methods={[
          { id: 'card1', type: 'credit_card', name: 'Visa Card', lastFour: '4242', expiry: '12/25', issuer: 'Visa', isDefault: true, isVerified: true },
          { id: 'card2', type: 'debit_card', name: 'Mastercard', lastFour: '1234', expiry: '11/24', issuer: 'Mastercard', isDefault: false, isVerified: true },
          { id: 'paypal', type: 'paypal', name: 'PayPal Account', isDefault: false, isVerified: true }
        ]}
        showAddButton={props.showAddButton}
      />
    </div>
  {/snippet}
</Story>