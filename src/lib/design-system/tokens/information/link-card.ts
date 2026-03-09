import { INPUT_VARIANTS } from '$stylist/design-system/tokens/information/input-variants';

export const LINK_CARD = [...INPUT_VARIANTS.all, 'outline'] as const;

export type LinkCardVariant = (typeof LINK_CARD)[number];
