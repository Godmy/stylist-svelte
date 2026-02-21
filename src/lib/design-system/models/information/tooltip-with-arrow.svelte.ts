import type { TooltipWithArrowProps } from '$stylist/design-system/props/information/tooltip-with-arrow';
import { cn } from '$stylist/utils/classes';
import { mergeClasses } from '$stylist/utils/classes';

export function createTooltipWithArrowState(props: TooltipWithArrowProps) {
  const position = $derived(props.position ?? 'top');
  const classes = $derived(mergeClasses('tooltip-with-arrow', props.class));

  return {
    get position() {
      return position;
    },
    get classes() {
      return classes;
    },
    get content() {
      return props.content;
    }
  };
}

export default createTooltipWithArrowState;
