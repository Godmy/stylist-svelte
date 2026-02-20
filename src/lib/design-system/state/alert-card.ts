import { COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { INTERACTIVE_VARIANTS } from '../classes/interaction';
import { createDefaultValues } from './defaults';
import { createBasePreset } from './preset';

export const ALERT_CARD_DEFAULTS = createDefaultValues<
  (typeof INTERACTIVE_VARIANTS)[number],
  (typeof COMPACT_SIZE_SCALE)[number]
>(
  'default',
  'md'
);

export const ALERT_CARD_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
  variant: 'default',
  size: 'md'
});