<script lang="ts">
  import type { IRatingProps } from '$stylist/social/interface/component/rating/other';
  import { Icon as BaseIcon } from '$stylist';
  import { RatingStyleManager } from '$stylist/social/class/style-manager/rating';

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

  const STAR = 'star';

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
    size as import('$stylist').TokenSize
  );
  const ratingTextClasses = $derived(RatingStyleManager.getRatingTextClasses(disabled));

  const handleStarClick = (value: number) => {
    if (!readonly && !disabled) {
      rating = value;
      onRatingChange?.(value);
    }
  };

  const handleStarHover = (_value: number) => {
    // Placeholder for hover behavior
  };

  const handleMouseLeave = () => {
    // Placeholder for mouse leave behavior
  };
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
      aria-label={`Рейтинг ${i + 1} из ${max}`}
      aria-pressed={i < rating}
    >
      <BaseIcon
        name={STAR}
        class={starIconClasses(i)}
      />
    </button>
  {/each}

  <span class={ratingTextClasses}>
    {rating.toFixed(1)} из {max}
  </span>
</div>
