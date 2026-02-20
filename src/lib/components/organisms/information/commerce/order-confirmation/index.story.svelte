<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import OrderConfirmation from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'showDownloadInvoice', type: 'boolean', defaultValue: true },
      { name: 'showShareOrder', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample order data
  const orderData = {
    orderId: 'ORD-2023-001',
    orderDate: new Date(),
    items: [
      {
        id: 'item1',
        name: 'Wireless Headphones',
        price: 129.99,
        quantity: 1,
        variant: 'Black',
        thumbnail: 'https://placehold.co/100x100?text=Headphones'
      },
      {
        id: 'item2',
        name: 'Bluetooth Speaker',
        price: 79.99,
        quantity: 2,
        variant: 'Red',
        thumbnail: 'https://placehold.co/100x100?text=Speaker'
      }
    ],
    total: 289.97,
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Main St',
      address2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA'
    },
    paymentInfo: {
      method: 'credit_card',
      lastFour: '4242',
      status: 'paid' as const
    },
    estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    trackingNumber: 'TRK123456789',
    orderStatus: 'processing' as const,
    shippingCost: 9.99,
    taxAmount: 18.40
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={OrderConfirmation}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-order-confirmation grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Order Confirmation Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Order confirmation page with all details.</p>

        <div class="mt-6">
          <OrderConfirmation
            {...orderData}
            showDownloadInvoice={values.showDownloadInvoice}
            showShareOrder={values.showShareOrder}
            onDownloadInvoice={() => console.log('Downloading invoice')}
            onShareOrder={() => console.log('Sharing order')}
            onContinueShopping={() => console.log('Continuing shopping')}
            onTrackOrder={() => console.log('Tracking order')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Order Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different order confirmation configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Shipped Order</p>
            <div>
              <OrderConfirmation
                {...orderData}
                orderStatus="shipped"
                trackingNumber="TRK987654321"
                showDownloadInvoice={true}
                showShareOrder={false}
                onDownloadInvoice={() => console.log('Downloading invoice')}
                onShareOrder={() => console.log('Sharing order')}
                onContinueShopping={() => console.log('Continuing shopping')}
                onTrackOrder={() => console.log('Tracking order')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Delivered Order</p>
            <div>
              <OrderConfirmation
                {...orderData}
                orderStatus="delivered"
                trackingNumber="TRK555666777"
                showDownloadInvoice={false}
                showShareOrder={true}
                onDownloadInvoice={() => console.log('Downloading invoice')}
                onShareOrder={() => console.log('Sharing order')}
                onContinueShopping={() => console.log('Continuing shopping')}
                onTrackOrder={() => console.log('Tracking order')}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


