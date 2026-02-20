<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Favicon from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'url',
			type: 'text',
			defaultValue: 'https://example.com'
		},
		{
			name: 'size',
			type: 'text',
			defaultValue: '24'
		}
	];
</script>

<Story
	{controls}
	component={Favicon}
	title="Favicon Component"
	description="A component to display favicons with customizable size"
	tags={['information', 'media', 'favicon']}
>
	{#snippet children(values: any)}
		<Favicon
			url={values.url as string}
			size={parseInt(values.size as string) || 24}
		/>
	{/snippet}
</Story>
