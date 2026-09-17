<script lang="ts">
	import type { ItineraryLeg } from '$stylist/travel-commerce/type/object/itinerary-leg';
	import ItineraryLegCard from '$stylist/travel-commerce/component/molecule/itinerary-leg-card/index.svelte';

	type Props = {
		legs: ItineraryLeg[];
		title?: string;
	};

	let { legs, title = 'Itinerary' }: Props = $props();
</script>

<section class="tc-itinerary-builder">
	<header>
		<h2>{title}</h2>
		<span>{legs.length} legs</span>
	</header>
	<div>
		{#each legs as leg, index (leg.id)}
			<ItineraryLegCard {leg} index={index + 1} />
		{/each}
	</div>
</section>

<style>
	.tc-itinerary-builder {
		display: grid;
		gap: 1rem;
	}
	.tc-itinerary-builder header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
	}
	.tc-itinerary-builder h2 {
		margin: 0;
		color: #17231f;
		font-size: 2rem;
		line-height: 1.05;
	}
	.tc-itinerary-builder span {
		color: rgba(23, 35, 31, 0.58);
	}
	.tc-itinerary-builder > div {
		display: grid;
		gap: 0.75rem;
	}
</style>
