import type { IRatingProps } from '$stylist/social/interface/component/rating/other';
import { RatingStyleManager } from '$stylist/social/class/style-manager/rating';

export type RatingState = ReturnType<typeof createRatingState>;

export function createRatingState(props: IRatingProps & { rating: number }) {
  const rootClasses = $derived(RatingStyleManager.getRootClasses(props.class ?? ''));
  const starButtonClasses = (index: number) => RatingStyleManager.getStarButtonClasses(
    props.disabled ?? false,
    props.readonly ?? false,
    index < (props.rating ?? 0),
    props.rating ?? 0,
    props.max ?? 5
  );
  const starIconClasses = (index: number) => RatingStyleManager.getStarIconClasses(
    index < (props.rating ?? 0),
    props.size as import('$stylist').TokenSize
  );
  const ratingTextClasses = $derived(RatingStyleManager.getRatingTextClasses(props.disabled ?? false));

  const handleStarClick = (value: number) => {
    if (!(props.readonly ?? false) && !(props.disabled ?? false)) {
      props.onRatingChange?.(value);
    }
  };

  const handleStarHover = (_value: number) => {
    // Placeholder for hover behavior
  };

  const handleMouseLeave = () => {
    // Placeholder for mouse leave behavior
  };

  return {
    rootClasses,
    starButtonClasses,
    starIconClasses,
    ratingTextClasses,
    handleStarClick,
    handleStarHover,
    handleMouseLeave,
  };
}

export default createRatingState;
