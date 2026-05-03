<script lang="ts">
  import type { ProductCardExtendedProps as Props } from '$stylist/commerce/type/struct/product-card-extended-props';
  import { createProductCardExtendedState } from '$stylist/commerce/function/state/product-card-extended';

  let props: Props = $props();
  const state = createProductCardExtendedState(props);
</script>

<div class={state.containerClass}>
  <div class="relative">
    {#if props.image}
      <img src={props.image} alt={props.title} class="w-full h-56 object-cover" />
    {/if}
    {#if props.badge}
      <span class={`absolute top-3 left-3 px-2.5 py-1 text-xs rounded ${state.badgeClass}`}>
        {props.badge}
      </span>
    {/if}
  </div>

  <div class="p-5">
    <h3 class="font-bold text-lg mb-1">{props.title}</h3>

    <div class="flex items-center mb-2">
      <div class="flex text-yellow-400">
        {#each Array(5) as _, i}
          <svg
            class={`w-4 h-4 ${i < Math.floor(props.rating ?? 0) ? 'fill-current' : 'fill-gray-300'}`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        {/each}
      </div>
      <span class="text-[var(--color-text-secondary)] text-sm ml-1">({props.reviewCount})</span>
    </div>

    <p class="text-[var(--color-text-primary)] text-sm mb-3">{props.description}</p>

    {#if props.features && props.features.length > 0}
      <ul class="mb-4 space-y-1">
        {#each props.features as feature}
          <li class="flex items-start">
            <svg class="w-4 h-4 text-[var(--color-success-500)] mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span class="text-sm text-[var(--color-text-secondary)]">{feature}</span>
          </li>
        {/each}
      </ul>
    {/if}

    <div class="flex justify-between items-center mt-4">
      <span class="text-xl font-bold">{props.currency}${(props.price ?? 0).toFixed(2)}</span>
      <div class="space-x-2">
        <button
          onclick={props.onAddToCart}
          class="px-3 py-1.5 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-sm rounded hover:bg-[var(--color-primary-600)]"
        >
          Add to Cart
        </button>
        <button
          onclick={props.onWishlist}
          class="p-1.5 border border-[var(--color-border-primary)] rounded hover:bg-[var(--color-background-secondary)]"
          aria-label="Add to wishlist"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>



