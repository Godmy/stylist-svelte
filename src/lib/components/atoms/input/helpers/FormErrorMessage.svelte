<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Snippet = any;

  /**
   * Сообщение об ошибке для поля
   *
   * @param text - Текст ошибки
   * @param visible - Показывать ли ошибку
   * @param className - Дополнительные CSS классы
   * @returns Сообщение об ошибке с соответствующим стилем
   */
  type Props = {
    text?: string;
    visible?: boolean;
    className?: string;
    content?: Snippet;
  } & HTMLAttributes<HTMLParagraphElement>;

  let {
    text = '',
    visible = true,
    className = '',
    content,
    ...restProps
  }: Props = $props();

  let classes = $derived(`mt-1 text-sm text-[--color-danger-600] dark:text-[--color-danger-400] ${className}`);
</script>

{#if visible}
  <p class={classes} {...restProps}>
    {#if content}
      {@render content()}
    {:else}
      {text}
    {/if}
  </p>
{/if}