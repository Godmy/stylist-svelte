<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ComparisonCard from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [{ name: 'title', type: 'text', defaultValue: 'Before vs After' }]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: InterfaceControllerSettings[];
	}>();

	// Sample data for the comparison card
	const sampleBefore = {
		title: 'Before SAMO',
		items: [
			{ label: 'SOLID Compliance', value: 'Low' },
			{ label: 'Code Quality', value: 'Subjective' },
			{ label: 'Architecture', value: 'Inconsistent' },
			{ label: 'Testing', value: 'Manual' }
		]
	};

	const sampleAfter = {
		title: 'After SAMO',
		items: [
			{ label: 'SOLID Compliance', value: '53.3%' },
			{ label: 'Code Quality', value: 'Quantitative' },
			{ label: 'Architecture', value: 'Standardized' },
			{ label: 'Testing', value: 'Automated' }
		]
	};
</script>

<Story {id} {title} {description} component={ComparisonCard} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-comparison-card _c1">
			<div class="_c2">
				<p class="_c3">Primary Comparison Card Example</p>
				<p class="_c4">Before/After comparison card for SAMO case study.</p>

				<div class="_c5">
					<ComparisonCard title={values.title} before={sampleBefore} after={sampleAfter} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Comparison Variations</h3>
				<p class="_c8">Different comparison card configurations with various data sets.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Performance Metrics</p>
						<div>
							<ComparisonCard
								title="Performance Metrics"
								before={{
									title: 'Legacy System',
									items: [
										{ label: 'Load Time', value: '5.2s' },
										{ label: 'Memory Usage', value: '240MB' },
										{ label: 'CPU Usage', value: '65%' },
										{ label: 'Errors', value: '12/hour' }
									]
								}}
								after={{
									title: 'Optimized System',
									items: [
										{ label: 'Load Time', value: '1.8s' },
										{ label: 'Memory Usage', value: '120MB' },
										{ label: 'CPU Usage', value: '32%' },
										{ label: 'Errors', value: '2/hour' }
									]
								}}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">User Experience</p>
						<div>
							<ComparisonCard
								title="User Experience"
								before={{
									title: 'Old UX',
									items: [
										{ label: 'Completion Rate', value: '65%' },
										{ label: 'Satisfaction', value: '3.2/5' },
										{ label: 'Support Tickets', value: '120/month' },
										{ label: 'Churn Rate', value: '12%' }
									]
								}}
								after={{
									title: 'New UX',
									items: [
										{ label: 'Completion Rate', value: '87%' },
										{ label: 'Satisfaction', value: '4.6/5' },
										{ label: 'Support Tickets', value: '45/month' },
										{ label: 'Churn Rate', value: '5%' }
									]
								}}
							/>
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
