<script lang="ts">
	import type { RecipeUpsell as UpsellContract } from '$stylist/commerce/interface/recipe/upsell';
	import stateFn from './state.svelte';

	let props: UpsellContract = $props();
	const state = stateFn(props);
</script>

<div class="upsell">
	<header class="upsell__header">
		<div>
			<h3 class="upsell__title">{props.title ?? 'You May Also Like'}</h3>
			{#if props.description}
				<p class="upsell__description">{props.description}</p>
			{/if}
		</div>
	</header>

	<section class="_c1">
		<p class="_c2">Current product</p>
		<div class="_c3">
			<div>
				<p class="_c4">{props.currentProduct.name}</p>
				{#if props.currentProduct.description}
					<p class="_c2">
						{props.currentProduct.description}
					</p>
				{/if}
			</div>
			<p class="upsell__product-price">{state.formatPrice(props.currentProduct.price)}</p>
		</div>
	</section>

	<div class="upsell__products-container">
		{#each state.visibleProducts as product}
			<article class="upsell__product-card">
				<div class="_c5">
					<div>
						<h4 class="upsell__product-title">{product.name}</h4>
						{#if product.description}
							<p class="upsell__description">{product.description}</p>
						{/if}
					</div>
					{#if product.isRecommended}
						<span class="upsell__recommended-badge">Recommended</span>
					{/if}
				</div>

				<div class="_c6">
					<span class="upsell__product-price">{state.formatPrice(product.price)}</span>
					{#if product.originalPrice}
						<span class="upsell__product-original-price"
							>{state.formatPrice(product.originalPrice)}</span
						>
					{/if}
					{#if props.showSavings && state.getSavings(product) > 0}
						<span class="upsell__savings-text"
							>Save {state.formatPrice(state.getSavings(product))}</span
						>
					{/if}
				</div>

				{#if product.rating}
					<div class="_c7">
						{#each Array.from({ length: 5 }) as _, index}
							<span class={state.getStarClasses(index < Math.round(product.rating))}>в…</span>
						{/each}
						<span class="_c8">
							{product.rating.toFixed(1)}{#if product.reviewCount}
								({product.reviewCount}){/if}
						</span>
					</div>
				{/if}

				<div class="upsell__actions-container">
					<button
						type="button"
						class="upsell__action-button"
						data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
						onclick={() => props.onProductUpgrade?.(product)}
					>
						Upgrade
					</button>
					<button
						type="button"
						class="upsell__action-button"
						data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
						onclick={() => props.onProductAddToCart?.(product)}
					>
						Add to Cart
					</button>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	._c1 {
		margin-bottom: 1.5rem;
		border-radius: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	._c4 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c5 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.75rem;
	}
	._c6 {
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}
	._c7 {
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c8 {
		margin-left: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.upsell {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.upsell__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.upsell__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.upsell__description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.upsell__products-container {
		padding: 1.5rem;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 640px) {
		.upsell__products-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.upsell__products-container {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.upsell__product-card {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		overflow: hidden;
		transition-property: box-shadow;
		transition-duration: 150ms;
	}
	.upsell__product-card:hover {
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.upsell__product-image {
		width: 100%;
		height: 8rem;
		object-fit: cover;
	}

	.upsell__product-title {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0.75rem;
		padding-bottom: 0.25rem;
	}

	.upsell__product-price {
		font-weight: 700;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-bottom: 0.25rem;
	}

	.upsell__product-original-price {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
		text-decoration-line: line-through;
	}

	.upsell__discount-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.upsell__rating {
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-bottom: 0.75rem;
	}

	.upsell__star {
		width: 1rem;
		height: 1rem;
	}

	.upsell__actions-container {
		padding: 0.75rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.upsell__action-button {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	.upsell__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.upsell__recommended-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	.upsell__savings-container {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.upsell__savings-text {
		color: var(--color-success-600);
		font-weight: 500;
	}

	.upsell__icon {
		height: 1.25rem;
		width: 1.25rem;
		margin-right: 0.5rem;
	}

	/* --- migrated from StyleManager --- */

	.upsell {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.upsell__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.upsell__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.upsell__description {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.upsell__products-container {
		padding: 1.5rem;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 640px) {
		.upsell__products-container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.upsell__products-container {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.upsell__product-card {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		overflow: hidden;
		transition-property: box-shadow;
		transition-duration: 150ms;
	}
	.upsell__product-card:hover {
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}

	.upsell__product-image {
		width: 100%;
		height: 8rem;
		object-fit: cover;
	}

	.upsell__product-title {
		font-weight: 500;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0.75rem;
		padding-bottom: 0.25rem;
	}

	.upsell__product-price {
		font-weight: 700;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-bottom: 0.25rem;
	}

	.upsell__product-original-price {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
		text-decoration-line: line-through;
	}

	.upsell__discount-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.upsell__rating {
		display: flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-bottom: 0.75rem;
	}

	.upsell__star {
		width: 1rem;
		height: 1rem;
	}

	.upsell__actions-container {
		padding: 0.75rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.upsell__action-button {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	.upsell__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.upsell__recommended-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}

	.upsell__savings-container {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.upsell__savings-text {
		color: var(--color-success-600);
		font-weight: 500;
	}

	.upsell__icon {
		height: 1.25rem;
		width: 1.25rem;
		margin-right: 0.5rem;
	}
</style>
