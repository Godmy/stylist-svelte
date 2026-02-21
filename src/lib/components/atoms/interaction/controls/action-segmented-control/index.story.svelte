<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ActionSegmentedControl from './index.svelte';

	const items = ['Overview', 'Specs', 'Reviews'];

	const controls: ControlConfig[] = [
		{ name: 'selectedIndex', type: 'number', defaultValue: 0, min: 0, max: 2 }
	];
</script>

<Story
	{controls}
	component={ActionSegmentedControl}
	title="ActionSegmentedControl"
	category="Atoms/Interaction/Controls"
	description="Segmented control for switching views"
>
	{#snippet children(values: any)}
		<ActionSegmentedControl
			{items}
			selectedIndex={Number(values.selectedIndex) || 0}
		/>
	{/snippet}
</Story>
