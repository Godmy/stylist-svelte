<script lang="ts">
  import CartSummary from './CartSummary.svelte';

  let items = [
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 129.99,
      quantity: 1,
      thumbnail: 'https://placehold.co/100x100',
      inStock: true
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 199.99,
      quantity: 2,
      originalPrice: 249.99,
      discountPercent: 20,
      thumbnail: 'https://placehold.co/100x100',
      inStock: true
    }
  ];

  let shippingCost: number = 9.99;
  let taxCost: number = 12.50;
  let discountAmount: number = 0;
  let showPromoCode: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CartSummary Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CartSummary</h2>
    <CartSummary 
      {items}
      {shippingCost}
      {taxCost}
      {discountAmount}
      {showPromoCode}
    />
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Cart Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Empty Cart</h3>
        <CartSummary 
          items={[]}
          shippingCost={9.99}
          taxCost={5.00}
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Cart with Promotions</h3>
        <CartSummary 
          {items}
          shippingCost={0}
          taxCost={10.00}
          discountAmount={25.00}
          showPromoCode={true}
          promotions={[
            {
              id: 'promo1',
              code: 'SAVE20',
              description: 'Save 20% on all items',
              discountType: 'percentage',
              discountValue: 20,
              applied: true
            }
          ]}
        />
      </div>
    </div>
  </div>
</div>