<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import TokenRange from './index.svelte';
	import type { TokenRangeControlDefinition } from '$stylist/interaction/type/token-control-definition';

	const definition: TokenRangeControlDefinition = {
		id: 'token-range-font-weight',
		functionalTaxonomy: 'information',
		tokenFile: 'information/font-weight',
		tokenName: 'FONT_WEIGHT',
		controlKind: 'range',
		description: 'Насыщенность шрифта',
		defaultValue: 400,
		min: 100,
		max: 900,
		step: 100
	};

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'number', defaultValue: 400, min: 100, max: 900 }
	];
</script>

<Story
	{controls}
	component={TokenRange}
	title="Token Range"
	category="Atoms/Interaction/Controls"
	description="Range-контрол для выбора числового значения токена"
	tags={['token', 'range', 'slider']}
>
	{#snippet children(values: any)}
		<TokenRange
			definition={definition}
			value={Number(values.value) || 400}
			onChange={(v) => console.log('Value:', v)}
		/>
	{/snippet}
</Story>

