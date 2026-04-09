<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import InputGroup from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'РџРѕРёСЃРє' },
		{ name: 'placeholder', type: 'text', defaultValue: 'РџРѕРёСЃРє...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'buttonLabel', type: 'text', defaultValue: 'РќР°Р№С‚Рё' },
		{ name: 'buttonVariant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'outline', 'ghost', 'link'] },
		{ name: 'buttonDisabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={InputGroup}
	title="InputGroup"
	category="Atoms/Interaction/Input/Field"
	description="Input СЃ РєРЅРѕРїРєРѕР№ СЃРїСЂР°РІР° РґР»СЏ РґРµР№СЃС‚РІРёР№ РїРѕРёСЃРєР°, РѕС‚РїСЂР°РІРєРё Рё С‚.Рґ."
	tags={['input', 'group', 'button', 'field', 'form', 'control']}
>
	{#snippet children(values: any)}
		<InputGroup
			label={values.label as string}
			placeholder={values.placeholder as string}
			value={values.value as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			error={values.error as boolean}
			required={values.required as boolean}
			buttonLabel={values.buttonLabel as string}
			buttonVariant={values.buttonVariant as any}
			buttonDisabled={values.buttonDisabled as boolean}
		/>
	{/snippet}
</Story>




