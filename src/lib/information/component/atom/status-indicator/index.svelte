<script lang="ts">
	import createStatusIndicatorState from '$stylist/information/function/state/status-indicator/index.svelte';
	import type { StatusIndicatorRecipe } from '$stylist/information/interface/recipe/status-indicator';

	let props: StatusIndicatorRecipe = $props();

	const state = createStatusIndicatorState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				status: _status,
				appearance: _appearance,
				label: _label,
				customColor: _customColor,
				size: _size,
				showLabel: _showLabel,
				indicatorClass: _indicatorClass,
				labelClass: _labelClass,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

{#if state.isSimpleMode}
	<span class={state.classes} {...restProps}>
		<span class={state.dotClasses}></span>
		{#if state.label}<span>{state.label}</span>{/if}
	</span>
{:else}
	<div class={state.containerClasses} {...restProps}>
		<span class={state.indicatorClasses} style={state.indicatorStyle}></span>
		{#if state.showLabel}
			<span class={state.labelClasses}>{state.label}</span>
		{/if}
	</div>
{/if}
