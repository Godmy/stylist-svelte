<script lang="ts">
	import CartSummaryPanel from './index.svelte';
	import { SAMPLE_CART_SUMMARY } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="max-width:420px;padding:24px;background:#f7f3ec;">
	<CartSummaryPanel summary={SAMPLE_CART_SUMMARY} />
</div>
