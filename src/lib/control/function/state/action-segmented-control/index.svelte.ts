import type { ActionSegmentedControlProps } from '$stylist/control/interface/component/toggles';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export function createActionSegmentedControlState(props: ActionSegmentedControlProps) {
	const items = $derived(props.items);
	const selectedIndex = $derived(props.selectedIndex ?? 0);
	const containerClasses = $derived(
		InteractionStyleManager.getInteractiveBaseClasses(`flex rounded-lg border ${props.class ?? ''}`.trim())
	);
	let localSelectedIndex = $state(props.selectedIndex ?? 0);

	$effect(() => {
		localSelectedIndex = props.selectedIndex ?? 0;
	});

	return {
		get items() {
			return items;
		},
		get selectedIndex() {
			return selectedIndex;
		},
		get classes() {
			return containerClasses;
		},
		get localSelectedIndex() {
			return localSelectedIndex;
		},
		getItemClasses(index: number, isSelected: boolean) {
			const totalItems = items.length;
			const roundedClass =
				index === 0 ? 'rounded-l-lg' : index === totalItems - 1 ? 'rounded-r-lg' : '';
			const stateClass = isSelected
				? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
				: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]';

			return `px-4 py-2 rounded-lg transition-colors ${roundedClass} ${stateClass}`.trim();
		},
		handleClick(index: number) {
			localSelectedIndex = index;
			props.onValueInput?.(index);
			props.onValueChange?.(index);
			props.onChange?.(index);
		}
	};
}

export default createActionSegmentedControlState;
