import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

export interface RecipeTravelLanding {
	/** The host app's real hero + carousel imagery (e.g. lankatour.ru's `src/lib/landing/const/preset/hero-slider`) — forwarded to TurtleHeroMorph's `slider` prop, and its `pages` become MediaSlider's carousel slides. Falls back to the design system's generic default when omitted. */
	heroSlider?: HeroSlider;
	/** Forwarded to TurtleHeroMorphSlide's `config` prop — the hero morph's phase timing. The host app's `hero-slider-animation` preset (`HERO_SLIDER_ANIMATION_CONFIG`) is the real single source of truth for this on the live site. */
	heroAnimationConfig?: TurtleHeroMorphConfig;
	/** Forwarded to TurtleHeroMorphSlide's `durationMs` — how long the hero morph autoplay takes end to end. Comes from the same host-app preset (`HERO_SLIDER_ANIMATION_TOTAL_MS`). */
	heroAnimationMs?: number;
	/** Forwarded to StorePage's `excursions` prop — the host app's real catalogue (e.g. lankatour.ru's D1 `tours` table, mapped to `Excursion[]`). Falls back to StorePage's own sample data when omitted, so the sandbox/story keep working standalone. */
	excursions?: Excursion[];
	/** The sticky booking bar's draft — bind this to a host-level store so the same guest count survives navigating into a tour page. Uncontrolled (own local default) when omitted, same as before. */
	bookingValue?: BookingDraft;
}
