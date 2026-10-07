<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
	import MediaSlider from '$stylist/animation/component/organism/media-slider/index.svelte';
	import BookingBridge from '$stylist/booking/component/organism/booking-bridge/index.svelte';
	import BookingAccordion from '$stylist/booking/component/organism/booking-accordion/index.svelte';
	import TravelCalculator from '$stylist/travel-commerce/component/organism/travel-calculator/index.svelte';
	import type { AddonQuantity } from '$stylist/travel-commerce/type/object/addon-quantity';
	import type { TripInfo } from '$stylist/travel-commerce/type/object/trip-info';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import type { PricingModel } from '$stylist/travel-commerce/type/object/pricing-model';
	import { calculateBookingQuote } from '$stylist/travel-commerce/function/script/calculate-booking-quote';
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import AnimatedDigit from '$stylist/animation/component/atom/animated-digit/index.svelte';
	import logoImage from '$stylist/travel-commerce/data/jpg/logo/logo.png';

	export type DayContentBlock = {
		text: string;
		/** Photos shown after `text`, in order; may be empty. Laid out two per row, an odd last one spans the row. */
		images: TourGalleryImage[];
	};

	export type DaySection = {
		type: 'day';
		dayNumber: number;
		title: string;
		/** Photos shown right under the day title, before the first block's text. */
		leadImages?: TourGalleryImage[];
		blocks: DayContentBlock[];
	};

	/** Opening text of the tour description, with the photos that follow it (before day 1). */
	export type IntroSection = {
		type: 'intro';
		text: string;
		images: TourGalleryImage[];
	};

	export type HotelSection = {
		type: 'hotel';
		name: string;
		description: string;
		image?: TourGalleryImage;
	};

	export type IncludedSection = {
		type: 'included';
		items: string[];
		/** «Не входит» — rendered alongside `items` when present. */
		excludedItems?: string[];
	};

	export type WhatToBringSection = {
		type: 'what-to-bring';
		items: string[];
	};

	export type HighlightsSection = {
		type: 'highlights';
		items: string[];
	};

	export type AddonsSection = {
		type: 'addons';
		items: TourAddon[];
	};

	export type ImportantInfoSection = {
		type: 'important-info';
		items: string[];
	};

	/** «Расписание» — group excursions (weekly) and tours (fixed departures). */
	export type ScheduleSection = {
		type: 'schedule';
		/** E.g. «по средам, с 4 ноября 2026 г. по 30 апреля 2027 г.». */
		summary: string;
		/** Tours: upcoming departures, ISO dates. */
		departures?: { start: string; end: string }[];
	};

	export type ContentSection =
		| IntroSection
		| DaySection
		| HotelSection
		| IncludedSection
		| WhatToBringSection
		| HighlightsSection
		| AddonsSection
		| ImportantInfoSection
		| ScheduleSection;

	type Props = {
		excursion: Excursion;
		gallery: TourGalleryImage[];
		content?: ContentSection[];
		pricing: PricingModel;
		/** The booking draft driving both the sticky top widget and the price picker under the title — bind this to a host-level store so it arrives pre-filled from wherever the visitor came from (e.g. the landing page's own booking bar) instead of always restarting at the defaults. */
		bookingValue?: BookingDraft;
		/** «Забронировать» in the top widget and under the price. Without it the buttons do nothing and the one under the price is hidden. */
		onBook?: (value: BookingDraft) => void;
		/** Addon counts by id from «Калькулятор стоимости» — bind to share them with the host (header price, checkout link). */
		addonQuantities?: Record<string, AddonQuantity>;
		/** «Откуда вас забрать» places for the calculator and the mobile accordion; the pickup list's own default when absent. */
		pickupOptions?: string[];
		/** Bookable start dates (ISO) when the tour runs on a schedule; absent — any day. */
		availableDates?: string[];
		/** Online prepayment per paying traveller per tour day, US cents — shows the «предоплата / остаток» line. */
		prepaymentPerPersonDayCents?: number;
		/** Calculator rows «Выезд»/«Заезд» and «Возвращение». */
		trip?: TripInfo;
		/** Line above the title, e.g. «Групповая экскурсия». */
		kicker?: string;
		/** Title shown on the page; `excursion.title` when absent (e.g. without «— экскурсия на 2 дня», the duration line says it). */
		heading?: string;
	};

	let {
		excursion,
		gallery,
		content = [],
		pricing,
		bookingValue = $bindable({
			pickup: 'Галле',
			date: '',
			adults: 2,
			seniors: 0,
			children: 0,
			childrenUnder3: 0,
			childrenTeen: 0
		}),
		onBook,
		addonQuantities = $bindable({}),
		pickupOptions,
		availableDates,
		prepaymentPerPersonDayCents,
		trip,
		kicker,
		heading
	}: Props = $props();

	// Prepare slides from gallery - captions will be shown as marquee ticker inside MediaSlider
	const slides = $derived<MediaSliderSlide[]>(
		gallery.map((img, index) => ({
			id: `gallery-${index}`,
			type: 'image' as const,
			src: img.src,
			alt: img.alt,
			caption: img.caption
		}))
	);

	function formatUsd(value: number): string {
		return `${Math.round(value).toLocaleString('ru-RU')} $`;
	}

	// Same `bookingValue` + addon counts drive the site header's «Цена», the
	// calculator and the phone total bar — all three agree.
	const totalPriceUsd = $derived(
		Math.round(calculateBookingQuote(pricing, bookingValue, addonQuantities).totalCents / 100)
	);

	// «Что входит / Не входит» close the calculator's receipt as plain lines.
	const includedSection = $derived(
		content.find((section): section is IncludedSection => section.type === 'included')
	);
	// «Природа», «Горы и водопады»… after the badges (ТОП, Популярный).
	const categoryLabels = $derived(
		(excursion.categories ?? [])
			.map((id) => EXPERIENCE_CATEGORIES.find((category) => category.id === id)?.label)
			.filter((label): label is (typeof EXPERIENCE_CATEGORIES)[number]['label'] => Boolean(label))
	);

	function formatDeparture(departure: { start: string; end: string }): string {
		const day = (iso: string, withYear: boolean) =>
			new Date(`${iso}T00:00:00Z`).toLocaleDateString('ru-RU', {
				day: 'numeric',
				month: 'long',
				...(withYear ? { year: 'numeric' } : {}),
				timeZone: 'UTC'
			});
		return `${day(departure.start, false)} — ${day(departure.end, true)}`;
	}

	// Phones: a bar pinned to the bottom with the total and «Забронировать»
	// while the calculator is off screen.
	let pricingCard = $state<HTMLElement>();
	let pricingVisible = $state(true);
	$effect(() => {
		if (!pricingCard || typeof IntersectionObserver === 'undefined') return;
		const observer = new IntersectionObserver(([entry]) => (pricingVisible = entry.isIntersecting));
		observer.observe(pricingCard);
		return () => observer.disconnect();
	});

	// Decision facts go up beside the price, in this order (as on the old
	// lankatur.ru); highlights sit between them and the long description.
	// «Что входит» and the addons are rows of the calculator now, not fact blocks.
	const factTypes: ContentSection['type'][] = ['important-info', 'schedule', 'what-to-bring'];
	const calculatorTypes: ContentSection['type'][] = ['included', 'addons'];
	const factSections = $derived(factTypes.flatMap((type) => content.filter((section) => section.type === type)));
	const highlightSections = $derived(content.filter((section) => section.type === 'highlights'));
	const storySections = $derived(
		content.filter(
			(section) =>
				section.type !== 'highlights' && !factTypes.includes(section.type) && !calculatorTypes.includes(section.type)
		)
	);
