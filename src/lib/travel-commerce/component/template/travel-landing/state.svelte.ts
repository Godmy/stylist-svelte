import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
import type { RecipeTravelLanding } from '$stylist/travel-commerce/interface/recipe/travel-landing';

export function createTravelLandingState(props: Required<Pick<RecipeTravelLanding, 'heroSlider'>>) {
	// Since 2026-10-05 the landing slider is just the carousel pages: no
	// hero-morph slide in front (moved to /about) and no closing contact-form
	// slide (the catalogue overlay would sit right on top of it).
	const slides = $derived<MediaSliderSlide[]>(props.heroSlider.pages);

	// Tracks which MediaSlider slide is currently showing, updated by the
	// slider's onSlideChange on every change (autoplay tick, arrows,
	// indicators, keyboard).
	let activeSlideIndex = $state(0);
	let activeSlideId = $state('');

	return {
		get slides() {
			return slides;
		},
		get activeSlideIndex() {
			return activeSlideIndex;
		},
		get activeSlideId() {
			return activeSlideId;
		},
		handleSlideChange({ index, slide }: { index: number; slide: MediaSliderSlide }) {
			activeSlideIndex = index;
			activeSlideId = slide.id;
		}
	};
}
