<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент Chip (небольшая метка/тег)
   *
   * Компактный компонент для отображения небольших фрагментов информации
   * Приоритет: если передан `children`, он будет отображен,
   * иначе используется `label`, если он передан
   *
   * @param {string} [label=''] - Текст на чипе
   * @param {'primary' | 'secondary' | 'success' | 'warning' | 'danger'} [variant='primary'] - Вариант цветовой схемы
   * @param {'sm' | 'md' | 'lg'} [size='md'] - Размер чипа
   * @param {boolean} [closable=false] - Возможность закрытия чипа
   * @param {boolean} [disabled=false] - Отключенное состояние
   * @param {string} [class=''] - Дополнительные CSS классы
   * @param {Snippet} [children] - Содержимое чипа (альтернатива label)
   */
  // Define types for our props
  type ChipVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  type ChipSize = 'sm' | 'md' | 'lg';

  let {
    label = '',
    variant = 'primary',
    size = 'md',
    closable = false,
    disabled = false,
    children,
    class: className = '',
    ...restProps
  }: {
    label?: string;
    variant?: ChipVariant;
    size?: ChipSize;
    closable?: boolean;
    disabled?: boolean;
    children?: Snippet;
    class?: string;
  } & HTMLAttributes<any> = $props();

  // Размеры
  let sizeClasses = $derived({
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }[size as ChipSize]);

  // Цветовые классы
  let variantClasses = $derived({
    primary: 'bg-indigo-100 text-indigo-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  }[variant as ChipVariant]);
  
  // Классы для кнопки закрытия
  let closeBtnVariantClasses = $derived({
    primary: 'focus:ring-indigo-500 hover:bg-indigo-200',
    secondary: 'focus:ring-gray-500 hover:bg-gray-200',
    success: 'focus:ring-green-500 hover:bg-green-200',
    warning: 'focus:ring-yellow-500 hover:bg-yellow-200',
    danger: 'focus:ring-red-500 hover:bg-red-200'
  }[variant as ChipVariant]);
  
  let closeBtnSizeClasses = $derived({
    sm: 'w-3 h-3 ml-1',
    md: 'w-3.5 h-3.5 ml-1',
    lg: 'w-4 h-4 ml-1'
  }[size as ChipSize]);
</script>

<div 
  class={`inline-flex items-center rounded-full font-medium ${sizeClasses} ${variantClasses} ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-default'
  } ${className}`}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else}
    {label}
  {/if}
  
  {#if closable}
    <button
      class={`ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 ${closeBtnVariantClasses}`}
      aria-label="Закрыть"
      disabled={disabled}
    >
      <svg class={`${closeBtnSizeClasses}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  {/if}
</div>