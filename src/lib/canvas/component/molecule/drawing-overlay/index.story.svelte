<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import RecipeDrawingOverlay from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'drawColor', type: 'color', defaultValue: '#ff0000' }
	];
</script>

<Story
	component={RecipeDrawingOverlay}
	title="Drawing Overlay"
	description="Canvas-domain annotation layer for freehand drawing over previews or captured regions."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeDrawingOverlay drawColor={values.drawColor} />
	{/snippet}
</Story>
