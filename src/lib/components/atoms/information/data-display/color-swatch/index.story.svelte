<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import ColorSwatch from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'color',
			type: 'text',
			defaultValue: '#0ea5e9'
		},
		{
			name: 'size',
			type: 'text', // Using text type since we need to handle numeric values as strings in the control system
			defaultValue: '32'
		}
	];
</script>

<Story
	{controls}
	component={ColorSwatch}
	title="ColorSwatch Component"
	description="A component to display a color swatch with customizable size"
	tags={['information', 'data-display', 'color']}
>
	{#snippet children(values: any)}
		<ColorSwatch
			color={values.color as string}
			size={parseInt(values.size as string)}
		/>
	{/snippet}
</Story>
