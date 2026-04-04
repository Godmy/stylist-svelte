import type { ABTest, ABTestVariant } from '$stylist/marketing/interface/component/abtest-configurator/other';

export function toggleABTestVariantStatus(test: ABTest, id: string): ABTest {
	const updatedTest = { ...test };
	const variant = updatedTest.variants.find((item: ABTestVariant) => item.id === id);
	if (variant) {
		variant.isActive = !variant.isActive;
	}
	return updatedTest;
}
