<script lang="ts">
	import type { ProductCardStateProps } from '$stylist/commerce/function/state/product-card';
	import { createProductCardState } from '$stylist/commerce/function/state/product-card';
	import { ProductCardStyleManager } from '$stylist/commerce/class/style-manager/product-card';

	let props: ProductCardStateProps = $props();
	const state = createProductCardState(props);
</script>

<div class={state.containerClass}>
	{#if state.image}
		<div class={state.imageContainerClass}>
			<img src={state.image} alt={state.title} class={state.imageClass} />
			{#if state.badge}
				<span class={state.badgeClass}>{state.badge}</span>
			{/if}
		</div>
	{/if}

	<div class={ProductCardStyleManager.getContentClass(state.variant)}>
		<div class={ProductCardStyleManager.getHeaderClass()}>
			<h3 class={state.titleClass}>{state.title}</h3>
		</div>

		{#if state.rating > 0}
			<div class={ProductCardStyleManager.getRatingContainerClass()}>
				<div class={ProductCardStyleManager.getStarsContainerClass()}>
					{#each Array(5) as _, i}
						<svg
							class={`w-4 h-4 ${ProductCardStyleManager.getStarClass(i < Math.floor(state.rating))}`}
							viewBox="0 0 24 24"
							fill={i < Math.floor(state.rating) ? 'currentColor' : 'none'}
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
						</svg>
					{/each}
				</div>
				{#if state.variant !== 'compact' && state.reviewCount > 0}
					<span class={ProductCardStyleManager.getReviewCountClass()}>({state.reviewCount})</span>
				{/if}
			</div>
		{/if}

		{#if state.variant !== 'compact' && state.description}
			<p class={state.descriptionClass}>{state.description}</p>
		{/if}

		<div class="flex items-center justify-between mt-auto">
			<span class={state.priceClass}>{state.currency}{state.price.toFixed(2)}</span>

			{#if (state.variant === 'detailed' || state.variant === 'screen') && props.actions}
				<div class={ProductCardStyleManager.getActionsContainerClass()}>
					{@render props.actions()}
				</div>
			{/if}
		</div>
	</div>
</div>
