<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RecipeResourceOptimizer from './index.svelte';

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

	type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';

	type Resource = {
		id: string;
		name: string;
		url: string;
		type: ResourceType;
		size: number;
		transferSize?: number;
		loadTime?: number;
		status: 'loading' | 'loaded' | 'error' | 'cached';
		priority: 'high' | 'normal' | 'low';
		isOptimized: boolean;
	};

	const resources: Resource[] = [
		{
			id: 'cpu',
			name: 'CPU',
			url: '/api/cpu',
			type: 'api',
			size: 1024,
			status: 'loaded',
			priority: 'high',
			isOptimized: true
		},
		{
			id: 'memory',
			name: 'Memory',
			url: '/api/memory',
			type: 'api',
			size: 2048,
			status: 'loaded',
			priority: 'normal',
			isOptimized: false
		},
		{
			id: 'disk',
			name: 'Disk',
			url: '/api/disk',
			type: 'api',
			size: 4096,
			status: 'loading',
			priority: 'low',
			isOptimized: true
		},
		{
			id: 'network',
			name: 'Network',
			url: '/api/network',
			type: 'api',
			size: 512,
			status: 'cached',
			priority: 'high',
			isOptimized: false
		}
	];

	function handleOptimize(resource: Resource) {
		console.log('Optimize:', resource.name);
	}
</script>

<Story
	{id}
	{title}
	{description}
	component={RecipeResourceOptimizer}
	category="Organisms"
	{controls}
>
	{#snippet children(values: any)}
		<section class="sb-organisms-resource-optimizer _c1">
			<div class="_c2">
				<p class="_c3">Primary Resource Optimizer Example</p>
				<p class="_c4">Interactive resource optimizer with real-time monitoring.</p>

				<div class="_c5">
					<RecipeResourceOptimizer {resources} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Resource Optimizer Variations</h3>
				<p class="_c8">Different resource optimizer configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">High Priority Only</p>
						<div>
							<RecipeResourceOptimizer resources={resources.filter((r) => r.priority === 'high')} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Not Optimized</p>
						<div>
							<RecipeResourceOptimizer resources={resources.filter((r) => !r.isOptimized)} />
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
