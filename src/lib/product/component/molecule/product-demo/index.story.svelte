<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductDemo from './index.svelte';

	let demoClicks = $state(0);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'Interactive Product Demo' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Experience key features in a realistic flow.'
		},
		{
			name: 'features',
			type: 'text',
			defaultValue: 'Easy setup,Live preview,Secure storage,Team sharing'
		}
	];

	function parseFeatures(featuresString: string): string[] {
		return featuresString
			.split(',')
			.map((f) => f.trim())
			.filter((f) => f.length > 0);
	}
</script>

<Story
	id="molecules-product-demo"
	title="ProductDemo"
	component={ProductDemo}
	category="Molecules"
	description="Showcases a product with an interactive demonstration."
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProductDemo
				title={values.title}
				description={values.description}
				features={parseFeatures(values.features)}
				onDemo={() => (demoClicks += 1)}
			>
				{#snippet demoContent()}
					<div class="_c2 italic">Interactive demo area</div>
				{/snippet}
			</ProductDemo>
			<p class="_c3">
				Demo started: {demoClicks} times
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
