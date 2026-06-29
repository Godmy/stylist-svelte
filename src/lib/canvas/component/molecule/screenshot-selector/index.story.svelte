<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeScreenshotSelector from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'drawingMode', type: 'boolean', defaultValue: false },
		{ name: 'drawColor', type: 'color', defaultValue: '#ef4444' }
	];
</script>

<Story
	component={RecipeScreenshotSelector}
	title="Screenshot Selector"
	description="Canvas-domain overlay for selecting screenshot regions and optionally drawing annotations."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeScreenshotSelector
			drawingMode={values.drawingMode}
			drawColor={values.drawColor}
		/>
	{/snippet}
</Story>
