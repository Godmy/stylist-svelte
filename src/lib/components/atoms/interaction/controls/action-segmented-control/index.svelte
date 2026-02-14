<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ActionSegmentedControlProps } from '$stylist/design-system/props';

export function createActionSegmentedControlState(props: ActionSegmentedControlProps) {
		const items = $derived(props.items);
		const selectedIndex = $derived(props.selectedIndex ?? 0);
		const onValueChange = $derived(props.onValueChange || props.onChange || (() => {}));
		const containerClasses = $derived(`flex rounded-lg border ${props.class ?? ''}`.trim());

		return {
			get items() {
				return items;
			},
			get selectedIndex() {
				return selectedIndex;
			},
			get containerClasses() {
				return containerClasses;
			},
			get classes() {
				return containerClasses;
			},
			get handleChange() {
				return (index: number) => onValueChange(index);
			},
			get getItemClasses() {
				return (index: number, isSelected: boolean) => {
					const totalItems = items.length;
					const roundedClass =
						index === 0 ? 'rounded-l-lg' : index === totalItems - 1 ? 'rounded-r-lg' : '';
					const stateClass = isSelected
						? 'bg-blue-500 text-white'
						: 'bg-white text-gray-700 hover:bg-gray-100';

					return `px-4 py-2 rounded-lg transition-colors ${roundedClass} ${stateClass}`.trim();
				};
			}
		};
	}

	type Props = ActionSegmentedControlProps & HTMLAttributes<HTMLDivElement>;

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




