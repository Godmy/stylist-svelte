<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ProductCardStyleManager } from '$stylist/design-system/styles/product-card';

  let {
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
  } = $props<{
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    reviewCount?: number;
    badge?: string; // 'sale', 'new', 'popular', etc.
    description?: string;
    actions?: Snippet;
    class?: string;
  }>();

  const badgeStyles = {
    sale: ProductCardStyleManager.getSaleBadgeClass(),
    new: ProductCardStyleManager.getNewBadgeClass(),
    popular: ProductCardStyleManager.getPopularBadgeClass(),
    default: ProductCardStyleManager.getDefaultBadgeClass()
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(ProductCardStyleManager.getContainerClass(className));
  const imageContainerClass = $derived(ProductCardStyleManager.getImageContainerClass());
  const imageClass = $derived(ProductCardStyleManager.getImageClass());
  const badgeClass = $derived(ProductCardStyleManager.getBadgeClass(badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default));
  const contentClass = $derived(ProductCardStyleManager.getContentClass());
  const titleClass = $derived(ProductCardStyleManager.getTitleClass());
  const descriptionClass = $derived(ProductCardStyleManager.getDescriptionClass());
  const ratingContainerClass = $derived(ProductCardStyleManager.getRatingContainerClass());
  const starClass = (filled: boolean) => ProductCardStyleManager.getStarClass(filled);
  const reviewCountClass = $derived(ProductCardStyleManager.getReviewCountClass());
  const priceContainerClass = $derived(ProductCardStyleManager.getPriceContainerClass());
  const priceClass = $derived(ProductCardStyleManager.getPriceClass());
  const actionsContainerClass = $derived(ProductCardStyleManager.getActionsContainerClass());
</script>

<div class={containerClass}>
  <div class={imageContainerClass}>
    {#if image}
      <img src={image} alt={title} class={imageClass} />
    {/if}
    {#if badge}
      <span class={badgeClass}>
        {badge}
      </span>
    {/if}
  </div>

  <div class={contentClass}>
    <h3 class={titleClass}>{title}</h3>

    {#if description}
      <p class={descriptionClass}>{description}</p>
    {/if}

    <div class={ratingContainerClass}>
      <div class={ProductCardStyleManager.getStarsContainerClass()}>
        {#each Array(5) as _, i}
          <svg
            class={starClass(i < Math.floor(rating))}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        {/each}
      </div>
      <span class={reviewCountClass}>({reviewCount})</span>
    </div>

    <div class={priceContainerClass}>
      <span class={priceClass}>{currency}{price.toFixed(2)}</span>
      {#if actions}
        <div class={actionsContainerClass}>
          {@render actions()}
        </div>
      {/if}
    </div>
  </div>
</div>
