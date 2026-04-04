<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import InputText from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'РўРµРєСЃС‚РѕРІРѕРµ РїРѕР»Рµ' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Р’РІРµРґРёС‚Рµ С‚РµРєСЃС‚...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'block', type: 'boolean', defaultValue: true },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'helperText', type: 'text', defaultValue: 'Р­С‚Рѕ РІСЃРїРѕРјРѕРіР°С‚РµР»СЊРЅС‹Р№ С‚РµРєСЃС‚' },
		{ name: 'errors', type: 'text', defaultValue: '' },
		{ name: 'readonly', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={InputText}
	title="InputText"
	category="Atoms/Interaction/Input/Field"
	description="Р‘Р°Р·РѕРІС‹Р№ С‚РµРєСЃС‚РѕРІС‹Р№ input СЃ РїРѕРґРґРµСЂР¶РєРѕР№ variant, size, error states Рё РІР°Р»РёРґР°С†РёРё"
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




