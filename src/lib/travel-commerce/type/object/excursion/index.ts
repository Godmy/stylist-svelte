import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';

export type Excursion = {
	id: string;
	title: string;
	slug: string;
	summary: string;
	imageSrc: string;
	imageAlt: string;
	duration: string;
	/** Numeric day count backing BookingFilterPanel's «Количество дней» chip filter — `3` reads as "3 or more". Optional so hosts that only have the free-text `duration` label (e.g. sandbox sample data) keep working. */
	durationDays?: number;
	pickup: string;
	priceFrom?: string;
	/** Pricing rules (same as on the tour page) — lets a card show the total for the visitor's current guests instead of the static `priceFrom`. */
	pricing?: PricingModel;
	/** `EXPERIENCE_CATEGORIES` ids (booking domain) this excursion is tagged with — what BookingFilterPanel's "Что хотите посмотреть?" checkboxes filter by, e.g. `nature`, `history-culture`. */
	categories: string[];
	tags: string[];
	/** Promo marks («ТОП», «Популярный») shown as accent badges on product cards. */
	highlights?: string[];
	featured?: boolean;
	/** Групповая экскурсия, индивидуальная экскурсия или тур (многодневный) — BookingFilterPanel's tour-type radio filter. Optional so hosts without this data (sandbox sample data) keep working. */
	tourType?: 'group' | 'individual' | 'tour';
	recommendedForKids?: boolean;
	noEarlyDeparture?: boolean;
	/** Физическая нагрузка — BookingFilterPanel's radio filter. */
	physicalLoad?: 'low' | 'medium' | 'high';
};
