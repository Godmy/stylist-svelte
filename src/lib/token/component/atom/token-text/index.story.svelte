<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenText from './index.svelte';
	import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

	const definition: TokenTextControlDefinition = {
		id: 'token-text-line-height',
		functionalTaxonomy: 'information',
		tokenFile: 'information/line-height',
		tokenName: 'LINE_HEIGHT',
		controlKind: 'text',
		description: 'Line height',
		defaultValue: '1.5',
		placeholder: 'For example: 1.5'
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'text', defaultValue: '1.5' }
	];
</script>

<Story
	{controls}
	title="Token Text"
	category="Atoms/Interaction/Controls"
	description="Text control for entering a token value."
	tags={['token', 'text', 'input']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenText
				{definition}
				value={values.value as string}
				onChange={(v) => console.log('Value:', v)}
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
