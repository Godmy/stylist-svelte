<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import ToggleWithDescription from './index.svelte';

	const controls: ControlConfig[] = [
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
