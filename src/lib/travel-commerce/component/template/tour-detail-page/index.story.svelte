<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import TourDetailPage from './index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
	import {
		SAMPLE_TOUR_ADDONS,
		SAMPLE_TOUR_GALLERY,
		SAMPLE_TOUR_ROUTE_STOPS
	} from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<Story
	title="TourDetailPage"
	description="Tour detail: hero gallery, itinerary, add-ons, and a sticky booking panel."
>
	{#snippet children()}
		<TourDetailPage
			excursion={SAMPLE_EXCURSIONS[0]}
			gallery={SAMPLE_TOUR_GALLERY}
			stops={SAMPLE_TOUR_ROUTE_STOPS}
			addons={SAMPLE_TOUR_ADDONS}
			related={SAMPLE_EXCURSIONS.slice(1, 3)}
		/>
	{/snippet}
</Story>
