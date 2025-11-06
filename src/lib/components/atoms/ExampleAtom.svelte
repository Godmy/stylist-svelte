<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент ExampleAtom
   * Приоритет: если передан `children`, он будет отображен,
   * иначе используется `label`, если он передан
   */
  // Типы пропсов для атома
  type ExampleAtomVariant = 'primary' | 'secondary' | 'accent';
  type ExampleAtomSize = 'sm' | 'md' | 'lg';

  type ExampleAtomProps = {
    variant?: ExampleAtomVariant;
    size?: ExampleAtomSize;
    disabled?: boolean;
    label?: string;
    children?: Snippet;
  } & HTMLButtonAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    label,
    children,
    class: className = '',
    ...restProps
  }: ExampleAtomProps = $props();

  // Определение CSS классов на основе пропсов
  let variantClasses = $derived(
    variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
    variant === 'secondary' ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' :
    'bg-purple-600 hover:bg-purple-700 text-white'
  );

  let sizeClasses = $derived(
    size === 'sm' ? 'px-2 py-1 text-sm' :
    size === 'lg' ? 'px-6 py-3 text-lg' :
    'px-4 py-2 text-base'
  );

  let disabledClass = $derived(
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  );

  let classes = $derived(`inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${className}`);
</script>

<button 
  {...restProps} 
  class={classes}
  disabled={disabled}
>
  {#if children}
    {@render children()}
  {:else}
    {label}
  {/if}
</button>