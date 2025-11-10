<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Option = {
    value: string;
    label: string;
    disabled?: boolean;
  };

  type Props = {
    options: Option[];
    value?: string;
    name?: string;
    disabled?: boolean;
    required?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    optionClass?: string;
    labelClass?: string;
    radioClass?: string;
    onInput?: (value: string) => void;
    onChange?: (value: string) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    options = [],
    value = '',
    name = 'radio-group',
    disabled = false,
    required = false,
    orientation = 'vertical',
    class: className = '',
    optionClass = '',
    labelClass = '',
    radioClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedValue = $state(value);

  // Update local state when value prop changes
  $effect(() => {
    if (selectedValue !== value) {
      selectedValue = value;
    }
  });

  function handleInput(optionValue: string) {
    selectedValue = optionValue;
    
    if (onInput) {
      onInput(optionValue);
    }
  }

  function handleChange(optionValue: string) {
    selectedValue = optionValue;
    
    if (onChange) {
      onChange(optionValue);
    }
  }
</script>

<div class={`space-y-2 ${className} ${orientation === 'horizontal' ? 'flex flex-row space-y-0 space-x-6' : ''}`} {...restProps}>
  {#each options as option}
    <label 
      class={`flex items-center ${
        option.disabled || disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${optionClass} ${
        orientation === 'horizontal' ? 'mr-6' : 'mb-2'
      }`}
    >
      <input
        type="radio"
        name={name}
        class={`h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 ${radioClass}`}
        bind:group={selectedValue}
        value={option.value}
        oninput={() => handleInput(option.value)}
        onchange={() => handleChange(option.value)}
        disabled={option.disabled || disabled}
        required={required}
      />
      <span class={`ml-2 block text-sm font-medium text-gray-700 ${labelClass}`}>
        {option.label}
      </span>
    </label>
  {/each}
</div>
