<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import EmailInput from './index.svelte';
	import type { InputProps } from '$stylist/design-system/props';

	type Props = Omit<InputProps, 'variant' | 'size'> & {
		label: string;
		id: string;
		name: string;
		type?: string;
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		required?: boolean;
		error?: boolean;
		helpText?: string;
		class?: string;
		variant?: 'default' | 'filled' | 'ghost' | 'warning' | 'danger';
		size?: 'sm' | 'md' | 'lg';
	};

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'label', description: 'Label text', type: 'text', defaultValue: 'Email' },
		{ name: 'value', description: 'Current email value', type: 'text', defaultValue: '' },
		{
			name: 'placeholder',
			description: 'Placeholder text',
			type: 'text',
			defaultValue: '¬ведите email'
		},
		{
			name: 'disabled',
			description: 'Whether the input is disabled',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'required',
			description: 'Whether the input is required',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'error',
			description: 'Whether the input has an error',
			type: 'boolean',
			defaultValue: false
		},
		{ name: 'helpText', description: 'Help text to display', type: 'text', defaultValue: '' },
		{ name: 'class', description: 'Additional CSS classes', type: 'text', defaultValue: '' }
	];

	const props: Props = {
		label: 'Email',
		id: 'email-input',
		name: 'email',
		type: 'email',
		value: '',
		placeholder: '¬ведите email'
	};
</script>

<div class="p-4">
	<EmailInput {...props} />
</div>




