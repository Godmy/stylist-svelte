<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ActionSegmentedControl from './index.svelte';

	const items = ['Overview', 'Specs', 'Reviews'];

	const controls: InterfaceControllerSettings[] = [
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



