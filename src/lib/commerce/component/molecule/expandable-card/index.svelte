<script lang="ts">
	import type { ExpandableCardRecipe } from '$stylist/commerce/interface/recipe/expandable-card';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';
	import { createExpandableCardState } from '$stylist/commerce/function/state/expandable-card';

	let props: ExpandableCardRecipe = $props();
	const state = createExpandableCardState(props);
</script>

<div class={state.containerClasses}>
	<button
		class={state.headerClasses}
		onclick={() => state.toggleExpanded()}
		aria-expanded={state.isExpanded}
		aria-controls={ObjectManagerExpandableCard.detailsId}
		disabled={props.disabled}
	>
		<div class="flex-1">
			<h3 class={state.titleClasses}>{props.title}</h3>
			{#if props.subtitle}
				<p class={state.subtitleClasses}>{props.subtitle}</p>
			{/if}
			<div class={state.summaryContainerClasses}>
				{#if props.summary}{@render props.summary()}{/if}
			</div>
		</div>

		<Icon
			name={ObjectManagerExpandableCard.chevronIcon}
			class={state.chevronClasses}
		/>
	</button>

	<div
		id={ObjectManagerExpandableCard.detailsId}
		class={state.detailsContainerClasses}
	>
		<div class={state.detailsContentClasses}>
			{#if props.details}{@render props.details()}{/if}
		</div>
	</div>
</div>
