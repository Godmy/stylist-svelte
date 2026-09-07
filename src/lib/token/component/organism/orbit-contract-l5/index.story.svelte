<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import OrbitContractL5 from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'opened', type: 'boolean', defaultValue: true },
		{ name: 'showCore', type: 'boolean', defaultValue: true },
		{ name: 'showCaption', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	title="OrbitContractL5"
	description="Orbit contract view for L5 graph-node controls across architecture, information, and interaction tiers."
>
	{#snippet children(values: any)}
		<div class="token-story-stage">
			<OrbitContractL5
				opened={Boolean(values.opened)}
				showCore={Boolean(values.showCore)}
				showCaption={Boolean(values.showCaption)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-stage {
		place-items: center;
		display: grid;
		min-height: 26rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 2.5rem;
	}
</style>
