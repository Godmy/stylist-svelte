<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { TourGalleryImage } from '$stylist/travel-commerce/type/object/tour-gallery-image';
	import type { TourRouteStop } from '$stylist/travel-commerce/type/object/tour-route-stop';
	import type { MediaSliderSlide } from '$stylist/animation/type/object/media-slider';
	import MediaSlider from '$stylist/animation/component/organism/media-slider/index.svelte';
	import BookingBridge from '$stylist/booking/component/organism/booking-bridge/index.svelte';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import logoImage from '$stylist/travel-commerce/data/jpg/logo/logo.png';

	export type ContentSection = {
		type: 'text' | 'image' | 'text-image' | 'highlights' | 'itinerary';
		heading?: string;
		text?: string;
		image?: TourGalleryImage;
		items?: string[];
		stops?: TourRouteStop[];
		layout?: 'left' | 'right'; // для text-image
	};

	type Props = {
		excursion: Excursion;
		gallery: TourGalleryImage[];
		content?: ContentSection[];
		pricing?: {
			adult: string;
			child?: string;
		};
	};

	let {
		excursion,
		gallery,
		content = [],
		pricing
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

	// Booking state
	let bookingValue = $state<BookingDraft>({ pickup: 'Галле', date: '', adults: 2, children: 0 });
</script>

<main class="tc-travel-product">
	<!-- Cinematic MediaSlider with built-in marquee ticker and wave -->
	<MediaSlider
		{slides}
		autoPlay
		autoPlayInterval={5000}
		showControls
		showIndicators
		aria-label={excursion.title}
	/>

	<!-- Brand Logo - overlays the wave -->
	<div class="tc-travel-product__brand">
		<img src={logoImage} alt="ЛанкаТур - Экскурсии на Шри-Ланке" class="tc-travel-product__logo" />
	</div>

	<!-- Booking Bridge -->
	<BookingBridge progress={1} value={bookingValue} />

	<!-- Main Content: text with images interspersed -->
	<div class="tc-travel-product__content">
		{#each content as section, index (index)}
			{#if section.type === 'text'}
				<section class="tc-travel-product__text-section">
					{#if section.heading}
						<h2>{section.heading}</h2>
					{/if}
					{#if section.text}
						<p>{section.text}</p>
					{/if}
				</section>
			{:else if section.type === 'image'}
				<figure class="tc-travel-product__image-section">
					{#if section.image}
						<img src={section.image.src} alt={section.image.alt} />
						{#if section.image.caption}
							<figcaption>{section.image.caption}</figcaption>
						{/if}
					{/if}
				</figure>
			{:else if section.type === 'text-image'}
				<section class="tc-travel-product__text-image-section" data-layout={section.layout ?? 'left'}>
					<div class="tc-travel-product__text-image-text">
						{#if section.heading}
							<h2>{section.heading}</h2>
						{/if}
						{#if section.text}
							<p>{section.text}</p>
						{/if}
					</div>
					{#if section.image}
						<figure class="tc-travel-product__text-image-figure">
							<img src={section.image.src} alt={section.image.alt} />
							{#if section.image.caption}
								<figcaption>{section.image.caption}</figcaption>
							{/if}
						</figure>
					{/if}
				</section>
			{:else if section.type === 'highlights' && section.items}
				<section class="tc-travel-product__highlights">
					{#if section.heading}
						<h2>{section.heading}</h2>
					{/if}
					<ul>
						{#each section.items as item}
							<li>{item}</li>
						{/each}
					</ul>
				</section>
			{/if}
		{/each}

		<!-- Pricing Section -->
		{#if pricing}
			<section class="tc-travel-product__pricing">
				<h2>Цены</h2>
				<div class="tc-travel-product__pricing-grid">
					<div class="tc-travel-product__price-item">
						<span class="tc-travel-product__price-label">Взрослые</span>
						<span class="tc-travel-product__price-value">{pricing.adult}</span>
					</div>
					{#if pricing.child}
						<div class="tc-travel-product__price-item">
							<span class="tc-travel-product__price-label">Дети (5-12 лет)</span>
							<span class="tc-travel-product__price-value">{pricing.child}</span>
						</div>
					{/if}
				</div>
			</section>
		{/if}
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
		margin-top: -12rem;
		padding: 2rem 2rem 4rem;
		text-align: center;
		pointer-events: none;
	}

	.tc-travel-product__logo {
		width: min(600px, 90%);
		height: auto;
		display: block;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		.tc-travel-product__brand {
			margin-top: -8rem;
		}
	}

	.tc-travel-product__content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem 2rem 4rem;
		display: grid;
		gap: 4rem;
	}

	/* Text Section */
	.tc-travel-product__text-section h2 {
		margin: 0 0 1rem;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		line-height: 1.2;
		color: #17231f;
	}

	.tc-travel-product__text-section p {
		margin: 0;
		font-size: clamp(1.05rem, 2vw, 1.2rem);
		line-height: 1.7;
		color: rgba(23, 35, 31, 0.82);
		max-width: 68ch;
		white-space: pre-line;
	}

	/* Image Section */
	.tc-travel-product__image-section {
		margin: 0;
		border-radius: 1rem;
		overflow: hidden;
		background: #17231f;
	}

	.tc-travel-product__image-section img {
		width: 100%;
		height: auto;
		display: block;
	}

	.tc-travel-product__image-section figcaption {
		padding: 1rem 1.5rem;
		color: rgba(247, 243, 236, 0.85);
		font-size: 0.95rem;
		font-style: italic;
	}

	/* Text + Image Section */
	.tc-travel-product__text-image-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.tc-travel-product__text-image-section[data-layout='right'] {
		grid-template-columns: 1fr 1fr;
		direction: rtl;
	}

	.tc-travel-product__text-image-section[data-layout='right'] > * {
		direction: ltr;
	}

	.tc-travel-product__text-image-text h2 {
		margin: 0 0 1rem;
		font-size: clamp(1.5rem, 3vw, 2rem);
		line-height: 1.2;
		color: #17231f;
	}

	.tc-travel-product__text-image-text p {
		margin: 0;
		font-size: clamp(1rem, 2vw, 1.15rem);
		line-height: 1.65;
		color: rgba(23, 35, 31, 0.8);
		white-space: pre-line;
	}

	.tc-travel-product__text-image-figure {
		margin: 0;
		border-radius: 0.75rem;
		overflow: hidden;
		background: #17231f;
	}

	.tc-travel-product__text-image-figure img {
		width: 100%;
		height: auto;
		display: block;
	}

	.tc-travel-product__text-image-figure figcaption {
		padding: 0.75rem 1rem;
		color: rgba(247, 243, 236, 0.85);
		font-size: 0.9rem;
		font-style: italic;
	}

	/* Highlights Section */
	.tc-travel-product__highlights {
		background: rgba(255, 255, 255, 0.5);
		border-radius: 1rem;
		padding: 2.5rem;
	}

	.tc-travel-product__highlights h2 {
		margin: 0 0 1.5rem;
		font-size: clamp(1.5rem, 3vw, 2rem);
		color: #17231f;
	}

	.tc-travel-product__highlights ul {
		margin: 0;
		padding: 0 0 0 1.5rem;
		display: grid;
		gap: 0.75rem;
	}

	.tc-travel-product__highlights li {
		font-size: clamp(1rem, 2vw, 1.1rem);
		line-height: 1.6;
		color: rgba(23, 35, 31, 0.8);
	}

	.tc-travel-product__pricing {
		background: rgba(255, 255, 255, 0.6);
		border-radius: 0.75rem;
		padding: 2rem;
	}

	.tc-travel-product__pricing-grid {
		display: grid;
		gap: 1rem;
	}

	.tc-travel-product__price-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.7);
		border-radius: 0.5rem;
		border: 1px solid rgba(23, 35, 31, 0.1);
	}

	.tc-travel-product__price-label {
		font-size: 1.05rem;
		color: rgba(23, 35, 31, 0.75);
	}

	.tc-travel-product__price-value {
		font-size: 1.3rem;
		font-weight: 600;
		color: #17231f;
	}

	.tc-travel-product__pricing-note {
		margin: 1rem 0 0;
		font-size: 0.95rem;
		color: rgba(23, 35, 31, 0.68);
		font-style: italic;
	}

	.tc-travel-product__related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		gap: 1rem;
	}

	.tc-travel-product__sidebar {
		position: sticky;
		top: 1.5rem;
	}

	/*
	 * Responsive Design — duplicated as both `@media` (real device viewport,
	 * what actually renders on the live site) and `@container` (the Story
	 * sandbox simulates device width via `container-type: inline-size` on an
	 * ancestor, which plain `@media` can't see — see
	 * theme/component/molecule/story/index.svelte). Keep both in sync.
	 */
	@media (max-width: 1024px) {
		.tc-travel-product__content {
			grid-template-columns: 1fr;
			padding: 0 1.5rem 3rem;
		}

		.tc-travel-product__sidebar {
			position: static;
			max-width: 32rem;
			margin: 0 auto;
			width: 100%;
		}
	}

	@container (max-width: 1024px) {
		.tc-travel-product__content {
			grid-template-columns: 1fr;
			padding: 0 1.5rem 3rem;
		}

		.tc-travel-product__sidebar {
			position: static;
			max-width: 32rem;
			margin: 0 auto;
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.tc-travel-product__hero {
			min-height: 24rem;
		}

		.tc-travel-product__hero-caption {
			padding: 2rem 1.5rem 1.5rem;
		}

		.tc-travel-product__content {
			gap: 2rem;
			padding: 0 1rem 2rem;
		}

		.tc-travel-product__article {
			gap: 2rem;
		}

		.tc-travel-product__description {
			font-size: 1.1rem;
		}

		.tc-travel-product__highlights {
			padding: 1.5rem;
		}

		.tc-travel-product__inclusions {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.tc-travel-product__related-grid {
			grid-template-columns: 1fr;
		}
	}

	@container (max-width: 768px) {
		.tc-travel-product__hero {
			min-height: 24rem;
		}

		.tc-travel-product__hero-caption {
			padding: 2rem 1.5rem 1.5rem;
		}

		.tc-travel-product__content {
			gap: 2rem;
			padding: 0 1rem 2rem;
		}

		.tc-travel-product__article {
			gap: 2rem;
		}

		.tc-travel-product__description {
			font-size: 1.1rem;
		}

		.tc-travel-product__highlights {
			padding: 1.5rem;
		}

		.tc-travel-product__inclusions {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.tc-travel-product__related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
