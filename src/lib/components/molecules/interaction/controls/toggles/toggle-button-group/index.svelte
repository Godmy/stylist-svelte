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
    onValueInput?: (value: string | string[]) => void;
    onValueChange?: (value: string | string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string | string[]) => void;
    /** @deprecated use onValueChange */
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
    onValueInput,
    onValueChange,
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
    const nextValue = multiple ? newValues : newValues[0] || '';
    onValueInput?.(nextValue);
    onValueChange?.(nextValue);
    onInput?.(nextValue);
    onChange?.(nextValue);
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
      } border-[var(--color-border-primary)] font-medium focus:z-[var(--z-index-docked)] focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-[var(--color-primary-500)] ${
        isSelected(option.value) 
          ? `bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] ${activeButtonClass}` 
          : `bg-[var(--color-background-primary)] text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] ${inactiveButtonClass}`
      } ${
        option.disabled || disabled 
          ? 'opacity-[var(--opacity-50)] cursor-not-allowed' 
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





