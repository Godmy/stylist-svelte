<script lang="ts">
	// The category-chips filter bar (Холмы и горы / Водопады и реки / ...) that
	// used to sit here was removed 2026-09-17, then reinstated 2026-09-21 —
	// moved into BookingFilterPanel's "Что хотите посмотреть?" section instead
	// of its own top bar. 2026-09-23: заказчик added the panel's tour-type,
	// kid/early-departure and physical-load filters — bundled with categories
	// into one `TourFilters` object (see `filterExcursionsByTourFilters`).
	// Откуда/Гости/Когда/Количество дней already live in BookingBar above this
	// page (on TravelLanding) — `durationDays` is still forwarded here from
	// that shared draft (see prop below) so picking "1 день"/"2 дня"/"3+ дня"
	// up there actually narrows this grid too, alongside the sidebar's own
	// TourFilters.
	import StoreEditorialGrid from '$stylist/travel-commerce/component/organism/store-editorial-grid/index.svelte';
	import BookingFilterPanel from '$stylist/booking/component/organism/booking-filter-panel/index.svelte';
	import { filterExcursionsByTourFilters } from '$stylist/travel-commerce/function/script/filter-excursions-by-tour-filters';
	import { filterExcursionsByDuration } from '$stylist/travel-commerce/function/script/filter-excursions-by-duration';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { TourFilters } from '$stylist/booking/type/object/tour-filters';

	type Props = {
		excursions?: Excursion[];
		/** BookingBar's "Количество дней" selection (from the host's shared booking draft) — filters this grid in addition to the sidebar's own TourFilters. */
		durationDays?: number[];
		/** Asks the host to rewrite that shared "Количество дней" selection — StorePage doesn't own it. */
		onDurationDaysChange?: (durationDays: number[]) => void;
	};

	let { excursions = SAMPLE_EXCURSIONS, durationDays = [], onDurationDaysChange }: Props = $props();

	// «Тур» is always 3+ days, so switching the tour type to it drops a
	// "1 день"/"2 дня" pick that would otherwise empty the grid.
	const SHORT_DURATION_DAYS = [1, 2];

	function handleFiltersChange(next: TourFilters) {
		if (next.tourType === 'tour' && filters.tourType !== 'tour') {
			const kept = durationDays.filter((day) => !SHORT_DURATION_DAYS.includes(day));
			if (kept.length !== durationDays.length) onDurationDaysChange?.(kept);
		}
		filters = next;
	}

	let filters = $state<TourFilters>({
		categories: [],
		recommendedForKids: false,
		noEarlyDeparture: false
	});

	const visibleExcursions = $derived(
		filterExcursionsByDuration(filterExcursionsByTourFilters(excursions, filters), durationDays)
	);
</script>

<main class="tc-store-page">
	<aside class="tc-store-page__filters">
		<BookingFilterPanel value={filters} onChange={handleFiltersChange} />
	</aside>
	<div class="tc-store-page__grid">
		<StoreEditorialGrid excursions={visibleExcursions} />
	</div>
</main>

<style>
	.tc-store-page {
		display: flex;
		align-items: flex-start;
		gap: 24px;
		width: min(1180px, calc(100% - 32px));
		margin: 0 auto;
		background: #f7f3ec;
		min-height: 100vh;
	}

	.tc-store-page__filters {
		position: sticky;
		/* 84px (same offset `experience-filter-bar` uses to clear BookingBridge's
		   compact sticky bar) sits exactly flush against it — +16px on top of
		   that for a visible gap instead of the two touching edge-to-edge. */
		top: 100px;
		z-index: 15;
		flex: 0 0 auto;
	}

	.tc-store-page__grid {
		flex: 1 1 auto;
		min-width: 0;
	}

	/* StoreEditorialGrid centers itself with its own `width: min(1180px, ...)`
	   — inside this flex layout it should just fill the remaining column.
	   Its own 18px top padding also pushed the first card row below the
	   filter panel's top edge — zeroed here so both columns start flush. */
	.tc-store-page__grid :global(.tc-store-grid) {
		width: 100%;
		margin: 0;
		padding-top: 0;
	}

	@media (max-width: 980px) {
		.tc-store-page {
			flex-direction: column;
		}

		.tc-store-page__filters {
			position: static;
			width: 100%;
		}
	}
</style>
