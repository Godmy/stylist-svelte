<script lang="ts">
  import type { IRatingProps } from '$stylist/social/interface/component/rating/other';
  import type { TokenSize } from '$stylist';
  import { Icon as BaseIcon } from '$stylist';
  import { RatingStyleManager } from '$stylist/social/class/style-manager/rating';

  const Star = 'star';

  /**
   *   ()
   *
   *   SOLID:
   * - SRP:         
   * - OCP:     
   * - LSP:  ,    IRatingProps
   * - ISP:     
   * - DIP:    (  types.ts    styles.ts)
   *
   *   Atomic Design  :
   * -    ( )     
   * -         
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

  //    
  const handleStarClick = (value: number) => {
    if (!readonly && !disabled) {
      rating = value;
      onRatingChange?.(value);
    }
  };

  //     (  )
  const handleStarHover = (value: number) => {
    if (!readonly && !disabled) {
      //       
    }
  };

  //      
  const handleMouseLeave = () => {
    if (!readonly && !disabled) {
      //   
    }
  };

  //
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
    size as TokenSize
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
      aria-label={` ${i + 1}  ${max}`}
      aria-pressed={i < rating}
    >
      <BaseIcon
        name={Star}
        class={starIconClasses(i)}
      />
    </button>
  {/each}

  <span class={ratingTextClasses}>
    {rating.toFixed(1)}  {max}
  </span>
</div>









