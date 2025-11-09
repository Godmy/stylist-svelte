<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  /**
   * Компонент для отображения клавиш клавиатуры
   * Приоритет: если передан `children`, он будет отображен,
   * иначе выводится пустой элемент
   */
  type KbdProps = {
    children?: Snippet;
  } & HTMLAttributes<HTMLElement>;

  let { 
    children,
    class: className = '',
    ...restProps
  }: KbdProps = $props();
</script>

{#if children}
  <kbd class={`inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 border border-gray-200 rounded-md ${className}`} {...restProps}>
    {@render children()}
  </kbd>
{/if}
