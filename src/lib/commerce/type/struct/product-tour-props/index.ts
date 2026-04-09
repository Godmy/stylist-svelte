import type { ProductTourStep } from '$stylist/commerce/type/struct/product-tour-step';

export type ProductTourProps = {
	steps: ProductTourStep[];
	currentStep?: number;
	showTour?: boolean;
	onComplete?: () => void;
	class?: string;
};
