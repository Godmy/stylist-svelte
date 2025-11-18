<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Star, Heart, ShoppingCart, Share, MoreHorizontal, Image as ImageIcon, GitCompare, Eye } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/badge/Badge.svelte';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number;
    discountPercent?: number;
    rating?: number;
    reviewCount?: number;
    thumbnail?: string;
    inStock?: boolean;
    stockCount?: number;
    isFeatured?: boolean;
    isOnSale?: boolean;
    isNew?: boolean;
    category?: string;
    brand?: string;
    tags?: string[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    product: Product;
    class?: string;
    cardClass?: string;
    imageClass?: string;
    contentClass?: string;
    actionClass?: string;
    showRating?: boolean;
    showDescription?: boolean;
    showAddToCart?: boolean;
    showWishlist?: boolean;
    showShare?: boolean;
    showActionsMenu?: boolean;
    enableQuickView?: boolean;
    enableCompare?: boolean;
    onAddToCart?: (product: Product) => void;
    onWishlistToggle?: (product: Product, inWishlist: boolean) => void;
    onQuickView?: (product: Product) => void;
    onCompareToggle?: (product: Product, inCompare: boolean) => void;
    onShare?: (product: Product) => void;
    onMoreOptions?: (product: Product) => void;
    currency?: string;
    locale?: string;
  };

  let {
    product,
    class: hostClass = '',
    cardClass = '',
    imageClass = '',
    contentClass = '',
    actionClass = '',
    showRating = true,
    showDescription = true,
    showAddToCart = true,
    showWishlist = true,
    showShare = true,
    showActionsMenu = true,
    enableQuickView = true,
    enableCompare = true,
    onAddToCart,
    onWishlistToggle,
    onQuickView,
    onCompareToggle,
    onShare,
    onMoreOptions,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let isInWishlist = $state(false);
  let isInCompare = $state(false);

  function handleAddToCart() {
    onAddToCart?.(product);
  }

  function handleWishlistToggle() {
    isInWishlist = !isInWishlist;
    onWishlistToggle?.(product, isInWishlist);
  }

  function handleQuickView() {
    onQuickView?.(product);
  }

  function handleCompareToggle() {
    isInCompare = !isInCompare;
    onCompareToggle?.(product, isInCompare);
  }

  function handleShare() {
    onShare?.(product);
  }

  function handleMoreOptions() {
    onMoreOptions?.(product);
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

<div class={`product-card-with-actions rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow ${hostClass}`} {...restProps}>
  <!-- Product image -->
  <div class="relative">
    <div class="aspect-square bg-gray-100">
      {#if product.thumbnail}
        <img 
          src={product.thumbnail} 
          alt={product.name} 
          class={`w-full h-full object-cover ${imageClass}`}
        />
      {:else}
        <div class="w-full h-full flex items-center justify-center text-gray-400">
          <ImageIcon class="h-12 w-12" />
        </div>
      {/if}
    </div>
    
    <!-- Badges -->
    <div class="absolute top-2 left-2 flex flex-wrap gap-1">
      {#if product.isNew}
        <Badge variant="success">New</Badge>
      {/if}
      {#if product.isFeatured}
        <Badge variant="info">Featured</Badge>
      {/if}
      {#if product.isOnSale}
        <Badge variant="warning">Sale</Badge>
      {/if}
      {#if discountPercentage > 0}
        <Badge variant="warning">{discountPercentage}% OFF</Badge>
      {/if}
    </div>
    
    <!-- Actions -->
    <div class="absolute top-2 right-2 flex flex-col gap-2">
      {#if showWishlist}
        <button
          type="button"
          class={`p-2 rounded-full shadow-md ${
            isInWishlist 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          onclick={handleWishlistToggle}
        >
          <Heart class={`h-4 w-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>
      {/if}
      
      {#if showShare}
        <button
          type="button"
          class="p-2 rounded-full shadow-md bg-white text-gray-700 hover:bg-gray-100"
          aria-label="Share product"
          onclick={handleShare}
        >
          <Share class="h-4 w-4" />
        </button>
      {/if}
      
      {#if showActionsMenu}
        <button
          type="button"
          class="p-2 rounded-full shadow-md bg-white text-gray-700 hover:bg-gray-100"
          aria-label="More options"
          onclick={handleMoreOptions}
        >
          <MoreHorizontal class="h-4 w-4" />
        </button>
      {/if}
    </div>
  </div>
  
  <!-- Product content -->
  <div class={`p-4 ${contentClass}`}>
    {#if product.category}
      <p class="text-xs text-gray-500 mb-1">{product.category}</p>
    {/if}
    
    <h3 class="font-medium text-gray-900 line-clamp-2">{product.name}</h3>
    
    {#if showDescription && product.description}
      <p class="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
    {/if}
    
    {#if showRating && product.rating !== undefined}
      <div class="flex items-center mt-2">
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
          <span class="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
        {/if}
      </div>
    {/if}
    
    <!-- Pricing -->
    <div class="mt-3 flex items-center">
      <span class="text-lg font-medium text-gray-900">{formattedPrice}</span>
      {#if formattedOriginalPrice}
        <span class="ml-2 text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
      {/if}
    </div>
    
    <!-- Stock status -->
    {#if product.stockCount !== undefined}
      <p class="mt-2 text-xs text-gray-500">
        {product.inStock 
          ? product.stockCount > 5 
            ? 'In stock' 
            : `Only ${product.stockCount} left` 
          : 'Out of stock'}
      </p>
    {:else if !product.inStock}
      <p class="mt-2 text-xs text-red-600">Out of stock</p>
    {/if}
  </div>
  
  <!-- Action buttons -->
  <div class={`p-4 pt-0 ${actionClass}`}>
    <div class="flex space-x-2">
      {#if showAddToCart}
        <Button 
          variant="primary" 
          class="flex-1"
          onclick={handleAddToCart}
          disabled={!product.inStock}
        >
          <ShoppingCart class="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      {/if}
      
      {#if enableCompare}
        <button
          type="button"
          class={`p-2 rounded-md ${
            isInCompare 
              ? 'text-blue-600 bg-blue-50' 
              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
          }`}
          aria-label={isInCompare ? "Remove from compare" : "Add to compare"}
          onclick={handleCompareToggle}
        >
          <GitCompare class="h-4 w-4" />
        </button>
      {/if}
      
      {#if enableQuickView}
        <button
          type="button"
          class="p-2 rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
          aria-label="Quick view"
          onclick={handleQuickView}
        >
          <Eye class="h-4 w-4" />
        </button>
      {/if}
    </div>
  </div>
</div>
