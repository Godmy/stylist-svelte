<script lang="ts">
	import ExcursionCardStandard from './index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
</script>

<div style="max-width: 420px; padding: 24px; background:#f7f3ec;">
	<ExcursionCardStandard excursion={SAMPLE_EXCURSIONS[1]} />
</div>
