<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import CharacterCount from './index.svelte';

	type Props = {
		current?: number;
		max?: number;
		showPercentage?: boolean;
		content?: () => any;
		class?: string;
	};

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'current', description: 'Current characters', type: 'number', defaultValue: 50 },
		{ name: 'max', description: 'Maximum characters', type: 'number', defaultValue: 100 },
		{
			name: 'showPercentage',
			description: 'Show as percentage',
			type: 'boolean',
			defaultValue: false
		},
		{ name: 'class', description: 'Additional CSS classes', type: 'text', defaultValue: '' }
	];

	const props: Props = {};
</script>

<CharacterCount {...props} />



