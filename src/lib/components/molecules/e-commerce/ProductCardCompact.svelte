<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Star, Heart, ShoppingCart, Percent, ShieldCheck, RotateCcw, Image as ImageIcon } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/Badge/Badge.svelte';

  type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    thumbnail?: string;
    rating?: number;
    reviewCount?: number;
    inStock?: boolean;
    isFeatured?: boolean;
    isOnSale?: boolean;
    isNew?: boolean;
    discountPercent?: number;
    freeShipping?: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    product: Product;
    class?: string;
    cardClass?: string;
    imageClass?: string;
    contentClass?: string;
    showRating?: boolean;
    showBadges?: boolean;
    showFreeShipping?: boolean;
    enableWishlist?: boolean;
    onAddToCart?: (product: Product) => void;
    onWishlistToggle?: (product: Product, inWishlist: boolean) => void;
    currency?: string;
    locale?: string;
  };

  let {
    product,
    class: hostClass = '',
    cardClass = '',
    imageClass = '',
    contentClass = '',
    showRating = true,
    showBadges = true,
    showFreeShipping = true,
    enableWishlist = true,
    onAddToCart,
    onWishlistToggle,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let isInWishlist = $state(false);

  function handleAddToCart() {
    onAddToCart?.(product);
  }

  function handleWishlistToggle() {
    isInWishlist = !isInWishlist;
    onWishlistToggle?.(product, isInWishlist);
  }

  function formatPrice(price: number): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(price);
  }

  let formattedPrice = $derived(formatPrice(product.price));
  let formattedOriginalPrice = $derived(product.originalPrice ? formatPrice(product.originalPrice) : '');
  let discountPercentage = $derived(product.discountPercent || (product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0));
</script>

<div class={`product-card-compact border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${hostClass}`} {...restProps}>
  <div class={`flex ${cardClass}`}>
    <!-- Product image -->
    <div class="w-1/3">
      <div class="aspect-square bg-gray-100 flex items-center justify-center">
        {#if product.thumbnail}
          <img 
            src={product.thumbnail} 
            alt={product.name} 
            class={`w-full h-full object-cover ${imageClass}`}
          />
        {:else}
          <div class="text-gray-400">
            <ImageIcon class="h-10 w-10 mx-auto" />
          </div>
        {/if}
      </div>
    </div>
    
    <!-- Product content -->
    <div class={`flex-1 p-3 ${contentClass}`}>
      <div class="flex justify-between items-start">
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-medium text-gray-900 truncate">{product.name}</h3>
          
          {#if showRating && product.rating !== undefined}
            <div class="flex items-center mt-1">
              <div class="flex">
                {#each Array(5) as _, i}
                  <Star 
                    class={`h-3.5 w-3.5 ${
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
                <span class="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
              {/if}
            </div>
          {/if}
          
          <div class="mt-2 flex items-baseline">
            <span class="text-sm font-medium text-gray-900">{formattedPrice}</span>
            {#if formattedOriginalPrice}
              <span class="ml-2 text-xs text-gray-500 line-through">{formattedOriginalPrice}</span>
            {/if}
            {#if discountPercentage > 0}
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <Percent class="h-3 w-3 mr-1" />
                {discountPercentage}% OFF
              </span>
            {/if}
          </div>
          
          {#if showFreeShipping && product.freeShipping}
            <div class="mt-1 flex items-center text-xs text-green-600">
              <ShieldCheck class="h-3 w-3 mr-1" />
              Free shipping
            </div>
          {/if}
        </div>
        
        {#if enableWishlist}
          <button
            type="button"
            class={`ml-2 flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center ${
              isInWishlist ? 'text-red-500' : 'text-gray-400 hover:text-gray-500'
            }`}
            onclick={handleWishlistToggle}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart class={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
          </button>
        {/if}
      </div>
      
      {#if showBadges}
        <div class="mt-2 flex space-x-2">
          {#if product.isNew}
            <Badge variant="success">New</Badge>
          {/if}
          {#if product.isFeatured}
            <Badge variant="info">Featured</Badge>
          {/if}
          {#if product.isOnSale && !product.discountPercent}
            <Badge variant="warning">Sale</Badge>
          {/if}
          {#if !product.inStock}
            <Badge variant="default">Out of Stock</Badge>
          {/if}
        </div>
      {/if}
      
      <div class="mt-3">
        <Button 
          variant="primary" 
          size="sm" 
          class="w-full"
          onclick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart class="h-3 w-3 mr-1" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  </div>
</div>
