<script lang="ts">
	import CartUpsellCard from './index.svelte';
	import { SAMPLE_TOUR_ADDONS } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="display:grid;gap:12px;max-width:680px;padding:24px;background:#f7f3ec;">
	<CartUpsellCard addon={SAMPLE_TOUR_ADDONS[0]} />
	<CartUpsellCard addon={SAMPLE_TOUR_ADDONS[1]} />
</div>
