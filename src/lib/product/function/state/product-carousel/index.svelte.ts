import type { RecipeProductCarousel } from '$stylist/product/interface/recipe/product-carousel';

export function createProductCarouselState(props: RecipeProductCarousel) {
	let currentIndex = $state(0);

	function nextSlide() {
		const len = props.products?.length ?? 0;
		if (len > 0) currentIndex = (currentIndex + 1) % len;
	}

	function prevSlide() {
		const len = props.products?.length ?? 0;
		if (len > 0) currentIndex = (currentIndex - 1 + len) % len;
	}

	function goTo(index: number) {
		currentIndex = index;
	}

	function getStarClass(isFilled: boolean) {
		return isFilled
			? 'product-carousel__star product-carousel__star--filled'
			: 'product-carousel__star';
	}

	function getDotClass(isActive: boolean) {
		return isActive
			? 'product-carousel__dot product-carousel__dot--active'
			: 'product-carousel__dot';
	}

	return {
		get currentIndex() {
			return currentIndex;
		},
		get containerClass() {
			return ['product-carousel', props.class].filter(Boolean).join(' ');
		},
		get trackClass() {
			return 'product-carousel__track';
		},
		get slideClass() {
			return 'product-carousel__slide';
		},
		get cardClass() {
			return 'product-carousel__card';
		},
		get imageClass() {
			return 'product-carousel__image';
		},
		get bodyClass() {
			return 'product-carousel__body';
		},
		get titleClass() {
			return 'product-carousel__title';
		},
		get ratingClass() {
			return 'product-carousel__rating';
		},
		get priceClass() {
			return 'product-carousel__price';
		},
		get previousButtonClass() {
			return 'product-carousel__button product-carousel__button--previous';
		},
		get nextButtonClass() {
			return 'product-carousel__button product-carousel__button--next';
		},
		get iconClass() {
			return 'product-carousel__button-icon';
		},
		get dotsClass() {
			return 'product-carousel__dots';
		},
		nextSlide,
		prevSlide,
		goTo,
		getStarClass,
		getDotClass
	};
}
