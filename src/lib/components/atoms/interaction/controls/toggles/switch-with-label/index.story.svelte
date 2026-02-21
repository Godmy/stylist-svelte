<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SwitchWithLabel from './index.svelte';

	const controls: ControlConfig[] = [
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
