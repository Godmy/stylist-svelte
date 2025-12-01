<script lang="ts">
  import CheckoutForm from './CheckoutForm.svelte';

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
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CheckoutForm Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CheckoutForm</h2>
    <CheckoutForm 
      {cartItems}
      {subtotal}
      {tax}
      {shipping}
      {total}
    />
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CheckoutForm Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Different Currency</h3>
        <CheckoutForm 
          {cartItems}
          subtotal={250.00}
          tax={20.00}
          shipping={5.99}
          total={275.99}
          currency="EUR"
          locale="de-DE"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">With Custom Shipping Options</h3>
        <CheckoutForm 
          {cartItems}
          subtotal={300.00}
          tax={24.00}
          shipping={14.99}
          total={338.99}
          shippingOptions={[
            { id: 'standard', name: 'Standard', description: '7-10 business days', price: 5.99, estimatedDays: 10 },
            { id: 'express', name: 'Express', description: '2-3 business days', price: 14.99, estimatedDays: 3 },
            { id: 'overnight', name: 'Overnight', description: 'Next day', price: 24.99, estimatedDays: 1 }
          ]}
        />
      </div>
    </div>
  </div>
</div>