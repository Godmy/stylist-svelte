import { untrack } from 'svelte';
import type { TokenTimeRange } from '$stylist/management/type/alias/token-time-range';
import { ObjectManagerPerformanceDashboard } from '$stylist/management/class/object-manager/performance-dashboard';
import type { PerformanceDashboardStateProps } from '$stylist/management/interface/recipe/performance-dashboard-performance-dashboard-state-props';

export function createPerformanceDashboardState(props: PerformanceDashboardStateProps) {
	const label = $derived(props.label ?? 'Performance Dashboard');
	const subtitle = $derived(props.subtitle);
	const metrics = $derived(props.metrics ?? []);
	const timeRange = $derived(props.timeRange ?? '7d');
	const showTimeRangeSelector = $derived(props.showTimeRangeSelector ?? true);
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');

	const className = $derived(props.class ?? '');
	const headerClass = $derived(props.headerClass ?? '');
	const metricsClass = $derived(props.metricsClass ?? '');
	const metricCardClass = $derived(props.metricCardClass ?? '');

	const classNameStr = $derived(className == null ? undefined : String(className));
	const headerClassStr = $derived(headerClass == null ? undefined : String(headerClass));
	const metricsClassStr = $derived(metricsClass == null ? undefined : String(metricsClass));
	const metricCardClassStr = $derived(
		metricCardClass == null ? undefined : String(metricCardClass)
	);
	const headerClassComputed = $derived(headerClassStr);
	const metricCardClassComputed = $derived(metricCardClassStr);

	let selectedTimeRange = $state(untrack(() => timeRange));
	const timeRanges = ObjectManagerPerformanceDashboard.resolveTimeRanges();
	const chartBarHeights = ObjectManagerPerformanceDashboard.resolveChartBarHeights();

	function handleTimeRangeChange(range: TokenTimeRange): void {
		selectedTimeRange = ObjectManagerPerformanceDashboard.selectTimeRange(
			range,
			props.onTimeRangeChange
		);
	}

	function getTimeRangeLabel(range: TokenTimeRange): string {
		return ObjectManagerPerformanceDashboard.resolveTimeRangeLabel(range);
	}

	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			subtitle: _subtitle,
			metrics: _metrics,
			timeRange: _timeRange,
			onTimeRangeChange: _onTimeRangeChange,
			showTimeRangeSelector: _showTimeRangeSelector,
			headerClass: _headerClass,
			metricsClass: _metricsClass,
			metricCardClass: _metricCardClass,
			variant: _variant,
			size: _size,
			...rest
		} = props;
		return rest;
	});

	const containerClass = $derived(['performance-dashboard', classNameStr].filter(Boolean).join(' '));
	const activeTimeRangeButtonClass = 'performance-dashboard__active-time-range-button';
	const timeRangeButtonClass = 'performance-dashboard__time-range-button';
	const metricsGridClass = $derived(['performance-dashboard__metrics-grid', metricsClassStr].filter(Boolean).join(' '));
	const metricHeaderClass = 'performance-dashboard__metric-header';
	const trendPositiveClass = 'performance-dashboard__trend-positive';
	const trendNegativeClass = 'performance-dashboard__trend-negative';
	const metricTitleClass = 'performance-dashboard__metric-title';
	const metricValueClass = 'performance-dashboard__metric-value';
	const chartContainerClass = 'performance-dashboard__chart-container';
	const chartBarClass = 'performance-dashboard__chart-bar';

	return {
		get containerClass() {
			return containerClass;
		},
		get activeTimeRangeButtonClass() {
			return activeTimeRangeButtonClass;
		},
		get timeRangeButtonClass() {
			return timeRangeButtonClass;
		},
		get metricsGridClass() {
			return metricsGridClass;
		},
		get metricHeaderClass() {
			return metricHeaderClass;
		},
		get trendPositiveClass() {
			return trendPositiveClass;
		},
		get trendNegativeClass() {
			return trendNegativeClass;
		},
		get metricTitleClass() {
			return metricTitleClass;
		},
		get metricValueClass() {
			return metricValueClass;
		},
		get chartContainerClass() {
			return chartContainerClass;
		},
		get chartBarClass() {
			return chartBarClass;
		},
		get label() {
			return label;
		},
		get subtitle() {
			return subtitle;
		},
		get metrics() {
			return metrics;
		},
		get timeRange() {
			return timeRange;
		},
		get showTimeRangeSelector() {
			return showTimeRangeSelector;
		},
		get selectedTimeRange() {
			return selectedTimeRange;
		},
		get timeRanges() {
			return timeRanges;
		},
		get chartBarHeights() {
			return chartBarHeights;
		},
		get headerClassComputed() {
			return headerClassComputed;
		},
		get metricCardClassComputed() {
			return metricCardClassComputed;
		},
		get restProps() {
			return restProps;
		},
		handleTimeRangeChange,
		getTimeRangeLabel
	};
}

export default createPerformanceDashboardState;
