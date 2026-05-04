<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import BillingSummary from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Billing Summary' },
    { name: 'showDetails', type: 'boolean', defaultValue: true }
  ];
</script>

<Story component={BillingSummary} title="Billing Summary" description="Billing total and line items." controls={controls}>
  {#snippet children(values: any)}
    <BillingSummary
      items={[
        { id: '1', description: 'Subscription Fee', amount: 29.99, date: new Date(), currency: 'USD', status: 'pending' },
        { id: '2', description: 'Setup Fee', amount: 19.99, date: new Date(), currency: 'USD', status: 'pending' }
      ]}
      showDetails={values.showDetails as boolean}
      title={values.title as string}
      currency="USD"
      status="pending"
    />
  {/snippet}
</Story>
