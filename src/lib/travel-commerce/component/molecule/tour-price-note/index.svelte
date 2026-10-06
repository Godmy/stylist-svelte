<script lang="ts">
	import AnimatedDigit from '$stylist/animation/component/atom/animated-digit/index.svelte';

	type Props = {
		/** Static label («от 120 $»), shown when there is no `total`. */
		price?: string;
		/** Total for the visitor's guests: the sum rolls to the new value when the guest count changes. */
		total?: { usd: number; guests: number };
	};

	let { price, total }: Props = $props();

	const formatUsd = (value: number) => `${Math.round(value).toLocaleString('ru-RU')} $`;
</script>

{#if total}
	<p class="tc-tour-price">
		<AnimatedDigit from={total.usd} to={total.usd} duration="500ms" format={formatUsd} /> за {total.guests} чел.
	</p>
{:else if price}
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
