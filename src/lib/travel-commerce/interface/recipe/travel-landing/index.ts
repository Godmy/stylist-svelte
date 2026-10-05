import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
import type { TourFilters } from '$stylist/booking/type/object/tour-filters';
import type { LandingTopic } from '$stylist/travel-commerce/type/object/landing-topic';

export interface RecipeTravelLanding {
	/** The host app's real carousel imagery (e.g. lankatour.ru's `src/lib/landing/const/preset/hero-slider`) — its `pages` become MediaSlider's slides. Falls back to the design system's generic default when omitted. */
	heroSlider?: HeroSlider;
	/** Themed photo tiles next to the filters (product kinds, blog, info pages, reviews) — the host builds their links. */
	topics?: LandingTopic[];
	/** A pick in the landing's filter panel — the host navigates into the store with it preselected. */
	onFiltersChange?: (filters: TourFilters) => void;
}
