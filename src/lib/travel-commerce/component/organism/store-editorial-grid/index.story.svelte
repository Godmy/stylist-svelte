<script lang="ts">
	import StoreEditorialGrid from './index.svelte';
	import { SAMPLE_EXCURSIONS } from '$stylist/travel-commerce/const/preset/sample-excursions';
</script>

<div style="background:#f7f3ec; padding: 32px 0;">
	<StoreEditorialGrid excursions={SAMPLE_EXCURSIONS} />
</div>
