<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ArrowUpRight, DollarSign, BadgePercent, Star, Package } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

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
    currentProduct: Product;
    upsellProducts: Product[];
    title?: string;
    description?: string;
    maxProducts?: number;
    showSavings?: boolean;
    showReason?: boolean;
    class?: string;
    headerClass?: string;
    productListClass?: string;
    productCardClass?: string;
    onProductUpgrade?: (product: Product) => void;
    onProductAddToCart?: (product: Product) => void;
    currency?: string;
    locale?: string;
  };

  let {
    currentProduct,
    upsellProducts = [],
    title = 'You might upgrade to',
    description = 'Consider these premium options',
    maxProducts = 3,
    showSavings = true,
    showReason = true,
    class: hostClass = '',
    headerClass = '',
    productListClass = '',
    productCardClass = '',
    onProductUpgrade,
    onProductAddToCart,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let displayedProducts = $derived(upsellProducts.slice(0, maxProducts));

  function handleUpgrade(product: Product) {
    onProductUpgrade?.(product);
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

  function calculateSavings(baseProduct: Product, upgradeProduct: Product): number {
    return (upgradeProduct.originalPrice || upgradeProduct.price) - baseProduct.price;
  }

  let savings = $derived.by(() => {
    if (displayedProducts.length > 0) {
      const upgradeProduct = displayedProducts[0]; // Consider the first upsell product
      return calculateSavings(currentProduct, upgradeProduct);
    }
    return 0;
  });
</script>

<div class={`c-upsell ${hostClass}`} {...restProps}>
  <div class={`p-6 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 ${headerClass}`}>
    <div class="flex items-center">
      <div class="p-2 bg-blue-100 rounded-lg">
        <ArrowUpRight class="h-6 w-6 text-blue-600" />
      </div>
      <div class="ml-4">
        <h2 class="text-lg font-bold text-gray-900">{title}</h2>
        {#if description}
          <p class="mt-1 text-sm text-gray-600">{description}</p>
        {/if}

        {#if showSavings && savings > 0}
          <div class="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <DollarSign class="h-4 w-4 mr-1" />
            Save {formatPrice(savings)} with upgrade
          </div>
        {/if}
      </div>
    </div>
  </div>

  {#if displayedProducts.length > 0}
    <div class={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ${productListClass}`}>
      {#each displayedProducts as product}
        <div class={`border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow ${productCardClass}`}>
          {#if product.thumbnail}
            <div class="h-48 bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.name}
                class="w-full h-full object-cover"
              />
            </div>
          {/if}

          <div class="p-4">
            <div class="flex justify-between items-start">
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-medium text-gray-900 truncate">{product.name}</h3>

                {#if product.rating !== undefined}
                  <div class="flex items-center mt-1">
                    <div class="flex">
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
                    </div>
                    {#if product.reviewCount}
                      <span class="ml-1 text-sm text-gray-500">({product.reviewCount})</span>
                    {/if}
                  </div>
                {/if}

                <p class="mt-2 text-sm text-gray-500 line-clamp-2">{product.description}</p>

                <div class="mt-4 flex items-center justify-between">
                  <div>
                    <span class="text-lg font-bold text-gray-900">{formatPrice(product.price)}</span>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <span class="ml-2 text-base text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      {#if product.discountPercent}
                        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <BadgePercent class="h-3 w-3 mr-1" />
                          {product.discountPercent}% OFF
                        </span>
                      {/if}
                    {/if}
                  </div>

                  <Button
                    variant="primary"
                    onclick={() => handleUpgrade(product)}
                  >
                    Upgrade
                  </Button>
                </div>
              </div>
            </div>

            {#if product.tags && product.tags.length > 0}
              <div class="mt-3 flex flex-wrap gap-1">
                {#each product.tags as tag}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}

  {#if displayedProducts.length === 0}
    <div class="mt-6 text-center py-12 border rounded-lg">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
        <ArrowUpRight class="h-6 w-6 text-gray-400" />
      </div>
      <h3 class="mt-2 text-sm font-medium text-gray-900">No upgrade options available</h3>
      <p class="mt-1 text-sm text-gray-500">We don't have any upgrade suggestions at this time.</p>
    </div>
  {/if}
</div>

