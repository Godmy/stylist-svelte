<script lang="ts">
	import ExcursionCardFeature from './index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
</script>

<div style="padding: 24px; background:#f7f3ec;">
	<ExcursionCardFeature excursion={SAMPLE_EXCURSIONS[0]} />
</div>
