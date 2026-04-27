<script lang="ts">
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import CountryFlag from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
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



