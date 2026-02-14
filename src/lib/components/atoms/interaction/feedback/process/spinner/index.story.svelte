<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Spinner from './index.svelte';

	// Define controls for the story
	const controls: ControlConfig[] = [
		{ name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
		{
			name: 'variant',
			type: 'select',
			options: ['primary', 'white', 'gray'],
			defaultValue: 'primary'
		},
		{ name: 'label', type: 'text', defaultValue: 'Loading...' },
		{ name: 'class', type: 'text', defaultValue: '' }
	];
</script>

<Story component={Spinner} {controls}>
	{#snippet children()}
		<Spinner />
	{/snippet}
</Story>



