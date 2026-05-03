<script lang="ts">
	import { setContext } from 'svelte';
	import type { RecipeToggleGroupRootProps as RecipeToggleGroupRootProps } from '$stylist/control/interface/recipe/toggle-group-root-props';
	import { createToggleGroupRootState } from '$stylist/control/function/state/toggle-group-root';

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
			class: _class,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.classes} role="group">
	{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
</div>






