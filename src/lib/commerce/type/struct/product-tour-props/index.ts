import type { SlotProductTourStep } from '$stylist/commerce/type/struct/product-tour-step';

export type ProductTourProps = {
	steps: SlotProductTourStep[];
	currentStep?: number;
	showTour?: boolean;
	onComplete?: () => void;
	class?: string;
};
