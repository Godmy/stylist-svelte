<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import type { VariantProps } from 'tailwind-variants';
  import { button } from './button.preset';

  // Пропсы компонента
  export let variant: ButtonVariant = 'primary';
  export let size: ButtonSize = 'md';
  export let disabled = false;
  export let loading = false;
  export let className: string = '';
  export let ariaLabel: string | undefined = undefined;
  export let loadingLabel: string | undefined = undefined;
  export let block = false;

  // Вычисляем CSS классы из пресета
  $: classes = button({
    variant,
    size,
    disabled,
    loading,
    class: className
  });

  // Определяем aria-label в зависимости от состояния загрузки
  $: computedAriaLabel = loading && loadingLabel ? loadingLabel : ariaLabel;
</script>

<script context="module" lang="ts">
  // Типы для пресетов кнопок
  export type ButtonVariants = VariantProps<typeof button>;
  export type ButtonVariant = ButtonVariants['variant'];
  export type ButtonSize = ButtonVariants['size'];

  // Базовые пропсы для кнопки
  export interface ButtonBaseProps extends HTMLButtonAttributes {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    class?: string;
    ariaLabel?: string;
    loadingLabel?: string;
    block?: boolean;
    children?: import('svelte').Snippet;
  }
</script>

<!-- Универсальный компонент кнопки -->
<button
  class={classes}
  disabled={disabled || loading}
  aria-label={computedAriaLabel}
>
  {#if loading}
    <!-- Слот для спиннера -->
    <slot name="spinner">
      <!-- Стандартный спиннер -->
      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </slot>
  {:else}
    <slot />
  {/if}
</button>