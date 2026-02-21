<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import type { PaymentMethod } from '$stylist/design-system/props';
  import PaymentMethodSelector from './index.svelte';

  const methods: PaymentMethod[] = [
    { id: 'm1', type: 'credit_card', name: 'Visa', description: '**** 4242', isDefault: true },
    { id: 'm2', type: 'paypal', name: 'PayPal', description: 'user@mail.com' },
    { id: 'm3', type: 'bank_transfer', name: 'Bank Transfer', description: 'IBAN ...' }
  ];

  type Props = { showAddButton: boolean; showEditButton: boolean; showRemoveButton: boolean };
  const controls: ControlConfig[] = [
    { name: 'showAddButton', type: 'boolean', defaultValue: true },
    { name: 'showEditButton', type: 'boolean', defaultValue: true },
    { name: 'showRemoveButton', type: 'boolean', defaultValue: true }
  ];
</script>

<Story id="organisms-payment-method-selector" title="Organisms / Interaction / Controls / Payment / Payment Method Selector" component={PaymentMethodSelector} category="Organisms/Interaction/Controls/Payment" controls={controls}>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-payment-method-selector p-4">
      <PaymentMethodSelector {methods} showAddButton={typedProps.showAddButton} showEditButton={typedProps.showEditButton} showRemoveButton={typedProps.showRemoveButton} />
    </div>
  {/snippet}
</Story>



