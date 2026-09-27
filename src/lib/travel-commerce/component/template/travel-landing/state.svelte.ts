import type { ContactRequest } from '$stylist/travel-commerce/type/object/contact-request';
import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
import type { RecipeTravelLanding } from '$stylist/travel-commerce/interface/recipe/travel-landing';

export function createTravelLandingState(props: Required<Pick<RecipeTravelLanding, 'heroSlider'>>) {
	// The hero-morph slide and closing contact form are structural (part of
	// this template's own behaviour, not per-site content), so only the
	// carousel pages in between come from `heroSlider`.
	const slides = $derived<MediaSliderSlide[]>([
		{ id: 'hero-morph', type: 'hero', caption: 'Путешествие начинается' },
		...props.heroSlider.pages,
		{ id: 'contact', type: 'form' }
	]);

	// Tracks which MediaSlider slide is currently showing, updated by the
	// slider's onSlideChange on every change (autoplay tick, arrows,
	// indicators, keyboard, or the hero slide's own gesture-driven `next`) —
	// the rest of the page can branch on `isFirstSlide`/`activeSlideId` once
	// there's a concrete design for what should differ.
	let activeSlideIndex = $state(0);
	let activeSlideId = $state('hero-morph');
	const isFirstSlide = $derived(activeSlideIndex === 0);

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
		get isFirstSlide() {
			return isFirstSlide;
		},
		handleSlideChange({ index, slide }: { index: number; slide: MediaSliderSlide }) {
			activeSlideIndex = index;
			activeSlideId = slide.id;
		},
		// TODO: wire this up to a real submission endpoint once one exists.
		handleContactRequest(value: ContactRequest) {
			console.info('Contact request submitted', value);
		}
	};
}
