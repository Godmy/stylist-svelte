import type { ActionSegmentedControlProps } from '$stylist/control/interface/component/toggles';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';

export function createActionSegmentedControlState(props: ActionSegmentedControlProps) {
	const items = $derived(props.items);
	const selectedIndex = $derived(props.selectedIndex ?? 0);
	const containerClasses = $derived(
		InteractionStyleManager.getInteractiveBaseClasses(`flex rounded-lg border ${props.class ?? ''}`.trim())
	);

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
		getItemClasses(index: number, isSelected: boolean) {
			const totalItems = items.length;
			const roundedClass =
				index === 0 ? 'rounded-l-lg' : index === totalItems - 1 ? 'rounded-r-lg' : '';
			const stateClass = isSelected
				? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]'
				: 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]';

			return `px-4 py-2 rounded-lg transition-colors ${roundedClass} ${stateClass}`.trim();
		}
	};
}

export default createActionSegmentedControlState;
