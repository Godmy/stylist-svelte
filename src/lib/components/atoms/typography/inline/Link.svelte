<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент ссылки с различными вариантами стиля
   * Приоритет: если передан `children`, он будет отображен,
   * иначе используется `text`, если он передан
   */
  type LinkVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'underline';
  type LinkSize = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: LinkVariant;
    size?: LinkSize;
    disabled?: boolean;
    underline?: boolean;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    text?: string;
    children?: Snippet;
  } & HTMLAnchorAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    underline = true,
    href,
    target,
    text,
    children,
    class: className = '',
    ...restProps
  }: Props = $props();

  let variantClasses = $derived({
    primary: 'text-indigo-600 hover:text-indigo-800',
    secondary: 'text-gray-600 hover:text-gray-800',
    success: 'text-green-600 hover:text-green-800',
    warning: 'text-yellow-600 hover:text-yellow-800',
    danger: 'text-red-600 hover:text-red-800',
    ghost: 'text-gray-700 hover:bg-gray-100',
    underline: 'text-indigo-600 hover:text-indigo-800'
  }[variant]);

  let sizeClasses = $derived({
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }[size]);

  let disabledClass = $derived(disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '');

  let underlineClass = $derived(underline
    ? 'underline hover:no-underline'
    : 'no-underline');

  let classes = $derived(`font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${underlineClass} ${className}`);
</script>

<a
  href={href}
  class={classes}
  target={target}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else if text}
    {text}
  {/if}
</a>