<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import SwitchWithLabel from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'checked', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'label', type: 'text', defaultValue: 'Enable notifications' },
		{ name: 'labelPosition', type: 'select', defaultValue: 'end', options: ['start', 'end'] }
	];
</script>

<Story component={SwitchWithLabel} title="SwitchWithLabel" description="Boolean switch with label alignment control." {controls}>
	{#snippet children(values: any)}
		<SwitchWithLabel
			checked={values.checked}
			disabled={values.disabled}
			label={values.label}
			labelPosition={values.labelPosition}
		/>
	{/snippet}
</Story>



