<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
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



