<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import TestResultsViewer from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showCharts', type: 'boolean', defaultValue: true },
			{ name: 'showSignificance', type: 'boolean', defaultValue: true },
			{ name: 'showConfidence', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	type TestResult = {
		id: string;
		testName: string;
		variantName: string;
		visitors: number;
		conversions: number;
		conversionRate: number;
		statisticalSignificance: number;
		improvement: number;
		status: 'winning' | 'losing' | 'inconclusive';
	};

	const testResults: TestResult[] = [
		{
			id: '1',
			testName: 'CTA Test',
			variantName: 'Variant A',
			visitors: 1000,
			conversions: 50,
			conversionRate: 5,
			statisticalSignificance: 95,
			improvement: 10,
			status: 'winning'
		},
		{
			id: '2',
			testName: 'CTA Test',
			variantName: 'Variant B',
			visitors: 1000,
			conversions: 40,
			conversionRate: 4,
			statisticalSignificance: 80,
			improvement: -10,
			status: 'losing'
		}
	];
	const testOverview = {
		totalTests: 1,
		winningTests: 1,
		losingTests: 1,
		averageImprovement: 0
	} as any;

	function handleExport(results: TestResult[]) {
		console.log('Exported:', results);
	}
</script>

<Story {id} {title} {description} component={TestResultsViewer} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-test-results-viewer _c1">
			<div class="_c2">
				<p class="_c3">Primary Test Results Viewer Example</p>
				<p class="_c4">Interactive test results viewer with customizable options.</p>

				<div class="_c5">
					<TestResultsViewer {testResults} {testOverview} showCharts={values.showCharts} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Test Results Variations</h3>
				<p class="_c8">Different test results viewer configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Charts</p>
						<div>
							<TestResultsViewer {testResults} {testOverview} showCharts={false} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Minimal View</p>
						<div>
							<TestResultsViewer {testResults} {testOverview} />
						</div>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c10 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	._c11 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 0.25rem;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 1.5rem;
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c9 {
		margin-top: 1.25rem;
	}
	._c9 > * + * {
		margin-top: 1rem;
	}
</style>
