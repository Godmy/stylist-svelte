<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import EmailInput from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Email' },
		{ name: 'placeholder', type: 'text', defaultValue: 'name@company.com' },
		{ name: 'helpText', type: 'text', defaultValue: 'We use email only for account notifications.' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: true },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'outlined', 'filled', 'ghost'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={EmailInput} title="InputEmail" description="Email input with state and style controls." {controls}>
	{#snippet children(values: any)}
		<EmailInput
			id="story-email"
			label={values.label}
			placeholder={values.placeholder}
			helpText={values.helpText}
			disabled={values.disabled}
			required={values.required}
			error={values.error}
			variant={values.variant}
			size={values.size}
		/>
	{/snippet}
</Story>
