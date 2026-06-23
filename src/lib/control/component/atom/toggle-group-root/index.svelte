<script lang="ts">
	import { setContext } from 'svelte';
	import type { RecipeToggleGroupRootProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
	import createToggleGroupRootState from '$stylist/control/function/state/toggle-group-root/index.svelte';

	let props: RecipeToggleGroupRootProps = $props();

	const state = createToggleGroupRootState(props);

	setContext('toggleGroup', {
		updateValue: state.updateValue,
		get value() {
			return state.value;
		},
		disabled: state.disabled
	});

	const restProps = $derived.by(() => {
		const {
			value: _value,
			type: _type,
			disabled: _disabled,
			children: _children,
			onValueChange: _onValueChange,
			orientation: _orientation,
			class: _class,
			...rest
		} = props;
		return rest;
	});
</script>

<div class="c-toggle-group" data-disabled={state.disabled || undefined} role="group" {...restProps}>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.c-toggle-group {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.c-toggle-group[data-disabled] {
		opacity: var(--opacity-50, 0.5);
	}
</style>
