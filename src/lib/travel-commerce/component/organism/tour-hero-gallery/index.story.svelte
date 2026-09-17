<script lang="ts">
	import TourHeroGallery from './index.svelte';
	import { SAMPLE_TOUR_GALLERY } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="padding:24px;background:#f7f3ec;">
	<TourHeroGallery title="Ella and tea mountains" images={SAMPLE_TOUR_GALLERY} />
</div>
