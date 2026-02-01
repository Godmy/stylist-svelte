import type { ActionSegmentedControlProps } from '$stylist/design-system/interaction/controls/action-segmented-control';

export function createActionSegmentedControlState(props: ActionSegmentedControlProps) {
  const items = $derived(props.items);
  const selectedIndex = $derived(props.selectedIndex ?? 0);
  const onChange = $derived(props.onChange || (() => {}));
  const containerClasses = $derived(
    `flex rounded-lg border ${props.class ?? ''}`.trim()
  );

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
      return (index: number) => onChange(index);
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