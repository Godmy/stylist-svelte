import type { ProductSortProps } from '$stylist/design-system/attributes';

export function createProductSortState(props: ProductSortProps) {
  const options = $derived(props.options);
  const selectedOption = $derived(props.selectedOption ?? '');
  const onSortChange = $derived(() => props.onSortChange || ((option: string) => {}));
  const containerClasses = $derived(
    `flex items-center ${props.class ?? ''}`.trim()
  );
  const labelClasses = $derived('mr-2 text-gray-700');
  const selectClasses = $derived(
    'border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
  );

  return {
    get options() {
      return options;
    },
    get selectedOption() {
      return selectedOption;
    },
    get classes() {
      return containerClasses;
    },
    get labelClasses() {
      return labelClasses;
    },
    get selectClasses() {
      return selectClasses;
    },
    handleSortChange(option: string) {
      const sortChangeFn = onSortChange();
      sortChangeFn(option);
    }
  };
}