import { BASE_CLASSES, STATE_CLASSES, TRANSITION_CLASSES } from '$stylist/design-system/tokens/classes';

export interface ActionSegmentedControlProps {
  items: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  class?: string;
}

export const DEFAULT_ACTION_SEGMENTED_SELECTED_INDEX = 0;

const BASE_CONTAINER_CLASSES = `flex rounded-lg border ${BASE_CLASSES.surface}`;
const BASE_ITEM_CLASSES = `px-4 py-2 rounded-lg ${TRANSITION_CLASSES.colors}`;

export const getActionSegmentedControlContainerClasses = (className = '') => {
  return [BASE_CONTAINER_CLASSES, className].filter(Boolean).join(' ');
};

export const getActionSegmentedControlItemClasses = (
  index: number,
  totalItems: number,
  isSelected: boolean
) => {
  const roundedClass =
    index === 0 ? 'rounded-l-lg' : index === totalItems - 1 ? 'rounded-r-lg' : '';
  const stateClass = isSelected
    ? 'bg-blue-500 text-white'
    : 'bg-white text-gray-700 hover:bg-gray-100';

  return [BASE_ITEM_CLASSES, roundedClass, stateClass].filter(Boolean).join(' ');
};
