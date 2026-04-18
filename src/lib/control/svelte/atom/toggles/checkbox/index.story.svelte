<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import SlotCheckbox from './index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';

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
		controls: InterfaceControllerSettings[];
	}>();

	// Generate a random ID for the checkbox
	const checkboxId: string = `checkbox-${Math.random().toString(36).substr(2, 9)}`;
</script>

<Story {id} {title} {description} component={SlotCheckbox} category="Atoms" {controls}>
	{#snippet children(values: any)}
		{@const label =
			typeof values.label === 'string' ? values.label : 'Accept terms and conditions'}
		{@const required = typeof values.required === 'boolean' ? values.required : false}
		{@const disabled = typeof values.disabled === 'boolean' ? values.disabled : false}
		{@const description =
			typeof values.description === 'string' ? values.description : 'Please read and accept our terms'}
		<SlotCheckbox
			id={checkboxId}
			{label}
			{required}
			{disabled}
			{description}
		/>
	{/snippet}
</Story>







