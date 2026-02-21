<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ExpandableCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Incident Details' },
		{ name: 'subtitle', type: 'text', defaultValue: 'EU region latency spike' },
		{ name: 'defaultExpanded', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'info', 'success', 'warning', 'danger'] }
	];
</script>

<Story component={ExpandableCard} title="ExpandableCard" description="Card that reveals additional details on expand." {controls}>
	{#snippet children(values: any)}
		<ExpandableCard title={values.title} subtitle={values.subtitle} defaultExpanded={values.defaultExpanded} disabled={values.disabled} variant={values.variant}>
			{#snippet summary()}<p class="text-sm text-[--color-text-secondary]">Click to inspect timeline and mitigation.</p>{/snippet}
			{#snippet details()}<p class="text-sm">Mitigation shipped at 15:40 UTC. Recovery complete.</p>{/snippet}
		</ExpandableCard>
	{/snippet}
</Story>
