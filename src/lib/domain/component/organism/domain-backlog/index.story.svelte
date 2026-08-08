<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DomainBacklog from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Backlog' },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={DomainBacklog}
	title="DomainBacklog"
	description="Sprint backlog screen with issues, kanban, burn-down, and scrum views."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainBacklog
				title={values.title as string}
				loading={Boolean(values.loading)}
				error={values.error as string}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 32rem;
		overflow: auto;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #ffffff;
	}
</style>