</script>

<main class="tc-travel-product">
	<!-- Cinematic MediaSlider with built-in marquee ticker and wave -->
	<MediaSlider
		{slides}
		autoPlay
		autoPlayInterval={5000}
		showControls
		showIndicators
		ariaLabel={excursion.title}
	/>

	<!-- Brand Logo - overlays the wave -->
	<div class="tc-travel-product__brand">
		<img src={logoImage} alt="ЛанкаТур - Экскурсии на Шри-Ланке" class="tc-travel-product__logo" />
	</div>

	<!-- Booking Bridge (desktop) -->
	<div class="tc-travel-product__booking-desktop">
		<BookingBridge progress={1} bind:value={bookingValue} showDuration={false} onSearch={onBook} />
	</div>

	<!-- Booking Accordion (mobile) -->
	<div class="tc-travel-product__booking-mobile">
		<BookingAccordion
			bind:value={bookingValue}
			showAdventures={false}
			showDuration={false}
			{pickupOptions}
			pickupTariff={pricing.pickupSurcharges}
			{availableDates}
			onSearch={onBook}
		/>
	</div>

	<!-- Main Content: blog-style tour description -->
	<div class="tc-travel-product__content">
		<!-- Tour Header -->
		<header class="tc-travel-product__header">
			<!-- 2026-10-07 (заказчик): the length is a badge right of the type line, not a line under the title. -->
			<p class="tc-travel-product__kicker">
				<span class="tc-travel-product__kicker-text">
					{#if kicker}{kicker}{/if}
					<span class="tc-travel-product__badge tc-travel-product__badge--duration">{excursion.duration}</span>
				</span>
			</p>
			<h1 class="tc-travel-product__title">{heading ?? excursion.title}</h1>
			{#if excursion.tags.length > 0 || categoryLabels.length > 0}
				<div class="tc-travel-product__badges">
					{#each excursion.tags as tag (tag)}
						<span class="tc-travel-product__badge">{tag}</span>
					{/each}
					{#each categoryLabels as label (label)}
						<span class="tc-travel-product__badge tc-travel-product__badge--category">{label}</span>
					{/each}
				</div>
			{/if}
		</header>

		{#snippet photoGrid(images: TourGalleryImage[])}
			{#if images.length > 0}
				<div class="tc-travel-product__day-images">
					{#each images as image}
						<figure class="tc-travel-product__day-image">
							<img src={image.src} alt={image.alt} />
							{#if image.caption}
								<figcaption>{image.caption}</figcaption>
							{/if}
						</figure>
					{/each}
				</div>
			{/if}
		{/snippet}

		{#snippet contentSection(section: ContentSection)}
			{#if section.type === 'intro'}
				<section class="tc-travel-product__intro">
					<p class="tc-travel-product__day-text">{section.text}</p>
					{@render photoGrid(section.images)}
				</section>
			{:else if section.type === 'highlights'}
				<section class="tc-travel-product__highlights">
					<h2>Кратко о туре</h2>
					<ul>
						{#each section.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</section>
			{:else if section.type === 'day'}
				<section class="tc-travel-product__day">
					<h2 class="tc-travel-product__day-title">День {section.dayNumber}. {section.title}</h2>
					{@render photoGrid(section.leadImages ?? [])}
					{#each section.blocks as block}
						<div class="tc-travel-product__day-block">
							<p class="tc-travel-product__day-text">{block.text}</p>
							{@render photoGrid(block.images)}
						</div>
					{/each}
				</section>
			{:else if section.type === 'hotel'}
				<section class="tc-travel-product__hotel">
					<h3 class="tc-travel-product__hotel-title">{section.name}</h3>
					<p class="tc-travel-product__hotel-description">{section.description}</p>
					{#if section.image}
						<figure class="tc-travel-product__hotel-image">
							<img src={section.image.src} alt={section.image.alt} />
							{#if section.image.caption}
								<figcaption>{section.image.caption}</figcaption>
							{/if}
						</figure>
					{/if}
				</section>
			{:else if section.type === 'included'}
				<section class="tc-travel-product__included">
					<div class="tc-travel-product__included-col">
						<h2>Что входит в экскурсию</h2>
						<ul>
							{#each section.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					{#if section.excludedItems && section.excludedItems.length > 0}
						<div class="tc-travel-product__included-col tc-travel-product__included-col--excluded">
							<h2>Не входит</h2>
							<ul>
								{#each section.excludedItems as item}
									<li>{item}</li>
								{/each}
							</ul>
						</div>
					{/if}
				</section>
			{:else if section.type === 'addons'}
				<section class="tc-travel-product__addons">
					<h2>Дополнительные услуги и замены</h2>
					<div class="tc-travel-product__addons-grid">
						{#each section.items as addon (addon.id)}
							<div class="tc-travel-product__addon">
								<div class="tc-travel-product__addon-head">
									<span class="tc-travel-product__addon-label">{addon.label}</span>
									<span class="tc-travel-product__addon-price">{addon.price}</span>
								</div>
								{#if addon.description}
									<p class="tc-travel-product__addon-description">{addon.description}</p>
								{/if}
							</div>
						{/each}
					</div>
				</section>
			{:else if section.type === 'schedule'}
				<section class="tc-travel-product__schedule-block">
					<h2>Расписание</h2>
					<p class="tc-travel-product__schedule-summary">{section.summary}</p>
					{#if section.departures && section.departures.length > 0}
						<ul class="tc-travel-product__departures">
							{#each section.departures as departure (departure.start)}
								<li>{formatDeparture(departure)}</li>
							{/each}
						</ul>
					{/if}
				</section>
			{:else if section.type === 'what-to-bring'}
				<section class="tc-travel-product__what-to-bring">
					<h2>Что взять с собой</h2>
					<ul>
						{#each section.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</section>
			{:else if section.type === 'important-info'}
				<section class="tc-travel-product__important-info">
					<h2>Важно знать</h2>
					{#if section.items.length > 0}
						<ul>
							{#each section.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</section>
			{/if}
		{/snippet}

		<!-- 2026-10-06, заказчик: as on the old lankatur.ru, everything needed to
		     decide is on the first screen — price + facts (schedule, included /
		     not included, addons, what to bring); the long description follows. -->
		<!-- 2026-10-07 (заказчик): «Калькулятор стоимости» — services × guests × sum, right under the title. -->
		<div class="tc-travel-product__calculator" bind:this={pricingCard}>
			<TravelCalculator
				{pricing}
				serviceLabel={heading ?? excursion.title}
				bind:bookingValue
				bind:addons={addonQuantities}
				included={includedSection?.items ?? []}
				excluded={includedSection?.excludedItems ?? []}
				{pickupOptions}
				{availableDates}
				{trip}
				durationDays={excursion.durationDays ?? 1}
				{prepaymentPerPersonDayCents}
				{onBook}
			/>
		</div>

		<div class="tc-travel-product__overview">
			<div class="tc-travel-product__facts">
				{#each factSections as section, index (index)}
					{@render contentSection(section)}
				{/each}
			</div>
		</div>

		{#each highlightSections as section, index (index)}
			{@render contentSection(section)}
		{/each}

		{#if storySections.length > 0}
			<h2 class="tc-travel-product__story-title">Описание</h2>
			{#each storySections as section, index (index)}
				{@render contentSection(section)}
			{/each}
		{/if}
	</div>

	{#if onBook}
		<div class="tc-travel-product__mobile-total" data-hidden={pricingVisible || undefined}>
			<span class="tc-travel-product__mobile-total-text">
				<span class="tc-travel-product__price-total-label">Итого</span>
				<span class="tc-travel-product__mobile-total-value">
					<AnimatedDigit from={totalPriceUsd} to={totalPriceUsd} duration="500ms" format={formatUsd} />
				</span>
			</span>
			<button type="button" class="tc-travel-product__book" onclick={() => onBook(bookingValue)}>
				Забронировать
			</button>
		</div>
	{/if}
</main>

<style>
	.tc-travel-product {
		background: #f7f3ec;
		color: #17231f;
		min-height: 100vh;
	}

	/* Brand Logo - positioned over the wave */
	.tc-travel-product__brand {
		position: relative;
		z-index: 10;
		margin-top: -24rem;
		margin-bottom: 0;
		padding: 0 2rem 8rem;
		text-align: center;
		pointer-events: none;
	}

	.tc-travel-product__logo {
		width: min(500px, 85%);
		height: auto;
		display: block;
		margin: 0 auto;
	}

	/* Desktop booking bar - preserve sticky context */
	.tc-travel-product__booking-desktop {
		display: block;
		position: sticky;
		top: 0;
		z-index: 30;
	}

	/* Mobile booking accordion */
	.tc-travel-product__booking-mobile {
		display: none;
	}

	@media (max-width: 768px) {
		/* Hide desktop booking bar on mobile */
		.tc-travel-product__booking-desktop {
			display: none;
		}

		/* Show mobile booking accordion */
		.tc-travel-product__booking-mobile {
			display: block;
			padding: clamp(0.75rem, 3vw, 1.25rem) 0 2rem;
		}
		.tc-travel-product__brand {
			margin-top: -16rem;
			margin-bottom: 0;
			padding-bottom: 5rem;
		}

		.tc-travel-product__logo {
			width: min(400px, 90%);
		}
	}

	.tc-travel-product__content {
		width: var(--page-width, min(1180px, calc(100% - 32px)));
		margin: 0 auto;
		padding: 2rem 0 4rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	/* Tour Header */
	/* 2026-10-07 (заказчик): tags clear of the title, less air before the calculator. */
	.tc-travel-product__header {
		text-align: center;
		padding: 1rem 0 0;
		margin-bottom: -1rem;
	}

	/* 2026-10-07 (заказчик): readable size and clear of the beige band's top edge. */
	/* The type line is centred on the page by itself; the days badge hangs off
	   its right end, a little raised and smaller, without shifting the centre. */
	.tc-travel-product__kicker {
		margin: clamp(1.5rem, 4vw, 2.5rem) 0 0.75rem;
		font-size: clamp(1.05rem, 2.2vw, 1.3rem);
		line-height: 1.3;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #1a8a86;
	}

	.tc-travel-product__title {
		margin: 0 0 0.5rem;
		font-size: clamp(1.8rem, 5vw, 2.8rem);
		line-height: 1.2;
		font-weight: 800;
		color: #17231f;
	}

	.tc-travel-product__kicker-text {
		position: relative;
		display: inline-block;
	}

	.tc-travel-product__badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.25rem;
	}

	.tc-travel-product__badge {
		padding: 0.3rem 0.85rem;
		border-radius: 999px;
		background: rgba(26, 138, 134, 0.12);
		color: #146663;
		font-size: 0.85rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.tc-travel-product__badge--duration {
		position: absolute;
		left: calc(100% + 0.6rem);
		top: -0.55em;
		white-space: nowrap;
		font-size: 0.68em;
		letter-spacing: 0.04em;
	}

	/* Phones: no room on the right — the badge sits small and raised after the last word. */
	@media (max-width: 640px) {
		.tc-travel-product__badge--duration {
			position: relative;
			left: auto;
			top: -0.5em;
			margin-left: 0.4rem;
		}
	}

	.tc-travel-product__badge--category {
		background: rgba(23, 35, 31, 0.06);
		color: rgba(23, 35, 31, 0.75);
		text-transform: none;
		letter-spacing: 0;
		font-weight: 600;
	}

	.tc-travel-product__schedule-block {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 0.75rem;
	}

	.tc-travel-product__schedule-summary {
		margin: 0;
		font-weight: 600;
		line-height: 1.5;
	}

	.tc-travel-product__departures {
		margin: 0.75rem 0 0;
		padding: 0 0 0 1.25rem;
		display: grid;
		gap: 0.35rem;
		color: rgba(23, 35, 31, 0.82);
	}

	/* Highlights */
	.tc-travel-product__highlights {
		background: rgba(26, 138, 134, 0.08);
		border-radius: 0.75rem;
		padding: 1.75rem 2rem;
	}

	.tc-travel-product__highlights h2 {
		margin: 0 0 1rem;
		font-size: clamp(1.3rem, 3vw, 1.6rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__highlights ul {
		margin: 0;
		padding: 0 0 0 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.tc-travel-product__highlights li {
		font-size: clamp(1rem, 2vw, 1.1rem);
		line-height: 1.6;
		font-weight: 600;
		color: #146663;
	}

	/* Day Section */
	.tc-travel-product__day {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.tc-travel-product__intro {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.tc-travel-product__day-title {
		margin: 0;
		font-size: clamp(1.5rem, 4vw, 2rem);
		line-height: 1.3;
		font-weight: 700;
		color: #17231f;
		border-left: 4px solid #1a8a86;
		padding-left: 1rem;
	}

	.tc-travel-product__day-block {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.tc-travel-product__day-text {
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.15rem);
		line-height: 1.7;
		color: rgba(23, 35, 31, 0.85);
	}

	.tc-travel-product__day-images {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.tc-travel-product__day-image {
		margin: 0;
		border-radius: 0.5rem;
		overflow: hidden;
		background: #17231f;
	}

	.tc-travel-product__day-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		aspect-ratio: 4/3;
	}

	.tc-travel-product__day-image:last-child:nth-child(odd) {
		grid-column: 1 / -1;
	}

	.tc-travel-product__day-image:last-child:nth-child(odd) img {
		aspect-ratio: 16/9;
	}

	.tc-travel-product__day-image figcaption {
		padding: 0.5rem 0.75rem;
		color: rgba(247, 243, 236, 0.9);
		font-size: 0.85rem;
		font-style: italic;
	}

	/* Hotel Section */
	.tc-travel-product__hotel {
		background: rgba(255, 255, 255, 0.6);
		border-radius: 0.75rem;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tc-travel-product__hotel-title {
		margin: 0;
		font-size: clamp(1.3rem, 3vw, 1.6rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__hotel-description {
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.1rem);
		line-height: 1.6;
		color: rgba(23, 35, 31, 0.8);
	}

	.tc-travel-product__hotel-image {
		margin: 1rem 0 0;
		border-radius: 0.5rem;
		overflow: hidden;
	}

	.tc-travel-product__hotel-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	/* Included / Excluded & What to Bring */
	.tc-travel-product__included,
	.tc-travel-product__what-to-bring {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 0.75rem;
		padding: 2rem;
	}

	.tc-travel-product__included {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.tc-travel-product__included h2,
	.tc-travel-product__what-to-bring h2 {
		margin: 0 0 1.5rem;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__included-col--excluded h2 {
		color: rgba(23, 35, 31, 0.6);
	}

	.tc-travel-product__included ul,
	.tc-travel-product__what-to-bring ul {
		margin: 0;
		padding: 0 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.tc-travel-product__included li,
	.tc-travel-product__what-to-bring li {
		font-size: clamp(1rem, 2vw, 1.1rem);
		line-height: 1.6;
		color: rgba(23, 35, 31, 0.82);
	}

	.tc-travel-product__included-col--excluded li {
		color: rgba(23, 35, 31, 0.6);
	}

	/* Addons & surcharges */
	.tc-travel-product__addons {
		background: rgba(242, 138, 0, 0.08);
		border-radius: 0.75rem;
		padding: 2rem;
	}

	.tc-travel-product__addons h2 {
		margin: 0 0 1.25rem;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__addons-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
		gap: 1rem;
	}

	.tc-travel-product__addon {
		background: rgba(255, 255, 255, 0.6);
		border: 1px solid rgba(23, 35, 31, 0.1);
		border-radius: 0.6rem;
		padding: 1.1rem 1.25rem;
	}

	.tc-travel-product__addon-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.75rem;
	}

	.tc-travel-product__addon-label {
		font-weight: 700;
		color: #17231f;
	}

	.tc-travel-product__addon-price {
		flex-shrink: 0;
		font-weight: 700;
		color: #f28a00;
		text-align: right;
	}

	.tc-travel-product__addon-description {
		margin: 0.4rem 0 0;
		font-size: 0.92rem;
		line-height: 1.5;
		color: rgba(23, 35, 31, 0.7);
	}

	/* Important info & schedule */
	.tc-travel-product__important-info {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 0.75rem;
		padding: 2rem;
	}

	.tc-travel-product__important-info h2 {
		margin: 0 0 1.25rem;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__important-info ul {
		margin: 0;
		padding: 0 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.tc-travel-product__important-info li {
		font-size: 0.98rem;
		line-height: 1.6;
		color: rgba(23, 35, 31, 0.82);
	}

	/* Overview: price (right, sticky) + decision facts (left). On narrow
	   screens one column, price first — it comes first in the markup. */
	.tc-travel-product__overview {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.5rem;
		align-items: start;
	}

	.tc-travel-product__facts {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
		align-items: start;
		gap: 1.25rem;
	}

	/* One fact (no «Что взять с собой»): full width. */
	.tc-travel-product__facts > :only-child {
		grid-column: 1 / -1;
	}

	/* Facts are scanned, not read — tighter cards and headings than the story. */
	.tc-travel-product__facts > section {
		padding: 1.5rem 1.75rem;
	}

	.tc-travel-product__facts h2 {
		margin-bottom: 1rem;
		font-size: clamp(1.2rem, 2.4vw, 1.4rem);
	}

	.tc-travel-product__facts li {
		font-size: 1rem;
		line-height: 1.5;
	}

	.tc-travel-product__facts ul {
		gap: 0.45rem;
	}

	.tc-travel-product__facts .tc-travel-product__addons-grid {
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 0.75rem;
	}

	.tc-travel-product__facts .tc-travel-product__addon {
		padding: 0.85rem 1rem;
	}

	/* Narrow column: prices like «+$30 взр. / $15 реб.» go under the label
	   instead of overflowing the card. */
	.tc-travel-product__facts .tc-travel-product__addon-head {
		flex-direction: column;
		gap: 0.2rem;
	}

	.tc-travel-product__facts .tc-travel-product__addon-price {
		flex-shrink: 1;
		text-align: left;
	}

	.tc-travel-product__story-title {
		margin: 1rem 0 -1rem;
		font-size: clamp(1.6rem, 4vw, 2.2rem);
		font-weight: 800;
		color: #17231f;
	}

	@media (max-width: 960px) {
		.tc-travel-product__overview {
			grid-template-columns: minmax(0, 1fr);
		}

		.tc-travel-product__facts {
			grid-template-columns: minmax(0, 1fr);
		}

	}

	@container (max-width: 960px) {
		.tc-travel-product__overview {
			grid-template-columns: minmax(0, 1fr);
		}

		.tc-travel-product__facts {
			grid-template-columns: minmax(0, 1fr);
		}

	}

	/* Calculator: pickup / date fields,
	addon checkboxes {
		display: grid;
		gap: 0.6rem;
		margin-bottom: 1.25rem;
	}

	/* Phones: total + «Забронировать» pinned to the bottom while the card is off screen. */
	.tc-travel-product__mobile-total {
		display: none;
	}

	@media (max-width: 960px) {
		.tc-travel-product__mobile-total {
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 40;
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 1rem;
			padding: 0.75rem 16px calc(0.75rem + env(safe-area-inset-bottom));
			background: rgba(255, 255, 255, 0.96);
			box-shadow: 0 -8px 24px rgba(20, 36, 31, 0.12);
			transition: transform 0.2s ease;
		}

		.tc-travel-product__mobile-total[data-hidden] {
			transform: translateY(110%);
		}

		.tc-travel-product__mobile-total .tc-travel-product__book {
			width: auto;
			margin: 0;
			flex-shrink: 0;
		}
	}

	.tc-travel-product__mobile-total-text {
		display: grid;
	}

	.tc-travel-product__mobile-total-value {
		font-size: 1.3rem;
		font-weight: 800;
	}

	.tc-travel-product__book {
		display: block;
		width: 100%;
		margin-top: 1rem;
		border: 0;
		border-radius: 999px;
		padding: 14px 24px;
		background: #17231f;
		color: white;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}

	.tc-travel-product__book:hover {
		background: #2a3a34;
	}

	.tc-travel-product__price-total-label {
		font-size: 1.1rem;
		font-weight: 600;
		color: rgba(23, 35, 31, 0.75);
	}

	/* Responsive: Mobile */
	@media (max-width: 768px) {
		.tc-travel-product__content {
			padding: 1.5rem 1rem 3rem;
			gap: 2.5rem;
		}

		.tc-travel-product__day-images {
			grid-template-columns: 1fr;
		}

		.tc-travel-product__included {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.tc-travel-product__hotel,
		.tc-travel-product__highlights,
		.tc-travel-product__included,
		.tc-travel-product__addons,
		.tc-travel-product__what-to-bring,
		.tc-travel-product__important-info {
			padding: 1.5rem;
		}
	}

	/* Container queries for Story sandbox */
	@container (max-width: 768px) {
		.tc-travel-product__content {
			padding: 1.5rem 1rem 3rem;
			gap: 2.5rem;
		}

		.tc-travel-product__day-images {
			grid-template-columns: 1fr;
		}

		.tc-travel-product__included {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.tc-travel-product__hotel,
		.tc-travel-product__highlights,
		.tc-travel-product__included,
		.tc-travel-product__addons,
		.tc-travel-product__what-to-bring,
		.tc-travel-product__important-info {
			padding: 1.5rem;
		}
	}
</style>
