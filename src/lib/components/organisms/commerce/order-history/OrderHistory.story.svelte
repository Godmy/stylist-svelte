<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OrderHistory from './OrderHistory.svelte';

  type Props = {
    itemsPerPage: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'itemsPerPage',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 20
    }
  ];
</script>

<Story
  id="molecules-order-history"
  title="OrderHistory"
  component={OrderHistory}
  category="Molecules"
  description="A component to display a history of user orders."
  tags={['order', 'history', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-2xl mx-auto">
      <h2 class="text-xl font-semibold mb-6">Order History</h2>
      <OrderHistory
        orders={[
          {
            id: '1',
            orderNumber: 'ORD-12345',
            date: new Date(Date.now() - 86400000),
            status: 'delivered',
            total: 249.99,
            currency: 'USD',
            items: [
              {
                id: '1-1',
                name: 'Wireless Headphones',
                quantity: 1,
                price: 199.99,
                thumbnail: 'https://example.com/headphones.jpg'
              },
              {
                id: '1-2',
                name: 'Phone Case',
                quantity: 1,
                price: 49.99,
                thumbnail: 'https://example.com/phone-case.jpg'
              }
            ],
            trackingNumber: 'TRK123456789',
            rating: 4
          },
          {
            id: '2',
            orderNumber: 'ORD-12346',
            date: new Date(Date.now() - 172800000),
            status: 'shipped',
            total: 89.99,
            currency: 'USD',
            items: [
              {
                id: '2-1',
                name: 'Sunglasses',
                quantity: 1,
                price: 89.99,
                thumbnail: 'https://example.com/sunglasses.jpg'
              }
            ],
            trackingNumber: 'TRK987654321'
          }
        ]}
        itemsPerPage={props.itemsPerPage}
      />
    </div>
  {/snippet}
</Story>