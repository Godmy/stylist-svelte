<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import CartPage from './index.svelte';
	import {
		SAMPLE_CART_LINES,
		SAMPLE_CART_SUMMARY,
		SAMPLE_TOUR_ADDONS
	} from '$stylist/travel-commerce/const/preset/sample-tour-detail';
</script>

<Story title="CartPage" description="Cart line items, upsells, and the order summary panel.">
	{#snippet children()}
		<CartPage items={SAMPLE_CART_LINES} summary={SAMPLE_CART_SUMMARY} upsells={SAMPLE_TOUR_ADDONS} />
	{/snippet}
</Story>
