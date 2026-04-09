import { PerformanceDashboardStyleManager } from '$stylist';
import type { PerformanceDashboardRecipe } from '$stylist/management/interface/recipe/performance-dashboard';
import type { TokenTimeRange } from '$stylist/management/type/enum/time-range';
import { ObjectManagerPerformanceDashboard } from '$stylist/management/class/object-manager/performance-dashboard';

export interface PerformanceDashboardStateProps extends PerformanceDashboardRecipe {}

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
	const metricCardClassStr = $derived(metricCardClass == null ? undefined : String(metricCardClass));

	let selectedTimeRange = $state(timeRange);
	const timeRanges = ObjectManagerPerformanceDashboard.resolveTimeRanges();
	const chartBarHeights = ObjectManagerPerformanceDashboard.resolveChartBarHeights();

	const containerClass = $derived(PerformanceDashboardStyleManager.getContainerClass(variant, size, classNameStr));
	const headerClassComputed = $derived(PerformanceDashboardStyleManager.getHeaderClass(headerClassStr));
	const timeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getTimeRangeButtonClass());
	const activeTimeRangeButtonClass = $derived(PerformanceDashboardStyleManager.getActiveTimeRangeButtonClass());
	const metricsGridClass = $derived(PerformanceDashboardStyleManager.getMetricsGridClass(metricsClassStr));
	const metricCardClassComputed = $derived(PerformanceDashboardStyleManager.getMetricCardClass(metricCardClassStr));
	const metricHeaderClass = $derived(PerformanceDashboardStyleManager.getMetricHeaderClass());
	const metricTitleClass = $derived(PerformanceDashboardStyleManager.getMetricTitleClass());
	const metricValueClass = $derived(PerformanceDashboardStyleManager.getMetricValueClass());
	const trendPositiveClass = $derived(PerformanceDashboardStyleManager.getTrendPositiveClass());
	const trendNegativeClass = $derived(PerformanceDashboardStyleManager.getTrendNegativeClass());
	const chartContainerClass = $derived(PerformanceDashboardStyleManager.getChartContainerClass());
	const chartBarClass = $derived(PerformanceDashboardStyleManager.getChartBarClass());

	function handleTimeRangeChange(range: TokenTimeRange): void {
		selectedTimeRange = ObjectManagerPerformanceDashboard.selectTimeRange(range, props.onTimeRangeChange);
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

	return {
		get label() { return label; },
		get subtitle() { return subtitle; },
		get metrics() { return metrics; },
		get timeRange() { return timeRange; },
		get showTimeRangeSelector() { return showTimeRangeSelector; },
		get selectedTimeRange() { return selectedTimeRange; },
		get timeRanges() { return timeRanges; },
		get chartBarHeights() { return chartBarHeights; },
		get containerClass() { return containerClass; },
		get headerClassComputed() { return headerClassComputed; },
		get timeRangeButtonClass() { return timeRangeButtonClass; },
		get activeTimeRangeButtonClass() { return activeTimeRangeButtonClass; },
		get metricsGridClass() { return metricsGridClass; },
		get metricCardClassComputed() { return metricCardClassComputed; },
		get metricHeaderClass() { return metricHeaderClass; },
		get metricTitleClass() { return metricTitleClass; },
		get metricValueClass() { return metricValueClass; },
		get trendPositiveClass() { return trendPositiveClass; },
		get trendNegativeClass() { return trendNegativeClass; },
		get chartContainerClass() { return chartContainerClass; },
		get chartBarClass() { return chartBarClass; },
		get restProps() { return restProps; },
		handleTimeRangeChange,
		getTimeRangeLabel
	};
}

export default createPerformanceDashboardState;
