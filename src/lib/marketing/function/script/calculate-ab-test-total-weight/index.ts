import type { ABTestVariant } from '$stylist/marketing/interface/component/abtest-configurator/other';

export function calculateABTestTotalWeight(variants: ABTestVariant[]): number {
	return variants.reduce((sum: number, variant: ABTestVariant) => sum + variant.weight, 0);
}
