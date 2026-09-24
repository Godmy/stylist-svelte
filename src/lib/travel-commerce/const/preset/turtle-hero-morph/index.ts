import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';

export const TURTLE_HERO_MORPH_CONFIG: TurtleHeroMorphConfig = {
	scrollHeightVh: 320,
	phases: {
		introEnd: 0.18,
		focusStart: 0.3,
		morphStart: 0.42,
		morphEnd: 0.82,
		logoStart: 0.84,
		complete: 1
	},
	motion: {
		// Measured against the generic placeholder resting photo (see
		// turtle-hero-photo-scene's own default `photoSrc`) — a host app
		// supplying its own photos (like lankatour.ru's hero-slider-animation
		// preset) needs to re-measure these against its own image.
		turtleAnchorFrom: { x: 0.52, y: 0.67, size: 0.53 },
		turtleAnchorTo: { x: 0.48, y: 0.46, size: 0.56 },
		turtleBob: { durationMs: 4500, translateYPercent: -1.2, rotateDeg: 1.5 },
		turtleSettleBumpAmount: 0.035,
		backgroundZoomTo: 1.08,
		fogHeightFromPercent: 50,
		fogHeightToPercent: 105,
		wordmarkRevealDurationFraction: 0.06
	}
};
