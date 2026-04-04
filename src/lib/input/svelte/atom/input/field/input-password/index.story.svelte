<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import InputPassword from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'РџР°СЂРѕР»СЊ' },
		{ name: 'placeholder', type: 'text', defaultValue: 'вЂўвЂўвЂўвЂўвЂўвЂўвЂўвЂў' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'helperText', type: 'text', defaultValue: 'РњРёРЅРёРјСѓРј 8 СЃРёРјРІРѕР»РѕРІ' },
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
	description="Input РґР»СЏ РїР°СЂРѕР»СЏ СЃ РїРµСЂРµРєР»СЋС‡Р°С‚РµР»РµРј РІРёРґРёРјРѕСЃС‚Рё Рё РёРЅРґРёРєР°С‚РѕСЂРѕРј СЃР»РѕР¶РЅРѕСЃС‚Рё"
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




