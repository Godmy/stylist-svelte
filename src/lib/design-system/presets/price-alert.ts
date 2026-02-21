import { COMPACT_SIZE_SCALE } from '../tokens/architecture/sizes';
import { createDefaultValues } from '../defaults/defaults';
import { createBasePreset } from './preset';

// Price alert has custom variants that extend the default ones
export type PriceAlertVariant = 'monitoring' | 'reached' | 'exceeded';

export const PRICE_ALERT_DEFAULTS = createDefaultValues<
  PriceAlertVariant,
  (typeof COMPACT_SIZE_SCALE)[number]
>(
  'monitoring',
  'md'
);

export const PRICE_ALERT_PRESET = createBasePreset(
  ['monitoring', 'reached', 'exceeded'] as const,
  COMPACT_SIZE_SCALE,
  {
    variant: 'monitoring' as PriceAlertVariant,
    size: 'md' as (typeof COMPACT_SIZE_SCALE)[number]
  }
);