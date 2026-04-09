<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import type { ActionSegmentedControlProps } from '$stylist/control/interface/component/toggles';
	import { createActionSegmentedControlState } from '$stylist/control/function/state/action-segmented-control';

	type Props = ActionSegmentedControlProps & InteractionHTMLAttributes<HTMLDivElement>;

	let props: Props = $props();
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

	const controlState = createActionSegmentedControlState(props);
	let localSelectedIndex = $state(controlState.selectedIndex);

	$effect(() => {
		localSelectedIndex = controlState.selectedIndex;
	});

	const handleClick = (index: number) => {
		localSelectedIndex = index;
		props.onValueInput?.(index);
		props.onValueChange?.(index);
		props.onChange?.(index);
	};
</script>

<div class={controlState.classes} {...restProps}>
	{#each controlState.items as item, i}
		<button
			class={controlState.getItemClasses(i, localSelectedIndex === i)}
			onclick={() => handleClick(i)}
		>
			{item}
		</button>
	{/each}
</div>






