<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import TokenSelect from './index.svelte';
	import type { TokenSelectControlDefinition } from '$stylist/control/type/struct/token-control-definition';

	const definition: TokenSelectControlDefinition = {
		id: 'token-select-font-family',
		functionalTaxonomy: 'information',
		tokenFile: 'information/font-family',
		tokenName: 'FONT_FAMILY',
		controlKind: 'select',
		description: 'РЁСЂРёС„С‚ С‚РµРєСЃС‚Р°',
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
		{ name: 'value', type: 'select', defaultValue: 'inter', options: ['inter', 'roboto', 'open-sans', 'lato', 'montserrat'] }
	];
</script>

<Story
	{controls}
	component={TokenSelect}
	title="Token Select"
	category="Atoms/Interaction/Controls"
	description="Select-РєРѕРЅС‚СЂРѕР» РґР»СЏ РІС‹Р±РѕСЂР° Р·РЅР°С‡РµРЅРёСЏ С‚РѕРєРµРЅР° РёР· РІС‹РїР°РґР°СЋС‰РµРіРѕ СЃРїРёСЃРєР°"
	tags={['token', 'select', 'dropdown']}
>
	{#snippet children(values: any)}
		<TokenSelect
			definition={definition}
			value={values.value as string}
			onChange={(v) => console.log('Selected:', v)}
		/>
	{/snippet}
</Story>

