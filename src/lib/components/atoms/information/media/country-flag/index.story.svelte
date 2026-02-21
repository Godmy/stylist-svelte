<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Story from '$stylist/design-system/playground/Story.svelte';
	import CountryFlag from './index.svelte';

	const controls: ControlConfig[] = [
		{
			name: 'countryCode',
			type: 'text',
			defaultValue: 'US'
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
	component={CountryFlag}
	title="CountryFlag Component"
	description="A component to display country flags with customizable size"
	tags={['information', 'media', 'flag', 'country']}
>
	{#snippet children(values: any)}
		{@const parsedSize = Number(values.size)}
		<CountryFlag countryCode={values.countryCode as string} size={Number.isNaN(parsedSize) ? 24 : parsedSize} />
	{/snippet}
</Story>
