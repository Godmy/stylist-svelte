<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import OrderTracking from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showRecipientDetails', type: 'boolean', defaultValue: true },
      { name: 'showContactCarrier', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample tracking information
  const trackingInfo = {
    orderId: 'ORD-2023-001',
    trackingNumber: 'TRK123456789',
    carrier: 'FedEx',
    estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    status: 'shipped' as const,
    progress: 60,
    events: [
      {
        id: 'event1',
        status: 'processing' as const,
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        location: 'Warehouse, NY',
        description: 'Order processed',
        notes: 'Package prepared for shipment'
      },
      {
        id: 'event2',
        status: 'shipped' as const,
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        location: 'Distribution Center, NJ',
        description: 'Shipped from facility',
        notes: 'Package scanned and loaded onto truck'
      },
      {
        id: 'event3',
        status: 'out-for-delivery' as const,
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
        location: 'Local Facility, NY',
        description: 'Out for delivery',
        notes: 'Expected to be delivered today'
      }
    ],
    recipientName: 'John Doe',
    recipientPhone: '(555) 123-4567',
    shippingAddress: '123 Main St, New York, NY 10001',
    deliveryNotes: 'Leave at front desk if not home'
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={OrderTracking}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-order-tracking grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Order Tracking Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Order tracking with progress visualization.</p>

        <div class="mt-6">
          <OrderTracking
            trackingInfo={trackingInfo}
            showRecipientDetails={props.showRecipientDetails}
            showContactCarrier={props.showContactCarrier}
            showDeliveryNotes={true}
            showReportIssue={true}
            onContactCarrier={() => console.log('Contacting carrier')}
            onReportIssue={() => console.log('Reporting issue')}
            onStatusChange={(status) => console.log(`Status changed to: ${status}`)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Tracking Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different order tracking configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Delivered Order</p>
            <div>
              <OrderTracking
                trackingInfo={{
                  ...trackingInfo,
                  status: 'delivered',
                  progress: 100,
                  events: [
                    ...trackingInfo.events,
                    {
                      id: 'event4',
                      status: 'delivered' as const,
                      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
                      location: 'New York, NY',
                      description: 'Delivered',
                      notes: 'Received by resident'
                    }
                  ]
                }}
                showRecipientDetails={true}
                showContactCarrier={false}
                showDeliveryNotes={true}
                showReportIssue={false}
                onContactCarrier={() => console.log('Contacting carrier')}
                onReportIssue={() => console.log('Reporting issue')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Delayed Order</p>
            <div>
              <OrderTracking
                trackingInfo={{
                  ...trackingInfo,
                  status: 'delayed',
                  progress: 30,
                  events: [
                    {
                      id: 'event1',
                      status: 'processing' as const,
                      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
                      location: 'Warehouse, NY',
                      description: 'Order processed',
                      notes: 'Package prepared for shipment'
                    },
                    {
                      id: 'event2',
                      status: 'delayed' as const,
                      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
                      location: 'Distribution Center, NJ',
                      description: 'Delay in transit',
                      notes: 'Weather conditions causing delays'
                    }
                  ]
                }}
                showRecipientDetails={false}
                showContactCarrier={true}
                showDeliveryNotes={false}
                showReportIssue={true}
                onContactCarrier={() => console.log('Contacting carrier')}
                onReportIssue={() => console.log('Reporting issue')}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


