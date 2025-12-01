<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Option = {
    value: string;
    label: string;
    icon?: string; // Could be a string identifier for an icon
    disabled?: boolean;
  };

  type Props = {
    options: Option[];
    value?: string | string[]; // Single value for single selection, array for multi selection
    multiple?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    inactiveButtonClass?: string;
    onInput?: (value: string | string[]) => void;
    onChange?: (value: string | string[]) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    options = [],
    value = '',
    multiple = false,
    disabled = false,
    size = 'md',
    class: className = '',
    buttonClass = '',
    activeButtonClass = '',
    inactiveButtonClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedValues = $state<string[]>(Array.isArray(value) ? value : value ? [value] : []);

  // Update local state when value prop changes
  $effect(() => {
    const newValue = Array.isArray(value) ? value : value ? [value] : [];
    if (JSON.stringify(selectedValues) !== JSON.stringify(newValue)) {
      selectedValues = newValue;
    }
  });

  function handleToggle(optionValue: string) {
    if (disabled || options.find(opt => opt.value === optionValue)?.disabled) return;
    
    let newValues: string[];
    
    if (multiple) {
      // For multiple selection, toggle the value
      if (selectedValues.includes(optionValue)) {
        newValues = selectedValues.filter(v => v !== optionValue);
      } else {
        newValues = [...selectedValues, optionValue];
      }
    } else {
      // For single selection, just set the value
      newValues = selectedValues.includes(optionValue) ? [] : [optionValue];
    }
    
    selectedValues = newValues;
    
    // Notify parent component
    if (onInput) {
      onInput(multiple ? newValues : newValues[0] || '');
    }
    if (onChange) {
      onChange(multiple ? newValues : newValues[0] || '');
    }
  }

  let sizeClasses = $derived(() => {
    return size === 'sm' ? 'text-xs px-2 py-1' : 
           size === 'md' ? 'text-sm px-3 py-2' :
           size === 'lg' ? 'text-base px-4 py-3' :
           'text-sm px-3 py-2'; // default to md
  });

  function isSelected(optionValue: string) {
    return selectedValues.includes(optionValue);
  }
</script>

<div class={`inline-flex rounded-md shadow-sm ${className}`} role="group" {...restProps}>
  {#each options as option, index}
    <button
      type="button"
      class={`relative inline-flex items-center border ${
        index === 0 ? 'rounded-l-md' : 
        index === options.length - 1 ? 'rounded-r-md' : 
        '-ml-px'
      } border-gray-300 font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
        isSelected(option.value) 
          ? `bg-blue-500 text-white ${activeButtonClass}` 
          : `bg-white text-gray-700 hover:bg-gray-50 ${inactiveButtonClass}`
      } ${
        option.disabled || disabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'cursor-pointer'
      } ${sizeClasses} ${buttonClass}`}
      onclick={() => handleToggle(option.value)}
      disabled={option.disabled || disabled}
      aria-pressed={isSelected(option.value)}
    >
      {option.label}
    </button>
  {/each}
</div>