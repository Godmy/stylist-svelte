import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';
import { LabelStyleManager } from '$stylist/information/class/style-manager/label';

type ProductSortOption = string | { value: string; label: string };

type ProductSortProps = {
	options?: ProductSortOption[];
	selectedOption?: string;
	onValueChange?: (option: string) => void;
	class?: string;
};

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





