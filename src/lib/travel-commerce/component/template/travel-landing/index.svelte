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
	import type { ContactRequest } from '$stylist/travel-commerce/type/object/contact-request';
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { HeroSlider } from '$stylist/travel-commerce/type/object/hero-slider';
	import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
	import type { TurtleHeroMorphConfig } from '$stylist/travel-commerce/type/object/turtle-hero-morph-config';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';

	type Props = {
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
	};

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
	}: Props = $props();

	// The hero-morph slide and closing contact form are structural (part of
	// this template's own behaviour, not per-site content), so only the
	// carousel pages in between come from `heroSlider`.
	const slides = $derived<MediaSliderSlide[]>([
		{ id: 'hero-morph', type: 'hero', caption: 'Путешествие начинается' },
		...heroSlider.pages,
		{ id: 'contact', type: 'form' }
	]);

	// TODO: wire this up to a real submission endpoint once one exists.
	function handleContactRequest(value: ContactRequest) {
		console.info('Contact request submitted', value);
	}

	// Tracks which MediaSlider slide is currently showing, updated by the
	// slider's onSlideChange on every change (autoplay tick, arrows,
	// indicators, keyboard, or the hero slide's own gesture-driven `next`) —
	// the rest of the page can branch on `isFirstSlide`/`activeSlideId` once
	// there's a concrete design for what should differ.
	let activeSlideIndex = $state(0);
	let activeSlideId = $state('hero-morph');
	const isFirstSlide = $derived(activeSlideIndex === 0);
</script>

<div class="tc-landing-page" data-active-slide-index={activeSlideIndex} data-first-slide={isFirstSlide}>
	<MediaSlider
		{slides}
		autoPlay
		autoPlayInterval={6000}
		showControls
		showIndicators
		onSlideChange={({ index, slide }) => {
			activeSlideIndex = index;
			activeSlideId = slide.id;
		}}
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
			<ContactRequestForm onSubmit={handleContactRequest} />
		{/snippet}
	</MediaSlider>
	<BookingBridge progress={1} bind:value={bookingValue} />
	<StorePage {excursions} durationDays={bookingValue.durationDays} />
</div>

<style>
	.tc-landing-page {
		background: #f7f3ec;
		color: #17231f;
	}
</style>
