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
	/**
	 * Optional image wordmark: replaces TurtleHeroWordmark's default text
	 * with this picture (the full logo minus the turtle mark), and the turtle
	 * sprite's final resting spot is then computed from it so the formed mark
	 * lands exactly in the gap left for it — overriding
	 * `config.motion.turtleAnchorTo`. Box fractions below are measured on the
	 * images themselves (x/y = the mark's center, height = the mark's
	 * height), not derived automatically: re-measure if either asset changes.
	 */
	logo?: {
		src: string;
		alt: string;
		/** The logo image's natural width / height. */
		aspectRatio: number;
		/** Where the turtle mark belongs in the complete logo, as fractions of the logo image. */
		markBox: { x: number; y: number; height: number };
		/** Where the mark sits inside the last turtle frame, as fractions of the frame canvas. */
		frameMarkBox: { x: number; y: number; height: number };
	};
};
