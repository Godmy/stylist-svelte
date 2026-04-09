<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import Stepper from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



