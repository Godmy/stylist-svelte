import { IndicatorsStyleManager } from '$stylist/interaction/class/style-manager/indicators';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { StatusIndicatorRecipe } from '$stylist/information/interface/recipe/status-indicator';

export function createStatusIndicatorState(props: StatusIndicatorRecipe) {
	const status = $derived((props.status ?? 'online') as TokenAvailability);
	const appearance = $derived((props.appearance ?? 'neutral') as TokenAppearance);
	const label = $derived(props.label ?? '');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const customColor = $derived(props.customColor);
	const size = $derived(props.size ?? 'md');
	const showLabel = $derived(props.showLabel ?? true);
	const indicatorClass = $derived(props.indicatorClass ?? '');
	const labelClass = $derived(props.labelClass ?? '');
	const isSimpleMode = $derived(props.appearance === undefined && !props.customColor);
	const classes = $derived(IndicatorsStyleManager.getStatusIndicatorContainerClasses(className));
	const dotClasses = $derived(
		isSimpleMode
			? IndicatorsStyleManager.getStatusIndicatorDotClasses(
					status as Parameters<typeof IndicatorsStyleManager.getStatusIndicatorDotClasses>[0]
				)
			: ''
	);
	const containerClasses = $derived(
		isSimpleMode
			? classes
			: IndicatorsStyleManager.getStatusIndicatorWithLabelContainerClasses(className)
	);
	const indicatorClasses = $derived(
		isSimpleMode
			? dotClasses
			: IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses(
					appearance,
					size as Parameters<
						typeof IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses
					>[1],
					customColor,
					indicatorClass
				)
	);
	const indicatorStyle = $derived(customColor ? `background-color: ${customColor};` : '');
	const labelClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorWithLabelLabelClasses(labelClass)
	);

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
