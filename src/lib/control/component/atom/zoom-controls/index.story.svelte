<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ZoomControls from './index.svelte';

	const controls = [
		{ name: 'zoom', type: 'range', min: 0.1, max: 5, step: 0.1, defaultValue: 1 }
	];
</script>

<Story {controls} component={ZoomControls} title="ZoomControls" category="Atoms/Control/ZoomControls" description="Zoom controls for canvas and design tools">
	{#snippet children(values: any)}
		<div style="display: flex; gap: 8px; padding: 20px; background: var(--color-background-primary);">
			<ZoomControls zoom={Number(values.zoom) ?? 1} />
		</div>
	{/snippet}
</Story>
