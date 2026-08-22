<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DomainDiagnostics from './index.svelte';

	const controls: SlotStory[] = [{ name: 'compact', type: 'boolean', defaultValue: true }];
</script>

<Story
	{controls}
	component={DomainDiagnostics}
	title="DomainDiagnostics"
	description="Runs story diagnostics by importing and mounting story modules in the workspace."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainDiagnostics compact={Boolean(values.compact)} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
