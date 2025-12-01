<script lang="ts">
  import CrossSell from './CrossSell.svelte';

  let mainProduct = {
    id: 'prod1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30hr battery life',
    price: 199.99,
    originalPrice: 249.99,
    thumbnail: 'https://placehold.co/200x200',
    rating: 4.5,
    reviewCount: 124,
    inStock: true,
    isRecommended: true,
    category: 'Electronics',
    discountPercent: 20,
    tags: ['audio', 'wireless']
  };

  let crossSellProducts = [
    {
      id: 'prod2',
      name: 'Phone Case',
      description: 'Durable protective case for your smartphone',
      price: 24.99,
      thumbnail: 'https://placehold.co/200x200',
      rating: 4.2,
      reviewCount: 89,
      inStock: true,
      category: 'Accessories',
      discountPercent: 10
    },
    {
      id: 'prod3',
      name: 'Screen Protector',
      description: 'Tempered glass screen protector for your device',
      price: 14.99,
      originalPrice: 19.99,
      thumbnail: 'https://placehold.co/200x200',
      rating: 4.0,
      reviewCount: 67,
      inStock: true,
      category: 'Accessories'
    },
    {
      id: 'prod4',
      name: 'Wireless Charger',
      description: 'Fast wireless charging pad compatible with all devices',
      price: 39.99,
      thumbnail: 'https://placehold.co/200x200',
      rating: 4.7,
      reviewCount: 142,
      inStock: false,
      category: 'Electronics'
    }
  ];

  let title: string = 'Frequently bought together';
  let description: string = 'Customers who bought this item also bought';
  let showDescription: boolean = true;
  let showSavings: boolean = true;
  let showBundleOption: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">CrossSell Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive CrossSell</h2>
    <CrossSell 
      {mainProduct}
      {crossSellProducts}
      {title}
      {description}
      {showDescription}
      {showSavings}
      {showBundleOption}
      onProductAddToCart={(product) => {
        console.log('Product added to cart:', product.name);
      }}
      onAddBundleToCart={(products) => {
        console.log('Bundle added to cart:', products.map(p => p.name));
      }}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="crosssell-title" class="block text-sm mb-1">Title:</label>
        <input
          id="crosssell-title"
          type="text"
          bind:value={title}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="crosssell-description" class="block text-sm mb-1">Description:</label>
        <input
          id="crosssell-description"
          type="text"
          bind:value={description}
          class="border rounded p-1 w-60"
        />
      </div>

      <div class="flex items-end">
        <label for="show-crosssell-description" class="flex items-center gap-1">
          <input id="show-crosssell-description" type="checkbox" bind:checked={showDescription} />
          Show Description
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-crosssell-savings" class="flex items-center gap-1">
          <input id="show-crosssell-savings" type="checkbox" bind:checked={showSavings} />
          Show Savings
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-crosssell-bundle" class="flex items-center gap-1">
          <input id="show-crosssell-bundle" type="checkbox" bind:checked={showBundleOption} />
          Show Bundle Option
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">CrossSell Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Without Bundle Options</h3>
        <CrossSell 
          {mainProduct}
          {crossSellProducts}
          title="Complete Your Purchase"
          showSavings={false}
          showBundleOption={false}
        />
      </div>
    </div>
  </div>
</div>