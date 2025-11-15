<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Star, Heart, ShoppingCart, Eye, RotateCcw, ShieldCheck, Image as ImageIcon, Truck } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/Badge/Badge.svelte';

  type Product = {
    id: string;
    name: string;
    description?: string;
    price: number;
    originalPrice?: number; // Used for showing discounted prices
    discountPercent?: number;
    rating?: number;
    reviewCount?: number;
    image?: string;
    category?: string;
    brand?: string;
    inStock?: boolean;
    stockCount?: number;
    isNew?: boolean;
    isFeatured?: boolean;
    isOnSale?: boolean;
    tags?: string[];
    shippingInfo?: string;
    warranty?: string;
    specifications?: Record<string, string>;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    product: Product;
    class?: string;
    cardClass?: string;
    imageClass?: string;
    contentClass?: string;
    showRating?: boolean;
    showOriginalPrice?: boolean;
    showStockStatus?: boolean;
    showQuickActions?: boolean;
    showFeaturedBadge?: boolean;
    showNewBadge?: boolean;
    showSaleBadge?: boolean;
    enableWishlist?: boolean;
    enableCompare?: boolean;
    onAddToCart?: (product: Product) => void;
    onWishlistToggle?: (product: Product, inWishlist: boolean) => void;
    onCompareToggle?: (product: Product, inCompare: boolean) => void;
    onProductClick?: (product: Product) => void;
    onQuickView?: (product: Product) => void;
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
    showOriginalPrice = true,
    showStockStatus = true,
    showQuickActions = true,
    showFeaturedBadge = true,
    showNewBadge = true,
    showSaleBadge = true,
    enableWishlist = true,
    enableCompare = true,
    onAddToCart,
    onWishlistToggle,
    onCompareToggle,
    onProductClick,
    onQuickView,
    currency = '$',
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

  function handleCompareToggle() {
    isInCompare = !isInCompare;
    onCompareToggle?.(product, isInCompare);
  }

  function handleProductClick() {
    onProductClick?.(product);
  }

  function handleQuickView() {
    onQuickView?.(product);
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

<div class={`product-card border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${hostClass}`} {...restProps}>
  <div class={`relative ${cardClass}`}>
    <!-- Product image -->
    <button
      type="button"
      class="group relative aspect-square bg-gray-100 cursor-pointer w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-primary-500]"
      aria-label={`View product ${product.name}`}
      onclick={handleProductClick}
    >
      {#if product.image}
        <img
          src={product.image}
          alt={product.name}
          class={`w-full h-full object-cover ${imageClass}`}
        />
      {:else}
        <div class="w-full h-full flex items-center justify-center bg-gray-100">
          <div class="text-gray-400">
            <ImageIcon class="h-12 w-12" />
          </div>
        </div>
      {/if}

      <!-- Badges -->
      <div class="absolute top-2 left-2 flex flex-wrap gap-1">
        {#if showNewBadge && product.isNew}
          <Badge variant="success" class="text-xs">New</Badge>
        {/if}
        {#if showFeaturedBadge && product.isFeatured}
          <Badge variant="info" class="text-xs">Featured</Badge>
        {/if}
        {#if showSaleBadge && product.isOnSale && discountPercentage > 0}
          <Badge variant="warning" class="text-xs">-{discountPercentage}%</Badge>
        {/if}
      </div>

      <!-- Stock status -->
      {#if showStockStatus}
        {#if !product.inStock || (product.stockCount !== undefined && product.stockCount < 5)}
          <div class="absolute top-2 right-2">
            <Badge variant="warning" class="text-xs">Low Stock</Badge>
          </div>
        {:else if !product.inStock}
          <div class="absolute top-2 right-2">
            <Badge variant="default" class="text-xs">Out of Stock</Badge>
          </div>
        {/if}
      {/if}

      <!-- Quick actions -->
      {#if showQuickActions}
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col space-y-2">
          <Button
            variant="secondary"
            size="sm"
            class="rounded-full p-2"
            onclick={handleQuickView}
            aria-label="Quick view"
          >
            <Eye class="h-4 w-4" />
          </Button>
          {#if enableWishlist}
            <Button
              variant="secondary"
              size="sm"
              class="rounded-full p-2"
              onclick={handleWishlistToggle}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart class={`h-4 w-4 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
            </Button>
          {/if}
          {#if enableCompare}
            <Button
              variant="secondary"
              size="sm"
              class="rounded-full p-2"
              onclick={handleCompareToggle}
              aria-label={isInCompare ? "Remove from comparison" : "Add to comparison"}
            >
              <RotateCcw class={`h-4 w-4 ${isInCompare ? 'text-blue-500' : ''}`} />
            </Button>
          {/if}
        </div>
      {/if}
    </button>

    <!-- Product content -->
    <div class={`p-4 ${contentClass}`}>
      {#if product.category}
        <p class="text-xs text-gray-500 mb-1">{product.category}</p>
      {/if}

      <h3 class="font-medium text-gray-900 line-clamp-2">
        <button
          type="button"
          class="w-full text-left font-medium text-gray-900 line-clamp-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--color-primary-500]"
          aria-label={`Open product page for ${product.name}`}
          onclick={handleProductClick}
        >
          {product.name}
        </button>
      </h3>

      {#if product.description}
        <p class="text-sm text-gray-500 mt-1 line-clamp-2">{product.description}</p>
      {/if}

      <!-- Rating -->
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

      <!-- Price -->
      <div class="mt-3 flex items-center">
        <span class="text-lg font-medium text-gray-900">{formattedPrice}</span>
        {#if showOriginalPrice && product.originalPrice && product.originalPrice > product.price}
          <span class="ml-2 text-sm text-gray-500 line-through">{formattedOriginalPrice}</span>
        {/if}
      </div>

      <!-- Actions -->
      <div class="mt-4 flex space-x-2">
        <Button
          variant="primary"
          size="sm"
          class="flex-1"
          onclick={handleAddToCart}
        >
          <ShoppingCart class="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        {#if enableWishlist}
          <Button
            variant="ghost"
            size="sm"
            onclick={handleWishlistToggle}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart class={`h-4 w-4 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
          </Button>
        {/if}
      </div>

      <!-- Additional info -->
      <div class="mt-3 flex flex-wrap gap-2 text-xs text-gray-500">
        {#if product.shippingInfo}
          <div class="flex items-center">
            <Truck class="h-3 w-3 mr-1" aria-hidden="true" />
            {product.shippingInfo}
          </div>
        {/if}
        {#if product.warranty}
          <div class="flex items-center">
            <ShieldCheck class="h-3 w-3 mr-1" />
            {product.warranty}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
