import type { ProductTourProps } from '$stylist/commerce/type/struct/product-tour-props';

export function createProductTourState(props: ProductTourProps) {
	let localCurrentStep = $state(props.currentStep ?? 0);
	let localShowTour = $state(props.showTour ?? false);

	$effect(() => {
		localCurrentStep = props.currentStep ?? 0;
		localShowTour = props.showTour ?? false;
	});

	return {
		get currentStep() {
			return localCurrentStep;
		},
		get showTour() {
			return localShowTour;
		},
		nextStep() {
			if (localCurrentStep < props.steps.length - 1) {
				localCurrentStep += 1;
				return;
			}

			localShowTour = false;
			props.onComplete?.();
		},
		prevStep() {
			if (localCurrentStep > 0) {
				localCurrentStep -= 1;
			}
		},
		closeTour() {
			localShowTour = false;
			props.onComplete?.();
		}
	};
}

export default createProductTourState;
