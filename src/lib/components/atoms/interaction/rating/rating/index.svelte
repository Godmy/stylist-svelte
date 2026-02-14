<script lang="ts">
  import type { IRatingProps, RatingSize } from '$stylist/design-system/props/rating';
  import { RatingStyleManager } from '$stylist/design-system/styles/rating';
  import { Star } from 'lucide-svelte';

  /**
   * Компонент оценки (рейтинга)
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение и взаимодействие с пользователем
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, определенному в интерфейсе IRatingProps
   * - ISP: Предоставляет минимально необходимый интерфейс взаимодействия
   * - DIP: Зависит от абстракций (интерфейсов в types.ts и стилей в styles.ts)
   *
   * Следует архитектуре Atomic Design как молекула:
   * - Состоит из атомов (иконка звезды) и предоставляет более сложное поведение
   * - Может использоваться как строительный блок для более сложных компонентов
   */
  let {
    rating = $bindable(0),
    max = 5,
    readonly = false,
    disabled = false,
    size = 'md',
    class: className = '',
    onRatingChange,
    ...restProps
  }: IRatingProps = $props();

  // Обработчик клика по звезде
  const handleStarClick = (value: number) => {
    if (!readonly && !disabled) {
      rating = value;
      onRatingChange?.(value);
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

  // Вычисляемые стили
  const rootClasses = $derived(RatingStyleManager.getRootClasses(className));
  const starButtonClasses = (index: number) => RatingStyleManager.getStarButtonClasses(
    disabled,
    readonly,
    index < rating,
    rating,
    max
  );
  const starIconClasses = (index: number) => RatingStyleManager.getStarIconClasses(
    index < rating,
    size as RatingSize
  );
  const ratingTextClasses = $derived(RatingStyleManager.getRatingTextClasses(disabled));
</script>

<div
  class={rootClasses}
  class:cursor-default={readonly || disabled}
  onmouseleave={handleMouseLeave}
  {...restProps}
>
  {#each Array(max) as _, i}
    <button
      type="button"
      class={starButtonClasses(i)}
      onclick={() => handleStarClick(i + 1)}
      onmouseenter={() => handleStarHover(i + 1)}
      onfocus={() => handleStarHover(i + 1)}
      disabled={disabled}
      aria-label={`Оценка ${i + 1} из ${max}`}
      aria-pressed={i < rating}
    >
      <Star
        class={starIconClasses(i)}
      />
    </button>
  {/each}

  <span class={ratingTextClasses}>
    {rating.toFixed(1)} из {max}
  </span>
</div>


