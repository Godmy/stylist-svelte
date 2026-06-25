<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenSelect from './index.svelte';
	import type { TokenSelectControlDefinition } from '$stylist/token/type/struct/select-control-definition';

	const definition: TokenSelectControlDefinition = {
		id: 'token-select-font-family',
		functionalTaxonomy: 'information',
		tokenFile: 'information/font-family',
		tokenName: 'FONT_FAMILY',
		controlKind: 'select',
		description: 'Text font family',
		defaultValue: 'inter',
		options: [
			{ label: 'Inter', value: 'inter' },
			{ label: 'Roboto', value: 'roboto' },
			{ label: 'Open Sans', value: 'open-sans' },
			{ label: 'Lato', value: 'lato' },
			{ label: 'Montserrat', value: 'montserrat' }
		]
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'select',
			defaultValue: 'inter',
			options: ['inter', 'roboto', 'open-sans', 'lato', 'montserrat']
		}
	];
</script>

<Story
	{controls}
	title="Token Select"
	category="Atoms/Interaction/Controls"
	description="Select control for choosing a token value from a dropdown list."
	tags={['token', 'select', 'dropdown']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenSelect
				{definition}
				value={values.value as string}
				onChange={(v) => console.log('Selected:', v)}
			/>
		</div>
	{/snippet}
</Story>

<style>
	.token-story-panel {
		display: grid;
		gap: 1rem;
		max-width: 42rem;
		border: 1px solid #d7dee8;
		border-radius: 0.5rem;
		background: #f8fafc;
		padding: 1.25rem;
	}
</style>
