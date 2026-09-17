import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';

/** One background frame of TurtleHeroMorph's photo sequence (TurtleHeroPhotoScene) — read positionally in the array: [0] resting/day (turtle baked in), [1] dusk, [2] dramatic sunset. */
export type HeroSliderPhoto = {
	id: string;
	src: string;
	alt: string;
	title?: string;
	kicker?: string;
	description?: string;
	accent?: string;
};

/**
 * Full asset set behind the site's whole top slider — supplied by the host
 * app (see `slider` prop on TurtleHeroMorph/TurtleHeroMorphSlide, and
 * `heroSlider` on LandingPage) instead of being hardcoded in the design
 * system, so each site brings its own imagery.
 * `travel-commerce/const/preset/hero-slider` holds a generic default used
 * when no data is passed in (e.g. the components' own story/sandbox
 * previews).
 */
export type HeroSlider = {
	/** TurtleHeroMorph's background scene frames, in order — see HeroSliderPhoto. */
	photos: HeroSliderPhoto[];
	/** Turtle sprite frames (TurtlePhotoToMark), photoreal → fully stylised mark, in order. */
	turtleFrames: string[];
	/** MediaSlider's carousel pages between the hero-morph slide and the closing contact form — in display order. */
	pages: MediaSliderSlide[];
};
