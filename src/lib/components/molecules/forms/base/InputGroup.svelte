<script lang="ts">
  import { Button, Input } from '$lib/components/atoms';
  import { createEventDispatcher } from 'svelte';

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
  } = $props<{
    id?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    buttonLabel?: string;
    buttonVariant?: ButtonVariant;
    buttonDisabled?: boolean;
    className?: string;
    onButtonClick?: () => void;
  }>();

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
</script>

<div class="flex rounded-md shadow-sm">
  <Input
    id={id}
    label={label}
    bind:value
    placeholder={placeholder}
    disabled={disabled}
    class={`rounded-none rounded-l-md focus:z-10 border-r-0 ${className}`.trim()}
  />
  <Button
    variant={buttonVariant}
    disabled={buttonDisabled}
    class="rounded-none rounded-r-md -ml-px"
    onclick={handleClick}
  >
    {buttonLabel}
  </Button>
</div>
