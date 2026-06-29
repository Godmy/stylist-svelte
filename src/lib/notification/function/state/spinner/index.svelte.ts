import type { RecipeSpinner } from '$stylist/notification/interface/recipe/spinner';
import type { SpinnerVariant } from '$stylist/notification/type/alias/spinner-variant';

export function createSpinnerState(props: RecipeSpinner) {
	const variant = $derived((props.variant ?? 'icon') as SpinnerVariant);
	const size = $derived(props.size ?? 'md');
	const color = $derived(props.color ?? 'blue');
	const label = $derived(props.label ?? 'Loading...');
	const showLabel = $derived(props.showLabel ?? false);

	const sizeClasses = $derived(`spinner-size-${size}`);
	const colorClasses = $derived(`spinner-color-${color}`);
	const iconColorClasses = $derived(`spinner-color-${color}`);
	const containerClasses = $derived(`c-spinner ${props.class ?? ''}`.trim());

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get color() {
			return color;
		},
		get label() {
			return label;
		},
		get showLabel() {
			return showLabel;
		},
		get sizeClasses() {
			return sizeClasses;
		},
		get colorClasses() {
			return colorClasses;
		},
		get iconColorClasses() {
			return iconColorClasses;
		},
		get containerClasses() {
			return containerClasses;
		}
	};
}

