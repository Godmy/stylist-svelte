import { KPIIndicatorStyleManager } from '$stylist/typography/class/style-manager/kpi-indicator';
import { ObjectManagerKPIIndicator } from '$stylist/typography/class/object-manager/kpi-indicator';
import type { KPIIndicatorRecipe } from '$stylist/typography/interface/recipe/kpi-indicator';

export function createKPIIndicatorState(props: KPIIndicatorRecipe) {
	const label = $derived((props as any).label ?? '');
	const currentValue = $derived((props as any).currentValue ?? 0);
	const targetValue = $derived((props as any).targetValue ?? 0);
	const unit = $derived((props as any).unit ?? '');
	const status = $derived((props as any).status ?? 'on-track');
	const trend = $derived((props as any).trend ?? 'neutral');
	const trendValue = $derived((props as any).trendValue ?? 0);
	const size = $derived((props as any).size ?? 'md');
	const percentage = $derived(ObjectManagerKPIIndicator.resolvePercentage(currentValue, targetValue));
	const statusText = $derived(ObjectManagerKPIIndicator.resolveStatusText(status));
	const trendIcon = $derived(ObjectManagerKPIIndicator.resolveTrendIconName(trend));
	const containerClasses = $derived(`${KPIIndicatorStyleManager.getContainerClasses(size)} ${KPIIndicatorStyleManager.getStatusColorClasses(status)} ${props.class ?? ''}`.trim());
	const titleClasses = $derived(KPIIndicatorStyleManager.getTitleClasses(props.titleClass ?? ''));
	const valueClasses = $derived(KPIIndicatorStyleManager.getValueClasses(props.valueClass ?? ''));
	const trendColorClasses = $derived(KPIIndicatorStyleManager.getTrendColorClasses(trend));
	const progressTrackClasses = $derived(KPIIndicatorStyleManager.getProgressTrackClasses());
	const progressFillClasses = $derived(KPIIndicatorStyleManager.getProgressFillClasses());
	const restProps = $derived.by(() => {
		const {
			class: _class,
			label: _label,
			currentValue: _currentValue,
			targetValue: _targetValue,
			unit: _unit,
			status: _status,
			trend: _trend,
			trendValue: _trendValue,
			size: _size,
			titleClass: _titleClass,
			valueClass: _valueClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get label() { return label; },
		get currentValue() { return currentValue; },
		get targetValue() { return targetValue; },
		get unit() { return unit; },
		get status() { return status; },
		get trend() { return trend; },
		get trendValue() { return trendValue; },
		get size() { return size; },
		get percentage() { return percentage; },
		get statusText() { return statusText; },
		get trendIcon() { return trendIcon; },
		get containerClasses() { return containerClasses; },
		get titleClasses() { return titleClasses; },
		get valueClasses() { return valueClasses; },
		get trendColorClasses() { return trendColorClasses; },
		get progressTrackClasses() { return progressTrackClasses; },
		get progressFillClasses() { return progressFillClasses; },
		get restProps() { return restProps; }
	};
}

export default createKPIIndicatorState;






