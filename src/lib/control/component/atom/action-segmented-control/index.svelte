<script lang="ts">
	import { createActionSegmentedControlState } from '$stylist/control/function/state/action-segmented-control';
	import type { RecipeActionSegmentedControlProps } from '$stylist/control/type/struct/action-segmented-control-props';

	let props: RecipeActionSegmentedControlProps = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				items: _items,
				selectedIndex: _selectedIndex,
				onValueInput: _onValueInput,
				onValueChange: _onValueChange,
				onChange: _onChange,
				...rest
			} = props;
			return rest;
		})()
	);

	const state = createActionSegmentedControlState(props);
</script>

<div class={state.classes} {...restProps}>
	{#each state.items as item, i}
		<button
			class={state.getItemClasses(i, state.localSelectedIndex === i)}
			onclick={() => state.handleClick(i)}
		>
			{item}
		</button>
	{/each}
</div>






