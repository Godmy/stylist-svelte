<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

  import CheckoutForm from './index.svelte';

  type Props = {
    showProgress: boolean;
    currency: string;
    locale: string;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'showProgress', type: 'boolean', defaultValue: true },
    { name: 'currency', type: 'text', defaultValue: 'USD' },
    { name: 'locale', type: 'text', defaultValue: 'en-US' }
  ];

  let cartItems = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 1,
      thumbnail: 'https://placehold.co/100x100'
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      quantity: 2,
      thumbnail: 'https://placehold.co/100x100'
    }
  ];

  let subtotal: number = 529.97;
  let tax: number = 42.40;
  let shipping: number = 9.99;
  let total: number = 582.36;

  const handleComplete = () => {
    console.log('Checkout completed!');
  };

  const handleError = (error: string) => {
    console.log('Checkout error:', error);
  };
</script>

<Story
  id="organisms-checkout-form"
  title="Organisms / Interaction / Commerce / CheckoutForm"
  component={CheckoutForm}
  category="Organisms/Interaction/Commerce"
  description="A multi-step checkout form for processing customer orders."
  controls={controls}
>
  {#snippet children(args)}
    <section class="sb-organisms-checkout-form">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm max-w-6xl mx-auto">
        <CheckoutForm
          cartItems={cartItems}
          subtotal={subtotal}
          tax={tax}
          shipping={shipping}
          total={total}
          showProgress={args.showProgress as boolean}
          currency={args.currency as string}
          locale={args.locale as string}
          onComplete={handleComplete}
          onError={handleError}
        />
      </div>
    </section>
  {/snippet}
</Story>





