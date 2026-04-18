<script lang="ts">
	import { getContext } from 'svelte';
  import { createToggleGroupItemState } from '$stylist/control/function/state/toggle-group-item';
	import type { RecipeToggleGroupItemProps as RecipeToggleGroupItemProps } from '$stylist/control/interface/recipe/toggle-group-item-props';
	import type { ToggleGroupContext } from '$stylist/control/type/struct/toggle-group-context';

	let props: RecipeToggleGroupItemProps = $props();

	const context = getContext<ToggleGroupContext>('toggleGroup') ?? {
		updateValue: () => {},
		value: null,
		disabled: false
	};
  const state = createToggleGroupItemState({
		...props,
		groupValue: context.value,
		groupDisabled: context.disabled,
		updateValue: context.updateValue
	});

	const restProps = $derived(
		(() => {
			const { value: _value, disabled: _disabled, children: _children, ...rest } = props;
			return rest;
		})()
	);
</script>

<button class={state.classes} disabled={state.disabled} onclick={state.handleClick} type="button" {...restProps}>
	{@render props.children?.()}
</button>






