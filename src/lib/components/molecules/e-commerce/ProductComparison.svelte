<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, ArrowLeftRight, Check, X as XIcon, Star } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/badge/Badge.svelte';

  type ProductFeature = {
    name: string;
    value: string | boolean;
    comparison?: 'better' | 'worse' | 'same'; // For indicating relative comparison
  };

  type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    features: ProductFeature[];
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    discountPercent?: number;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    class?: string;
    headerClass?: string;
    featureClass?: string;
    showRemoveButton?: boolean;
    onProductRemove?: (productId: string) => void;
    onCompare?: (products: Product[]) => void;
    currency?: string;
    locale?: string;
  };

  let {
    products = [],
    class: hostClass = '',
    headerClass = '',
    featureClass = '',
    showRemoveButton = true,
    onProductRemove,
    onCompare,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  function removeProduct(productId: string) {
    onProductRemove?.(productId);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  // Get all unique features from all products
  let allFeatures = $derived.by(() => {
    const features = new Set<string>();
    for (const product of products) {
      for (const feature of product.features) {
        features.add(feature.name);
      }
    }
    return Array.from(features);
  });

  function getFeatureValue(productId: string, featureName: string): string | boolean | undefined {
    const product = products.find(p => p.id === productId);
    if (!product) return undefined;
    
    const feature = product.features.find(f => f.name === featureName);
    return feature?.value;
  }

  function compareFeatures(featureName: string, product1: Product, product2: Product): 'better' | 'worse' | 'same' | undefined {
    if (!product1 || !product2) return undefined;
    
    const value1 = product1.features.find(f => f.name === featureName)?.value;
    const value2 = product2.features.find(f => f.name === featureName)?.value;
    
    // If both products have the same value, mark as 'same'
    if (value1 === value2) return 'same';
    
    // For numeric values, we could implement comparison logic based on feature type
    // For now, just return undefined for differences
    return undefined;
  }

  let formattedProducts = $derived.by(() => products.map(product => ({
    ...product,
    formattedPrice: formatPrice(product.price),
    formattedOriginalPrice: product.originalPrice ? formatPrice(product.originalPrice) : undefined,
    discountPercentage: product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : undefined
  })));
</script>

<div class={`product-comparison ${hostClass}`} {...restProps}>
  {#if products.length < 2}
    <div class="text-center py-12">
      <ArrowLeftRight class="h-12 w-12 text-gray-400 mx-auto" />
      <h3 class="mt-4 text-lg font-medium text-gray-900">Product Comparison</h3>
      <p class="mt-2 text-gray-500">
        Add at least 2 products to compare their features
      </p>
    </div>
  {:else}
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" class={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${headerClass}`}>
              Features
            </th>
            {#each products as product, index}
              {@const formattedProduct = formattedProducts[index]}
              <th scope="col" class="px-6 py-3 text-center">
                <div class="relative">
                  {#if showRemoveButton}
                    <button
                      type="button"
                      class="absolute top-0 right-0 -mt-2 -mr-2 h-6 w-6 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onclick={() => removeProduct(product.id)}
                      aria-label={`Remove ${product.name} from comparison`}
                    >
                      <X class="h-4 w-4" />
                    </button>
                  {/if}
                  <div class="text-center">
                    {#if product.thumbnail}
                      <img 
                        src={product.thumbnail} 
                        alt={product.name} 
                        class="mx-auto h-16 w-16 object-contain mb-2"
                      />
                    {/if}
                    <h3 class="text-sm font-medium text-gray-900">{product.name}</h3>
                    <div class="mt-2">
                      {#if formattedProduct.discountPercentage && formattedProduct.discountPercentage > 0}
                        <div class="flex items-center justify-center">
                          <span class="text-lg font-bold text-gray-900">{formattedProduct.formattedPrice}</span>
                          <Badge variant="warning" class="ml-2">-{formattedProduct.discountPercentage}%</Badge>
                        </div>
                        <p class="text-sm text-gray-500 line-through">{formattedProduct.formattedOriginalPrice}</p>
                      {:else}
                        <p class="text-lg font-bold text-gray-900">{formattedProduct.formattedPrice}</p>
                      {/if}
                    </div>
                    {#if product.rating !== undefined}
                      <div class="mt-2 flex justify-center">
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
                        <span class="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
                      </div>
                    {/if}
                  </div>
                </div>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          {#each allFeatures as featureName}
            <tr class={`hover:bg-gray-50 ${featureClass}`}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {featureName}
              </td>
              {#each products as product}
                {@const featureValue = getFeatureValue(product.id, featureName)}
                {@const comparison = compareFeatures(featureName, product, products[0])}
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                  {#if typeof featureValue === 'boolean'}
                    {#if featureValue}
                      <Check class="h-5 w-5 text-green-500 mx-auto" />
                    {:else}
                      <XIcon class="h-5 w-5 text-red-500 mx-auto" />
                    {/if}
                  {:else if featureValue !== undefined}
                    <span class={comparison === 'better' ? 'text-green-600 font-medium' : 
                                comparison === 'worse' ? 'text-red-600 font-medium' : 
                                ''}>
                      {featureValue}
                    </span>
                  {:else}
                    <span class="text-gray-300">-</span>
                  {/if}
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
        
        <!-- Summary row -->
        <tfoot class="bg-gray-50">
          <tr>
            <td class="px-6 py-3 text-sm font-medium text-gray-900">Summary</td>
            {#each products as product}
              <td class="px-6 py-3 text-center">
                <Button 
                  variant="primary" 
                  onclick={() => onCompare?.([product])}
                >
                  Select
                </Button>
              </td>
            {/each}
          </tr>
        </tfoot>
      </table>
    </div>
  {/if}
</div>



