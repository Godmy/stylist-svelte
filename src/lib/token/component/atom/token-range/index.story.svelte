<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import TokenRange from './index.svelte';
	import type { TokenRangeControlDefinition } from '$stylist/token/type/struct/range-control-definition';

	const definition: TokenRangeControlDefinition = {
		id: 'token-range-font-weight',
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

	const controls: InterfaceControllerSettings[] = [
		{ name: 'value', type: 'number', defaultValue: 400, min: 100, max: 900 }
	];
</script>

<Story
	{controls}
	title="Token Range"
	category="Atoms/Interaction/Controls"
	description="Range control for choosing a numeric token value."
	tags={['token', 'range', 'slider']}
>
	{#snippet children(values: any)}
		<div class="token-story-panel">
			<TokenRange
				{definition}
				value={Number(values.value) || 400}
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
