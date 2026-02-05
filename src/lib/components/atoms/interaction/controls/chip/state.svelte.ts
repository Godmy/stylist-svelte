import type { ChipProps } from '$stylist/design-system/attributes';

export const createChipState = (props: ChipProps) => {
  return {
    classes: ['inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium', props.class]
      .filter(Boolean)
      .join(' ')
  };
};
