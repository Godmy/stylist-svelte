<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  /**
   * Одна ячейка (цифра) для ввода пин-кода
   *
   * @param value - Текущее значение
   * @param focused - Ячейка в фокусе
   * @param invalid - Неверное значение
   * @param onChange - Обработчик изменения значения
   * @param onFocus - Обработчик фокуса
   * @param onBlur - Обработчик потери фокуса
   * @returns Один символ ввода PIN-кода
   */
  type Props = {
    value?: string;
    focused?: boolean;
    invalid?: boolean;
  } & HTMLAttributes<HTMLInputElement>;

  let {
    value = '',
    focused = false,
    invalid = false,
    ...restProps
  }: Props = $props();

  let classes = $derived(`
    w-12 h-12 flex items-center justify-center 
    border rounded-lg text-lg font-medium 
    ${invalid 
      ? 'border-[--color-danger-500] bg-[--color-danger-50] text-[--color-danger-700]' 
      : focused 
        ? 'border-[--color-primary-500] bg-[--color-bg-primary] text-[--color-text-primary]' 
        : 'border-[--color-border-primary] bg-[--color-bg-primary] text-[--color-text-primary]'}
    focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] 
    transition-colors duration-200
  `);
</script>

<input 
  class={classes} 
  maxLength={1}
  value={value}
  {...restProps}
/>