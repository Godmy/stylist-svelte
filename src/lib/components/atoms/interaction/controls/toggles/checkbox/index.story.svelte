<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import Checkbox from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	// Define CheckboxProps type locally
	type CheckboxProps = {
		label: string;
		required?: boolean;
		disabled?: boolean;
		description?: string;
	};

	let {
		id = '',
		title = '',
		description = '',
		controls = [
			{ name: 'label', type: 'text', defaultValue: 'Accept terms and conditions' },
			{ name: 'required', type: 'boolean', defaultValue: false },
			{ name: 'disabled', type: 'boolean', defaultValue: false },
			{ name: 'description', type: 'text', defaultValue: 'Please read and accept our terms' }
		]
	} = $props<{
		id: string;
		title: string;
		description: string;
		controls: ControlConfig[];
	}>();

	// Generate a random ID for the checkbox
	const checkboxId: string = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story {id} {title} {description} component={Checkbox} category="Atoms" {controls}>
	{#snippet children(props)}
		{@const label =
			typeof props.label === 'string' ? props.label : 'Accept terms and conditions'}
		{@const required = typeof props.required === 'boolean' ? props.required : false}
		{@const disabled = typeof props.disabled === 'boolean' ? props.disabled : false}
		{@const description =
			typeof props.description === 'string' ? props.description : 'Please read and accept our terms'}
		<Checkbox
			id={checkboxId}
			{label}
			{required}
			{disabled}
			{description}
		/>
	{/snippet}
</Story>




