<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Plus, Minus } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    variant?: 'default' | 'minimal' | 'filled';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    onValueChange?: (value: number) => void;
    onIncrement?: (value: number) => void;
    onDecrement?: (value: number) => void;
    showInput?: boolean;
    showButtons?: boolean;
    label?: string;
  };

  let {
    value = 1,
    min = 1,
    max = 99,
    step = 1,
    disabled = false,
    variant = 'default',
    size = 'md',
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    onValueChange,
    onIncrement,
    onDecrement,
    showInput = true,
    showButtons = true,
    label,
    ...restProps
  }: Props = $props();

  let quantity = $state(value);
  const inputId = `quantity-${Math.random().toString(36).slice(2, 9)}`;

  $effect(() => {
    quantity = value;
  });

  function increment() {
    if (disabled || quantity >= max) return;
    
    const newValue = Math.min(quantity + step, max);
    quantity = newValue;
    onValueChange?.(newValue);
    onIncrement?.(newValue);
  }

  function decrement() {
    if (disabled || quantity <= min) return;
    
    const newValue = Math.max(quantity - step, min);
    quantity = newValue;
    onValueChange?.(newValue);
    onDecrement?.(newValue);
  }

  function handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    let newValue = parseInt(target.value) || min;
    
    // Ensure value is within bounds and aligned to step
    newValue = Math.max(min, Math.min(max, newValue));
    if (step > 1) {
      newValue = Math.round(newValue / step) * step;
      newValue = Math.max(min, Math.min(max, newValue));
    }
    
    quantity = newValue;
    onValueChange?.(newValue);
  }

  let sizeClasses = $derived({
    'sm': 'text-sm px-2 py-1',
    'md': 'text-base px-3 py-2',
    'lg': 'text-lg px-4 py-3'
  }[size]);

  let variantClasses = $derived({
    'default': 'border border-gray-300 rounded-md shadow-sm',
    'minimal': 'border-b border-gray-300 focus:border-blue-500 focus:outline-none',
    'filled': 'bg-gray-100 border border-transparent rounded-md'
  }[variant]);

  function formatValue(value: number): string {
    return String(value);
  }

  let formattedValue = $derived(formatValue(quantity));
</script>

<div class={`quantity-selector ${variant} ${hostClass}`} {...restProps}>
  {#if label}
    <label for={inputId} class="block text-sm font-medium text-gray-700 mb-1">{label}</label>
  {/if}
  
  <div class="flex items-center">
    {#if showButtons}
      <button
        type="button"
        class={`flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10 ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${sizeClasses} ${buttonClass}`}
        onclick={decrement}
        disabled={disabled || quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus class="h-4 w-4" />
      </button>
    {/if}
    
    {#if showInput}
      <input
        id={inputId}
        type="number"
        class={`block w-16 text-center border-t border-b border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          !showButtons ? 'rounded-l-md' : ''
        } ${
          !showButtons ? 'rounded-r-md' : ''
        } ${sizeClasses} ${variantClasses} ${inputClass}`}
        value={quantity}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        oninput={handleInputChange}
        aria-label="Quantity selector"
      />
    {/if}
    
    {#if showButtons}
      <button
        type="button"
        class={`flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:z-10 ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${sizeClasses} ${buttonClass}`}
        onclick={increment}
        disabled={disabled || quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus class="h-4 w-4" />
      </button>
    {/if}
  </div>
</div>
