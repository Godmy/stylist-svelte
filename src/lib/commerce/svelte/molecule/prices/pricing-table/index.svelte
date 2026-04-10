<script lang="ts">
	import type { PricingTableProps } from '$stylist/commerce/function/state/pricing-table';
	import { createPricingTableState } from '$stylist/commerce/function/state/pricing-table';

	let props: PricingTableProps = $props();
	const state = createPricingTableState(props);
</script>

<div class={state.containerClass}>
	{#each props.plans ?? [] as plan}
		<div class={state.getPlanCardClass(!!plan.highlighted)}>
			{#if plan.highlighted}
				<div class={state.popularBadgeClass}>
					MOST POPULAR
				</div>
			{/if}
			<h3 class={state.planTitleClass}>{plan.name}</h3>
			<div class={state.priceContainerClass}>
				<span class={state.priceClass}>{plan.price}</span>
				<span class={state.periodClass}>/{plan.period}</span>
			</div>
			<ul class={state.featuresListClass}>
				{#each plan.features as feature}
					<li class={state.featureItemClass}>
						<svg class={state.checkIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
						</svg>
						{feature}
					</li>
				{/each}
			</ul>
			<button class={state.getCtaButtonClass(!!plan.highlighted)}>
				{plan.cta}
			</button>
		</div>
	{/each}
</div>
