import type { ABTest, ABTestVariant } from '$stylist/marketing/interface/component/abtest-configurator/other';

export function updateABTestVariantWeight(test: ABTest, id: string, weight: number): ABTest {
	const updatedTest = { ...test };
	const variant = updatedTest.variants.find((item: ABTestVariant) => item.id === id);
	if (variant) {
		variant.weight = weight;
	}
	return updatedTest;
}
