<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import OrderConfirmation from './OrderConfirmation.svelte';

  type Props = {
    orderId: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'orderId',
      type: 'text',
      defaultValue: 'ORD-12345'
    }
  ];
</script>

<Story
  id="molecules-order-confirmation"
  title="OrderConfirmation"
  component={OrderConfirmation}
  category="Molecules"
  description="A component to display order confirmation details."
  tags={['order', 'confirmation', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6 max-w-md mx-auto">
      <h2 class="text-xl font-semibold mb-6">Order Confirmation</h2>
      <OrderConfirmation
        orderId={props.orderId}
        orderDate={new Date()}
        items={[
          {
            id: '1',
            name: 'Wireless Headphones',
            price: 199.99,
            quantity: 1,
            thumbnail: 'https://example.com/headphones.jpg',
            variant: 'Black'
          },
          {
            id: '2',
            name: 'Phone Case',
            price: 24.99,
            quantity: 2,
            thumbnail: 'https://example.com/phone-case.jpg',
            variant: 'Clear'
          }
        ]}
        total={249.97}
        shippingAddress={{
          firstName: 'John',
          lastName: 'Doe',
          address1: '123 Main St',
          address2: 'Apt 4B',
          city: 'New York',
          state: 'NY',
          zipCode: '10001',
          country: 'USA'
        }}
        paymentInfo={{
          method: 'credit_card',
          lastFour: '1234',
          status: 'paid'
        }}
        estimatedDelivery={new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)}
        trackingNumber="TRK123456789"
        orderStatus="processing"
        shippingCost={9.99}
        taxAmount={15.00}
      />
    </div>
  {/snippet}
</Story>