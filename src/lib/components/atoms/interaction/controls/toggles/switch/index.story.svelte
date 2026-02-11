<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import Switch from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
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
	{#snippet children(props)}
		<Switch
			id={switchId}
			label={props.label ?? 'Enable notifications'}
			description={props.description ?? 'Receive email notifications'}
			size={props.size ?? 'md'}
			disabled={props.disabled ?? false}
			required={props.required ?? false}
		/>
	{/snippet}
</Story>

