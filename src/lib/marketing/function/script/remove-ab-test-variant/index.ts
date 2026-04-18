import type { SlotABTest as ABTest } from '$stylist/marketing/interface/slot/ab-test';
import type { SlotABTestVariant as ABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export function removeABTestVariant(test: ABTest, id: string): ABTest {
	const updatedTest = { ...test };
	updatedTest.variants = updatedTest.variants.filter((variant: ABTestVariant) => variant.id !== id);
	return updatedTest;
}
