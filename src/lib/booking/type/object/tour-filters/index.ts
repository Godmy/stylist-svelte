/** BookingFilterPanel's full selection — the sidebar's own filter criteria, separate from `BookingDraft` (the sticky booking bar's reservation intent). */
export type TourFilters = {
	/** Selected `EXPERIENCE_CATEGORIES` ids — matches an excursion tagged with ANY of these (not all). */
	categories: string[];
	/** Групповая экскурсия / индивидуальная экскурсия / тур — undefined means any. */
	tourType?: 'group' | 'individual' | 'tour';
	recommendedForKids: boolean;
	noEarlyDeparture: boolean;
	/** Физическая нагрузка — undefined means any. */
	physicalLoad?: 'low' | 'medium' | 'high';
};
