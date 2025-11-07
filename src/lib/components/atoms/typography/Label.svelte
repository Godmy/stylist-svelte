<script lang="ts">
  import type { HTMLLabelAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент ярлыка для элементов формы
   * Приоритет: если передан `children`, он будет отображен,
   * иначе используется `text`, если он передан
   */
  type LabelSize = 'sm' | 'md' | 'lg';

  type Props = {
    size?: LabelSize;
    required?: boolean;
    disabled?: boolean;
    htmlFor?: string;
    text?: string;
    children?: Snippet;
  } & HTMLLabelAttributes;

  let {
    size = 'md',
    required = false,
    disabled = false,
    htmlFor,
    text,
    children,
    class: className = '',
    ...restProps
  }: Props = $props();

  let sizeClasses = $derived({
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }[size]);

  let disabledClass = $derived(disabled
    ? 'text-gray-400 cursor-not-allowed'
    : 'text-gray-700');

  let classes = $derived(`font-medium ${sizeClasses} ${disabledClass} ${className}`);
</script>

<label
  for={htmlFor}
  class={classes}
  {...restProps}
>
  {#if children}
    {@render children()}
  {:else if text}
    {text}
  {/if}
  {#if required}
    <span class="text-red-500" aria-hidden="true">*</span>
  {/if}
</label>