<script lang="ts">
	import { formatResultsCount } from '$stylist/travel-commerce/function/script/format-results-count';

	type Props = {
		count: number;
		selectedLabels?: string[];
	};

	let { count, selectedLabels = [] }: Props = $props();
	const text = $derived(formatResultsCount(count, selectedLabels));
</script>

<p class="tc-results-counter" aria-live="polite">{text}</p>

<style>
	.tc-results-counter {
		margin: 0;
		font-size: clamp(1.35rem, 3vw, 2.4rem);
		line-height: 1.08;
		font-weight: 760;
		color: #17231f;
		letter-spacing: 0;
	}
</style>
