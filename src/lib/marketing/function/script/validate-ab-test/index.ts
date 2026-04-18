import type { SlotABTest as ABTest } from '$stylist/marketing/interface/slot/ab-test';
import type { SlotABTestVariant as ABTestVariant } from '$stylist/marketing/interface/slot/ab-test-variant';

export function validateABTest(test: ABTest): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!test.name.trim()) {
		errors.name = 'Name is required';
	}

	if (test.variants.length < 2) {
		errors.variants = 'At least 2 variants are required';
	}

	const totalWeight = test.variants.reduce(
		(sum: number, variant: ABTestVariant) => sum + variant.weight,
		0
	);
	if (Math.abs(totalWeight - 100) > 0.1) {
		errors.weights = `Traffic distribution must total 100%. Current total: ${totalWeight}%`;
	}

	return errors;
}
