<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeShellCanvas from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'showGrid', type: 'boolean', defaultValue: true },
		{ name: 'zoom', type: 'number', defaultValue: 1, min: 0.25, max: 2 },
		{
			name: 'viewport',
			type: 'select',
			defaultValue: 'desktop',
			options: ['mobile', 'tablet', 'desktop', 'fullscreen']
		}
	];
</script>

<Story
	component={RecipeShellCanvas}
	title="Shell Canvas"
	description="Preview canvas with zoom, viewport framing, grid overlay, and panning behavior."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeShellCanvas
			showGrid={values.showGrid}
			zoom={values.zoom}
			viewport={values.viewport}
		>
			<div
				style="min-height: 260px; border-radius: 16px; background: linear-gradient(135deg, #ffffff, #f8fafc); padding: 24px; border: 1px solid #e2e8f0;"
			>
				<div style="font-weight: 700; color: #0f172a; margin-bottom: 8px;">Preview Surface</div>
				<div style="color: #475569; line-height: 1.6;">
					The shell keeps component previews centered while viewport, zoom, grid, and frame
					settings change around it.
				</div>
			</div>
		</RecipeShellCanvas>
	{/snippet}
</Story>
