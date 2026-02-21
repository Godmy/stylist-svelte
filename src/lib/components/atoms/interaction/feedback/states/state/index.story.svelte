<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import EmptyState from './index.svelte';

	const controls: ControlConfig[] = [
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
