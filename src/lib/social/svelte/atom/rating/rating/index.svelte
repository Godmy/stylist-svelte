<script lang="ts">
  import type { IRatingProps } from '$stylist/social/interface/component/rating/other';
  import { Icon as BaseIcon } from '$stylist';
  import { TOKEN_SOCIAL_ICON } from '$stylist/social/const/icon';
  import createRatingState from '$stylist/social/function/state/rating';

  let {
    rating = $bindable(0),
    max = 5,
    readonly = false,
    disabled = false,
    size = 'md',
    class: className = '',
    onRatingChange,
    ...restProps
  }: IRatingProps & { rating?: number } = $props();

  const state = createRatingState({
    rating,
    max,
    readonly,
    disabled,
    size,
    class: className,
    onRatingChange
  });
</script>

<div
  class={state.rootClasses}
  class:cursor-default={readonly || disabled}
  onmouseleave={state.handleMouseLeave}
  {...restProps}
>
  {#each Array(max) as _, i}
    <button
      type="button"
      class={state.starButtonClasses(i)}
      onclick={() => state.handleStarClick(i + 1)}
      onmouseenter={() => state.handleStarHover(i + 1)}
      onfocus={() => state.handleStarHover(i + 1)}
      disabled={disabled}
      aria-label={`Рейтинг ${i + 1} из ${max}`}
      aria-pressed={i < rating}
    >
      <BaseIcon
        name={TOKEN_SOCIAL_ICON.find((icon) => icon === 'star') ?? 'star'}
        class={state.starIconClasses(i)}
      />
    </button>
  {/each}

  <span class={state.ratingTextClasses}>
    {rating.toFixed(1)} из {max}
  </span>
</div>
