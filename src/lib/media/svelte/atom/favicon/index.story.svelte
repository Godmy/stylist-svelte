<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import Favicon from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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
		{@const parsedSize = Number(values.size)}
		<Favicon url={values.url as string} size={Number.isNaN(parsedSize) ? 24 : parsedSize} />
	{/snippet}
</Story>



