<script lang="ts">
	import { createTokenTextState } from '$stylist/control/function/state/token-text';
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenTextControlProps } from '$stylist/control/type/struct/token-text-control-props';

	let props: TokenTextControlProps = $props();
	const state = createTokenTextState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<input class="token-text-control" type="text" value={state.value} placeholder={state.placeholder} oninput={state.handleInput} />
</TokenControlBase>

<style>
	.token-text-control {
		border: 1px solid var(--line);
		border-radius: var(--border-radius-lg);
		background: color-mix(in srgb, var(--surface) 90%, var(--bg) 10%);
		color: var(--text);
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
		min-width: 220px;
	}
</style>



