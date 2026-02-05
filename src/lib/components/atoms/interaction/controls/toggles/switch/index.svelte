<script lang="ts">
  import type { SwitchProps } from '$stylist/design-system/attributes';
  import { createSwitchState } from '../../state.svelte';

  let props: SwitchProps = $props();

  let checked = $state(props.checked ?? false);

  $effect(() => {
    // Update local state when props change
    if (props.checked !== undefined) {
      checked = props.checked;
    }
  });

  const switchState = createSwitchState(props);

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

<label class={switchState.labelClasses}>
  <span class={switchState.trackClasses}>
    <input
      id={props.id}
      type="checkbox"
      class={switchState.inputClasses}
      bind:checked={checked}
      disabled={switchState.disabled}
      required={switchState.required}
      aria-describedby={props.description ? `${props.id}-description` : undefined}
      {...restProps}
    />
    <span aria-hidden="true" class={switchState.knobClasses}></span>
  </span>

  {#if props.label || props.description}
    <span class={switchState.labelTextClasses}>
      {#if props.label}
        <span class={switchState.labelTitleClasses}>
          {props.label}
          {#if switchState.required}
            <span class={switchState.requiredMarkerClasses} aria-hidden="true">*</span>
          {/if}
        </span>
      {/if}
      {#if props.description}
        <span id={`${props.id}-description`} class={switchState.labelDescriptionClasses}>
          {props.description}
        </span>
      {/if}
    </span>
  {/if}
</label>
