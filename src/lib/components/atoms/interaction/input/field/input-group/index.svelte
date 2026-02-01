<script lang="ts">
  import { Button, InputText } from '$stylist/components/atoms';
  import type { IInputGroupProps } from '$stylist/design-system/interaction/input/field/input-group';
  import { createEventDispatcher } from 'svelte';
  import { getInputGroupContainerClasses, getInputGroupInputClasses, getInputGroupButtonClasses } from '$stylist/design-system/interaction/input/field/input-group';

  // Define the button variant type to exclude 'info' if it's not supported
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';

  let {
    id = '',
    label = '',
    value = $bindable<string>(),
    placeholder = '',
    disabled = false,
    buttonLabel = '',
    buttonVariant = 'primary',
    buttonDisabled = false,
    className = '',
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

  let containerClasses = $derived(getInputGroupContainerClasses());
  let inputClasses = $derived(getInputGroupInputClasses(className));
  let buttonClasses = $derived(getInputGroupButtonClasses());
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


