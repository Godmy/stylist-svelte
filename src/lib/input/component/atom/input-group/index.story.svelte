<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import InputGroup from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label', type: 'text', defaultValue: 'Поиск' },
		{ name: 'placeholder', type: 'text', defaultValue: 'Поиск...' },
		{ name: 'value', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'error', type: 'boolean', defaultValue: false },
		{ name: 'required', type: 'boolean', defaultValue: false },
		{ name: 'buttonLabel', type: 'text', defaultValue: 'Найти' },
		{ name: 'buttonVariant', type: 'select', defaultValue: 'primary', options: ['primary', 'secondary', 'success', 'warning', 'danger', 'outline', 'ghost', 'link'] },
		{ name: 'buttonDisabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	{controls}
	component={InputGroup}
	title="InputGroup"
	category="Atoms/Interaction/Input/Field"
	description="Input с кнопкой справа для действий поиска, отправки и т.д."
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




