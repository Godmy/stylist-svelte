import type { ProductSortProps } from '$stylist/design-system/props';
import { INPUT_BASE_CLASS } from '$stylist/design-system/classes';
import {
	BASE_LABEL_CLASSES,
	LABEL_ENABLED_CLASSES,
	LABEL_SIZE_CLASSES
} from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

export function createProductSortState(props: ProductSortProps) {
	const options = $derived(props.options);
	const selectedOption = $derived(props.selectedOption ?? '');
	const onSortChange = $derived(() => props.onSortChange || ((option: string) => {}));
	const containerClasses = $derived(`flex items-center ${props.class ?? ''}`.trim());
	const labelClasses = $derived(
		cn('mr-2', BASE_LABEL_CLASSES, LABEL_SIZE_CLASSES.sm, LABEL_ENABLED_CLASSES)
	);
	const selectClasses = $derived(
		cn(INPUT_BASE_CLASS, 'w-auto rounded-lg p-2 text-sm', 'focus:ring-[var(--color-primary-500)]')
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

