<script lang="ts">
  
  import type { PerformanceMonitorRecipe } from '$stylist/analytics/interface/recipe/performance-monitor';
  import { PerformanceMonitorStyleManager } from '$stylist/analytics/class/style-manager/performance-monitor';
  import { ObjectManagerPerformanceMonitor } from '$stylist/analytics/class/object-manager/performance-monitor';

  let {
    label = '',
    value = 0,
    max = 100,
    unit = '%',
    status = 'normal',
    class: className = ''
  }: PerformanceMonitorRecipe = $props();

  const classNameStr = className == null ? undefined : String(className);
  const numericValue = $derived(typeof value === 'number' ? value : Number(value) || 0);
  const numericMax = $derived(typeof max === 'number' ? max : Number(max) || 0);

  const percentage = $derived(
    ObjectManagerPerformanceMonitor.resolvePercentage(numericValue, numericMax)
  );
  const progressWidth = $derived(ObjectManagerPerformanceMonitor.resolveProgressWidth(percentage));
  const statusBarClass = $derived(ObjectManagerPerformanceMonitor.resolveStatusBarClass(status));
  const containerClasses = $derived(PerformanceMonitorStyleManager.getContainerClasses(classNameStr));
  const headerClasses = $derived(PerformanceMonitorStyleManager.getHeaderClasses());
  const titleClasses = $derived(PerformanceMonitorStyleManager.getTitleClasses());
  const valueClasses = $derived(PerformanceMonitorStyleManager.getValueClasses());
  const trackClasses = $derived(PerformanceMonitorStyleManager.getTrackClasses());
  const barClasses = $derived(PerformanceMonitorStyleManager.getBarClasses(statusBarClass));
</script>

<div class={containerClasses}>
  <div class={headerClasses}>
    <h3 class={titleClasses}>{label}</h3>
    <span class={valueClasses}>{percentage}{unit}</span>
  </div>
  <div class={trackClasses}>
    <div
      class={barClasses}
      style={`width: ${progressWidth}`}
    ></div>
  </div>
</div>






