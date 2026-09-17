<script lang="ts">
	import ItineraryLegCard from './index.svelte';
	import { SAMPLE_ITINERARY_LEGS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="display:grid;gap:12px;max-width:860px;padding:24px;background:#f7f3ec;">
	{#each SAMPLE_ITINERARY_LEGS as leg, index}
		<ItineraryLegCard {leg} index={index + 1} />
	{/each}
</div>
