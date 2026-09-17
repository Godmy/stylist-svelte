<script lang="ts">
	import ItineraryBuilder from './index.svelte';
	import { SAMPLE_ITINERARY_LEGS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="max-width:940px;padding:24px;background:#f7f3ec;">
	<ItineraryBuilder legs={SAMPLE_ITINERARY_LEGS} />
</div>
