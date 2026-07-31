<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import PageHeader from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Project settings' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Manage team access, integrations, and billing.'
		},
		{ name: 'withActions', type: 'boolean', defaultValue: true }
	];

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Workspace', href: '/workspace' },
		{ label: 'Settings' }
	];
</script>

<Story
	component={PageHeader}
	title="PageHeader"
	description="Page-level heading block with breadcrumbs and actions."
	{controls}
>
	{#snippet children(values: any)}
		<PageHeader title={values.title} description={values.description} {breadcrumbs}>
			{#snippet actions()}
				{#if values.withActions}
					<button class="_c1">Export</button>
				{/if}
			{/snippet}
		</PageHeader>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.375rem;
		padding-bottom: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
