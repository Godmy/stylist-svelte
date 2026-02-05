import type { TabProps } from '$stylist/design-system/attributes';

export function createTabState(props: TabProps) {
  const variant = $derived(props.variant ?? 'default');
  const size = $derived(props.size ?? 'md');
  const disabled = $derived(props.disabled ?? false);
  const isSelected = $derived(props.selected ?? false);
  const classes = $derived(
    `px-4 py-2 text-sm font-medium rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      isSelected 
        ? 'bg-white text-blue-600 border-b-2 border-blue-600' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    } ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    } ${props.class ?? ''}`.trim()
  );

  return {
    get variant() {
      return variant;
    },
    get size() {
      return size;
    },
    get disabled() {
      return disabled;
    },
    get isSelected() {
      return isSelected;
    },
    get classes() {
      return classes;
    }
  };
}