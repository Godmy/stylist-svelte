<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import TourMetaLine from '$stylist/travel-commerce/component/molecule/tour-meta-line/index.svelte';
	import TourTagList from '$stylist/travel-commerce/component/molecule/tour-tag-list/index.svelte';
	import TourPriceNote from '$stylist/travel-commerce/component/molecule/tour-price-note/index.svelte';

	type Props = {
		excursion: Excursion;
	};

	let { excursion }: Props = $props();
</script>

<a class="tc-feature-card" href={`/tours/${excursion.slug}`}>
	<img src={excursion.imageSrc} alt={excursion.imageAlt} loading="lazy" />
	<div class="tc-feature-card__overlay">
		<TourTagList tags={excursion.tags} />
		<h3>{excursion.title}</h3>
		<p>{excursion.summary}</p>
		<TourMetaLine duration={excursion.duration} pickup={excursion.pickup} />
		<TourPriceNote price={excursion.priceFrom} />
	</div>
</a>

<style>
	.tc-feature-card {
		position: relative;
		display: block;
		min-height: 520px;
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
	.tc-feature-card :global(.tc-tour-meta),
	.tc-feature-card :global(.tc-tour-price) {
		color: rgba(255, 255, 255, 0.82);
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
