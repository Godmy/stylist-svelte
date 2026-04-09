<script lang="ts">
  import { Icon } from '$stylist';
  import { createLegendItemState, type LegendItemType, type LegendItemVariant } from '$stylist/management/function/state/legend-item';

  let props: Parameters<typeof createLegendItemState>[0] = $props();
  const state = createLegendItemState(props);
</script>

<div
  class={state.itemClasses}
  onclick={state.handleClick}
  role={props.onClick ? "button" : undefined}
  {...(props.onClick ? {tabindex: 0} : {})}
  onkeydown={state.handleKeyDown}
>
  <div class={state.iconClasses}>
    <Icon name={state.getIconName(state.type)} size="sm" />
  </div>
  <div class={state.labelClasses}>{state.label}</div>
  {#if state.count > 0}
    <div class={state.countClasses}>{state.count}</div>
  {/if}
</div>
