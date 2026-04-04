<script lang="ts">
	import type { ThemeStatusIndicatorRecipe } from '$stylist/typography/interface/recipe/status-indicator';
	import { createStatusIndicatorState } from '$stylist/typography/function/state/status-indicator';

	let props: ThemeStatusIndicatorRecipe = $props();

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
	<!-- Simple mode: legacy status-indicator (dot + label inline) -->
	<span class={state.classes} {...restProps}>
		<span class={state.dotClasses}></span>
		{#if state.label}<span>{state.label}</span>{/if}
	</span>
{:else}
	<!-- Enhanced mode: legacy status-indicator-with-label (customizable indicator) -->
	<div class={state.containerClasses} {...restProps}>
		<span class={state.indicatorClasses} style={state.indicatorStyle}></span>
		{#if state.showLabel}
			<span class={state.labelClasses}>{state.label}</span>
		{/if}
	</div>
{/if}

