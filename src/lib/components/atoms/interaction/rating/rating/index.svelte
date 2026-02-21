<script lang="ts">
  import type { IRatingProps, RatingSize } from '$stylist/design-system/props/interaction/rating';
  import { RatingStyleManager } from '$stylist/design-system/styles/interaction/rating';
  import { Star } from 'lucide-svelte';

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
      aria-label={` ${i + 1}  ${max}`}
      aria-pressed={i < rating}
    >
      <Star
        class={starIconClasses(i)}
      />
    </button>
  {/each}

  <span class={ratingTextClasses}>
    {rating.toFixed(1)}  {max}
  </span>
</div>


