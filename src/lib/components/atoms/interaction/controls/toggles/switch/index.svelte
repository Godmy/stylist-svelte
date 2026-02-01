<script lang="ts">
  import type { SwitchProps } from '$stylist/design-system/interaction/controls/toggles/switch';
  import { createSwitchState } from '../../state.svelte';

  let props: SwitchProps = $props();

  let checked = $state(props.checked ?? false);

  $effect(() => {
    // Update local state when props change
    if (props.checked !== undefined) {
      checked = props.checked;
    }
  });

  const state = createSwitchState(props);

  const restProps = $derived((() => {
    const {
      id: _id,
      label: _label,
      description: _description,
      checked: _checked,
      disabled: _disabled,
      switchSize: _switchSize,
      required: _required,
      class: _class,
      ...rest
    } = props;
    return rest;
  })());
</script>

<label class={state.labelClasses}>
  <span class={state.trackClasses}>
    <input
      id={props.id}
      type="checkbox"
      class={state.inputClasses}
      bind:checked={checked}
      disabled={state.disabled}
      required={state.required}
      aria-describedby={props.description ? `${props.id}-description` : undefined}
      {...restProps}
    />
    <span aria-hidden="true" class={state.knobClasses}></span>
  </span>

  {#if props.label || props.description}
    <span class={state.labelTextClasses}>
      {#if props.label}
        <span class={state.labelTitleClasses}>
          {props.label}
          {#if state.required}
            <span class={state.requiredMarkerClasses} aria-hidden="true">*</span>
          {/if}
        </span>
      {/if}
      {#if props.description}
        <span id={`${props.id}-description`} class={state.labelDescriptionClasses}>
          {props.description}
        </span>
      {/if}
    </span>
  {/if}
</label>
