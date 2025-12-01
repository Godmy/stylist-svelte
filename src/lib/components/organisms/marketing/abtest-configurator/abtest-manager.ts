import type { ABTest, ABTestVariant } from './types';

export function calculateTotalWeight(variants: ABTestVariant[]): number {
  return variants.reduce((sum, variant) => sum + variant.weight, 0);
}

export function addABTestVariant(
  test: ABTest,
  newVariantName: string,
  newVariantDescription: string,
  newVariantWeightInput: number
): ABTest {
  const updatedTest = { ...test };
  let newVariantWeight = newVariantWeightInput;

  if (newVariantWeight <= 0) {
    const activeVariantsCount = updatedTest.variants.filter(v => v.isActive).length;
    const remainingWeight = 100 - calculateTotalWeight(updatedTest.variants);
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
    const totalWeightWithNew = calculateTotalWeight(updatedTest.variants) + newVariantWeight;
    if (totalWeightWithNew > 100) {
      const excess = totalWeightWithNew - 100;
      updatedTest.variants = updatedTest.variants.map(v => ({
        ...v,
        weight: Math.max(0, v.weight - (v.weight / totalWeightWithNew) * excess)
      }));
    }
  }

  updatedTest.variants = [...updatedTest.variants, newVariant];
  return updatedTest;
}

export function removeABTestVariant(test: ABTest, id: string): ABTest {
  const updatedTest = { ...test };
  updatedTest.variants = updatedTest.variants.filter(v => v.id !== id);
  return updatedTest;
}

export function updateABTestVariantWeight(test: ABTest, id: string, weight: number): ABTest {
  const updatedTest = { ...test };
  const variant = updatedTest.variants.find(v => v.id === id);
  if (variant) {
    variant.weight = weight;
  }
  return updatedTest;
}

export function toggleABTestVariantStatus(test: ABTest, id: string): ABTest {
  const updatedTest = { ...test };
  const variant = updatedTest.variants.find(v => v.id === id);
  if (variant) {
    variant.isActive = !variant.isActive;
  }
  return updatedTest;
}
