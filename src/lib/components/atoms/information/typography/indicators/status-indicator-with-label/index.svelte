<script lang="ts">
  import type { StatusIndicatorWithLabelProps } from '$stylist/design-system/typography/indicators/status-indicator-with-label';
  import { createStatusIndicatorWithLabelState } from '../../state.svelte';

  let props: StatusIndicatorWithLabelProps = $props();

  const state = createStatusIndicatorWithLabelState(props);

  const restProps = $derived((() => {
    const {
      class: _class,
      status: _status,
      label: _label,
      customColor: _customColor,
      size: _size,
      showLabel: _showLabel,
      indicatorClass: _indicatorClass,
      labelClass: _labelClass,
      ...rest
    } = props;
    return rest;
  })());
</script>

<div class={state.containerClasses} {...restProps}>
  <span class={`${state.indicatorStatusClasses} ${state.indicatorSizeClasses}`}></span>
  {#if state.showLabel}
    <span class={state.labelClasses}>{state.label}</span>
  {/if}
</div>
