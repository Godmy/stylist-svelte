import type { HTMLAttributes } from 'svelte/elements';
import type { RecipePerformanceMonitor } from '$stylist/management/interface/recipe/performance-monitor';
import { PERFORMANCE_MONITOR_STATUS_COLOR } from '$stylist/management/const/map/performance-monitor-status-color';

export function createPerformanceMonitorState(
	props: RecipePerformanceMonitor & HTMLAttributes<HTMLDivElement>
) {
	// Props with defaults
	const label = $derived(props.title ?? '');
	const value = $derived(props.value ?? 0);
	const max = $derived(props.max ?? 100);
	const unit = $derived(props.unit ?? '%');
	const status = $derived(props.status ?? 'normal');
	const className = $derived(props.class ?? '');

	// Computed
	const classNameStr = $derived(className == null ? undefined : String(className));
	const numericValue = $derived(typeof value === 'number' ? value : Number(value) || 0);
	const numericMax = $derived(typeof max === 'number' ? max : Number(max) || 100);

	const percentage = $derived(numericMax === 0 ? 0 : Math.round((numericValue / numericMax) * 100));
	const progressWidth = $derived(`${Math.min(100, Math.max(0, percentage))}%`);
	const statusBarClass = $derived(PERFORMANCE_MONITOR_STATUS_COLOR[status]);

	// CSS classes

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
		get unit() {
			return unit;
		},
		get status() {
			return status;
		},
		get className() {
			return className;
		},
		get classNameStr() {
			return classNameStr;
		},
		get numericValue() {
			return numericValue;
		},
		get numericMax() {
			return numericMax;
		},
		get percentage() {
			return percentage;
		},
		get progressWidth() {
			return progressWidth;
		},
		get statusBarClass() {
			return statusBarClass;
		}
	};
}

export default createPerformanceMonitorState;
