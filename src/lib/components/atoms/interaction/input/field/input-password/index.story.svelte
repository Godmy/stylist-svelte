<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import PasswordInput from './index.svelte';

	let showPassword = $state(false);

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Password' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Enter a strong password' },
		{ name: 'helpText', type: 'text', defaultValue: 'Use at least 8 characters with letters and numbers.' },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: true },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] }
	];
</script>

<Story component={PasswordInput} title="InputPassword" description="Password field with visibility toggle." {controls}>
	{#snippet children(values: any)}
		<PasswordInput
			id="story-password"
			label={values.label}
			placeholder={values.placeholder}
			helpText={values.helpText}
			disabled={values.disabled}
			required={values.required}
			error={values.error}
			size={values.size}
			showPassword={showPassword}
			onTogglePassword={() => {
				showPassword = !showPassword;
			}}
		/>
	{/snippet}
</Story>
