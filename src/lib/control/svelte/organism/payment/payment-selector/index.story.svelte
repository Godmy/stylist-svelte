<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import type { PaymentMethod } from '$stylist';
  import PaymentSelector from './index.svelte';

  const methods: PaymentMethod[] = [
    { id: 'a', type: 'credit_card', name: 'Visa', details: '**** 1111', isDefault: true },
    { id: 'b', type: 'debit_card', name: 'Mastercard', details: '**** 2222', isDefault: false }
  ];

  type Props = { showAddButton: boolean; showSetDefault: boolean };
  const controls: InterfaceControllerSettings[] = [
    { name: 'showAddButton', type: 'boolean', defaultValue: true },
    { name: 'showSetDefault', type: 'boolean', defaultValue: true }
  ];
</script>

<Story id="organisms-payment-selector" title="Organisms / Interaction / Controls / Payment / Payment Selector" component={PaymentSelector} category="Organisms/Interaction/Controls/Payment" controls={controls}>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-payment-selector p-4">
      <PaymentSelector {methods} showAddButton={typedProps.showAddButton} showSetDefault={typedProps.showSetDefault} />
    </div>
  {/snippet}
</Story>






