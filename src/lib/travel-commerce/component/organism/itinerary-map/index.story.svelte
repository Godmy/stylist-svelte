<script lang="ts">
	import ItineraryMap from './index.svelte';
	import { SAMPLE_ITINERARY_LEGS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="max-width:960px;padding:24px;background:#f7f3ec;">
	<ItineraryMap legs={SAMPLE_ITINERARY_LEGS} />
</div>
