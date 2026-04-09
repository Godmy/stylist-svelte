<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import TokenControlComposer from './index.svelte';
	import type {
		TokenRadioControlDefinition
	} from '$stylist/control/type/struct/radio-control-definition';
	import type {
		TokenRangeControlDefinition
	} from '$stylist/control/type/struct/range-control-definition';
	import type {
		TokenSelectControlDefinition
	} from '$stylist/control/type/struct/select-control-definition';
	import type {
		TokenTextControlDefinition
	} from '$stylist/control/type/struct/text-control-definition';

	const radioDefinition: TokenRadioControlDefinition = {
		id: 'token-composer-alignment',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/alignment',
		tokenName: 'TOKEN_ALIGNMENT',
		controlKind: 'radio',
		description: 'Р’С‹СЂР°РІРЅРёРІР°РЅРёРµ СЌР»РµРјРµРЅС‚РѕРІ',
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
		description: 'РЁСЂРёС„С‚ С‚РµРєСЃС‚Р°',
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
		description: 'РќР°СЃС‹С‰РµРЅРЅРѕСЃС‚СЊ С€СЂРёС„С‚Р°',
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
		description: 'Р’С‹СЃРѕС‚Р° СЃС‚СЂРѕРєРё',
		defaultValue: '1.5',
		placeholder: 'РќР°РїСЂРёРјРµСЂ: 1.5'
	};
</script>

<Story
	component={TokenControlComposer}
	title="Token Control Composer"
	category="Atoms/Interaction/Controls"
	description="РљРѕРјРїРѕРЅРѕРІС‰РёРє РєРѕРЅС‚СЂРѕР»РѕРІ С‚РѕРєРµРЅРѕРІ вЂ” Р°РІС‚РѕРјР°С‚РёС‡РµСЃРєРё РІС‹Р±РёСЂР°РµС‚ С‚РёРї РєРѕРЅС‚СЂРѕР»Р°"
	tags={['token', 'control', 'composer']}
>
	{#snippet children()}
		<div class="flex flex-col gap-4">
			<TokenControlComposer definition={radioDefinition} onChange={(v) => console.log('Radio:', v)} />
			<TokenControlComposer definition={selectDefinition} onChange={(v) => console.log('Select:', v)} />
			<TokenControlComposer definition={rangeDefinition} onChange={(v) => console.log('Range:', v)} />
			<TokenControlComposer definition={textDefinition} onChange={(v) => console.log('Text:', v)} />
		</div>
	{/snippet}
</Story>
