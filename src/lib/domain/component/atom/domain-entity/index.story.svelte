<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DomainEntity from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'name', type: 'text', defaultValue: 'price-history' },
		{ name: 'fileCount', type: 'number', defaultValue: 3 },
		{ name: 'active', type: 'boolean', defaultValue: false }
	];

	let selectedPath = $state('');
</script>

<Story
	{controls}
	component={DomainEntity}
	title="DomainEntity"
	description="Selectable item in the domain explorer entity list."
>
	{#snippet children(values: any)}
		<div class="_c1">
			<DomainEntity
				name={values.name as string}
				path={`/src/lib/commerce/component/molecule/${values.name as string}`}
				fileCount={Number(values.fileCount)}
				active={Boolean(values.active)}
				onSelect={(path) => {
					selectedPath = path;
				}}
			/>
			<p class="_c2">Selected path: {selectedPath || 'none'}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 1rem;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #64748b;
	}
</style>
