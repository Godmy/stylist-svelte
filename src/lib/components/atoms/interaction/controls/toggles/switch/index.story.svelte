<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import Switch from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import type { SwitchProps } from '$stylist/design-system/props';

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'label', type: 'text', defaultValue: 'Enable notifications' },
			{ name: 'description', type: 'text', defaultValue: 'Receive email notifications' },
			{ name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
			{ name: 'disabled', type: 'boolean', defaultValue: false },
			{ name: 'required', type: 'boolean', defaultValue: false }
		]
	} = $props<{
		id: string;
		title: string;
		description: string;
		controls: ControlConfig[];
	}>();

	// Generate a random ID for the switch
	const switchId = `switch-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story {id} {title} {description} component={Switch} category="Atoms" {controls}>
	{#snippet children(values: any)}
		{@const label =
			typeof values.label === 'string' ? values.label : 'Enable notifications'}
		{@const description =
			typeof values.description === 'string' ? values.description : 'Receive email notifications'}
		{@const size =
			typeof values.size === 'string' ? (values.size as SwitchProps['size']) : 'md'}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		{@const required = typeof values.required === 'boolean' ? values.required : false}
		<Switch
			id={switchId}
			{label}
			{description}
			{size}
			{disabled}
			{required}
		/>
	{/snippet}
</Story>




