<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import FormErrorMessage from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'text', type: 'text', defaultValue: 'Email is required.' },
		{ name: 'visible', type: 'boolean', defaultValue: true },
		{ name: 'variant', type: 'select', defaultValue: 'error', options: ['error', 'danger', 'warning'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={FormErrorMessage} title="FormErrorMessage" description="Validation message shown below invalid fields." {controls}>
	{#snippet children(values: any)}
		<FormErrorMessage text={values.text} visible={values.visible} variant={values.variant} size={values.size} />
	{/snippet}
</Story>
