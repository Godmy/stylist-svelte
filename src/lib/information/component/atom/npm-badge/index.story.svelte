<script lang="ts">
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import NPMBadge from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'type',
			type: 'select',
			options: ['version', 'downloads', 'license', 'size', 'custom'],
			defaultValue: 'version'
		},
		{ name: 'value', type: 'text', defaultValue: '1.0.0' },
		{ name: 'label', type: 'text', defaultValue: '' },
		{ name: 'link', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={NPMBadge}
	title="NPMBadge Component"
	description="An NPM badge component for displaying package information"
	tags={['information', 'data-display', 'badge', 'npm']}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<NPMBadge
				type={values.type as 'version' | 'downloads' | 'license' | 'size' | 'custom'}
				value={values.value as string}
				label={values.label as string}
				link={values.link as string}
			/>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
</style>
