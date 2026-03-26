<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import AlertCard from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



