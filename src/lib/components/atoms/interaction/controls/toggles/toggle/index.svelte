<script lang="ts">
  import type { ToggleProps } from '$stylist/design-system/interaction/controls/toggles/toggle';
  import { createToggleState } from '../../state.svelte';

  let props: ToggleProps = $props();

  let checked = $state(props.checked ?? false);

  $effect(() => {
    // Update local state when props change
    if (props.checked !== undefined) {
      checked = props.checked;
    }
  });

  const state = createToggleState(props);

  const restProps = $derived((() => {
    const { checked: _checked, disabled: _disabled, toggleSize: _toggleSize, class: _class, ...rest } = props;
    return rest;
  })());
</script>

<div class={state.containerClasses}>
  <input
    type="checkbox"
    bind:checked={checked}
    disabled={state.disabled}
    class={state.inputClasses}
    {...restProps}
  />

  <div class={state.trackClasses} class:opacity-50={state.disabledClass}>
    <div class={state.thumbClasses}></div>
  </div>
</div>
