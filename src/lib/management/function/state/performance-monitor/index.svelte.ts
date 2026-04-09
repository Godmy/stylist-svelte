import type { PerformanceMonitorRecipe } from '$stylist/management/interface/recipe/performance-monitor';
import { PerformanceMonitorStyleManager } from '$stylist/management/class/style-manager/performance-monitor';
import { ObjectManagerPerformanceMonitor } from '$stylist/management/class/object-manager/performance-monitor';

export function createPerformanceMonitorState(props: PerformanceMonitorRecipe) {
  // Props with defaults
  const label = $derived(props.label ?? '');
  const value = $derived(props.value ?? 0);
  const max = $derived(props.max ?? 100);
  const unit = $derived(props.unit ?? '%');
  const status = $derived(props.status ?? 'normal');
  const className = $derived(props.class ?? '');

  // Computed
  const classNameStr = $derived(className == null ? undefined : String(className));
  const numericValue = $derived(typeof value === 'number' ? value : Number(value) || 0);
  const numericMax = $derived(typeof max === 'number' ? max : Number(max) || 100);

  const percentage = $derived(
    ObjectManagerPerformanceMonitor.resolvePercentage(numericValue, numericMax)
  );
  const progressWidth = $derived(ObjectManagerPerformanceMonitor.resolveProgressWidth(percentage));
  const statusBarClass = $derived(ObjectManagerPerformanceMonitor.resolveStatusBarClass(status));

  // CSS classes
  const containerClasses = $derived(PerformanceMonitorStyleManager.getContainerClasses(classNameStr));
  const headerClasses = $derived(PerformanceMonitorStyleManager.getHeaderClasses());
  const titleClasses = $derived(PerformanceMonitorStyleManager.getTitleClasses());
  const valueClasses = $derived(PerformanceMonitorStyleManager.getValueClasses());
  const trackClasses = $derived(PerformanceMonitorStyleManager.getTrackClasses());
  const barClasses = $derived(PerformanceMonitorStyleManager.getBarClasses(statusBarClass));

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
    get valueClasses() {
      return valueClasses;
    },
    get trackClasses() {
      return trackClasses;
    },
    get barClasses() {
      return barClasses;
    }
  };
}

export default createPerformanceMonitorState;
