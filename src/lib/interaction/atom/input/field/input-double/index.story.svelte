<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import InputDouble from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'label1', type: 'text', defaultValue: 'Имя' },
		{ name: 'label2', type: 'text', defaultValue: 'Фамилия' },
		{ name: 'placeholder1', type: 'text', defaultValue: 'Иван' },
		{ name: 'placeholder2', type: 'text', defaultValue: 'Иванов' },
		{ name: 'value1', type: 'text', defaultValue: '' },
		{ name: 'value2', type: 'text', defaultValue: '' },
		{ name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'filled', 'outline', 'ghost', 'info', 'success', 'warning', 'danger', 'solid'] },
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled1', type: 'boolean', defaultValue: false },
		{ name: 'disabled2', type: 'boolean', defaultValue: false },
		{ name: 'required1', type: 'boolean', defaultValue: false },
		{ name: 'required2', type: 'boolean', defaultValue: false },
		{ name: 'errors1', type: 'text', defaultValue: '' },
		{ name: 'errors2', type: 'text', defaultValue: '' }
	];
</script>

<Story
	{controls}
	component={InputDouble}
	title="InputDouble"
	category="Atoms/Interaction/Input/Field"
	description="Два input в одном ряду для полей типа Имя/Фамилия, Город/Улица и т.д."
	tags={['input', 'double', 'field', 'form', 'control', 'pair']}
>
	{#snippet children(values: any)}
		<InputDouble
			label1={values.label1 as string}
			label2={values.label2 as string}
			placeholder1={values.placeholder1 as string}
			placeholder2={values.placeholder2 as string}
			value1={values.value1 as string}
			value2={values.value2 as string}
			variant={values.variant as any}
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled1={values.disabled1 as boolean}
			disabled2={values.disabled2 as boolean}
			required1={values.required1 as boolean}
			required2={values.required2 as boolean}
			errors1={(values.errors1 as string)?.split(',').filter(Boolean) || []}
			errors2={(values.errors2 as string)?.split(',').filter(Boolean) || []}
		/>
	{/snippet}
</Story>




