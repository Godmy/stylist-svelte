<script lang="ts">
	import CartLineItem from './index.svelte';
	import { SAMPLE_CART_LINES } from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<div style="display:grid;gap:16px;max-width:820px;padding:24px;background:#f7f3ec;">
	<CartLineItem item={SAMPLE_CART_LINES[0]} />
</div>
