<script lang="ts">
  import Input from '../../../atoms/input/base/Input.svelte';
  import { Button } from '$lib/components/atoms';
  import type { HTMLInputAttributes } from 'svelte/elements';
  
  // Define the button variant type to exclude 'info' if it's not supported
  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';

  type InputGroupProps = {
    id?: string;
    label?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    buttonLabel?: string;
    buttonVariant?: ButtonVariant;
    buttonDisabled?: boolean;
    onButtonClick?: () => void;
  };

  let {
    id = '',
    label = '',
    value = '',
    placeholder = '',
    disabled = false,
    buttonLabel = '',
    buttonVariant = 'primary',
    buttonDisabled = false,
    onButtonClick = () => {},
    ...restProps
  }: InputGroupProps & Omit<HTMLInputAttributes, 'value' | 'type' | 'min' | 'max' | 'step' | 'required' | 'errors'> = $props();

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
    bind:value={value}
    placeholder={placeholder}
    disabled={disabled}
    class="rounded-none rounded-l-md focus:z-10 border-r-0"
    {...restProps}
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
