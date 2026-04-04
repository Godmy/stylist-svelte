<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import type { PaymentMethod } from '$stylist';
  import PaymentInfo from './index.svelte';

  const paymentMethods: PaymentMethod[] = [
    { id: 'card', type: 'credit_card', name: 'Card', description: 'Visa or Mastercard', fee: 0, processingTime: 'Instant', enabled: true },
    { id: 'paypal', type: 'paypal', name: 'PayPal', description: 'Pay with PayPal', fee: 2.5, processingTime: 'Instant', enabled: true },
    { id: 'bank', type: 'bank_transfer', name: 'Bank Transfer', description: 'SEPA transfer', processingTime: '1-3 days', enabled: true }
  ];

  type Props = { showMethods: boolean; showSecurityInfo: boolean; showAcceptedCards: boolean };
  const controls: InterfaceControllerSettings[] = [
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






