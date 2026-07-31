<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import BadgeGroup from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'maxVisible', type: 'number', defaultValue: 5, min: 1, max: 10 },
		{ name: 'showOverflow', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="atoms-badge-group"
	title="BadgeGroup"
	component={BadgeGroup}
	category="Atoms"
	description="A component to display a group of badges."
	tags={['badge', 'tag', 'label']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<h2 class="_c2">Badge Group</h2>
			<div class="_c3">
				<BadgeGroup
					badges={[
						{ id: '1', label: 'Primary', variant: 'primary', size: 'md' },
						{ id: '2', label: 'Secondary', variant: 'secondary', size: 'md' },
						{ id: '3', label: 'Success', variant: 'success', size: 'md' },
						{ id: '4', label: 'Warning', variant: 'warning', size: 'md' },
						{ id: '5', label: 'Danger', variant: 'danger', size: 'md' },
						{ id: '6', label: 'Info', variant: 'info', size: 'md' }
					]}
					maxVisible={Number(values.maxVisible) || 5}
					showOverflow={(values.showOverflow as boolean) ?? true}
				/>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c2 {
		margin-bottom: 1.5rem;
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-left: auto;
		margin-right: auto;
		max-width: 28rem;
	}
</style>
