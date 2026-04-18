import { MetricCardStyleManager } from '$stylist/information/class/style-manager/metric-card';
import { ObjectManagerMetricCard } from '$stylist/information/class/object-manager/metric-card';
import type { MetricCardStateProps } from '$stylist/information/interface/recipe/metric-card-metric-card-state-props';

export function createMetricCardState(props: MetricCardStateProps) {
	// Props with defaults
	const label = props.label;
	const value = props.value;
	const max = props.max;
	const percentage = props.percentage;
	const description = props.description;
	const variant = props.variant ?? 'info';
	const showProgressBar = props.showProgressBar ?? true;
	const propClassName = props.class ?? '';

	// Classes
	const containerClasses = $derived(MetricCardStyleManager.getContainerClasses(propClassName));
	const titleClasses = $derived(MetricCardStyleManager.getTitleClasses());
	const valueClasses = $derived(MetricCardStyleManager.getValueClasses());
	const descriptionClasses = $derived(MetricCardStyleManager.getDescriptionClasses());
	const progressBarContainerClasses = $derived(MetricCardStyleManager.getProgressBarContainerClasses());
	const progressBarClasses = $derived(MetricCardStyleManager.getProgressBarClasses());
	const progressBarFillClasses = $derived(MetricCardStyleManager.getProgressBarFillClasses(variant, percentage));
	const percentageClasses = $derived(MetricCardStyleManager.getPercentageClasses(variant));
	const progressBarWidth = $derived(ObjectManagerMetricCard.resolveProgressBarWidth(percentage));

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			value: _value,
			max: _max,
			percentage: _percentage,
			description: _description,
			variant: _variant,
			showProgressBar: _showProgressBar,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() {
			return label;
		},
		get value() {
			return value;
		},
		get max() {
			return max;
		},
		get percentage() {
			return percentage;
		},
		get description() {
			return description;
		},
		get variant() {
			return variant;
		},
		get showProgressBar() {
			return showProgressBar;
		},
		get containerClasses() {
			return containerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get valueClasses() {
			return valueClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get progressBarContainerClasses() {
			return progressBarContainerClasses;
		},
		get progressBarClasses() {
			return progressBarClasses;
		},
		get progressBarFillClasses() {
			return progressBarFillClasses;
		},
		get percentageClasses() {
			return percentageClasses;
		},
		get progressBarWidth() {
			return progressBarWidth;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createMetricCardState;
