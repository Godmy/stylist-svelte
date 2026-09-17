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

<article class="tc-excursion-card">
	<img src={excursion.imageSrc} alt={excursion.imageAlt} loading="lazy" />
	<div class="tc-excursion-card__body">
		<h3>{excursion.title}</h3>
		<p>{excursion.summary}</p>
		<TourMetaLine duration={excursion.duration} pickup={excursion.pickup} />
		<TourTagList tags={excursion.tags} />
		<TourPriceNote price={excursion.priceFrom} />
	</div>
</article>

<style>
	.tc-excursion-card {
		display: grid;
		overflow: hidden;
		border-radius: 8px;
		background: white;
		border: 1px solid rgba(23, 35, 31, 0.1);
		box-shadow: 0 16px 42px rgba(20, 36, 31, 0.08);
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
