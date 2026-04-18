import type { SlotABTestVariant as ABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export function calculateABTestTotalWeight(variants: ABTestVariant[]): number {
	return variants.reduce((sum: number, variant: ABTestVariant) => sum + variant.weight, 0);
}
