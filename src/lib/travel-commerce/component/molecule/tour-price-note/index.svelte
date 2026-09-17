<script lang="ts">
	type Props = {
		price?: string;
	};

	let { price }: Props = $props();
</script>

{#if price}
	<p class="tc-tour-price">{price}</p>
{/if}

<style>
	.tc-tour-price {
		margin: 0;
		color: #17231f;
		font-weight: 760;
		font-size: 1rem;
	}
</style>
