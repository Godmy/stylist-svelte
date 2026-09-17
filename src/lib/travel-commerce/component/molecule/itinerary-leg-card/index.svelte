<script lang="ts">
	import type { ItineraryLeg } from '$stylist/travel-commerce/type/object/itinerary-leg';

	type Props = {
		leg: ItineraryLeg;
		index?: number;
	};

	let { leg, index = 1 }: Props = $props();
</script>

<article class="tc-itinerary-leg-card">
	<div class="tc-itinerary-leg-card__index">{index}</div>
	{#if leg.imageSrc}
		<img src={leg.imageSrc} alt={leg.imageAlt ?? leg.title} loading="lazy" />
	{/if}
	<div class="tc-itinerary-leg-card__body">
		<p>{leg.eyebrow}</p>
		<h3>{leg.title}</h3>
		<span>{leg.start} {leg.end ? `-> ${leg.end}` : ''}</span>
		<p>{leg.description}</p>
	</div>
	<div class="tc-itinerary-leg-card__meta">
		{#if leg.duration}<span>{leg.duration}</span>{/if}
		{#if leg.price}<strong>{leg.price}</strong>{/if}
	</div>
</article>

<style>
	.tc-itinerary-leg-card {
		display: grid;
		grid-template-columns: 2rem minmax(0, 7rem) 1fr auto;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.12);
		border-radius: 8px;
		background: #fff;
	}
	.tc-itinerary-leg-card__index {
		display: grid;
		place-items: center;
		width: 2rem;
		height: 2rem;
		border-radius: 999px;
		background: #17231f;
		color: #fff;
		font-weight: 700;
	}
	.tc-itinerary-leg-card img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		border-radius: 6px;
	}
	.tc-itinerary-leg-card__body {
		display: grid;
		gap: 0.25rem;
		min-width: 0;
	}
	.tc-itinerary-leg-card p,
	.tc-itinerary-leg-card h3 {
		margin: 0;
	}
	.tc-itinerary-leg-card__body > p:first-child,
	.tc-itinerary-leg-card__body span {
		color: rgba(23, 35, 31, 0.58);
		font-size: 0.82rem;
	}
	.tc-itinerary-leg-card h3 {
		color: #17231f;
		font-size: 1.05rem;
	}
	.tc-itinerary-leg-card__body > p:last-child {
		color: rgba(23, 35, 31, 0.72);
		line-height: 1.42;
	}
	.tc-itinerary-leg-card__meta {
		display: grid;
		gap: 0.3rem;
		justify-items: end;
		color: #17231f;
	}
	@media (max-width: 720px) {
		.tc-itinerary-leg-card {
			grid-template-columns: 2rem 1fr;
		}
		.tc-itinerary-leg-card img,
		.tc-itinerary-leg-card__meta {
			grid-column: 2;
		}
		.tc-itinerary-leg-card__meta {
			justify-items: start;
		}
	}
	@container (max-width: 720px) {
		.tc-itinerary-leg-card {
			grid-template-columns: 2rem 1fr;
		}
		.tc-itinerary-leg-card img,
		.tc-itinerary-leg-card__meta {
			grid-column: 2;
		}
		.tc-itinerary-leg-card__meta {
			justify-items: start;
		}
	}
</style>
