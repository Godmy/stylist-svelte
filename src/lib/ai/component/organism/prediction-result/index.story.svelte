<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import PredictionResult from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Prediction Result' },
		{
			name: 'status',
			type: 'select',
			options: ['success', 'warning', 'error', 'loading'],
			defaultValue: 'success'
		},
		{ name: 'showChart', type: 'boolean', defaultValue: true }
	];

	const samplePredictions = [
		{ label: 'Class A', value: 0.85, confidence: 0.92 },
		{ label: 'Class B', value: 0.12, confidence: 0.65 },
		{ label: 'Class C', value: 0.03, confidence: 0.43 }
	];
</script>

<Story
	id="organisms-prediction-result"
	title="Prediction Result"
	component={PredictionResult}
	category="Organisms"
	description="Displays prediction outcomes with confidence and breakdown."
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-prediction-result _c1">
			<PredictionResult
				title={values.title}
				status={values.status}
				showChart={values.showChart}
				predictions={samplePredictions}
				actualValue={0.81}
				predictedValue={0.85}
				confidence={0.92}
				modelUsed="Gradient Boost v2"
				description="Model predicts the likely output class from the latest feature set."
			/>
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
