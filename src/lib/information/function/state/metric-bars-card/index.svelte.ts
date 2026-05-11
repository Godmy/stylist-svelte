import { MetricBarsCardStyleManager } from '$stylist/information/class/style-manager/metric-bars-card';
import type { MetricBarsCardRecipe } from '$stylist/information/interface/recipe/metric-bars-card';

export function createMetricBarsCardState(props: MetricBarsCardRecipe) {
	const label = $derived(props.label ?? '');
	const caption = $derived(props.caption);
	const total = $derived(props.total);
	const bars = $derived(props.bars ?? []);
	const color = $derived(props.color ?? 'var(--color-primary-500)');
	const trackColor = $derived(props.trackColor ?? 'var(--color-neutral-200)');
	const containerClasses = $derived(
		MetricBarsCardStyleManager.getContainerClasses(props.class == null ? '' : String(props.class))
	);
	const headerClasses = $derived(MetricBarsCardStyleManager.getHeaderClasses());
	const titleClasses = $derived(MetricBarsCardStyleManager.getTitleClasses());
	const captionClasses = $derived(MetricBarsCardStyleManager.getCaptionClasses());
	const totalClasses = $derived(MetricBarsCardStyleManager.getTotalClasses());
	const barsClasses = $derived(MetricBarsCardStyleManager.getBarsClasses());
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			caption: _caption,
			total: _total,
			bars: _bars,
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
		get caption() {
			return caption;
		},
		get total() {
			return total;
		},
		get bars() {
			return bars;
		},
		get color() {
			return color;
		},
		get trackColor() {
			return trackColor;
		},
		get containerClasses() {
			return containerClasses;
		},
		get headerClasses() {
			return headerClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get captionClasses() {
			return captionClasses;
		},
		get totalClasses() {
			return totalClasses;
		},
		get barsClasses() {
			return barsClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createMetricBarsCardState;
