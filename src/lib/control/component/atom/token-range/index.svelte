<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRangeControlProps } from '$stylist/control/type/struct/token-range-control-props';
	import { createTokenRangeState } from '$stylist/control/function/state/token-range';

	let props: TokenRangeControlProps = $props();
	const state = createTokenRangeState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<div class="token-range-control">
		<input
			type="range"
			min={state.definition.min}
			max={state.definition.max}
			step={state.definition.step ?? 1}
			value={state.internalValue}
			oninput={state.handleInput}
		/>
		<span class="token-range-control__value">{state.internalValue}</span>
	</div>
</TokenControlBase>

<style>
	.token-range-control {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: var(--spacing-2);
		align-items: center;
		min-width: 220px;
	}

	.token-range-control__value {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		color: var(--text);
		min-width: var(--spacing-8);
		text-align: right;
	}
</style>



