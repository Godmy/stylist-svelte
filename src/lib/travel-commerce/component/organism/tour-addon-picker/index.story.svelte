<script lang="ts">
	import TourAddonPicker from './index.svelte';
	import { SAMPLE_TOUR_ADDONS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="max-width:760px;padding:24px;background:#f7f3ec;">
	<TourAddonPicker addons={SAMPLE_TOUR_ADDONS} />
</div>
