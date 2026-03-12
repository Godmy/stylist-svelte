<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import InputText from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Текстовое поле' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Введите текст...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: true },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'helperText', type: 'text', defaultValue: 'Это вспомогательный текст' },
		{ name: 'errors', type: 'text', defaultValue: '' },
		{ name: 'readonly', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={InputText}
	title="InputText"
	category="Atoms/Interaction/Input/Field"
	description="Базовый текстовый input с поддержкой variant, size, error states и валидации"
	tags={['input', 'text', 'field', 'form', 'control']}
>
	{#snippet children(values: any)}
		<InputText
			label={values.label as string}
			placeholder={values.placeholder as string}
			value={values.value as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			error={values.error as boolean}
			block={values.block as boolean}
			required={values.required as boolean}
			helperText={values.helperText as string}
			errors={(values.errors as string)?.split(',').filter(Boolean) || []}
			readonly={values.readonly as boolean}
		/>
	{/snippet}
</Story>

