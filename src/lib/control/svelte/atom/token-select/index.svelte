<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenSelectControlProps } from '$stylist/control/type/struct/token-select-control-props';
	import { createTokenSelectState } from '$stylist/control/function/state/token-select';

	let props: TokenSelectControlProps = $props();
	const state = createTokenSelectState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<select class="token-select-control" value={state.internalIndex} onchange={state.handleChange}>
		{#each state.definition.options as option, index}
			<option value={index}>{option.label}</option>
		{/each}
	</select>
</TokenControlBase>

<style>
	.token-select-control {
		border: 1px solid var(--line);
		border-radius: var(--border-radius-lg);
		background: color-mix(in srgb, var(--surface) 90%, var(--bg) 10%);
		color: var(--text);
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
	}
</style>



