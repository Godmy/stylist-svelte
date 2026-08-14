import type { SlotABTest } from '$stylist/marketing/interface/slot/ab-test';
import type { SlotABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export class MarketingManager {
	static validateABTest(test: SlotABTest): Record<string, string> {
		const errors: Record<string, string> = {};

		if (!test.name.trim()) {
			errors.name = 'Name is required';
		}

		if (test.variants.length < 2) {
			errors.variants = 'At least 2 variants are required';
		}

		const totalWeight = test.variants.reduce(
			(sum: number, variant: SlotABTestVariant) => sum + variant.weight,
			0
		);
		if (Math.abs(totalWeight - 100) > 0.1) {
			errors.weights = `Traffic distribution must total 100%. Current total: ${totalWeight}%`;
		}

		return errors;
	}

	static calculateABTestTotalWeight(variants: SlotABTestVariant[]): number {
		return variants.reduce((sum: number, variant: SlotABTestVariant) => sum + variant.weight, 0);
	}

	static addABTestVariant(
		test: SlotABTest,
		newVariantName: string,
		newVariantDescription: string,
		newVariantWeightInput: number
	): SlotABTest {
		const updatedTest = { ...test };
		let newVariantWeight = newVariantWeightInput;

		if (newVariantWeight <= 0) {
			const activeVariantsCount = updatedTest.variants.filter(
				(variant: SlotABTestVariant) => variant.isActive
			).length;
			const remainingWeight = 100 - MarketingManager.calculateABTestTotalWeight(updatedTest.variants);
			newVariantWeight = Math.round(remainingWeight / (activeVariantsCount + 1));
		}

		const newVariant: SlotABTestVariant = {
			id: `variant-${Date.now()}`,
			name: newVariantName,
			description: newVariantDescription,
			weight: newVariantWeight,
			isActive: true
		};

		if (newVariantWeight > 0) {
			const totalWeightWithNew =
				MarketingManager.calculateABTestTotalWeight(updatedTest.variants) + newVariantWeight;
			if (totalWeightWithNew > 100) {
				const excess = totalWeightWithNew - 100;
				updatedTest.variants = updatedTest.variants.map((variant: SlotABTestVariant) => ({
					...variant,
					weight: Math.max(0, variant.weight - (variant.weight / totalWeightWithNew) * excess)
				}));
			}
		}

		updatedTest.variants = [...updatedTest.variants, newVariant];
		return updatedTest;
	}

	static removeABTestVariant(test: SlotABTest, id: string): SlotABTest {
		const updatedTest = { ...test };
		updatedTest.variants = updatedTest.variants.filter(
			(variant: SlotABTestVariant) => variant.id !== id
		);
		return updatedTest;
	}

	static updateABTestVariantWeight(test: SlotABTest, id: string, weight: number): SlotABTest {
		const updatedTest = { ...test };
		const variant = updatedTest.variants.find((item: SlotABTestVariant) => item.id === id);
		if (variant) {
			variant.weight = weight;
		}
		return updatedTest;
	}

	static toggleABTestVariantStatus(test: SlotABTest, id: string): SlotABTest {
		const updatedTest = { ...test };
		const variant = updatedTest.variants.find((item: SlotABTestVariant) => item.id === id);
		if (variant) {
			variant.isActive = !variant.isActive;
		}
		return updatedTest;
	}
}
