<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Tag, ShoppingCart, Plus, Minus, Image as ImageIcon, Check } from 'lucide-svelte';
  import ProductCard from './ProductCard.svelte';
  import { Button } from '$lib/components/atoms';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isRecommended?: boolean;
    category?: string;
    discountPercent?: number;
    tags?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    mainProduct: Product;
    crossSellProducts: Product[];
    title?: string;
    description?: string;
    maxProducts?: number;
    showDescription?: boolean;
    showSavings?: boolean;
    showBundleOption?: boolean;
    class?: string;
    headerClass?: string;
    productListClass?: string;
    productCardClass?: string;
    onProductAddToCart?: (product: Product) => void;
    onAddBundleToCart?: (products: Product[]) => void;
    currency?: string;
    locale?: string;
  };

  let {
    mainProduct,
    crossSellProducts = [],
    title = 'Frequently bought together',
    description = 'Customers who bought this item also bought',
    maxProducts = 3,
    showDescription = true,
    showSavings = true,
    showBundleOption = true,
    class: hostClass = '',
    headerClass = '',
    productListClass = '',
    productCardClass = '',
    onProductAddToCart,
    onAddBundleToCart,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let selectedProducts = $state<Product[]>([mainProduct]);
  
  $effect(() => {
    // Reset selected products when main product changes
    selectedProducts = [mainProduct];
  });

  let displayedProducts = $derived(crossSellProducts.slice(0, maxProducts));

  function handleProductAdd(product: Product) {
    // Add to selected products if not already added
    if (!selectedProducts.some(p => p.id === product.id)) {
      selectedProducts = [...selectedProducts, product];
    }
    
    onProductAddToCart?.(product);
  }

  function handleProductRemove(product: Product) {
    // Remove from selected products
    selectedProducts = selectedProducts.filter(p => p.id !== product.id);
  }

  function handleAddBundleToCart() {
    onAddBundleToCart?.(selectedProducts);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  let bundlePrice = $derived(selectedProducts.reduce((sum, product) => sum + product.price, 0));
  let originalBundlePrice = $derived(selectedProducts.reduce((sum, product) => 
    sum + (product.originalPrice || product.price), 0));
  let totalSaved = $derived(originalBundlePrice - bundlePrice);
  
  let hasSavings = $derived(totalSaved > 0);
</script>

<div class={`cross-sell ${hostClass}`} {...restProps}>
  <div class={`border rounded-lg p-6 mb-6 ${headerClass}`}>
    <div class="flex items-start">
      <Tag class="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
      <div class="ml-3">
        <h2 class="text-lg font-medium text-gray-900">{title}</h2>
        {#if showDescription}
          <p class="mt-1 text-sm text-gray-500">{description}</p>
        {/if}
        
        {#if showSavings && hasSavings}
          <div class="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span>You save {formatPrice(totalSaved)}</span>
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Main product -->
    <div class="lg:col-span-1">
      <div class="border rounded-lg p-4 bg-gray-50">
        <h3 class="text-sm font-medium text-gray-900 mb-2">Main product</h3>
        <ProductCard 
          product={mainProduct}
          class={productCardClass}
          onAddToCart={() => handleProductAdd(mainProduct)}
        />
        <div class="mt-3 flex items-center">
          <span class="text-sm font-medium text-gray-900">Selected</span>
          <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Check class="h-3 w-3 mr-1" />
            Included
          </span>
        </div>
      </div>
    </div>
    
    <!-- Cross-sell products -->
    <div class="lg:col-span-3">
      <h3 class="text-sm font-medium text-gray-900 mb-2">Recommended items</h3>
      
      {#if crossSellProducts.length === 0}
        <div class="text-center py-8 border-2 border-dashed rounded-lg">
          <ShoppingCart class="h-12 w-12 text-gray-400 mx-auto" />
          <p class="mt-2 text-sm text-gray-500">No recommended products available</p>
        </div>
      {:else}
        <div class={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${productListClass}`}>
          {#each displayedProducts as product}
            <div class="border rounded-lg p-4 flex items-start">
              <div class="flex-shrink-0">
                {#if product.thumbnail}
                  <img 
                    src={product.thumbnail} 
                    alt={product.name} 
                    class="h-16 w-16 rounded-md object-cover"
                  />
                {:else}
                  <div class="h-16 w-16 rounded-md bg-gray-200 flex items-center justify-center">
                    <ImageIcon class="h-8 w-8 text-gray-400" />
                  </div>
                {/if}
              </div>
              
              <div class="ml-4 flex-1">
                <h4 class="text-sm font-medium text-gray-900">{product.name}</h4>
                <p class="mt-1 text-sm text-gray-500 truncate">{product.description}</p>
                
                <div class="mt-2 flex items-center justify-between">
                  <div>
                    <span class="text-sm font-medium text-gray-900">{formatPrice(product.price)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class="ml-1 text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                    {/if}
                  </div>
                  
                  {#if selectedProducts.some(p => p.id === product.id)}
                    <button
                      type="button"
                      class="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      onclick={() => handleProductRemove(product)}
                    >
                      <Minus class="h-3 w-3 mr-1" />
                      Remove
                    </button>
                  {:else}
                    <button
                      type="button"
                      class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      onclick={() => handleProductAdd(product)}
                    >
                      <Plus class="h-3 w-3 mr-1" />
                      Add
                    </button>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
  
  <!-- Selected products summary -->
  <div class="mt-6 border rounded-lg p-4">
    <h3 class="text-sm font-medium text-gray-900 mb-3">Bundle Summary</h3>
    
    <div class="space-y-3">
      {#each selectedProducts as product}
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            {#if product.thumbnail}
              <img 
                src={product.thumbnail} 
                alt={product.name} 
                class="h-10 w-10 rounded-md object-cover"
              />
            {/if}
            <span class="ml-3 text-sm font-medium text-gray-900">{product.name}</span>
          </div>
          <span class="text-sm text-gray-900">{formatPrice(product.price)}</span>
        </div>
      {/each}
    </div>
    
    <div class="mt-4 pt-4 border-t border-gray-200 flex justify-between text-base font-medium text-gray-900">
      <span>Total:</span>
      <span>{formatPrice(bundlePrice)}</span>
    </div>
    
    {#if showSavings && hasSavings}
      <div class="mt-2 text-sm text-green-600 flex items-center">
        <span>You save {formatPrice(totalSaved)}!</span>
      </div>
    {/if}
    
    <div class="mt-4">
      <Button 
        variant="primary" 
        class="w-full"
        onclick={handleAddBundleToCart}
      >
        <ShoppingCart class="h-5 w-5 mr-2" />
        Add Bundle to Cart
      </Button>
    </div>
  </div>
</div>
