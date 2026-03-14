import { mergeClasses } from '$stylist/utils/classes';
import type { ProductSortProps } from '$stylist/design-system/contracts';
import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';
import { LabelStyleManager } from '$stylist/design-system/styles/information/label';

export function createProductSortState(props: ProductSortProps) {
	const options = $derived(props.options);
	const selectedOption = $derived(props.selectedOption ?? '');
	const onValueChange = $derived(() => props.onValueChange || ((option: string) => {}));
	const containerClasses = $derived(`flex items-center ${props.class ?? ''}`.trim());
	const labelClasses = $derived(mergeClasses('mr-2', LabelStyleManager.getLabelClasses('sm', false)));
	const selectClasses = $derived(
		mergeClasses(InputStyleManager.getInputBaseClass(), 'w-auto rounded-lg p-2 text-sm', 'focus:ring-[var(--color-primary-500)]')
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
			const valueChangeFn = onValueChange();
			valueChangeFn(option);
		}
	};
}

export default createProductSortState;
