<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import InputLong from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'РљРѕРјРјРµРЅС‚Р°СЂРёР№' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Р’РІРµРґРёС‚Рµ РІР°С€ РєРѕРјРјРµРЅС‚Р°СЂРёР№...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'rows', type: 'number', defaultValue: 4, min: 2, max: 20 },
		{ name: 'autoResize', type: 'boolean', defaultValue: false },
		{ name: 'maxlength', type: 'number', defaultValue: 500, min: 0, max: 5000 },
		{ name: 'helperText', type: 'text', defaultValue: 'РњР°РєСЃРёРјСѓРј 500 СЃРёРјРІРѕР»РѕРІ' }
	];
</script>

<Story
	{controls}
	component={InputLong}
	title="InputLong"
	category="Atoms/Interaction/Input/Field"
	description="РњРЅРѕРіРѕСЃС‚СЂРѕС‡РЅС‹Р№ input РґР»СЏ РґР»РёРЅРЅРѕРіРѕ С‚РµРєСЃС‚Р° СЃ auto-resize Рё РѕРіСЂР°РЅРёС‡РµРЅРёРµРј РґР»РёРЅС‹"
	tags={['input', 'long', 'textarea', 'field', 'form', 'control']}
>
	{#snippet children(values: any)}
		<InputLong
			label={values.label as string}
			placeholder={values.placeholder as string}
			value={values.value as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			error={values.error as boolean}
			required={values.required as boolean}
			rows={Number(values.rows) as number}
			autoResize={values.autoResize as boolean}
			maxlength={Number(values.maxlength) as number}
			helperText={values.helperText as string}
		/>
	{/snippet}
</Story>




