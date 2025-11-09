<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент для отображения встроенного кода
   * Приоритет: если передан `children`, он будет отображен,
   * иначе выводится пустой элемент
   */
  type InlineCodeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger';

  type InlineCodeProps = {
    /**
     * Variant style
     */
    variant?: InlineCodeVariant;
    /**
     * Содержимое встроенного кода
     */
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let {
    variant = 'default',
    children,
    class: className = '',
    ...restProps
  }: InlineCodeProps = $props();

  type VariantType = 'default' | 'accent' | 'success' | 'warning' | 'danger';

  let variantClasses = $derived({
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    accent: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  }[variant as VariantType]);

  let classes = $derived(`${variantClasses} px-2 py-1 rounded font-mono text-sm font-medium ${className}`);
</script>

{#if children}
  <code {...restProps} class={classes}>
    {@render children()}
  </code>
{/if}