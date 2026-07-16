import type { RecipeProductTour } from '$stylist/product/interface/recipe/product-tour';

export function createProductTourState(props: RecipeProductTour) {
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
		get overlayClass() {
			return 'product-tour__overlay';
		},
		get panelClass() {
			return ['product-tour__panel', props.class].filter(Boolean).join(' ');
		},
		get closeButtonClass() {
			return 'product-tour__close';
		},
		get closeIconClass() {
			return 'product-tour__close-icon';
		},
		get titleClass() {
			return 'product-tour__title';
		},
		get contentClass() {
			return 'product-tour__content';
		},
		get footerClass() {
			return 'product-tour__footer';
		},
		get stepClass() {
			return 'product-tour__step';
		},
		get actionsClass() {
			return 'product-tour__actions';
		},
		get previousButtonClass() {
			return 'product-tour__button product-tour__button--previous';
		},
		get nextButtonClass() {
			return 'product-tour__button product-tour__button--next';
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
