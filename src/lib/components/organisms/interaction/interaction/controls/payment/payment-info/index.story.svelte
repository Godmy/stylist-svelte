<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import type { PaymentMethod } from '$stylist/design-system/props';
  import PaymentInfo from './index.svelte';

  const paymentMethods: PaymentMethod[] = [
    { id: 'card', type: 'credit_card', name: 'Card', description: 'Visa or Mastercard', fee: 0, processingTime: 'Instant', enabled: true },
    { id: 'paypal', type: 'paypal', name: 'PayPal', description: 'Pay with PayPal', fee: 2.5, processingTime: 'Instant', enabled: true },
    { id: 'bank', type: 'bank_transfer', name: 'Bank Transfer', description: 'SEPA transfer', processingTime: '1-3 days', enabled: true }
  ];

  type Props = { showMethods: boolean; showSecurityInfo: boolean; showAcceptedCards: boolean };
  const controls: ControlConfig[] = [
    { name: 'showMethods', type: 'boolean', defaultValue: true },
    { name: 'showSecurityInfo', type: 'boolean', defaultValue: true },
    { name: 'showAcceptedCards', type: 'boolean', defaultValue: true }
  ];
</script>

<Story id="organisms-payment-info" title="Organisms / Interaction / Controls / Payment / Payment Info" component={PaymentInfo} category="Organisms/Interaction/Controls/Payment" controls={controls}>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-payment-info p-4">
      <PaymentInfo
        {paymentMethods}
        showMethods={typedProps.showMethods}
        showSecurityInfo={typedProps.showSecurityInfo}
        showAcceptedCards={typedProps.showAcceptedCards}
      />
    </div>
  {/snippet}
</Story>



