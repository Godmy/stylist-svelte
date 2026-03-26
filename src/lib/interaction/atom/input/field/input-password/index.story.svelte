<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import InputPassword from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Пароль' },
		{ name: 'placeholder', type: 'text', defaultValue: '••••••••' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'helperText', type: 'text', defaultValue: 'Минимум 8 символов' },
		{ name: 'errors', type: 'text', defaultValue: '' },
		{ name: 'allowTogglePassword', type: 'boolean', defaultValue: true },
		{ name: 'showPasswordStrength', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	{controls}
	component={InputPassword}
	title="InputPassword"
	category="Atoms/Interaction/Input/Field"
	description="Input для пароля с переключателем видимости и индикатором сложности"
	tags={['input', 'password', 'field', 'form', 'control', 'security']}
>
	{#snippet children(values: any)}
		<InputPassword
			label={values.label as string}
			placeholder={values.placeholder as string}
			value={values.value as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			error={values.error as boolean}
			required={values.required as boolean}
			helperText={values.helperText as string}
			errors={(values.errors as string)?.split(',').filter(Boolean) || []}
			allowTogglePassword={values.allowTogglePassword as boolean}
			showPasswordStrength={values.showPasswordStrength as boolean}
		/>
	{/snippet}
</Story>




