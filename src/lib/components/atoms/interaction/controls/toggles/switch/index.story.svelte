<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
	import Switch from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'label', type: 'text', defaultValue: 'Включить уведомления' },
		{ name: 'description', type: 'text', defaultValue: 'Получать email-уведомления о новых событиях' },
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
	description="Переключатель с лейблом и описанием для включения/выключения опций"
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


