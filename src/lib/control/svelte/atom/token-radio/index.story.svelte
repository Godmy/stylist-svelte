<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import TokenRadio from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/control/type/struct/radio-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-radio-alignment',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/alignment',
		tokenName: 'TOKEN_ALIGNMENT',
		controlKind: 'radio',
		description: 'Р’С‹СЂР°РІРЅРёРІР°РЅРёРµ СЌР»РµРјРµРЅС‚РѕРІ',
		defaultValue: 'center',
		options: [
			{ label: 'Start', value: 'start' },
			{ label: 'Center', value: 'center' },
			{ label: 'End', value: 'end' },
			{ label: 'Stretch', value: 'stretch' }
		]
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'select', defaultValue: 'center', options: ['start', 'center', 'end', 'stretch'] }
	];
</script>

<Story
	{controls}
	component={TokenRadio}
	title="Token Radio"
	category="Atoms/Interaction/Controls"
	description="Radio-РєРѕРЅС‚СЂРѕР» РґР»СЏ РІС‹Р±РѕСЂР° РѕРґРЅРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ РёР· РЅР°Р±РѕСЂР° С‚РѕРєРµРЅРѕРІ"
	tags={['token', 'radio', 'select']}
>
	{#snippet children(values: any)}
		<TokenRadio
			definition={definition}
			value={values.value as string}
			onChange={(v) => console.log('Selected:', v)}
		/>
	{/snippet}
</Story>

