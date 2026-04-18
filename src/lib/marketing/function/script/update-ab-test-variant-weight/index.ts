import type { SlotABTest as ABTest } from '$stylist/marketing/interface/slot/ab-test';
import type { SlotABTestVariant as ABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export function updateABTestVariantWeight(test: ABTest, id: string, weight: number): ABTest {
	const updatedTest = { ...test };
	const variant = updatedTest.variants.find((item: ABTestVariant) => item.id === id);
	if (variant) {
		variant.weight = weight;
	}
	return updatedTest;
}
