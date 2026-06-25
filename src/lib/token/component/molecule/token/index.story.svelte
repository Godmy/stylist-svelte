<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import TokenControlComposer from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/token/type/struct/radio-control-definition';
	import type { TokenRangeControlDefinition } from '$stylist/token/type/struct/range-control-definition';
	import type { TokenSelectControlDefinition } from '$stylist/token/type/struct/select-control-definition';
	import type { TokenTextControlDefinition } from '$stylist/token/type/struct/text-control-definition';

	const radioDefinition: TokenRadioControlDefinition = {
		id: 'token-composer-alignment',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/alignment',
		tokenName: 'TOKEN_ALIGNMENT',
		controlKind: 'radio',
		description: 'Element alignment',
		defaultValue: 'start',
		options: [
			{ label: 'Start', value: 'start' },
			{ label: 'Center', value: 'center' },
			{ label: 'End', value: 'end' }
		]
	};

	const selectDefinition: TokenSelectControlDefinition = {
		id: 'token-composer-font-family',
		functionalTaxonomy: 'information',
		tokenFile: 'information/font-family',
		tokenName: 'FONT_FAMILY',
		controlKind: 'select',
		description: 'Text font family',
		defaultValue: 'inter',
		options: [
			{ label: 'Inter', value: 'inter' },
			{ label: 'Roboto', value: 'roboto' },
			{ label: 'Open Sans', value: 'open-sans' }
		]
	};

	const rangeDefinition: TokenRangeControlDefinition = {
		id: 'token-composer-font-weight',
		functionalTaxonomy: 'information',
		tokenFile: 'information/font-weight',
		tokenName: 'FONT_WEIGHT',
		controlKind: 'range',
		description: 'Font weight',
		defaultValue: 400,
		min: 100,
		max: 900,
		step: 100
	};

	const textDefinition: TokenTextControlDefinition = {
		id: 'token-composer-line-height',
		functionalTaxonomy: 'information',
		tokenFile: 'information/line-height',
		tokenName: 'LINE_HEIGHT',
		controlKind: 'text',
		description: 'Line height',
		defaultValue: '1.5',
		placeholder: 'For example: 1.5'
	};
</script>

<Story
	title="Token Control Composer"
	category="Molecules/Token"
	description="Token control composer that selects the matching control type automatically."
	tags={['token', 'control', 'composer']}
>
	{#snippet children()}
		<div class="token-story-panel">
			<TokenControlComposer
				definition={radioDefinition}
				onChange={(v) => console.log('Radio:', v)}
			/>
			<TokenControlComposer
				definition={selectDefinition}
				onChange={(v) => console.log('Select:', v)}
			/>
			<TokenControlComposer
				definition={rangeDefinition}
				onChange={(v) => console.log('Range:', v)}
			/>
			<TokenControlComposer definition={textDefinition} onChange={(v) => console.log('Text:', v)} />
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
