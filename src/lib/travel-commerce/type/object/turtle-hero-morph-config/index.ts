export type TurtleHeroMorphPhases = {
	introEnd: number;
	focusStart: number;
	morphStart: number;
	morphEnd: number;
	logoStart: number;
	complete: number;
};

/** Where the turtle sprite sits on the stage — fractions of the stage box (see `turtle-photo-to-mark`'s `BOX_ASPECT_RATIO`), same convention as CSS `left`/`top` percentages. `size` is a fraction of viewport height. */
export type TurtleHeroMorphAnchor = {
	x: number;
	y: number;
	size: number;
};

export type TurtleHeroMorphMotion = {
	/**
	 * Where the turtle sprite starts: must line up with the live turtle
	 * baked into the resting-state background photo (see
	 * `turtle-hero-photo-scene`'s `photoSrc`) — if that photo changes, this
	 * needs re-measuring against it, it isn't derived automatically.
	 */
	turtleAnchorFrom: TurtleHeroMorphAnchor;
	/** Where the turtle sprite (now the finished logo mark) ends up at rest. */
	turtleAnchorTo: TurtleHeroMorphAnchor;
	/** Continuous idle bob/sway of the turtle sprite/mark — runs always, independent of scroll/progress. */
	turtleBob: {
		durationMs: number;
		/** How far it drifts up, as a % of its own box height. */
		translateYPercent: number;
		rotateDeg: number;
	};
	/** Amplitude of the one-off "settling" pulse that plays as the sprite finishes crossfading into the mark (on top of the constant bob above). 0 disables it. */
	turtleSettleBumpAmount: number;
	/** Ken Burns background zoom: scale grows from 1 (progress 0) to this value (progress 1), continuously across the whole sequence. */
	backgroundZoomTo: number;
	/** White fog wash that rises from the bottom of the background as the turtle finishes forming into the mark (`morphStart` → `complete`), as % of stage height. */
	fogHeightFromPercent: number;
	fogHeightToPercent: number;
	/** How far past `logoStart` the wordmark takes to fully reveal, as a fraction of the whole 0..1 progress. */
	wordmarkRevealDurationFraction: number;
};

export type TurtleHeroMorphConfig = {
	scrollHeightVh: number;
	phases: TurtleHeroMorphPhases;
	motion: TurtleHeroMorphMotion;
};
