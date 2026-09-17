<script lang="ts">
	import TourRouteStops from './index.svelte';
	import { SAMPLE_TOUR_ROUTE_STOPS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="max-width:900px;padding:24px;background:#f7f3ec;">
	<TourRouteStops stops={SAMPLE_TOUR_ROUTE_STOPS} />
</div>
