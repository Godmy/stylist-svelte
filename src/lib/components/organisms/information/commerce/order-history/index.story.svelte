<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import OrderHistory from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showSearch', type: 'boolean', defaultValue: true },
      { name: 'showRepeatOrder', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample order history data
  const orderHistory = [
    {
      id: 'order1',
      orderNumber: 'ORD-2023-001',
      date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
      status: 'delivered' as const,
      total: 289.97,
      items: [
        {
          id: 'item1',
          name: 'Wireless Headphones',
          quantity: 1,
          price: 129.99,
          thumbnail: 'https://placehold.co/100x100?text=Headphones'
        },
        {
          id: 'item2',
          name: 'Bluetooth Speaker',
          quantity: 2,
          price: 79.99,
          thumbnail: 'https://placehold.co/100x100?text=Speaker'
        }
      ],
      rating: 5,
      review: 'Great quality and fast delivery!'
    },
    {
      id: 'order2',
      orderNumber: 'ORD-2023-002',
      date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
      status: 'shipped' as const,
      total: 149.99,
      items: [
        {
          id: 'item3',
          name: 'Smart Watch',
          quantity: 1,
          price: 149.99,
          thumbnail: 'https://placehold.co/100x100?text=Watch'
        }
      ]
    },
    {
      id: 'order3',
      orderNumber: 'ORD-2023-003',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      status: 'processing' as const,
      total: 89.99,
      items: [
        {
          id: 'item4',
          name: 'Phone Case',
          quantity: 1,
          price: 24.99,
          thumbnail: 'https://placehold.co/100x100?text=Case'
        },
        {
          id: 'item5',
          name: 'Screen Protector',
          quantity: 2,
          price: 32.50,
          thumbnail: 'https://placehold.co/100x100?text=Protector'
        }
      ]
    },
    {
      id: 'order4',
      orderNumber: 'ORD-2023-004',
      date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
      status: 'cancelled' as const,
      total: 199.99,
      items: [
        {
          id: 'item6',
          name: 'Laptop Stand',
          quantity: 1,
          price: 49.99,
          thumbnail: 'https://placehold.co/100x100?text=Stand'
        },
        {
          id: 'item7',
          name: 'Wireless Mouse',
          quantity: 1,
          price: 149.99,
          thumbnail: 'https://placehold.co/100x100?text=Mouse'
        }
      ]
    }
  ];
</script>

<Story
  {id}
  {title}
  {description}
  component={OrderHistory}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-order-history grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Order History Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Order history with search and filtering.</p>

        <div class="mt-6">
          <OrderHistory
            orders={orderHistory}
            showSearch={values.showSearch}
            showRepeatOrder={values.showRepeatOrder}
            showDownloadInvoice={true}
            showOrderRating={true}
            onOrderClick={(order) => console.log(`Clicked order: ${order.orderNumber}`)}
            onRepeatOrder={(order) => console.log(`Reordering: ${order.orderNumber}`)}
            onDownloadInvoice={(order) => console.log(`Downloading invoice for: ${order.orderNumber}`)}
            onOrderRated={(orderId, rating) => console.log(`Rated order ${orderId} with ${rating} stars`)}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Order History Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different order history configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Search</p>
            <div>
              <OrderHistory
                orders={orderHistory.slice(0, 2)}
                showSearch={false}
                showRepeatOrder={true}
                showDownloadInvoice={false}
                showOrderRating={true}
                onOrderClick={(order) => console.log(`Clicked order: ${order.orderNumber}`)}
                onRepeatOrder={(order) => console.log(`Reordering: ${order.orderNumber}`)}
                onOrderRated={(orderId, rating) => console.log(`Rated order ${orderId} with ${rating} stars`)}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Rating</p>
            <div>
              <OrderHistory
                orders={orderHistory.slice(0, 1)}
                showSearch={true}
                showRepeatOrder={false}
                showDownloadInvoice={true}
                showOrderRating={false}
                onOrderClick={(order) => console.log(`Clicked order: ${order.orderNumber}`)}
                onDownloadInvoice={(order) => console.log(`Downloading invoice for: ${order.orderNumber}`)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


