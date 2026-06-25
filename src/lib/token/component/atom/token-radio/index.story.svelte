<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenRadio from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-radio-alignment',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/alignment',
		tokenName: 'TOKEN_ALIGNMENT',
		controlKind: 'radio',
		description: 'Element alignment',
		defaultValue: 'center',
		options: [
			{ label: 'Start', value: 'start' },
			{ label: 'Center', value: 'center' },
			{ label: 'End', value: 'end' },
			{ label: 'Stretch', value: 'stretch' }
		]
	};

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'value',
			type: 'select',
			defaultValue: 'center',
			options: ['start', 'center', 'end', 'stretch']
		}
	];
</script>

<Story
	{controls}
	title="Token Radio"
	category="Atoms/Interaction/Controls"
	description="Radio control for choosing one value from a token option set."
	tags={['token', 'radio', 'select']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenRadio
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
