<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Star, Heart, ShoppingCart, ShieldCheck, Eye, Share2, MoreHorizontal, CheckCircle, Image as ImageIcon } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import Badge from '../../atoms/typography/elements/badge/Badge.svelte';

  type ProductVariant = {
    id: string;
    name: string;
    additionalCost?: number;
  };

  type ProductReview = {
    id: string;
    rating: number;
    title: string;
    content: string;
    author: string;
    date: Date;
  };

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
    image?: string; // Main product image
    gallery?: string[]; // Additional images
    variants?: ProductVariant[];
    category?: string;
    brand?: string;
    inStock?: boolean;
    stockCount?: number;
    freeShipping?: boolean;
    warranty?: string;
    tags?: string[];
    features?: string[];
    specifications?: Record<string, string>;
    reviews?: ProductReview[];
    isNew?: boolean;
    isFeatured?: boolean;
    isOnSale?: boolean;
    availability?: 'in_stock' | 'low_stock' | 'out_of_stock';
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    product: Product;
    class?: string;
    cardClass?: string;
    imageClass?: string;
    contentClass?: string;
    showRating?: boolean;
    showDescription?: boolean;
    showVariants?: boolean;
    showAdditionalActions?: boolean;
    showShippingInfo?: boolean;
    showWarranty?: boolean;
    showFeatures?: boolean;
    showSpecifications?: boolean;
    enableWishlist?: boolean;
    enableShare?: boolean;
    onAddToCart?: (product: Product, quantity?: number) => void;
    onBuyNow?: (product: Product) => void;
    onWishlistToggle?: (product: Product, inWishlist: boolean) => void;
    onShare?: (product: Product) => void;
    onImageChange?: (image: string) => void;
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
    showDescription = true,
    showVariants = true,
    showAdditionalActions = true,
    showShippingInfo = true,
    showWarranty = true,
    showFeatures = false,
    showSpecifications = false,
    enableWishlist = true,
    enableShare = true,
    onAddToCart,
    onBuyNow,
    onWishlistToggle,
    onShare,
    onImageChange,
    currency = 'USD',
    locale = 'en-US',
    ...restProps
  }: Props = $props();

  let isInWishlist = $state(false);
  let selectedImage = $state(product.image || product.thumbnail || '');
  let selectedQuantity = $state(1);
  let selectedVariant = $state(product.variants?.[0]?.id || '');

  $effect(() => {
    selectedImage = product.image || product.thumbnail || '';
  });

  function handleAddToCart() {
    onAddToCart?.(product, selectedQuantity);
  }

  function handleBuyNow() {
    onBuyNow?.(product);
  }

  function handleWishlistToggle() {
    isInWishlist = !isInWishlist;
    onWishlistToggle?.(product, isInWishlist);
  }

  function handleShare() {
    onShare?.(product);
  }

  function handleImageChange(image: string) {
    selectedImage = image;
    onImageChange?.(image);
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

<div class={`product-card-extended border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${hostClass}`} {...restProps}>
  <div class="flex flex-col md:flex-row">
    <!-- Product image gallery -->
    <div class="md:w-1/2">
      <div class="aspect-square bg-gray-100 flex items-center justify-center">
        {#if selectedImage}
          <img 
            src={selectedImage} 
            alt={product.name} 
            class={`w-full h-full object-contain ${imageClass}`}
          />
        {:else}
          <div class="text-gray-400">
            <ImageIcon class="h-16 w-16 mx-auto" />
          </div>
        {/if}
      </div>
      
      {#if (product.gallery && product.gallery.length > 0) || (product.thumbnail && product.image)}
        <div class="flex mt-2 space-x-2 overflow-x-auto py-2">
          {#if product.thumbnail}
            <button
              class={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border ${
                selectedImage === product.thumbnail ? 'border-blue-500' : 'border-gray-200'
              }`}
              onclick={() => handleImageChange(product.thumbnail!)}
            >
              <img 
                src={product.thumbnail} 
                alt="Thumbnail" 
                class="w-full h-full object-cover"
              />
            </button>
          {/if}
          
          {#if product.image && product.image !== product.thumbnail}
            <button
              class={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border ${
                selectedImage === product.image ? 'border-blue-500' : 'border-gray-200'
              }`}
              onclick={() => handleImageChange(product.image!)}
            >
              <img 
                src={product.image} 
                alt="Main" 
                class="w-full h-full object-cover"
              />
            </button>
          {/if}
          
          {#if product.gallery}
            {#each product.gallery as image}
              {#if image !== product.thumbnail && image !== product.image}
                <button
                  class={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border ${
                    selectedImage === image ? 'border-blue-500' : 'border-gray-200'
                  }`}
                  onclick={() => handleImageChange(image)}
                >
                  <img 
                    src={image} 
                    alt="Gallery" 
                    class="w-full h-full object-cover"
                  />
                </button>
              {/if}
            {/each}
          {/if}
        </div>
      {/if}
    </div>
    
    <!-- Product details -->
    <div class="md:w-1/2 p-6">
      <div class="flex justify-between items-start">
        <div>
          {#if product.brand}
            <span class="text-sm text-gray-500">{product.brand}</span>
          {/if}
          <h2 class="text-2xl font-bold text-gray-900 mt-1">{product.name}</h2>
        </div>
        
        <button 
          class="text-gray-400 hover:text-gray-500"
          onclick={handleWishlistToggle}
          aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart 
            class={`h-6 w-6 ${isInWishlist ? 'fill-current text-red-500' : 'text-gray-400'}`} 
          />
        </button>
      </div>
      
      {#if product.category}
        <p class="text-sm text-gray-500 mt-1">{product.category}</p>
      {/if}
      
      <!-- Rating -->
      {#if showRating && product.rating !== undefined}
        <div class="flex items-center mt-3">
          <div class="flex">
            {#each Array(5) as _, i}
              <Star 
                class={`h-5 w-5 ${
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
            <span class="ml-2 text-sm text-gray-500">({product.reviewCount} reviews)</span>
          {/if}
        </div>
      {/if}
      
      <!-- Price -->
      <div class="mt-4 flex items-center space-x-3">
        <span class="text-3xl font-bold text-gray-900">{formattedPrice}</span>
        {#if product.originalPrice && product.originalPrice > product.price}
          <span class="text-xl text-gray-500 line-through">{formattedOriginalPrice}</span>
          {#if discountPercentage > 0}
            <Badge variant="warning">-{discountPercentage}% OFF</Badge>
          {/if}
        {/if}
      </div>
      
      {#if product.availability}
        <div class="mt-3">
          {#if product.availability === 'in_stock'}
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              In Stock
            </span>
          {:else if product.availability === 'low_stock'}
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              Limited Availability
            </span>
          {:else}
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              Out of Stock
            </span>
          {/if}
        </div>
      {/if}
      
      {#if showDescription && product.description}
        <p class="mt-4 text-gray-700">{product.description}</p>
      {/if}
      
      <!-- Variants -->
      {#if showVariants && product.variants && product.variants.length > 0}
        <div class="mt-6">
          <h3 class="text-sm font-medium text-gray-900">Variants</h3>
          <div class="mt-2 flex flex-wrap gap-2">
            {#each product.variants as variant}
              <button
                type="button"
                class={`px-4 py-2 text-sm font-medium rounded-md border ${
                  selectedVariant === variant.id
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                onclick={() => selectedVariant = variant.id}
              >
                {variant.name}
                {#if variant.additionalCost && variant.additionalCost > 0}
                  <span class="ml-1">(+{formatPrice(variant.additionalCost)})</span>
                {/if}
              </button>
            {/each}
          </div>
        </div>
      {/if}
      
      <!-- Quantity selector -->
      <div class="mt-6">
        <label for="quantity" class="text-sm font-medium text-gray-900">Quantity</label>
        <div class="mt-1 flex items-center">
          <input
            type="number"
            id="quantity"
            min="1"
            value={selectedQuantity}
            class="block w-20 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            oninput={(e) => selectedQuantity = parseInt((e.target as HTMLInputElement).value) || 1}
          />
        </div>
      </div>
      
      <!-- Action buttons -->
      <div class="mt-8 flex space-x-4">
        <Button 
          variant="primary" 
          class="flex-1" 
          onclick={handleAddToCart}
          disabled={product.availability !== 'in_stock'}
        >
          <ShoppingCart class="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        
        {#if enableWishlist}
          <Button 
            variant="ghost" 
            size="sm"
            class="rounded-full p-2 h-10 w-10"
            onclick={handleWishlistToggle}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart class={`h-5 w-5 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
          </Button>
        {/if}
        
        {#if enableShare}
          <Button 
            variant="ghost" 
            size="sm"
            class="rounded-full p-2 h-10 w-10"
            onclick={handleShare}
            aria-label="Share product"
          >
            <Share2 class="h-5 w-5" />
          </Button>
        {/if}
      </div>
      
      {#if showAdditionalActions}
        <div class="mt-6 flex space-x-3">
          <Button 
            variant="secondary" 
            class="flex-1" 
            onclick={handleBuyNow}
            disabled={product.availability !== 'in_stock'}
          >
            Buy Now
          </Button>
          
          <Button 
            variant="ghost" 
            onclick={() => {}}
            disabled={product.availability !== 'in_stock'}
          >
            <MoreHorizontal class="h-5 w-5" />
          </Button>
        </div>
      {/if}
      
      <!-- Additional information -->
      <div class="mt-6 space-y-4">
        {#if showShippingInfo && product.freeShipping}
          <div class="flex items-center text-sm text-gray-600">
            <ShieldCheck class="h-5 w-5 text-green-500 mr-2" />
            <span>Free shipping on this product</span>
          </div>
        {/if}
        
        {#if showWarranty && product.warranty}
          <div class="flex items-center text-sm text-gray-600">
            <ShieldCheck class="h-5 w-5 text-blue-500 mr-2" />
            <span>{product.warranty} included</span>
          </div>
        {/if}
        
        {#if product.tags && product.tags.length > 0}
          <div class="flex flex-wrap gap-2 mt-3">
            {#each product.tags as tag}
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <!-- Specifications and features -->
  {#if showSpecifications && product.specifications}
    <div class="mt-6 border-t border-gray-200 pt-6">
      <h3 class="text-lg font-medium text-gray-900">Specifications</h3>
      <dl class="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        {#each Object.entries(product.specifications) as [key, value]}
          <div class="sm:col-span-1">
            <dt class="text-sm font-medium text-gray-500">{key}</dt>
            <dd class="mt-1 text-sm text-gray-900">{value}</dd>
          </div>
        {/each}
      </dl>
    </div>
  {/if}
  
  {#if showFeatures && product.features && product.features.length > 0}
    <div class="mt-6 border-t border-gray-200 pt-6">
      <h3 class="text-lg font-medium text-gray-900">Features</h3>
      <ul class="mt-4 space-y-2">
        {#each product.features as feature}
          <li class="flex items-start">
            <CheckCircle class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span class="text-sm text-gray-700">{feature}</span>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
