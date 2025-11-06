<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Star } from 'lucide-svelte';

  /**
   * Компонент оценки (рейтинга)
   *
   * Позволяет пользователю выбирать рейтинг с помощью звезд
   *
   * @param {number} [rating=0] - Текущий рейтинг (0-5)
   * @param {number} [max=5] - Максимальное количество звезд
   * @param {boolean} [readonly=false] - Только для чтения (без возможности изменения)
   * @param {boolean} [disabled=false] - Отключенное состояние
   * @param {'sm' | 'md' | 'lg'} [size='md'] - Размер звезд
   * @param {string} [class=''] - Дополнительные CSS классы
   */
  let {
    rating = $bindable(0),
    max = 5,
    readonly = false,
    disabled = false,
    size = 'md',
    class: className = '',
    ...restProps
  }: {
    rating?: number;
    max?: number;
    readonly?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  } & HTMLAttributes<any> = $props();

  // Размеры звезд
  type RatingSize = 'sm' | 'md' | 'lg';
  
  let sizeClasses = $derived({
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }[size as RatingSize]);

  // Обработчик клика по звезде
  const handleStarClick = (value: number) => {
    if (!readonly && !disabled) {
      rating = value;
    }
  };

  // Обработчик наведения на звезду (для предварительного просмотра)
  const handleStarHover = (value: number) => {
    if (!readonly && !disabled) {
      // В реальных условиях можно добавить эффект подсветки
    }
  };

  // Возвращаем на исходное при уходе мыши
  const handleMouseLeave = () => {
    if (!readonly && !disabled) {
      // Убираем эффект подсветки
    }
  };
</script>

<div 
  class={`flex items-center ${className}`}
  class:cursor-default={readonly || disabled}
  onmouseleave={handleMouseLeave}
  {...restProps}
>
  {#each Array(max) as _, i}
    <button
      type="button"
      class={`p-0.5 rounded-full ${
        disabled ? 'text-gray-300' : 
        i < rating ? 'text-yellow-400' : 'text-gray-300'
      } ${readonly || disabled ? 'cursor-default' : 'cursor-pointer hover:text-yellow-500'}`}
      class:opacity-50={disabled}
      onclick={() => handleStarClick(i + 1)}
      onmouseenter={() => handleStarHover(i + 1)}
      onfocus={() => handleStarHover(i + 1)}
      disabled={disabled}
      aria-label={`Оценка ${i + 1} из ${max}`}
      aria-pressed={i < rating}
    >
      <Star 
        class={`${sizeClasses} ${
          i < rating ? 'fill-current' : 'fill-transparent stroke-current'
        }`} 
        stroke-width={i < rating ? 0 : 1.5}
      />
    </button>
  {/each}
  
  <span class={`ml-2 ${disabled ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
    {rating.toFixed(1)} из {max}
  </span>
</div>