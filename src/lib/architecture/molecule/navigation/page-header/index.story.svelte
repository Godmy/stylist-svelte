<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import PageHeader from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



