<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import GeoJSONViewer from './index.svelte';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'showProperties', type: 'boolean', defaultValue: true },
			{ name: 'showZoomControls', type: 'boolean', defaultValue: true },
			{ name: 'showLayerControl', type: 'boolean', defaultValue: true }
		]
	} = $props<{
		id?: string;
		title?: string;
		description?: string;
		controls?: SlotStory[];
	}>();

	const sampleGeoJSON = {
		type: 'FeatureCollection' as const,
		features: [
			{
				type: 'Feature' as const,
				properties: { name: 'London', population: 8900000 },
				geometry: { type: 'Point' as const, coordinates: [-0.09, 51.505] as [number, number] }
			},
			{
				type: 'Feature' as const,
				properties: { name: 'Polygon Area', description: 'Sample polygon' },
				geometry: {
					type: 'Polygon' as const,
					coordinates: [
						[
							[-0.1, 51.5],
							[-0.05, 51.5],
							[-0.05, 51.55],
							[-0.1, 51.55],
							[-0.1, 51.5]
						]
					] as [number, number][][]
				}
			}
		]
	};

	function handleFeatureClick(feature: any) {
		console.log('Feature clicked:', feature.properties.name);
	}
</script>

<Story {id} {title} {description} component={GeoJSONViewer} category="Organisms" {controls}>
	{#snippet children(values: any)}
		<section class="sb-organisms-geo-jsonviewer _c1">
			<div class="_c2">
				<p class="_c3">Primary GeoJSON Viewer Example</p>
				<p class="_c4">Interactive GeoJSON viewer with customizable options.</p>

				<div class="_c5">
					<GeoJSONViewer onFeatureClick={handleFeatureClick} />
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">GeoJSON Viewer Variations</h3>
				<p class="_c8">Different GeoJSON viewer configurations with various options.</p>

				<div class="_c9">
					<article class="_c10">
						<p class="_c11">Without Properties</p>
						<div class="_c12">
							<GeoJSONViewer onFeatureClick={handleFeatureClick} />
						</div>
					</article>

					<article class="_c10">
						<p class="_c11">Minimal Controls</p>
						<div class="_c12">
							<GeoJSONViewer onFeatureClick={handleFeatureClick} />
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
	._c12 {
		height: 16rem;
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
		height: 24rem;
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
