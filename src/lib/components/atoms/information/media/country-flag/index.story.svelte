<script lang="ts">
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
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
		<CountryFlag
			countryCode={values.countryCode as string}
			size={parseInt(values.size as string) || 24}
		/>
	{/snippet}
</Story>
