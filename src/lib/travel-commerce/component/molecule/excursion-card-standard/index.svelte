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

<a class="tc-excursion-card" href={`/tours/${excursion.slug}`}>
	<img src={excursion.imageSrc} alt={excursion.imageAlt} loading="lazy" />
	<div class="tc-excursion-card__body">
		<TourCardBadges
			tourType={excursion.tourType}
			duration={excursion.duration}
			highlights={excursion.highlights}
		/>
		<h3>{excursion.title}</h3>
		<p>{excursion.summary}</p>
		<TourTagList tags={categoryLabels} />
		<TourPriceNote {price} />
	</div>
</a>

<style>
	.tc-excursion-card {
		display: grid;
		overflow: hidden;
		border-radius: 8px;
		background: white;
		border: 1px solid rgba(23, 35, 31, 0.1);
		box-shadow: 0 16px 42px rgba(20, 36, 31, 0.08);
		color: inherit;
		text-decoration: none;
	}
	.tc-excursion-card img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		transition: transform 420ms ease;
	}
	.tc-excursion-card:hover img {
		transform: scale(1.035);
	}
	.tc-excursion-card__body {
		display: grid;
		gap: 12px;
		padding: 18px;
	}
	.tc-excursion-card h3,
	.tc-excursion-card p {
		margin: 0;
	}
	.tc-excursion-card h3 {
		font-size: 1.35rem;
		line-height: 1.08;
		letter-spacing: 0;
		color: #17231f;
	}
	.tc-excursion-card__body > p {
		color: rgba(23, 35, 31, 0.72);
		line-height: 1.48;
	}
	@media (prefers-reduced-motion: reduce) {
		.tc-excursion-card img {
			transition: none;
		}
		.tc-excursion-card:hover img {
			transform: none;
		}
	}
</style>
