import type { ABTest, ABTestVariant } from '$stylist/marketing/interface/component/abtest-configurator/other';
import { calculateABTestTotalWeight } from '$stylist/marketing/function/script/calculate-ab-test-total-weight';

export function addABTestVariant(
	test: ABTest,
	newVariantName: string,
	newVariantDescription: string,
	newVariantWeightInput: number
): ABTest {
	const updatedTest = { ...test };
	let newVariantWeight = newVariantWeightInput;

	if (newVariantWeight <= 0) {
		const activeVariantsCount = updatedTest.variants.filter((variant: ABTestVariant) => variant.isActive).length;
		const remainingWeight = 100 - calculateABTestTotalWeight(updatedTest.variants);
		newVariantWeight = Math.round(remainingWeight / (activeVariantsCount + 1));
	}

	const newVariant: ABTestVariant = {
		id: `variant-${Date.now()}`,
		name: newVariantName,
		description: newVariantDescription,
		weight: newVariantWeight,
		isActive: true
	};

	if (newVariantWeight > 0) {
		const totalWeightWithNew = calculateABTestTotalWeight(updatedTest.variants) + newVariantWeight;
		if (totalWeightWithNew > 100) {
			const excess = totalWeightWithNew - 100;
			updatedTest.variants = updatedTest.variants.map((variant: ABTestVariant) => ({
				...variant,
				weight: Math.max(0, variant.weight - (variant.weight / totalWeightWithNew) * excess)
			}));
		}
	}

	updatedTest.variants = [...updatedTest.variants, newVariant];
	return updatedTest;
}
