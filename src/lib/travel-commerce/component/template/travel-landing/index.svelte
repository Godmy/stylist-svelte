<script lang="ts">
	// Canonical travel-landing assembly:
	//
	//   [ FULLSCREEN MEDIA SLIDER + RUNNING-LINE TICKER ]
	//     overlaid with [ FILTERS | «Куда отправимся?» TOPIC TILES ]
	//
	// 2026-10-05 (заказчик): the turtle → logo hero morph is gone from the
	// landing (it lives on /about now, composed by the host), and so is the
	// sticky BookingBridge under the slider — the host puts the plain
	// BookingBar into its own page header instead. The catalogue entry points
	// (filters + topic tiles) moved up from below the slider onto the slider
	// itself, so the page is: header → slider → footer.
	//
	// 2026-10-05, iteration 2: no scroll-driven wave reveal and no
	// caption ticker any more — the host's footer is the running line now,
	// unrelated to the slides. The filters lead with «Что хотите
	// посмотреть?» (open) and skip «Тип экскурсии» — the topic tiles cover it.
	//
	// 2026-10-03 (заказчик): the store itself (StorePage) lives on its own
	// page. Any filter pick here is reported to the host (`onFiltersChange`),
	// which navigates into the store with it preselected; the topic tiles are
	// plain links the host builds.
	import MediaSlider from '$stylist/animation/component/organism/media-slider/index.svelte';
	import BookingFilterPanel from '$stylist/booking/component/organism/booking-filter-panel/index.svelte';
	import LandingTopicGrid from '$stylist/travel-commerce/component/organism/landing-topic-grid/index.svelte';
	import { HERO_SLIDER as DEFAULT_HERO_SLIDER } from '$stylist/travel-commerce/const/preset/hero-slider';
	import type { RecipeTravelLanding } from '$stylist/travel-commerce/interface/recipe/travel-landing';
	import type { TourFilters } from '$stylist/booking/type/object/tour-filters';
	import { createTravelLandingState } from './state.svelte';

	let { heroSlider = DEFAULT_HERO_SLIDER, topics = [], onFiltersChange }: RecipeTravelLanding =
		$props();

	let filters = $state<TourFilters>({
		categories: [],
		recommendedForKids: false,
		noEarlyDeparture: false
	});

	function handleFiltersChange(next: TourFilters) {
		filters = next;
		onFiltersChange?.(next);
	}

	const landing = createTravelLandingState({
		get heroSlider() {
			return heroSlider;
		}
	});
</script>

<div class="tc-landing-page" data-active-slide-index={landing.activeSlideIndex}>
	<MediaSlider
		slides={landing.slides}
		autoPlay
		autoPlayInterval={5000}
		scrollReveal={false}
		showTicker={false}
		showControls
		showIndicators
		onSlideChange={landing.handleSlideChange}
	>
		{#snippet overlayContent()}
			<section class="tc-landing-page__entry" aria-labelledby="tc-landing-page-entry-title">
				<aside class="tc-landing-page__filters">
					<BookingFilterPanel
						value={filters}
						sections={['experiences', 'extras', 'physical-load']}
						onChange={handleFiltersChange}
					/>
				</aside>
				<div class="tc-landing-page__topics">
					<h2 id="tc-landing-page-entry-title" class="tc-landing-page__title">Куда отправимся?</h2>
					<LandingTopicGrid {topics} />
				</div>
			</section>
		{/snippet}
	</MediaSlider>
</div>

<style>
	.tc-landing-page {
		background: #f7f3ec;
		color: #17231f;
	}

	/* Same two-column rhythm as StorePage (filters | content), so the
	   landing → store hop keeps the filter panel in the same place. Lives
	   inside MediaSlider's overlay layer (top edge → ticker); scrolls on its
	   own when it's taller than that. `--tc-landing-overlay-top` lets a host
	   with a header laid over the slider push the content below it. */
	.tc-landing-page__entry {
		box-sizing: border-box;
		display: flex;
		align-items: flex-start;
		gap: 24px;
		width: min(1180px, calc(100% - 32px));
		max-height: 100%;
		margin: 0 auto;
		padding: calc(var(--tc-landing-overlay-top, 0px) + 24px) 0 24px;
		overflow-y: auto;
		overscroll-behavior: contain;
		scrollbar-width: thin;
	}

	.tc-landing-page__filters {
		position: sticky;
		top: 0;
		flex: 0 0 auto;
	}

	.tc-landing-page__topics {
		flex: 1 1 auto;
		min-width: 0;
	}

	.tc-landing-page__title {
		margin: 0 0 16px;
		color: #fff;
		font-family: 'Playfair Display Variable', Georgia, serif;
		font-size: clamp(1.6rem, 3vw, 2.2rem);
		line-height: 1.15;
		text-shadow: 0 2px 16px rgba(0, 0, 0, 0.45);
	}

	@media (max-width: 980px) {
		.tc-landing-page__entry {
			flex-direction: column;
		}

		.tc-landing-page__filters {
			position: static;
			width: 100%;
		}

		.tc-landing-page__filters :global(.tc-booking-filter-panel) {
			max-width: none;
		}
	}
</style>
