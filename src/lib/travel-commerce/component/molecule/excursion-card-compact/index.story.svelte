<script lang="ts">
	import ExcursionCardCompact from './index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
</script>

<div style="max-width:420px;padding:24px;background:#f7f3ec;">
	<ExcursionCardCompact excursion={SAMPLE_EXCURSIONS[0]} />
</div>
