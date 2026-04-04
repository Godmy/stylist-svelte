<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Textarea from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'РЎРѕРѕР±С‰РµРЅРёРµ' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Р’РІРµРґРёС‚Рµ РІР°С€Рµ СЃРѕРѕР±С‰РµРЅРёРµ...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg', 'xl'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'rows', type: 'number', defaultValue: 4, min: 2, max: 20 },
		{ name: 'autoResize', type: 'boolean', defaultValue: false },
		{ name: 'maxlength', type: 'number', defaultValue: 1000, min: 0, max: 10000 },
		{ name: 'helperText', type: 'text', defaultValue: 'РњР°РєСЃРёРјСѓРј 1000 СЃРёРјРІРѕР»РѕРІ' }
	];
</script>

<Story
	{controls}
	component={Textarea}
	title="Textarea"
	category="Atoms/Interaction/Input/Field"
	description="РњРЅРѕРіРѕСЃС‚СЂРѕС‡РЅРѕРµ С‚РµРєСЃС‚РѕРІРѕРµ РїРѕР»Рµ СЃ РїРѕРґРґРµСЂР¶РєРѕР№ maxlength Рё auto-resize"
	tags={['textarea', 'input', 'field', 'form', 'control', 'text']}
>
	{#snippet children(values: any)}
		<Textarea
			label={values.label as string}
			placeholder={values.placeholder as string}
			value={values.value as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg' | 'xl'}
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




