<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ProductCardWithActionsStyleManager } from '$stylist/design-system/styles/product-card-with-actions';

  let {
    title = '',
    price = 0,
    currency = '$',
    image = '',
    rating = 0,
    reviewCount = 0,
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
    description?: string;
    actions?: Snippet;
    class?: string;
  }>();

  // Generate CSS classes using the style manager
  const containerClass = $derived(ProductCardWithActionsStyleManager.getContainerClass(className));
  const imageClass = $derived(ProductCardWithActionsStyleManager.getImageClass());
  const contentClass = $derived(ProductCardWithActionsStyleManager.getContentClass());
  const titleClass = $derived(ProductCardWithActionsStyleManager.getTitleClass());
  const ratingContainerClass = $derived(ProductCardWithActionsStyleManager.getRatingContainerClass());
  const starsContainerClass = $derived(ProductCardWithActionsStyleManager.getStarsContainerClass());
  const starClass = (filled: boolean) => ProductCardWithActionsStyleManager.getStarClass(filled);
  const reviewCountClass = $derived(ProductCardWithActionsStyleManager.getReviewCountClass());
  const descriptionClass = $derived(ProductCardWithActionsStyleManager.getDescriptionClass());
  const priceActionsContainerClass = $derived(ProductCardWithActionsStyleManager.getPriceActionsContainerClass());
  const priceClass = $derived(ProductCardWithActionsStyleManager.getPriceClass());
  const actionsContainerClass = $derived(ProductCardWithActionsStyleManager.getActionsContainerClass());
</script>

<div class={containerClass}>
  {#if image}
    <img src={image} alt={title} class={imageClass} />
  {/if}

  <div class={contentClass}>
    <h3 class={titleClass}>{title}</h3>

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
      <span class={reviewCountClass}>({reviewCount})</span>
    </div>

    <p class={descriptionClass}>{description}</p>

    <div class={priceActionsContainerClass}>
      <span class={priceClass}>{currency}{price.toFixed(2)}</span>
      {#if actions}
        <div class={actionsContainerClass}>
          {@render actions()}
        </div>
      {/if}
    </div>
  </div>
</div>
