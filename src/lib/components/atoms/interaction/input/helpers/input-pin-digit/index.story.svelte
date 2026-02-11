<script lang="ts">
	import PinInputDigit from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import type { IInputProps, PinInputVariant } from '$stylist/design-system/props';

	type Props = IInputProps & {
		id: string;
		value?: string;
		focused?: boolean;
		invalid?: boolean;
		variant?: PinInputVariant;
	};

	const controls: ControlConfig[] = [
		{ name: 'value', type: 'text', defaultValue: '', description: 'Current digit value' },
		{
			name: 'focused',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the digit is focused'
		},
		{
			name: 'invalid',
			type: 'boolean',
			defaultValue: false,
			description: 'Whether the digit is invalid'
		}
	];

	const props: Props = {
		label: 'Digit',
		id: 'pin-input-digit', // id is always a string
		type: 'text',
		value: '',
		focused: false,
		invalid: false
	};
</script>

<div class="flex justify-center p-4">
	<PinInputDigit {...props} />
</div>
