import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { RecipeStatusIndicator } from '$stylist/information/interface/recipe/status-indicator';

export function createStatusIndicatorState(props: RecipeStatusIndicator) {
	const status = $derived((props.status ?? 'online') as TokenAvailability);
	const appearance = $derived((props.appearance ?? 'neutral') as TokenAppearance);
	const label = $derived(props.label ?? '');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const customColor = $derived(props.customColor);
	const size = $derived(props.size ?? 'md');
	const sizeClass = $derived(`status-indicator__indicator--${String(size).replaceAll('/', '-')}`);
	const showLabel = $derived(props.showLabel ?? true);
	const indicatorClass = $derived(props.indicatorClass ?? '');
	const labelClass = $derived(props.labelClass ?? '');
	const isSimpleMode = $derived(props.appearance === undefined && !props.customColor);
	const classes = $derived(['status-indicator', className].filter(Boolean).join(' '));
	const dotClasses = $derived(
		isSimpleMode ? `status-indicator__dot status-indicator__dot--${status}` : ''
	);
	const containerClasses = $derived(
		isSimpleMode
			? classes
			: ['status-indicator status-indicator--with-label', className].filter(Boolean).join(' ')
	);
	const indicatorClasses = $derived(
		isSimpleMode
			? dotClasses
			: [
					'status-indicator__indicator',
					`status-indicator__indicator--${appearance}`,
					sizeClass,
					indicatorClass
				]
					.filter(Boolean)
					.join(' ')
	);
	const indicatorStyle = $derived(customColor ? `background-color: ${customColor};` : '');
	const labelClasses = $derived(['status-indicator__label', labelClass].filter(Boolean).join(' '));

	return {
		get classes() {
			return classes;
		},
		get containerClasses() {
			return containerClasses;
		},
		get dotClasses() {
			return dotClasses;
		},
		get indicatorClasses() {
			return indicatorClasses;
		},
		get indicatorStyle() {
			return indicatorStyle;
		},
		get labelClasses() {
			return labelClasses;
		},
		get label() {
			return label;
		},
		get showLabel() {
			return showLabel;
		},
		get isSimpleMode() {
			return isSimpleMode;
		}
	};
}

export default createStatusIndicatorState;
