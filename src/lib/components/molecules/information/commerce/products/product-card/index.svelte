<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ProductCardStyleManager } from '$stylist/design-system/styles/information/product-card';

  /**
   * Unified Product Card Component
   * 
   * Consolidates: product-card, product-card-compact, product-card-with-actions
   * 
   * @param variant - 'default' | 'compact' | 'with-actions'
   * @param title - Product title
   * @param price - Product price
   * @param currency - Currency symbol
   * @param image - Product image URL
   * @param rating - Product rating (0-5)
   * @param reviewCount - Number of reviews
   * @param badge - Badge type: 'sale' | 'new' | 'popular' | ''
   * @param description - Product description (not shown in compact variant)
   * @param actions - Actions slot (not shown in compact variant)
   */

  let {
    variant = 'default',
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    reviewCount = 0,
    badge = '',
    description = '',
    actions,
    class: className = ''
  }: {
    variant?: 'default' | 'compact' | 'with-actions';
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
    badge?: string;
    description?: string;
    actions?: Snippet;
    class?: string;
  } = $props();

  const badgeStyles = {
    sale: ProductCardStyleManager.getSaleBadgeClass(),
    new: ProductCardStyleManager.getNewBadgeClass(),
    popular: ProductCardStyleManager.getPopularBadgeClass(),
    default: ProductCardStyleManager.getDefaultBadgeClass()
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(ProductCardStyleManager.getContainerClass(className, variant));
  const imageContainerClass = $derived(ProductCardStyleManager.getImageContainerClass(variant));
  const imageClass = $derived(ProductCardStyleManager.getImageClass());
  const badgeClass = $derived(ProductCardStyleManager.getBadgeClass(badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default));
  const contentClass = $derived(ProductCardStyleManager.getContentClass(variant));
  const headerClass = $derived(ProductCardStyleManager.getHeaderClass());
  const titleClass = $derived(ProductCardStyleManager.getTitleClass());
  const ratingContainerClass = $derived(ProductCardStyleManager.getRatingContainerClass());
  const starsContainerClass = $derived(ProductCardStyleManager.getStarsContainerClass());
  const starClass = (filled: boolean) => ProductCardStyleManager.getStarClass(filled);
  const reviewCountClass = $derived(ProductCardStyleManager.getReviewCountClass());
  const descriptionClass = $derived(ProductCardStyleManager.getDescriptionClass(variant));
  const priceClass = $derived(ProductCardStyleManager.getPriceClass());
  const actionsContainerClass = $derived(ProductCardStyleManager.getActionsContainerClass());

  // Compact variant doesn't show these
  const showDescription = $derived(variant !== 'compact' && description);
  const showActions = $derived((variant === 'default' || variant === 'with-actions') && actions);
  const showReviewCount = $derived(variant !== 'compact' && reviewCount > 0);
</script>

<div class={containerClass}>
  {#if image}
    <div class={imageContainerClass}>
      <img src={image} alt={title} class={imageClass} />
      {#if badge}
        <span class={badgeClass}>{badge}</span>
      {/if}
    </div>
  {/if}

  <div class={contentClass}>
    <div class={headerClass}>
      <h3 class={titleClass}>{title}</h3>
    </div>

    {#if rating > 0}
      <div class={ratingContainerClass}>
        <div class={starsContainerClass}>
          {#each Array(5) as _, i}
            <svg
              class={`w-4 h-4 ${starClass(i < Math.floor(rating))}`}
              viewBox="0 0 24 24"
              fill={i < Math.floor(rating) ? 'currentColor' : 'none'}
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          {/each}
        </div>
        {#if showReviewCount}
          <span class={reviewCountClass}>({reviewCount})</span>
        {/if}
      </div>
    {/if}

    {#if showDescription}
      <p class={descriptionClass}>{description}</p>
    {/if}

    <div class="flex items-center justify-between mt-auto">
      <span class={priceClass}>{currency}{price.toFixed(2)}</span>

      {#if showActions && actions}
        <div class={actionsContainerClass}>
          {@render actions()}
        </div>
      {/if}
    </div>
  </div>
</div>
