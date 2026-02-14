<script lang="ts">
  import { ProductCardCompactStyleManager } from '$stylist/design-system/styles/product-card-compact';

  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    badge = '',
    class: className = ''
  } = $props<{
    title?: string;
    price?: number;
    currency?: string;
    image?: string;
    rating?: number;
    badge?: string;
    class?: string;
  }>();

  const badgeStyles = {
    sale: ProductCardCompactStyleManager.getSaleBadgeClass(),
    new: ProductCardCompactStyleManager.getNewBadgeClass(),
    popular: ProductCardCompactStyleManager.getPopularBadgeClass(),
    default: ProductCardCompactStyleManager.getDefaultBadgeClass()
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(ProductCardCompactStyleManager.getContainerClass(className));
  const imageClass = $derived(ProductCardCompactStyleManager.getImageClass());
  const contentClass = $derived(ProductCardCompactStyleManager.getContentClass());
  const headerClass = $derived(ProductCardCompactStyleManager.getHeaderClass());
  const titleClass = $derived(ProductCardCompactStyleManager.getTitleClass());
  const badgeClass = $derived(ProductCardCompactStyleManager.getBadgeClass(badgeStyles[badge as keyof typeof badgeStyles] || badgeStyles.default));
  const ratingContainerClass = $derived(ProductCardCompactStyleManager.getRatingContainerClass());
  const starsContainerClass = $derived(ProductCardCompactStyleManager.getStarsContainerClass());
  const starClass = (filled: boolean) => ProductCardCompactStyleManager.getStarClass(filled);
  const priceContainerClass = $derived(ProductCardCompactStyleManager.getPriceContainerClass());
  const priceClass = $derived(ProductCardCompactStyleManager.getPriceClass());
</script>

<div class={containerClass}>
  {#if image}
    <img src={image} alt={title} class={imageClass} />
  {/if}
  <div class={contentClass}>
    <div class={headerClass}>
      <h3 class={titleClass}>{title}</h3>
      {#if badge}
        <span class={badgeClass}>
          {badge}
        </span>
      {/if}
    </div>
    <div class={ratingContainerClass}>
      <div class={starsContainerClass}>
        {#each Array(5) as _, i}
          <svg
            class={starClass(i < Math.floor(rating))}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        {/each}
      </div>
    </div>
    <div class={priceContainerClass}>
      <span class={priceClass}>{currency}{price.toFixed(2)}</span>
    </div>
  </div>
</div>
