<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import BaseCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Workspace Summary' },
		{ name: 'description', type: 'text', defaultValue: 'All systems operational for the current release.' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'] }
	];
</script>

<Story component={BaseCard} title="BaseCard" description="Generic information card with header and body slots." {controls}>
	{#snippet children(values: any)}
		<BaseCard title={values.title} description={values.description} variant={values.variant}>
			{#snippet children()}
				<div class="text-sm text-[--color-text-secondary]">Body content can contain any custom UI.</div>
			{/snippet}
		</BaseCard>
	{/snippet}
</Story>
