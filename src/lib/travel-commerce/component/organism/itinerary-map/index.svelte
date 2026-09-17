<script lang="ts">
	import type { ItineraryLeg } from '$stylist/travel-commerce/type/object/itinerary-leg';

	type Props = {
		legs: ItineraryLeg[];
		title?: string;
	};

	let { legs, title = 'Route map' }: Props = $props();
</script>

<section class="tc-itinerary-map" aria-label={title}>
	<div class="tc-itinerary-map__canvas">
		<svg viewBox="0 0 640 320" role="img" aria-label={title}>
			<path d="M80 238 C180 120 270 260 360 140 S520 110 570 72" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" />
			{#each legs as leg, index (leg.id)}
				{@const x = 90 + index * Math.max(1, 440 / Math.max(1, legs.length - 1))}
				{@const y = index % 2 === 0 ? 232 : 118}
				<circle cx={x} cy={y} r="16" />
				<text x={x} y={y + 5} text-anchor="middle">{index + 1}</text>
			{/each}
		</svg>
	</div>
	<div class="tc-itinerary-map__legend">
		<h2>{title}</h2>
		<ol>
			{#each legs as leg}
				<li>{leg.title}</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.tc-itinerary-map {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(14rem, 0.36fr);
		gap: 1rem;
		padding: 1rem;
		border-radius: 8px;
		background: #dce8df;
		color: #17231f;
	}
	.tc-itinerary-map__canvas {
		min-height: 18rem;
		border-radius: 8px;
		background:
			linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.1)),
			#abcbbb;
	}
	.tc-itinerary-map svg {
		width: 100%;
		height: 100%;
		min-height: 18rem;
		color: #245b45;
	}
	.tc-itinerary-map circle {
		fill: #17231f;
	}
	.tc-itinerary-map text {
		fill: #fff;
		font: 700 14px system-ui;
	}
	.tc-itinerary-map__legend {
		display: grid;
		align-content: center;
		gap: 1rem;
	}
	.tc-itinerary-map h2,
	.tc-itinerary-map ol {
		margin: 0;
	}
	.tc-itinerary-map ol {
		display: grid;
		gap: 0.55rem;
		padding-left: 1.2rem;
	}
	@media (max-width: 760px) {
		.tc-itinerary-map {
			grid-template-columns: 1fr;
		}
	}
	@container (max-width: 760px) {
		.tc-itinerary-map {
			grid-template-columns: 1fr;
		}
	}
</style>
