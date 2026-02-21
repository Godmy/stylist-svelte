<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PageHeader from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Project settings' },
		{ name: 'description', type: 'text', defaultValue: 'Manage team access, integrations, and billing.' },
		{ name: 'withActions', type: 'boolean', defaultValue: true }
	];

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Workspace', href: '/workspace' },
		{ label: 'Settings' }
	];
</script>

<Story component={PageHeader} title="PageHeader" description="Page-level heading block with breadcrumbs and actions." {controls}>
	{#snippet children(values: any)}
		<PageHeader title={values.title} description={values.description} breadcrumbs={breadcrumbs}>
			{#snippet actions()}
				{#if values.withActions}
					<button class="rounded-md border border-[--color-border-primary] px-3 py-1.5 text-sm">Export</button>
				{/if}
			{/snippet}
		</PageHeader>
	{/snippet}
</Story>
