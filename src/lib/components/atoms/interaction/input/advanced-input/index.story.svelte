<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import AdvancedInput from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Username' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Enter your username' },
		{ name: 'type', type: 'select', defaultValue: 'text', options: ['text', 'email', 'password', 'number'] },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={AdvancedInput} title="AdvancedInput" description="Input field with style variants, sizing, and state controls." {controls}>
	{#snippet children(values: any)}
		<AdvancedInput
			label={values.label}
			placeholder={values.placeholder}
			type={values.type}
			variant={values.variant}
			size={values.size}
			disabled={values.disabled}
			error={values.error}
		/>
	{/snippet}
</Story>
