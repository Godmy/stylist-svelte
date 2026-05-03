<script lang="ts">
	import { Story } from '$stylist/playground/component';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ToggleWithDescription from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'label', type: 'text', defaultValue: 'Auto-save changes' },
		{ name: 'description', type: 'text', defaultValue: 'Save draft content every 5 minutes.' }
	];
</script>

<Story component={ToggleWithDescription} title="ToggleWithDescription" description="Feature toggle with supporting descriptive text." {controls}>
	{#snippet children(values: any)}
		<ToggleWithDescription
			checked={values.checked}
			disabled={values.disabled}
			label={values.label}
			description={values.description}
		/>
	{/snippet}
</Story>



