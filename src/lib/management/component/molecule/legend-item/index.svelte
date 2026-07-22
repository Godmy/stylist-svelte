<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createLegendItemState } from '$stylist/management/function/state/legend-item/index.svelte';

	let props: Parameters<typeof createLegendItemState>[0] = $props();
	const state = createLegendItemState(props);
</script>

<div
	class={state.itemClasses}
	onclick={state.handleClick}
	role={props.onClick ? 'button' : undefined}
	{...props.onClick ? { tabindex: 0 } : {}}
	onkeydown={state.handleKeyDown}
>
	<div class="legend-item__icon">
		<Icon name={state.getIconName(state.type)} size="sm" />
	</div>
	<div class="legend-item__label">{state.label}</div>
	{#if state.count > 0}
		<div class="legend-item__count">{state.count}</div>
	{/if}
</div>

<style>
	.legend-item__base {
		display: flex;
		align-items: center;
		padding: 0.5rem;
		border-radius: 0.25rem;
		gap: 0.5rem;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		cursor: default;
	}

	.legend-item__variant {
		background-color: var(--color-primary-50);
		border-color: var(--color-primary-500);
		cursor: pointer;
	}
	.legend-item__variant:hover {
		background-color: var(--color-background-hover);
	}

	.legend-item__icon {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.legend-item__label {
		flex-grow: 1;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.legend-item__count {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
		background-color: var(--color-background-secondary);
		border-radius: 9999px;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
	}
</style>
