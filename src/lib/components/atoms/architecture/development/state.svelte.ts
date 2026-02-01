import type { StackAlign, StackDirection, StackJustify, StackProps } from '$stylist/design-system/development/stack';
import { getStackClasses, getStackGap } from '$stylist/design-system/development/stack';

export function createStackState(props: StackProps) {
  const direction = $derived((props.direction ?? 'vertical') as StackDirection);
  const spacing = $derived(props.spacing ?? '1rem');
  const align = $derived((props.align ?? 'stretch') as StackAlign);
  const justify = $derived((props.justify ?? 'start') as StackJustify);
  const gap = $derived(getStackGap(spacing));
  const classes = $derived(getStackClasses(direction, align, justify, props.class ?? ''));

  return {
    get direction() {
      return direction;
    },
    get spacing() {
      return spacing;
    },
    get align() {
      return align;
    },
    get justify() {
      return justify;
    },
    get gap() {
      return gap;
    },
    get classes() {
      return classes;
    }
  };
}
