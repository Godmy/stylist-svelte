<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ZoomControls from './index.svelte';

	let currentZoom = $state(100);

	const controls: ControlConfig[] = [
		{ name: 'initialValue', type: 'number', defaultValue: 100, min: 25, max: 300, step: 5 },
		{ name: 'minZoom', type: 'number', defaultValue: 50, min: 10, max: 200, step: 5 },
		{ name: 'maxZoom', type: 'number', defaultValue: 200, min: 100, max: 500, step: 10 },
		{ name: 'step', type: 'number', defaultValue: 10, min: 1, max: 50, step: 1 },
		{ name: 'showPercentage', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={ZoomControls} title="ZoomControls" description="Zoom toolbar with increment, decrement, and reset actions." {controls}>
	{#snippet children(values: any)}
		<div class="relative min-h-72 rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-6">
			<div class="content-container rounded-lg border border-dashed border-[--color-border-primary] p-5">
				<p class="text-sm text-[--color-text-secondary]">Preview content responds to zoom actions.</p>
			</div>
			<div class="absolute right-4 bottom-4">
				<ZoomControls
					initialValue={values.initialValue}
					minZoom={values.minZoom}
					maxZoom={values.maxZoom}
					step={values.step}
					showPercentage={values.showPercentage}
					onValueChange={(z) => (currentZoom = z)}
				/>
			</div>
			<p class="mt-4 text-sm text-[--color-text-secondary]">Current zoom: {currentZoom}%</p>
		</div>
	{/snippet}
</Story>
