<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipePricingTable } from '$stylist/commerce/interface/recipe/pricing-table';
	import { createPricingTableState } from './state.svelte';

	let props: RecipePricingTable & HTMLAttributes<HTMLDivElement> = $props();
	const state = createPricingTableState(props);
</script>

<div class={state.containerClass}>
	{#each props.plans ?? [] as plan}
		<div class={state.getPlanCardClass(plan.highlighted)}>
			{#if plan.highlighted}
				<div class={state.popularBadgeClass}>MOST POPULAR</div>
			{/if}
			<h3 class={state.planTitleClass}>{plan.name}</h3>
			<div class={state.priceContainerClass}>
				<span class={state.priceClass}>{plan.price}</span>
				<span class={state.periodClass}>/{plan.period}</span>
			</div>
			<ul class={state.featuresListClass}>
				{#each plan.features as feature}
					<li class={state.featureItemClass}>
						<svg
							class={state.checkIconClass}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							></path>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
			<button class={state.getCtaButtonClass(plan.highlighted)}>
				{plan.cta}
			</button>
		</div>
	{/each}
</div>

<style>
	.pricing-table {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1.5rem;
	}
	@media (min-width: 768px) {
		.pricing-table {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.pricing-table__plan-card {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.pricing-table__default-plan {
		border-color: var(--color-border-primary);
	}

	.pricing-table__highlighted-plan {
		position: relative;
		transform: scale(1.05);
		border-color: var(--color-primary-500);
		background-color: var(--color-primary-50);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.pricing-table__popular-badge {
		margin-bottom: 1rem;
		display: inline-block;
		border-radius: 9999px;
		background-color: var(--color-primary-500);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 700;
		color: var(--color-text-inverse);
	}

	.pricing-table__plan-title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.pricing-table__price-container {
		margin-bottom: 1rem;
	}

	.pricing-table__price {
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
	}

	.pricing-table__period {
		color: var(--color-text-secondary);
	}

	.pricing-table__features-list {
		margin-bottom: 1.5rem;
	}
	.pricing-table__features-list > * + * {
		margin-top: 0.5rem;
	}

	.pricing-table__feature-item {
		display: flex;
		align-items: center;
	}

	.pricing-table__check-icon {
		margin-right: 0.5rem;
		height: 1.25rem;
		width: 1.25rem;
		color: var(--color-success-500);
	}

	.pricing-table__cta-button {
		width: 100%;
		border-radius: 0.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		font-weight: 500;
		transition-property: color, background-color, border-color;
		transition-duration: 150ms;
	}

	.pricing-table__default-button {
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}
	.pricing-table__default-button:hover {
		background-color: var(--color-neutral-200);
	}

	.pricing-table__highlighted-button {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}
	.pricing-table__highlighted-button:hover {
		background-color: var(--color-primary-600);
	}
</style>
