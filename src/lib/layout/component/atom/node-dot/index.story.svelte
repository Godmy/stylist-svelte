<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NodeDot from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'size', type: 'number', defaultValue: 16 },
		{ name: 'accent', type: 'color', defaultValue: '#3498db' },
		{ name: 'opacity', type: 'number', defaultValue: 0.8 }
	];
</script>

<Story
	{controls}
	component={NodeDot}
	title="Node Dot"
	category="Atoms/Layout/Indicators/Node Dot"
	description="Simple dot indicator component"
>
	{#snippet children(values: any)}
		<div class="_c1">
			<NodeDot
				size={values.size as number}
				accent={values.accent as string}
				opacity={values.opacity as number}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
</style>
