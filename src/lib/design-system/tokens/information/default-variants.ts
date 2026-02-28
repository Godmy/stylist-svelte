import { APPEARANCE_STYLES } from './appearance-styles';
import { SEMANTIC_VARIANTS } from './semantic-variants';

/** Neutral/system variants. */
export type NeutralVariant = 'default' | 'neutral' | 'dark' | 'light';

/** Unified variants used by components/classes. */
export const ALL_VARIANTS = [
  'default',
  'neutral',
  'dark',
  'light',
  ...SEMANTIC_VARIANTS,
  'gray',
  ...APPEARANCE_STYLES
] as const;
export type DefaultVariants = (typeof ALL_VARIANTS)[number];
