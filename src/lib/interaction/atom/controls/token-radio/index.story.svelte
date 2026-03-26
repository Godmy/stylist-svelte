<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import TokenRadio from './index.svelte';
	import type { TokenRadioControlDefinition } from '$stylist/interaction/type/token-control-definition';

	const definition: TokenRadioControlDefinition = {
		id: 'token-radio-alignment',
		functionalTaxonomy: 'architecture',
		tokenFile: 'architecture/alignment',
		tokenName: 'TOKEN_ALIGNMENT',
		controlKind: 'radio',
		description: 'Выравнивание элементов',
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
	description="Radio-контрол для выбора одного значения из набора токенов"
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

