<script lang="ts">
  import type { IStatusIndicatorWithLabelProps } from './types';
  import { StatusIndicatorWithLabelStyleManager } from './styles';

  let {
    status = 'neutral',
    label = 'Status',
    customColor,
    size = 'md',
    showLabel = true,
    class: className = '',
    indicatorClass = '',
    labelClass = '',
    ...restProps
  }: IStatusIndicatorWithLabelProps = $props();

  const containerClasses = StatusIndicatorWithLabelStyleManager.getContainerClasses(className);
  const indicatorSizeClasses = StatusIndicatorWithLabelStyleManager.getIndicatorSizeClasses(size);
  const indicatorStatusClasses = StatusIndicatorWithLabelStyleManager.getIndicatorStatusClasses(status, customColor, indicatorClass);
  const labelClasses = StatusIndicatorWithLabelStyleManager.getLabelClasses(labelClass);
</script>

<div class={containerClasses} {...restProps}>
  <span class={`${indicatorStatusClasses} ${indicatorSizeClasses}`}></span>
  {#if showLabel}
    <span class={labelClasses}>{label}</span>
  {/if}
</div>