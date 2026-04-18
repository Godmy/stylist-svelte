import type { SlotABTest as ABTest } from '$stylist/marketing/interface/slot/ab-test';
import type { SlotABTestVariant as ABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export function toggleABTestVariantStatus(test: ABTest, id: string): ABTest {
	const updatedTest = { ...test };
	const variant = updatedTest.variants.find((item: ABTestVariant) => item.id === id);
	if (variant) {
		variant.isActive = !variant.isActive;
	}
	return updatedTest;
}
