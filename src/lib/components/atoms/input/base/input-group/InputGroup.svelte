<script lang="ts">
  import { Button, Input } from '$lib/components/atoms';
  import type { IInputGroupProps } from './types';
  import { createEventDispatcher } from 'svelte';
  import { getInputGroupContainerClasses, getInputGroupInputClasses, getInputGroupButtonClasses } from './styles';

  // Define the button variant type to exclude 'info' if it's not supported
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';

  let {
    id = '',
    label = '',
    value = '',
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
  <Input
    id={id}
    label={label}
    bind:value
    placeholder={placeholder}
    disabled={disabled}
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
