<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SentimentAnalysis from './index.svelte';
	import type { SlotSentimentResult as SentimentResult } from '$stylist/ai/interface/slot/sentiment-result';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'text', type: 'text', defaultValue: 'I like this product. It works very well.' },
		{
			name: 'status',
			type: 'select',
			options: ['idle', 'analyzing', 'completed', 'error'],
			defaultValue: 'completed'
		}
	];

	const sampleResult: SentimentResult = {
		score: 0.7,
		label: 'positive',
		confidence: 0.95,
		breakdown: {
			positive: 0.7,
			neutral: 0.2,
			negative: 0.1
		}
	};
</script>

<Story
	id="organisms-sentiment-analysis"
	title="Sentiment Analysis"
	component={SentimentAnalysis}
	category="Organisms"
	description="Analyzes text sentiment and displays confidence with score breakdown."
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-sentiment-analysis _c1">
			<SentimentAnalysis text={values.text} status={values.status} result={sampleResult} />
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1.5rem;
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
</style>
