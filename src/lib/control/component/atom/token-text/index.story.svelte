<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenText from './index.svelte';
	import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

	const definition: TokenTextControlDefinition = {
		id: 'token-text-line-height',
		functionalTaxonomy: 'information',
		tokenFile: 'information/line-height',
		tokenName: 'LINE_HEIGHT',
		controlKind: 'text',
		description: 'Высота строки',
		defaultValue: '1.5',
		placeholder: 'Например: 1.5'
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
	description="Text-контрол для ввода текстового значения токена"
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

