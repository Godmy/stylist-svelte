<script lang="ts">
  import type { RecipeUpsell as UpsellContract } from '$stylist/commerce/interface/recipe/upsell';
  import { createUpsellState as stateFn } from '$stylist/commerce/function/state/upsell';

  let props: UpsellContract = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses}>
  <header class={state.headerClasses}>
    <div>
      <h3 class={state.titleClasses}>{props.title ?? 'You May Also Like'}</h3>
      {#if props.description}
        <p class={state.descriptionClasses}>{props.description}</p>
      {/if}
    </div>
  </header>

  <section class="mb-6 rounded-xl border border-[var(--color-border-primary)] p-4">
    <p class="text-sm text-[var(--color-text-secondary)]">Current product</p>
    <div class="mt-2 flex items-center justify-between gap-4">
      <div>
        <p class="font-medium text-[var(--color-text-primary)]">{props.currentProduct.name}</p>
        {#if props.currentProduct.description}
          <p class="text-sm text-[var(--color-text-secondary)]">{props.currentProduct.description}</p>
        {/if}
      </div>
      <p class={state.productPriceClasses}>{state.formatPrice(props.currentProduct.price)}</p>
    </div>
  </section>

  <div class={state.productsContainerClasses}>
    {#each state.visibleProducts as product}
      <article class={state.productCardClasses}>
        <div class="flex items-start justify-between gap-3">
          <div>
            <h4 class={state.productTitleClasses}>{product.name}</h4>
            {#if product.description}
              <p class={state.descriptionClasses}>{product.description}</p>
            {/if}
          </div>
          {#if product.isRecommended}
            <span class={state.recommendedBadgeClasses}>Recommended</span>
          {/if}
        </div>

        <div class="mt-3 flex items-center gap-3">
          <span class={state.productPriceClasses}>{state.formatPrice(product.price)}</span>
          {#if product.originalPrice}
            <span class={state.productOriginalPriceClasses}>{state.formatPrice(product.originalPrice)}</span>
          {/if}
          {#if props.showSavings && state.getSavings(product) > 0}
            <span class={state.savingsTextClasses}>Save {state.formatPrice(state.getSavings(product))}</span>
          {/if}
        </div>

        {#if product.rating}
          <div class="mt-3 flex items-center gap-1">
            {#each Array.from({ length: 5 }) as _, index}
              <span class={state.getStarClasses(index < Math.round(product.rating))}>★</span>
            {/each}
            <span class="ml-2 text-sm text-[var(--color-text-secondary)]">
              {product.rating.toFixed(1)}{#if product.reviewCount} ({product.reviewCount}){/if}
            </span>
          </div>
        {/if}

        <div class={state.actionsContainerClasses}>
          <button type="button" class={state.getActionButtonClasses('primary')} onclick={() => props.onProductUpgrade?.(product)}>
            Upgrade
          </button>
          <button type="button" class={state.getActionButtonClasses('secondary')} onclick={() => props.onProductAddToCart?.(product)}>
            Add to Cart
          </button>
        </div>
      </article>
    {/each}
  </div>
</div>
