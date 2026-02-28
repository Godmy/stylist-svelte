import { ALL_VARIANTS } from './default-variants';
import { APPEARANCE_STYLES } from './appearance-styles';
import { SEMANTIC_VARIANTS } from './semantic-variants';
import { STATE_VARIANTS } from './state-variants';

/** Input variants. */
export const INPUT_VARIANTS = [
  ...APPEARANCE_STYLES,
  'filled',
  'outlined',
  ...SEMANTIC_VARIANTS,
  ...STATE_VARIANTS,
  ...ALL_VARIANTS
] as const;
export type InputVariant = (typeof INPUT_VARIANTS)[number];
