<script lang="ts">
	// Canonical travel-landing assembly, per docs/lankatour.ru/ux/001 (§12 zone
	// list) and docs/lankatour.ru/ux/006 (turtle → logo morph spec):
	//
	//   [ FULLSCREEN MEDIA SLIDER ]  ← cinematic first impression, no scroll needed
	//     - slide 1 ("hero"): TurtleHeroMorph, autoplays on a fixed clock
	//       instead of real page scroll (see TurtleHeroMorphSlide) — 01.png →
	//       02.png → turtle → logo; any scroll/tap before it finishes skips
	//       straight to the end. No booking UI shown here anymore (removed
	//       2026-09-17 — it overlapped the wordmark and stuck through the
	//       wave reveal below); scrolling past hands off to the next slide
	//     - remaining slides: autoplay carousel (aerial video, photos, closing
	//       contact form)
	//   [ STICKY COMPACT BOOKING BAR ]   ← persists while browsing the store
	//   [ WHAT DO YOU WANT TO SEE? ]     ← sticky filter chips + results counter
	//   [ EDITORIAL TOUR GRID + TRUST ]  ← store-page (filters + asymmetric grid)
	//
	// The previous first pass (HeroScene/HeroOutro, a parallax-pager hero) is
	// superseded here by TurtleHeroMorph, which is the version the art
	// director's brief (doc 006) actually specifies. HeroScene/HeroOutro are
	// left in place for potential reuse elsewhere, just not wired in here.
	import MediaSlider from '$stylist/animation/component/organism/media-slider/index.svelte';
	import TurtleHeroMorphSlide from '$stylist/travel-commerce/component/organism/turtle-hero-morph-slide/index.svelte';
	import BookingBridge from '$stylist/booking/component/organism/booking-bridge/index.svelte';
	import StorePage from '$stylist/travel-commerce/component/template/store-page/index.svelte';
	import ContactRequestForm from '$stylist/travel-commerce/component/organism/contact-request-form/index.svelte';
	import { HERO_SLIDER as DEFAULT_HERO_SLIDER } from '$stylist/travel-commerce/const/preset/hero-slider';
	import type { RecipeTravelLanding } from '$stylist/travel-commerce/interface/recipe/travel-landing';
	import { createTravelLandingState } from './state.svelte';

	let {
		heroSlider = DEFAULT_HERO_SLIDER,
		heroAnimationConfig,
		heroAnimationMs,
		excursions,
		bookingValue = $bindable({
			pickup: 'Галле',
			date: '',
			adults: 2,
			seniors: 0,
			children: 0,
			childrenUnder3: 0,
			childrenTeen: 0
		})
	}: RecipeTravelLanding = $props();

	const landing = createTravelLandingState({
		get heroSlider() {
			return heroSlider;
		}
	});
</script>

<div
	class="tc-landing-page"
	data-active-slide-index={landing.activeSlideIndex}
	data-first-slide={landing.isFirstSlide}
>
	<MediaSlider
		slides={landing.slides}
		autoPlay
		autoPlayInterval={5000}
		showControls
		showIndicators
		onSlideChange={landing.handleSlideChange}
	>
		{#snippet heroContent({ markLoaded, setAtRest })}
			<TurtleHeroMorphSlide
				onAssetsLoaded={markLoaded}
				{setAtRest}
				slider={heroSlider}
				config={heroAnimationConfig}
				durationMs={heroAnimationMs}
			/>
		{/snippet}
		{#snippet formContent()}
			<ContactRequestForm onSubmit={landing.handleContactRequest} />
		{/snippet}
	</MediaSlider>
	<BookingBridge progress={1} bind:value={bookingValue} />
	<StorePage
		{excursions}
		durationDays={bookingValue.durationDays}
		onDurationDaysChange={(durationDays) => (bookingValue = { ...bookingValue, durationDays })}
	/>
</div>

<style>
	.tc-landing-page {
		background: #f7f3ec;
		color: #17231f;
	}
</style>
