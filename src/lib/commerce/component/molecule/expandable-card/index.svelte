<script lang="ts">
	import type { RecipeExpandableCard } from '$stylist/commerce/interface/recipe/expandable-card';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { ObjectManagerExpandableCard } from '$stylist/commerce/class/object-manager/expandable-card';
	import createExpandableCardState from '$stylist/commerce/function/state/expandable-card/index.svelte';

	let props: RecipeExpandableCard = $props();
	const state = createExpandableCardState(props);
</script>

<div class={state.containerClasses}>
	<button
		class="expandable-card__header"
		onclick={() => state.toggleExpanded()}
		aria-expanded={state.isExpanded}
		aria-controls={ObjectManagerExpandableCard.detailsId}
		disabled={props.disabled}
	>
		<div class="_c1">
			<h3 class="expandable-card__title">{props.title}</h3>
			{#if props.subtitle}
				<p class="expandable-card__subtitle">{props.subtitle}</p>
			{/if}
			<div class={state.summaryContainerClasses}>
				{#if props.summary}{@render props.summary()}{/if}
			</div>
		</div>

		<Icon name={ObjectManagerExpandableCard.chevronIcon} class="expandable-card__chevron" />
	</button>

	<div id={ObjectManagerExpandableCard.detailsId} class="expandable-card__details-container">
		<div class="expandable-card__details-content">
			{#if props.details}{@render props.details()}{/if}
		</div>
	</div>
</div>

<style>
	._c1 {
		flex: 1 1 0%;
	}

	.expandable-card__base {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.expandable-card__themed {
		color: var(--color-text-primary);
	}

	.expandable-card__header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		text-align: left;
	}

	.expandable-card__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.expandable-card__subtitle {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.expandable-card__summary {
		margin-top: 0.5rem;
	}

	.expandable-card__details-container {
		overflow: hidden;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	}

	.expandable-card__details-content {
		padding: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.expandable-card__chevron {
		margin-left: 1rem;
		height: 1.25rem;
		width: 1.25rem;
		color: var(--color-icon-secondary);
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

</style>
