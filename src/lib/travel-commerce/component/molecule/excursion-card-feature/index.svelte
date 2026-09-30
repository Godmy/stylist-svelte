<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import type { BookingDraft } from '$stylist/booking/type/object/booking-draft';
	import { EXPERIENCE_CATEGORIES } from '$stylist/booking/const/array/experience-category';
	import TourCardBadges from '$stylist/travel-commerce/component/molecule/tour-card-badges/index.svelte';
	import TourTagList from '$stylist/travel-commerce/component/molecule/tour-tag-list/index.svelte';
	import TourPriceNote from '$stylist/travel-commerce/component/molecule/tour-price-note/index.svelte';
	import { formatExcursionCardPrice } from '$stylist/travel-commerce/function/script/format-excursion-card-price';

	type Props = {
		excursion: Excursion;
		/** Visitor's current guests — when set (and the excursion carries `pricing`), the price is the total for them. */
		booking?: BookingDraft;
	};

	let { excursion, booking }: Props = $props();

	// «Что хотите посмотреть?» topics, labelled the same as in BookingFilterPanel.
	const categoryLabels = $derived(
		excursion.categories.flatMap((id): string[] => {
			const label = EXPERIENCE_CATEGORIES.find((category) => category.id === id)?.label;
			return label ? [label] : [];
		})
	);
	const price = $derived(formatExcursionCardPrice(excursion, booking));
</script>

<a class="tc-feature-card" href={`/tours/${excursion.slug}`}>
	<img src={excursion.imageSrc} alt={excursion.imageAlt} loading="lazy" />
	<div class="tc-feature-card__overlay">
		<TourCardBadges
			tourType={excursion.tourType}
			duration={excursion.duration}
			highlights={excursion.highlights}
			onDark
		/>
		<h3>{excursion.title}</h3>
		<p>{excursion.summary}</p>
		<TourTagList tags={categoryLabels} />
		<TourPriceNote {price} />
	</div>
</a>

<style>
	.tc-feature-card {
		position: relative;
		display: block;
		height: 100%;
		min-height: 610px;
		overflow: hidden;
		border-radius: 8px;
		background: #17231f;
		color: white;
		text-decoration: none;
	}
	.tc-feature-card img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.92;
		transition: transform 560ms ease;
	}
	.tc-feature-card:hover img {
		transform: scale(1.035);
	}
	.tc-feature-card::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.68), rgba(0, 0, 0, 0.08));
	}
	.tc-feature-card__overlay {
		position: absolute;
		inset: auto 0 0;
		z-index: 1;
		display: grid;
		gap: 14px;
		padding: 28px;
	}
	.tc-feature-card h3,
	.tc-feature-card p {
		margin: 0;
	}
	.tc-feature-card h3 {
		max-width: 720px;
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.98;
		letter-spacing: 0;
	}
	.tc-feature-card p {
		max-width: 560px;
		line-height: 1.52;
		opacity: 0.86;
	}
	.tc-feature-card :global(.tc-tour-price) {
		color: rgba(255, 255, 255, 0.92);
	}
	.tc-feature-card :global(.tc-tour-tags span) {
		background: rgba(255, 255, 255, 0.16);
		color: rgba(255, 255, 255, 0.92);
	}
	@media (prefers-reduced-motion: reduce) {
		.tc-feature-card img {
			transition: none;
		}
		.tc-feature-card:hover img {
			transform: none;
		}
	}
</style>
