<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AlertCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Usage Limit Reached' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Upgrade to continue processing requests.' },
		{ name: 'variant', type: 'select', defaultValue: 'warning', options: ['info', 'success', 'warning', 'error'] }
	];
</script>

<Story component={AlertCard} title="AlertCard" description="Attention card with severity styling and actions." {controls}>
	{#snippet children(values: any)}
		<AlertCard
			title={values.title}
			subtitle={values.subtitle}
			variant={values.variant}
			actions={[{ label: 'Upgrade', onClick: () => {} }, { label: 'Dismiss', onClick: () => {} }]}
		/>
	{/snippet}
</Story>
