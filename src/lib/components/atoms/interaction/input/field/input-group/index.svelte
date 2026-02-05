<script lang="ts">
  import { Button, InputText } from '$stylist/components/atoms';
  import type { IInputGroupProps } from '$stylist/design-system/attributes';
  import { createInputGroupState } from '../state.svelte';
  import { createEventDispatcher } from 'svelte';

  let {
    id = '',
    label = '',
    value = $bindable<string>(),
    placeholder = '',
    disabled = false,
    buttonLabel = '',
    buttonVariant = 'primary',
    buttonDisabled = false,
    class: className = '',
    onButtonClick = () => {}
  }: IInputGroupProps = $props();

  const dispatch = createEventDispatcher();

  // Track value changes to dispatch events
  let previousValue = $state(value);

  $effect(() => {
    if (previousValue !== value && previousValue !== undefined) {
      dispatch('input', { value });
      dispatch('change', { value });
    }
    previousValue = value;
  });

  function handleClick() {
    if (!buttonDisabled) {
      onButtonClick();
    }
  }

  const state = $derived(createInputGroupState(className));
  let containerClasses = $derived(state.containerClasses);
  let inputClasses = $derived(state.inputClasses);
  let buttonClasses = $derived(state.buttonClasses);
</script>

<div class={containerClasses}>
  <InputText
    id={id}
    {label}
    bind:value
    {placeholder}
    {disabled}
    class={inputClasses}
  />
  <Button
    variant={buttonVariant}
    disabled={buttonDisabled}
    class={buttonClasses}
    onclick={handleClick}
  >
    {buttonLabel}
  </Button>
</div>

