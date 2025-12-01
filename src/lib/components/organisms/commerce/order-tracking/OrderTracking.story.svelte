<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OrderTracking from './OrderTracking.svelte';

  type Props = {
    showRecipientDetails: boolean;
    showDeliveryNotes: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showRecipientDetails',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showDeliveryNotes',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-order-tracking"
  title="OrderTracking"
  component={OrderTracking}
  category="Molecules"
  description="A component to track the status of an order."
  tags={['order', 'tracking', 'status']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-2xl mx-auto">
      <h2 class="text-xl font-semibold mb-6">Order Tracking</h2>
      <OrderTracking
        trackingInfo={{
          orderId: 'ORD-12345',
          trackingNumber: 'TRK-987654321',
          carrier: 'UPS',
          estimatedDelivery: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          status: 'shipped',
          progress: 60,
          events: [
            {
              id: '1',
              status: 'pending',
              timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
              description: 'Order received',
              notes: 'Your order has been received and is being processed'
            },
            {
              id: '2',
              status: 'processing',
              timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
              description: 'Processing',
              notes: 'Your order is being prepared for shipment'
            },
            {
              id: '3',
              status: 'shipped',
              timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
              description: 'Shipped',
              location: 'New York, NY',
              notes: 'Your order has been shipped and is on the way'
            }
          ],
          recipientName: 'John Doe',
          recipientPhone: '+1 (555) 123-4567',
          shippingAddress: '123 Main St, New York, NY 10001',
          deliveryNotes: 'Please leave at front desk if not home'
        }}
        showRecipientDetails={props.showRecipientDetails}
        showDeliveryNotes={props.showDeliveryNotes}
      />
    </div>
  {/snippet}
</Story>