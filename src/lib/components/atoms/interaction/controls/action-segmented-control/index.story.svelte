<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import ActionSegmentedControl from './ActionSegmentedControl.svelte';

	type Props = {
		items: string[];
		selectedIndex?: number;
		class?: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'selectedIndex',
			type: 'number',
			defaultValue: 0,
			min: 0,
			max: 2
		}
	];
</script>

<Story
	id="molecules-action-segmented-control"
	title="ActionSegmentedControl"
	component={ActionSegmentedControl}
	category="Molecules"
	description="A control that allows users to select one option from a set of mutually exclusive options."
	{controls}
>
	{#snippet children(props: Props)}
		<div class="rounded-lg bg-gray-50 p-8">
			<h2 class="mb-4 text-xl font-bold">ActionSegmentedControl Story</h2>
			<ActionSegmentedControl {...props} items={['Option 1', 'Option 2', 'Option 3']} />
		</div>
	{/snippet}
</Story>
