<script lang="ts">
	import FormErrorMessage from './index.svelte';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';

	type Props = {
		text?: string;
		visible?: boolean;
		content?: () => any;
		class?: string;
	};

	const controls: ControlConfig[] = [
		{
			name: 'text',
			type: 'text',
			defaultValue: 'Email is required.',
			description: 'Error message text'
		},
		{
			name: 'visible',
			type: 'boolean',
			defaultValue: true,
			description: 'Whether the error message is visible'
		},
		{ name: 'class', type: 'text', defaultValue: '', description: 'Additional CSS classes' }
	];

	const props: Props = {};
</script>

<div class="p-4">
	<FormErrorMessage {...props} />
</div>



