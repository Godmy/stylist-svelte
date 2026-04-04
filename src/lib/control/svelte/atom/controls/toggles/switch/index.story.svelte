<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Switch from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Р’РєР»СЋС‡РёС‚СЊ СѓРІРµРґРѕРјР»РµРЅРёСЏ' },
		{ name: 'description', type: 'text', defaultValue: 'РџРѕР»СѓС‡Р°С‚СЊ email-СѓРІРµРґРѕРјР»РµРЅРёСЏ Рѕ РЅРѕРІС‹С… СЃРѕР±С‹С‚РёСЏС…' },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'required', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={Switch}
	title="Switch"
	category="Atoms/Interaction/Controls/Toggles"
	description="РџРµСЂРµРєР»СЋС‡Р°С‚РµР»СЊ СЃ Р»РµР№Р±Р»РѕРј Рё РѕРїРёСЃР°РЅРёРµРј РґР»СЏ РІРєР»СЋС‡РµРЅРёСЏ/РІС‹РєР»СЋС‡РµРЅРёСЏ РѕРїС†РёР№"
	tags={['switch', 'toggle', 'checkbox', 'form', 'control']}
>
	{#snippet children(values: any)}
		<Switch
			label={values.label as string}
			description={values.description as string}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			checked={values.checked as boolean}
			required={values.required as boolean}
		/>
	{/snippet}
</Story>



