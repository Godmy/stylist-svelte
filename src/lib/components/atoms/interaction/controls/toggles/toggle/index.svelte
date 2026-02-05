<script lang="ts">
  import type { ToggleProps } from '$stylist/design-system/attributes';
  import { createToggleState } from '../../state.svelte';

  let props: ToggleProps = $props();

  let checked = $state(props.checked ?? false);

  $effect(() => {
    // Update local state when props change
    if (props.checked !== undefined) {
      checked = props.checked;
    }
  });

  const toggleState = createToggleState(props);

  const restProps = $derived((() => {
    const { checked: _checked, disabled: _disabled, toggleSize: _toggleSize, class: _class, ...rest } = props;
    return rest;
  })());
</script>

<div class={toggleState.containerClasses}>
  <input
    type="checkbox"
    bind:checked={checked}
    disabled={toggleState.disabled}
    class={toggleState.inputClasses}
    {...restProps}
  />

  <div class={toggleState.trackClasses} class:opacity-50={toggleState.disabledClass}>
    <div class={toggleState.thumbClasses}></div>
  </div>
</div>
