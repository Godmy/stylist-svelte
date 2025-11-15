<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Sparkles, ArrowRight } from 'lucide-svelte';
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
    isNew?: boolean;
    isOnSale?: boolean;
    discountPercent?: number;
    category?: string;
  };

  type RecommendationReason = {
    type: 'similar' | 'complementary' | 'popular' | 'recent' | 'trending' | 'personalized';
    text: string;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    title?: string;
    description?: string;
    reason?: RecommendationReason;
    maxProducts?: number;
    showReason?: boolean;
    showDescription?: boolean;
    class?: string;
    headerClass?: string;
    productListClass?: string;
    productCardClass?: string;
    onProductClick?: (product: Product) => void;
    onProductAddToCart?: (product: Product) => void;
    currency?: string;
    locale?: string;
  };

  let {
    products = [],
    title = 'Recommended for you',
    description,
    reason,
    maxProducts = 4,
    showReason = true,
    showDescription = true,
    class: hostClass = '',
    headerClass = '',
    productListClass = '',
    productCardClass = '',
    onProductClick,
    onProductAddToCart,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let displayedProducts = $derived(products.slice(0, maxProducts));

  function handleProductClick(product: Product) {
    onProductClick?.(product);
  }

  function handleAddToCart(product: Product) {
    onProductAddToCart?.(product);
  }

  let reasonText = $derived.by(() => {
    if (!reason) return '';
    
    switch (reason.type) {
      case 'similar':
        return 'Similar to items you viewed';
      case 'complementary':
        return 'Frequently bought together';
      case 'popular':
        return 'Popular with other customers';
      case 'recent':
        return 'Recently added';
      case 'trending':
        return 'Trending now';
      case 'personalized':
        return 'Personalized for you';
      default:
        return reason.text;
    }
  });
</script>

<div class={`product-recommendation ${hostClass}`} {...restProps}>
  <div class={`mb-6 ${headerClass}`}>
    <div class="flex items-center">
      <Sparkles class="h-5 w-5 text-yellow-500 mr-2" />
      <h2 class="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    
    {#if showDescription && description}
      <p class="mt-1 text-gray-600">{description}</p>
    {/if}
    
    {#if showReason && reason}
      <div class="mt-2 flex items-center text-sm text-blue-600">
        <span>{reasonText}</span>
      </div>
    {/if}
  </div>
  
  {#if displayedProducts.length > 0}
    <div class={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ${productListClass}`}>
      {#each displayedProducts as product}
        <ProductCard
          {product}
          class={`${productCardClass}`}
          onclick={() => handleProductClick(product)}
          onAddToCart={() => handleAddToCart(product)}
        />
      {/each}
    </div>
  {:else}
    <div class="text-center py-12">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
        <Sparkles class="h-6 w-6 text-gray-400" />
      </div>
      <h3 class="mt-2 text-sm font-medium text-gray-900">No recommendations</h3>
      <p class="mt-1 text-sm text-gray-500">
        We couldn't find any products to recommend at this time.
      </p>
    </div>
  {/if}
  
  {#if products.length > maxProducts}
    <div class="mt-8 text-center">
      <Button variant="link" class="inline-flex items-center text-blue-600 hover:text-blue-800">
        View all recommendations
        <ArrowRight class="h-4 w-4 ml-1" />
      </Button>
    </div>
  {/if}
</div>





