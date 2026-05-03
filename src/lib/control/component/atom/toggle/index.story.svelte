<script lang="ts">
	// @ts-nocheck
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import SlotToggle from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'size', type: 'select', defaultValue: 'md', options: ['sm', 'md', 'lg'] },
		{ name: 'disabled', type: 'boolean', defaultValue: false },
		{ name: 'checked', type: 'boolean', defaultValue: true },
		{ name: 'ariaLabel', type: 'text', defaultValue: 'SlotToggle switch' }
	];
</script>

<Story
	{controls}
	component={SlotToggle}
	title="SlotToggle"
	category="Atoms/Interaction/Controls/Toggles"
	description="Переключатель в стиле toggle для включения/выключения состояния"
	tags={['toggle', 'switch', 'checkbox', 'form', 'control']}
>
	{#snippet children(values: any)}
		<SlotToggle
			size={values.size as 'sm' | 'md' | 'lg'}
			disabled={values.disabled as boolean}
			checked={values.checked as boolean}
			ariaLabel={values.ariaLabel as string}
		/>
	{/snippet}
</Story>



