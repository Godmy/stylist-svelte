<script lang="ts">
	import TokenControlBase from '$stylist/token/component/atom/token-control-base/index.svelte';
	import type { TokenSelectControlProps } from '$stylist/token/type/struct/token-select-control-props';
	import createTokenSelectState from '$stylist/token/function/state/token-select/index.svelte';

	let props: TokenSelectControlProps = $props();
	const state = createTokenSelectState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<select class="token-select__input" value={state.internalIndex} onchange={state.handleChange}>
		{#each state.definition.options as option, index}
			<option value={index}>{option.label}</option>
		{/each}
	</select>
</TokenControlBase>

<style>
	.token-select__input {
		min-width: 12rem;
		min-height: 2.5rem;
		padding: 0.45rem 0.75rem;
		font-size: 0.875rem;
		border: 1px solid var(--md-sys-color-outline, #79747e);
		border-radius: 0.75rem;
		background: var(--md-sys-color-surface-container-low, #f7f2fa);
		color: var(--md-sys-color-on-surface, #1d1b20);
		cursor: pointer;
	}

	.token-select__input:hover {
		background: color-mix(
			in srgb,
			var(--md-sys-color-primary, #6750a4) 6%,
			var(--md-sys-color-surface-container-low, #f7f2fa) 94%
		);
	}

	.token-select__input:focus {
		outline: 2px solid var(--md-sys-color-primary, #6750a4);
		outline-offset: 2px;
	}

	.token-select__input[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}
</style>
