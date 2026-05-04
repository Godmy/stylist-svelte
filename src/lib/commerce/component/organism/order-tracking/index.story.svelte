<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import RecipeOrderTracking from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showRecipientDetails', type: 'boolean', defaultValue: true },
    { name: 'showContactCarrier', type: 'boolean', defaultValue: true }
  ];

  const trackingInfo = {
    orderId: 'ORD-2023-001',
    trackingNumber: 'TRK123456789',
    carrier: 'FedEx',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    status: 'shipped' as const,
    progress: 60,
    events: [
      { id: 'event1', status: 'processing' as const, timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), location: 'Warehouse, NY', description: 'Order processed', notes: 'Package prepared for shipment' },
      { id: 'event2', status: 'shipped' as const, timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), location: 'Distribution Center, NJ', description: 'Shipped from facility', notes: 'Package scanned and loaded onto truck' }
    ],
    recipientName: 'John Doe',
    recipientPhone: '(555) 123-4567',
    shippingAddress: '123 Main St, New York, NY 10001',
    deliveryNotes: 'Leave at front desk if not home'
  };
</script>

<Story component={RecipeOrderTracking} title="Order Tracking" description="Order tracking timeline with delivery actions." controls={controls}>
  {#snippet children(values: any)}
    <RecipeOrderTracking
      {trackingInfo}
      showRecipientDetails={values.showRecipientDetails as boolean}
      showContactCarrier={values.showContactCarrier as boolean}
      showDeliveryNotes={true}
      showReportIssue={true}
      onContactCarrier={() => {
        console.log('Contacting carrier');
      }}
      onReportIssue={() => {
        console.log('Reporting issue');
      }}
    />
  {/snippet}
</Story>
