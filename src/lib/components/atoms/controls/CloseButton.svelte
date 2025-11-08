<script lang="ts">
  import { X } from 'lucide-svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  /**
   * Стандартизированная кнопка "закрыть" (крестик)
   *
   * @param size - Размер кнопки ('sm' | 'md' | 'lg')
   * @param variant - Вариант стиля ('solid' | 'outline' | 'ghost')
   * @param className - Дополнительные CSS классы
   * @returns Стандартизированная кнопка с крестиком
   */
  type ButtonSize = 'sm' | 'md' | 'lg';
  type ButtonVariant = 'solid' | 'outline' | 'ghost';

  type Props = {
    size?: ButtonSize;
    variant?: ButtonVariant;
  } & HTMLButtonAttributes;

  let {
    size = 'md',
    variant = 'ghost',
    class: className = '',
    ...restProps
  }: Props = $props();

  let sizeClasses = $derived({
    sm: 'w-6 h-6 p-0.5 text-xs',
    md: 'w-8 h-8 p-1 text-sm',
    lg: 'w-10 h-10 p-1.5 text-base'
  }[size]);

  let variantClasses = $derived({
    solid: 'bg-[--color-danger-600] hover:bg-[--color-danger-700] text-[--color-text-inverse] rounded-full',
    outline: 'bg-transparent hover:bg-[--color-bg-secondary] text-[--color-text-primary] border border-[--color-border-primary] rounded-full',
    ghost: 'bg-transparent hover:bg-[--color-bg-secondary] text-[--color-text-primary] rounded-full'
  }[variant]);

  let classes = $derived(`${sizeClasses} flex items-center justify-center ${variantClasses} transition-colors duration-200 ${className}`);
</script>

<button class={classes} {...restProps}>
  <X class="w-full h-full" />
</button>