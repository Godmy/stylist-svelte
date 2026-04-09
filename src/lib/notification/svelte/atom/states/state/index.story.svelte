<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import EmptyState from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'title', type: 'text', defaultValue: 'No items found' },
		{ name: 'description', type: 'text', defaultValue: 'Try changing filters or create a new item.' },
		{ name: 'showAction', type: 'boolean', defaultValue: true },
		{ name: 'actionLabel', type: 'text', defaultValue: 'Create item' }
	];
</script>

<Story component={EmptyState} title="EmptyState" description="Fallback state for empty datasets, lists, and search results." {controls}>
	{#snippet children(values: any)}
		<EmptyState
			title={values.title}
			description={values.description}
			action={values.showAction ? { label: values.actionLabel, onClick: () => {} } : undefined}
		/>
	{/snippet}
</Story>



