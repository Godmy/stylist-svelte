import type { ABTest, ABTestVariant } from '$stylist/marketing/interface/component/abtest-configurator/other';

export function removeABTestVariant(test: ABTest, id: string): ABTest {
	const updatedTest = { ...test };
	updatedTest.variants = updatedTest.variants.filter((variant: ABTestVariant) => variant.id !== id);
	return updatedTest;
}
