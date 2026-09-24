import type { Snippet } from 'svelte';
import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';

export interface RecipeMediaSlider {
	slides: MediaSliderSlide[];
	/** Rendered in place of media for any slide with `type: 'form'`. */
	formContent?: Snippet;
	/**
	 * Rendered in place of media for any slide with `type: 'hero'`. Receives:
	 * `next` — call once its own gesture-driven sequence completes;
	 * `markLoaded` — call once its resting-state assets have loaded, to clear this slide's skeleton;
	 * `setAtRest` — report whether this slide counts as "at rest" (e.g. its own internal progress is 0, or it has already been scrolled through once) — MediaSlider gates its own nav controls on this while a hero slide is active.
	 */
	heroContent?: Snippet<
		[
			{
				next: () => void;
				markLoaded: () => void;
				setAtRest: (visible: boolean) => void;
			}
		]
	>;
	/** Auto-advance image slides after `autoPlayInterval` (or a slide's own `durationMs`); video slides always advance on end; form/hero slides never auto-advance. */
	autoPlay?: boolean;
	autoPlayInterval?: number;
	showControls?: boolean;
	showIndicators?: boolean;
	/** Accessible label for the slider's carousel region. Defaults to "Media slider". */
	ariaLabel?: string;
	class?: string;
	/** Fires whenever the active slide changes (autoplay tick, arrows, indicators, keyboard) — including once on mount for the initial slide. */
	onSlideChange?: (info: { index: number; slide: MediaSliderSlide; isFirst: boolean }) => void;
}
