<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Stepper from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'orientation', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] }
	];
</script>

<Story component={Stepper} title="Stepper" description="Step progress indicator for multi-step flows." {controls}>
	{#snippet children(values: any)}
		<Stepper
			orientation={values.orientation}
			steps={[
				{ id: '1', title: 'Account', description: 'Create profile', status: 'completed' },
				{ id: '2', title: 'Plan', description: 'Choose subscription', status: 'current' },
				{ id: '3', title: 'Checkout', description: 'Confirm payment', status: 'upcoming' }
			]}
		/>
	{/snippet}
</Story>
