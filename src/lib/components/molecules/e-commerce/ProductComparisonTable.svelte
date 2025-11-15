<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, Check, ShoppingCart, Star, Copy, ArrowUpDown, Equal, Minus } from 'lucide-svelte';
  import { GitCompare as Compare } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/Badge/Badge.svelte';

  type ProductFeature = {
    name: string;
    value: string | number | boolean;
  };

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    features: ProductFeature[];
    inStock?: boolean;
    isBestValue?: boolean;
    isNew?: boolean;
    category?: string;
    tags?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    maxProducts?: number;
    showDescription?: boolean;
    showFeatures?: boolean;
    showAddToCart?: boolean;
    autoAdjustColumns?: boolean;
    class?: string;
    tableClass?: string;
    headerClass?: string;
    featureClass?: string;
    onProductAddToCart?: (product: Product) => void;
    onProductRemove?: (productId: string) => void;
    currency?: string;
    locale?: string;
  };

  let {
    products = [],
    maxProducts = 4,
    showDescription = true,
    showFeatures = true,
    showAddToCart = true,
    autoAdjustColumns = true,
    class: hostClass = '',
    tableClass = '',
    headerClass = '',
    featureClass = '',
    onProductAddToCart,
    onProductRemove,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let selectedProducts = $state<Product[]>([]);

  $effect(() => {
    // Limit the number of selected products
    if (selectedProducts.length > maxProducts) {
      selectedProducts = selectedProducts.slice(0, maxProducts);
    }
  });

  function addToComparison(product: Product) {
    if (selectedProducts.length >= maxProducts) {
      // Remove the first item and add the new one
      selectedProducts = [...selectedProducts.slice(1), product];
    } else if (!selectedProducts.find(p => p.id === product.id)) {
      selectedProducts = [...selectedProducts, product];
    }
  }

  function removeFromComparison(productId: string) {
    selectedProducts = selectedProducts.filter(p => p.id !== productId);
    onProductRemove?.(productId);
  }

  function handleAddToCart(product: Product) {
    onProductAddToCart?.(product);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  // Get all unique feature names across selected products
  let allFeatureNames = $derived.by(() => {
    const names = new Set<string>();
    for (const product of selectedProducts) {
      for (const feature of product.features) {
        names.add(feature.name);
      }
    }
    return Array.from(names);
  });

  let columnClass = $derived.by(() => {
    if (!autoAdjustColumns) return '';

    switch (selectedProducts.length) {
      case 1: return 'grid-cols-2';
      case 2: return 'grid-cols-3';
      case 3: return 'grid-cols-4';
      case 4: return 'grid-cols-5';
      default: return 'grid-cols-2';
    }
  });

  function isValueEqualAcrossProducts(featureName: string): boolean {
    if (selectedProducts.length < 2) return false;

    const firstValue = selectedProducts[0].features.find(f => f.name === featureName)?.value;
    return selectedProducts.every(p => {
      const value = p.features.find(f => f.name === featureName)?.value;
      return value === firstValue;
    });
  }

  function getFeatureValue(productId: string, featureName: string): string | number | boolean | undefined {
    const product = selectedProducts.find(p => p.id === productId);
    if (!product) return undefined;

    const feature = product.features.find(f => f.name === featureName);
    return feature?.value;
  }

  function getDifferenceIndicator(value: any, referenceValue: any): string {
    if (typeof value === 'number' && typeof referenceValue === 'number') {
      if (value > referenceValue) return 'higher';
      if (value < referenceValue) return 'lower';
      return 'equal';
    }
    return value === referenceValue ? 'equal' : 'different';
  }
</script>

<div class={`product-comparison ${hostClass}`} {...restProps}>
  <div class="mb-6">
    <div class="flex items-center">
      <Compare class="h-6 w-6 text-blue-500 mr-2" />
      <h2 class="text-xl font-bold text-gray-900">Product Comparison</h2>
    </div>
    <p class="mt-1 text-gray-600">Compare features and specifications side-by-side</p>
  </div>

  {#if selectedProducts.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <Compare class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">No products selected</h3>
      <p class="mt-1 text-sm text-gray-500">Add products to compare their features.</p>
    </div>
  {:else}
    <div class={`grid ${columnClass} gap-6 ${tableClass}`}>
      <!-- Header row with product info -->
      <div class="p-4 border rounded-lg bg-gray-50 font-medium text-gray-900">Features</div>

      {#each selectedProducts as product}
        <div class="p-4 border rounded-lg bg-gray-50">
          <div class="flex justify-between items-start">
            <div>
              <h3 class="font-medium text-gray-900">{product.name}</h3>
              {#if showDescription && product.description}
                <p class="mt-1 text-sm text-gray-500 truncate">{product.description}</p>
              {/if}

              <div class="mt-2">
                <span class="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                {#if product.originalPrice && product.originalPrice > product.price}
                  <span class="ml-2 text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                {/if}
              </div>

              {#if product.rating !== undefined}
                <div class="mt-1 flex items-center">
                  {#each Array(5) as _, i}
                    <Star
                      class={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : (i === Math.floor(product.rating) && product.rating % 1 >= 0.5
                            ? 'text-yellow-400'
                            : 'text-gray-300')
                      }`}
                    />
                  {/each}
                  {#if product.reviewCount}
                    <span class="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                  {/if}
                </div>
              {/if}

              {#if product.tags && product.tags.length > 0}
                <div class="mt-2 flex flex-wrap gap-1">
                  {#each product.tags as tag}
                    <Badge variant="default" class="text-xs">{tag}</Badge>
                  {/each}
                </div>
              {/if}

              {#if product.isBestValue}
                <div class="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Best Value
                </div>
              {/if}
            </div>

            <button
              type="button"
              class="text-gray-400 hover:text-gray-500"
              onclick={() => removeFromComparison(product.id)}
              aria-label={`Remove ${product.name} from comparison`}
            >
              <X class="h-5 w-5" />
            </button>
          </div>

          {#if showAddToCart}
            <div class="mt-4">
              <Button
                variant="primary"
                class="w-full"
                onclick={() => handleAddToCart(product)}
                disabled={!product.inStock}
              >
                <ShoppingCart class="h-4 w-4 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>
          {/if}
        </div>
      {/each}

      <!-- Feature rows -->
      {#if showFeatures}
        {#each allFeatureNames as featureName}
          <div class={`p-3 border rounded-lg ${featureClass}`}>
            <span class="font-medium text-gray-700">{featureName}</span>
          </div>

          {#each selectedProducts as product}
            {@const value = getFeatureValue(product.id, featureName)}
            <div class={`p-3 border rounded-lg ${
              isValueEqualAcrossProducts(featureName)
                ? 'bg-gray-50'
                : 'bg-white'
            }`}>
              {#if typeof value === 'boolean'}
                {#if value}
                  <Check class="h-5 w-5 text-green-500" />
                {:else}
                  <X class="h-5 w-5 text-red-500" />
                {/if}
              {:else}
                <span>{value ?? ''}</span>
              {/if}
            </div>
          {/each}
        {/each}
      {/if}
    </div>
  {/if}

  <!-- Action button to add more products -->
  <div class="mt-6">
    <Button
      variant="ghost"
      onclick={() => {}}
      disabled={selectedProducts.length >= maxProducts}
    >
      Add Product to Compare
    </Button>
  </div>
</div>





