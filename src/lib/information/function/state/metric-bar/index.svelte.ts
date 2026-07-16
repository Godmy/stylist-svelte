import { ObjectManagerMetricBar } from '$stylist/information/class/object-manager/metric-bar';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import type { RecipeMetricBar } from '$stylist/information/interface/recipe/metric-bar';

export function createMetricBarState(props: RecipeMetricBar) {
	const label = $derived(props.label ?? '');
	const percentage = $derived(ObjectManagerMetricBar.resolvePercentage(props));
	const valueLabel = $derived(ObjectManagerMetricBar.resolveValueLabel(props));
	const color = $derived(props.color ?? 'var(--color-primary-500)');
	const trackColor = $derived(props.trackColor ?? 'var(--color-neutral-200)');
	const containerClasses = $derived(
		mergeClassNames('metric-bar', props.class == null ? '' : String(props.class))
	);
	const headerClasses = $derived('metric-bar__header');
	const labelClasses = $derived('metric-bar__label');
	const valueClasses = $derived('metric-bar__value');
	const trackClasses = $derived('metric-bar__track');
	const fillClasses = $derived('metric-bar__fill');
	const widthStyle = $derived(`width: ${percentage}%;`);
	const cssVariables = $derived(
		`--metric-bar-color: ${color}; --metric-bar-track-color: ${trackColor};`
	);
	const combinedStyle = $derived([props.style, cssVariables].filter(Boolean).join(' '));
	const restProps = $derived.by(() => {
		const {
			class: _class,
			style: _style,
			label: _label,
			value: _value,
			currentValue: _currentValue,
			targetValue: _targetValue,
			max: _max,
			percentage: _percentage,
			unit: _unit,
			valueLabel: _valueLabel,
			color: _color,
			trackColor: _trackColor,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() {
			return label;
		},
		get percentage() {
			return percentage;
		},
		get valueLabel() {
			return valueLabel;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get trackClasses() {
			return trackClasses;
		},
		get fillClasses() {
			return fillClasses;
		},
		get widthStyle() {
			return widthStyle;
		},
		get combinedStyle() {
			return combinedStyle;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createMetricBarState;
