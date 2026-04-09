<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
	import TokenText from './index.svelte';
	import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

	const definition: TokenTextControlDefinition = {
		id: 'token-text-line-height',
		functionalTaxonomy: 'information',
		tokenFile: 'information/line-height',
		tokenName: 'LINE_HEIGHT',
		controlKind: 'text',
		description: 'Р’С‹СЃРѕС‚Р° СЃС‚СЂРѕРєРё',
		defaultValue: '1.5',
		placeholder: 'РќР°РїСЂРёРјРµСЂ: 1.5'
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'text', defaultValue: '1.5' }
	];
</script>

<Story
	{controls}
	component={TokenText}
	title="Token Text"
	category="Atoms/Interaction/Controls"
	description="Text-РєРѕРЅС‚СЂРѕР» РґР»СЏ РІРІРѕРґР° С‚РµРєСЃС‚РѕРІРѕРіРѕ Р·РЅР°С‡РµРЅРёСЏ С‚РѕРєРµРЅР°"
	tags={['token', 'text', 'input']}
>
	{#snippet children(values: any)}
		<TokenText
			definition={definition}
			value={values.value as string}
			onChange={(v) => console.log('Value:', v)}
		/>
	{/snippet}
</Story>

