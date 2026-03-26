import type { StatusIndicatorProps } from '$stylist/information/interface/indicators';
import { IndicatorsStyleManager } from '$stylist/information/class/style-manager/indicators';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/token/availability';


/**
 * Unified StatusIndicator state creator
 * Provides reactive state management for status indicator components using Svelte 5 runes
 * Supports both simple (dot + label) and enhanced (customizable indicator) modes
 *
 * @param props - StatusIndicator component props
 * @returns Reactive state object with classes and computed values
 */
export function createStatusIndicatorState(props: StatusIndicatorProps) {
	const status = $derived((props.status ?? 'online') as TokenAvailability);
	const appearance = $derived((props.appearance ?? 'neutral') as TokenAppearance);
	const label = $derived(props.label ?? '');
	
	// Enhanced mode props (legacy status-indicator-with-label)
	const customColor = $derived(props.customColor);
	const size = $derived(props.size ?? 'md');
	const showLabel = $derived(props.showLabel ?? true);
	const indicatorClass = $derived(props.indicatorClass ?? '');
	const labelClass = $derived(props.labelClass ?? '');
	
	const isSimpleMode = $derived(props.appearance === undefined && !props.customColor);
	
	// Simple mode classes
	const classes = $derived(IndicatorsStyleManager.getStatusIndicatorContainerClasses(props.class ?? ''));
	const dotClasses = $derived(
		isSimpleMode
			? IndicatorsStyleManager.getStatusIndicatorDotClasses(
					status as Parameters<typeof IndicatorsStyleManager.getStatusIndicatorDotClasses>[0]
			  )
			: ''
	);
	
	// Enhanced mode classes
	const containerClasses = $derived(
		isSimpleMode
			? classes
			: IndicatorsStyleManager.getStatusIndicatorWithLabelContainerClasses(props.class ?? '')
	);
	const indicatorClasses = $derived(
		isSimpleMode
			? dotClasses
			: IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses(
					appearance,
					size as Parameters<typeof IndicatorsStyleManager.getStatusIndicatorWithLabelIndicatorClasses>[1],
					customColor,
					indicatorClass
			  )
	);
	const indicatorStyle = $derived(
		customColor ? `background-color: ${customColor};` : ''
	);
	const labelClasses = $derived(
		IndicatorsStyleManager.getStatusIndicatorWithLabelLabelClasses(labelClass)
	);

	return {
		get status() {
			return status;
		},
		get label() {
			return label;
		},
		get appearance() {
			return appearance;
		},
		get customColor() {
			return customColor;
		},
		get size() {
			return size;
		},
		get showLabel() {
			return showLabel;
		},
		get indicatorClass() {
			return indicatorClass;
		},
		get labelClass() {
			return labelClass;
		},
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
		get isSimpleMode() {
			return isSimpleMode;
		}
	};
}

export default createStatusIndicatorState;






