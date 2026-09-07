<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import ABTestConfigurator from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = []
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	const testConfig = {
		id: 'ab-test-1',
		name: 'Homepage CTA Button',
		description: 'Testing different CTA button designs',
		variants: [
			{ id: 'variant-a', name: 'Original', description: 'Blue button', weight: 50, isActive: true },
			{ id: 'variant-b', name: 'Test', description: 'Green button', weight: 50, isActive: true }
		],
		startDate: new Date(),
		endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
		status: 'draft' as const,
		successMetrics: ['Conversion Rate', 'Click Through Rate']
	};

	function handleSave(config: any) {
		console.log('Saved:', config);
	}

	function handleLaunch(config: any) {
		console.log('Launched:', config);
	}
</script>

<Story {id} {title} {description} component={ABTestConfigurator} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-abtest-configurator _c1">
			<div class="_c2">
				<p class="_c3">Primary A/B Test Configurator Example</p>
				<p class="_c4">Interactive A/B test configurator with customizable options.</p>

				<div class="_c5">
					<ABTestConfigurator initialTest={testConfig} onSave={handleSave} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">A/B Test Variations</h3>
				<p class="_c8">Different A/B test configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Running Test</p>
						<div>
							<ABTestConfigurator
								initialTest={{ ...testConfig, status: 'running' }}
								onSave={handleSave}
							/>
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Completed Test</p>
						<div>
							<ABTestConfigurator
								initialTest={{ ...testConfig, status: 'completed' }}
								onSave={handleSave}
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
