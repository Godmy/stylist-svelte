<script lang="ts">
	import type { Excursion } from '$stylist/travel-commerce/type/object/excursion';
	import TourPriceNote from '$stylist/travel-commerce/component/molecule/tour-price-note/index.svelte';

	type Props = {
		excursion: Excursion;
	};

	let { excursion }: Props = $props();
</script>

<article class="tc-excursion-card-compact">
	<img src={excursion.imageSrc} alt={excursion.imageAlt} loading="lazy" />
	<div class="tc-excursion-card-compact__body">
		<p>{excursion.duration} · {excursion.pickup}</p>
		<h3>{excursion.title}</h3>
		<TourPriceNote price={excursion.priceFrom} />
	</div>
</article>

<style>
	.tc-excursion-card-compact {
		display: grid;
		grid-template-columns: 6rem 1fr;
		gap: 0.875rem;
		align-items: center;
		padding: 0.75rem;
		border: 1px solid rgba(23, 35, 31, 0.1);
		border-radius: 8px;
		background: #fff;
	}
	.tc-excursion-card-compact img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 6px;
	}
	.tc-excursion-card-compact__body {
		display: grid;
		gap: 0.35rem;
		min-width: 0;
	}
	.tc-excursion-card-compact p,
	.tc-excursion-card-compact h3 {
		margin: 0;
	}
	.tc-excursion-card-compact p {
		font-size: 0.78rem;
		color: rgba(23, 35, 31, 0.62);
	}
	.tc-excursion-card-compact h3 {
		font-size: 1rem;
		line-height: 1.15;
		color: #17231f;
	}
</style>
