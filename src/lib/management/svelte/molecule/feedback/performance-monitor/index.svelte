<script lang="ts">
  import type { PerformanceMonitorRecipe } from '$stylist/management/interface/recipe/performance-monitor';
  import { createPerformanceMonitorState } from '$stylist/management/function/state/performance-monitor';

  let {
    label = '',
    value = 0,
    max = 100,
    unit = '%',
    status = 'normal',
    class: className = ''
  }: PerformanceMonitorRecipe = $props();

  const state = createPerformanceMonitorState({
    label,
    value,
    max,
    unit,
    status,
    class: className
  });
</script>

<div class={state.containerClasses}>
  <div class={state.headerClasses}>
    <h3 class={state.titleClasses}>{state.label}</h3>
    <span class={state.valueClasses}>{state.percentage}{state.unit}</span>
  </div>
  <div class={state.trackClasses}>
    <div
      class={state.barClasses}
      style={`width: ${state.progressWidth}`}
    ></div>
  </div>
</div>
