<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Heart, ShoppingCart, X, Check, MoreHorizontal, Image as ImageIcon, Star } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/Badge.svelte';

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
    isOnSale?: boolean;
    discountPercent?: number;
    category?: string;
    tags?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    products: Product[];
    showActions?: boolean;
    showPrice?: boolean;
    showRating?: boolean;
    showCategory?: boolean;
    showTags?: boolean;
    enableRemove?: boolean;
    enableAddToCart?: boolean;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    footerClass?: string;
    onProductRemove?: (productId: string) => void;
    onProductAddToCart?: (product: Product) => void;
    currency?: string;
    locale?: string;
  };

  let {
    products = [],
    showActions = true,
    showPrice = true,
    showRating = true,
    showCategory = true,
    showTags = true,
    enableRemove = true,
    enableAddToCart = true,
    class: hostClass = '',
    itemClass = '',
    headerClass = '',
    footerClass = '',
    onProductRemove,
    onProductAddToCart,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  function handleRemove(productId: string) {
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

  let totalValue = $derived(products.reduce((sum, product) => sum + product.price, 0));
</script>

<div class={`product-wishlist ${hostClass}`} {...restProps}>
  <div class="flex justify-between items-center mb-6">
    <h2 class="text-xl font-bold text-gray-900">Wishlist ({products.length} items)</h2>
    {#if products.length > 0}
      <p class="text-sm font-medium text-gray-700">
        Total value: <span class="font-semibold">{formatPrice(totalValue)}</span>
      </p>
    {/if}
  </div>

  {#if products.length === 0}
    <div class="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
      <Heart class="mx-auto h-12 w-12 text-gray-400" />
      <h3 class="mt-2 text-sm font-medium text-gray-900">Your wishlist is empty</h3>
      <p class="mt-1 text-sm text-gray-500">Add items to your wishlist to save them for later.</p>
    </div>
  {:else}
    <div class="space-y-6">
      {#each products as product}
        <div class={`flex items-center border rounded-lg p-4 ${itemClass}`}>
          {#if product.thumbnail}
            <img 
              src={product.thumbnail} 
              alt={product.name} 
              class="h-24 w-24 rounded-md object-cover"
            />
          {:else}
            <div class="h-24 w-24 rounded-md bg-gray-200 flex items-center justify-center">
              <ImageIcon class="h-10 w-10 text-gray-400" />
            </div>
          {/if}
          
          <div class="ml-4 flex-1 min-w-0">
            <div class="flex justify-between">
              <div>
                <h3 class="text-lg font-medium text-gray-900 truncate">{product.name}</h3>
                
                {#if showCategory && product.category}
                  <p class="text-sm text-gray-500">{product.category}</p>
                {/if}
                
                {#if showRating && product.rating !== undefined}
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
                      <span class="ml-2 text-sm text-gray-500">({product.reviewCount})</span>
                    {/if}
                  </div>
                {/if}
                
                {#if showPrice}
                  <div class="mt-2 flex items-center">
                    <p class="text-lg font-medium text-gray-900">
                      {formatPrice(product.price)}
                    </p>
                    {#if product.originalPrice && product.originalPrice > product.price}
                      <p class="ml-2 text-sm text-gray-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </p>
                    {/if}
                    {#if product.discountPercent}
                      <Badge variant="danger" class="ml-2">-{product.discountPercent}%</Badge>
                    {/if}
                  </div>
                {/if}
                
                {#if showTags && product.tags && product.tags.length > 0}
                  <div class="mt-2 flex flex-wrap gap-1">
                    {#each product.tags as tag}
                      <Badge variant="default" class="text-xs">{tag}</Badge>
                    {/each}
                  </div>
                {/if}
              </div>
              
              {#if showActions}
                <div class="flex flex-col space-y-2 ml-4">
                  {#if enableAddToCart}
                    <Button 
                      variant="primary" 
                      size="sm"
                      onclick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart class="h-4 w-4 mr-1" />
                      {#if product.inStock}
                        Add to Cart
                      {:else}
                        Out of Stock
                      {/if}
                    </Button>
                  {/if}
                  
                  {#if enableRemove}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onclick={() => handleRemove(product.id)}
                    >
                      <X class="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
