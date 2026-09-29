<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
	import MediaSlider from '$stylist/animation/component/organism/media-slider/index.svelte';
	import BookingBridge from '$stylist/booking/component/organism/booking-bridge/index.svelte';
	import BookingAccordion from '$stylist/booking/component/organism/booking-accordion/index.svelte';
	import BookingGuest from '$stylist/booking/component/molecule/booking-guest/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
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
		blocks: DayContentBlock[];
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
		schedule?: { label: string; value: string }[];
	};

	export type ContentSection =
		| DaySection
		| HotelSection
		| IncludedSection
		| WhatToBringSection
		| HighlightsSection
		| AddonsSection
		| ImportantInfoSection;

	/** Everything needed to compute the one price shown on the page, reactively, from the guest picker below. Cents are integer US cents, same convention as the rest of the site. */
	export type PricingModel = {
		priceUnit: 'per_person' | 'per_tour';
		/** Adult per-person rate (`per_person`) or the total price at the smallest listed group size (`per_tour`). */
		basePriceCents: number;
		/** Child (~5-12) rate — `per_person` tours only. Falls back to the adult rate when absent. */
		childPriceCents?: number;
		/** `per_tour` tours only — total price by headcount, smallest group first. */
		groupPricing?: { participants: number; priceCents: number }[];
		/** Percent off the adult per-person rate for each senior (пенсионер), e.g. `10` for 10%. */
		seniorDiscountPercent: number;
	};

	type Props = {
		excursion: Excursion;
		gallery: TourGalleryImage[];
		content?: ContentSection[];
		pricing: PricingModel;
		/** The booking draft driving both the sticky top widget and the price picker below — bind this to a host-level store so it arrives pre-filled from wherever the visitor came from (e.g. the landing page's own booking bar) instead of always restarting at the defaults. */
		bookingValue?: BookingDraft;
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
		})
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

	function formatUsdCents(cents: number): string {
		return `${Math.round(cents / 100).toLocaleString('ru-RU')} $`;
	}

	// Same `bookingValue` drives both the sticky top widget and this total —
	// pick "3 человека" in either place and both agree.
	const totalPriceCents = $derived.by(() => {
		const adults = bookingValue.adults;
		const seniors = bookingValue.seniors ?? 0;
		const children = bookingValue.children;
		const childrenTeen = bookingValue.childrenTeen ?? 0;
		const discount = pricing.seniorDiscountPercent / 100;

		if (pricing.priceUnit === 'per_person') {
			const adultRate = pricing.basePriceCents;
			const childRate = pricing.childPriceCents ?? adultRate;
			const seniorRate = Math.round(adultRate * (1 - discount));
			// Teens (13-18) charged at the adult rate, under-3s (bookingValue.childrenUnder3) ride free — no
			// separate rate exists for either in the tour pricing data.
			return adults * adultRate + seniors * seniorRate + children * childRate + childrenTeen * adultRate;
		}

		// per_tour: total is looked up by headcount from `groupPricing`, then
		// each senior's per-person share of that total is discounted.
		const headcount = Math.max(1, adults + seniors + children + childrenTeen);
		const table =
			pricing.groupPricing && pricing.groupPricing.length > 0
				? [...pricing.groupPricing].sort((a, b) => a.participants - b.participants)
				: [{ participants: headcount, priceCents: pricing.basePriceCents }];
		const row =
			table.find((r) => r.participants === headcount) ??
			(headcount < table[0].participants ? table[0] : table[table.length - 1]);
		const perPersonShare = row.priceCents / row.participants;
		return Math.round(row.priceCents - seniors * perPersonShare * discount);
	});
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
		<BookingBridge progress={1} bind:value={bookingValue} showDuration={false} />
	</div>

	<!-- Booking Accordion (mobile) -->
	<div class="tc-travel-product__booking-mobile">
		<BookingAccordion bind:value={bookingValue} showAdventures={false} showDuration={false} />
	</div>

	<!-- Main Content: blog-style tour description -->
	<div class="tc-travel-product__content">
		<!-- Tour Header -->
		<header class="tc-travel-product__header">
			<h1 class="tc-travel-product__title">{excursion.title}</h1>
			<p class="tc-travel-product__duration">{excursion.duration}</p>
			{#if excursion.tags.length > 0}
				<div class="tc-travel-product__badges">
					{#each excursion.tags as tag}
						<span class="tc-travel-product__badge">{tag}</span>
					{/each}
				</div>
			{/if}
		</header>

		<hr class="tc-travel-product__divider" />

		<!-- Content Sections -->
		{#each content as section, index (index)}
			{#if section.type === 'highlights'}
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
					{#each section.blocks as block}
						<div class="tc-travel-product__day-block">
							<p class="tc-travel-product__day-text">{block.text}</p>
							{#if block.images.length > 0}
								<div class="tc-travel-product__day-images">
									{#each block.images as image}
										<figure class="tc-travel-product__day-image">
											<img src={image.src} alt={image.alt} />
											{#if image.caption}
												<figcaption>{image.caption}</figcaption>
											{/if}
										</figure>
									{/each}
								</div>
							{/if}
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
					{#if section.schedule && section.schedule.length > 0}
						<dl class="tc-travel-product__schedule">
							{#each section.schedule as row}
								<div class="tc-travel-product__schedule-row">
									<dt>{row.label}</dt>
									<dd>{row.value}</dd>
								</div>
							{/each}
						</dl>
					{/if}
					{#if section.items.length > 0}
						<ul>
							{#each section.items as item}
								<li>{item}</li>
							{/each}
						</ul>
					{/if}
				</section>
			{/if}
		{/each}

		<!-- Pricing Section -->
		<section class="tc-travel-product__pricing">
			<h2>Стоимость</h2>
			<p class="tc-travel-product__pricing-hint">
				Цена зависит от числа участников{pricing.seniorDiscountPercent > 0
					? ` — пенсионерам скидка ${pricing.seniorDiscountPercent}%`
					: ''}.
			</p>
			<BookingGuest
				adults={bookingValue.adults}
				seniors={bookingValue.seniors ?? 0}
				children={bookingValue.children}
				childrenUnder3={bookingValue.childrenUnder3 ?? 0}
				childrenTeen={bookingValue.childrenTeen ?? 0}
				onAdultsChange={(value) => (bookingValue = { ...bookingValue, adults: value })}
				onSeniorsChange={(value) => (bookingValue = { ...bookingValue, seniors: value })}
				onChildrenChange={(value) => (bookingValue = { ...bookingValue, children: value })}
				onChildrenUnder3Change={(value) => (bookingValue = { ...bookingValue, childrenUnder3: value })}
				onChildrenTeenChange={(value) => (bookingValue = { ...bookingValue, childrenTeen: value })}
			/>
			<div class="tc-travel-product__price-total">
				<span class="tc-travel-product__price-total-label">Итого</span>
				<span class="tc-travel-product__price-total-value">{formatUsdCents(totalPriceCents)}</span>
			</div>
		</section>
	</div>
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
		max-width: 900px;
		margin: 0 auto;
		padding: 2rem 1.5rem 4rem;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	/* Tour Header */
	.tc-travel-product__header {
		text-align: center;
		padding: 1rem 0;
	}

	.tc-travel-product__title {
		margin: 0 0 0.5rem;
		font-size: clamp(1.8rem, 5vw, 2.8rem);
		line-height: 1.2;
		font-weight: 800;
		color: #17231f;
	}

	.tc-travel-product__duration {
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.2rem);
		color: rgba(23, 35, 31, 0.65);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.tc-travel-product__badges {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 0.85rem;
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

	.tc-travel-product__divider {
		border: 0;
		height: 2px;
		background: linear-gradient(to right, transparent, rgba(23, 35, 31, 0.2), transparent);
		margin: 1rem 0 2rem;
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

	.tc-travel-product__schedule {
		margin: 0 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.tc-travel-product__schedule-row {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.6rem 0;
		border-bottom: 1px solid rgba(23, 35, 31, 0.1);
	}

	.tc-travel-product__schedule-row dt {
		color: rgba(23, 35, 31, 0.6);
	}

	.tc-travel-product__schedule-row dd {
		margin: 0;
		font-weight: 600;
		color: #17231f;
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

	/* Pricing */
	.tc-travel-product__pricing {
		background: rgba(255, 255, 255, 0.6);
		border-radius: 0.75rem;
		padding: 2rem;
	}

	.tc-travel-product__pricing h2 {
		margin: 0 0 0.5rem;
		font-size: clamp(1.4rem, 3vw, 1.8rem);
		color: #17231f;
		font-weight: 700;
	}

	.tc-travel-product__pricing-hint {
		margin: 0 0 1.5rem;
		color: rgba(23, 35, 31, 0.65);
	}

	.tc-travel-product__price-total {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 1.5rem;
		padding: 1.1rem 1.25rem;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 0.5rem;
		border: 1px solid rgba(23, 35, 31, 0.1);
	}

	.tc-travel-product__price-total-label {
		font-size: 1.1rem;
		font-weight: 600;
		color: rgba(23, 35, 31, 0.75);
	}

	.tc-travel-product__price-total-value {
		font-size: 1.6rem;
		font-weight: 800;
		color: #17231f;
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
		.tc-travel-product__important-info,
		.tc-travel-product__pricing {
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
		.tc-travel-product__important-info,
		.tc-travel-product__pricing {
			padding: 1.5rem;
		}
	}
</style>
