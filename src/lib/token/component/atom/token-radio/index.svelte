<script lang="ts">
	import TokenControlBase from '$stylist/token/component/atom/token-control-base/index.svelte';
	import type { TokenRadioControlProps } from '$stylist/token/type/struct/token-radio-control-props';
	import createTokenRadioState from '$stylist/token/function/state/token-radio/index.svelte';

	let props: TokenRadioControlProps = $props();
	const state = createTokenRadioState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<div class="token-radio">
		{#each state.definition.options as option}
			<button
				type="button"
				class="token-radio__option"
				data-active={state.internalValue === option.value || undefined}
				onclick={() => state.selectOption(option.value)}
			>
				{option.label}
			</button>
		{/each}
	</div>
</TokenControlBase>

<style>
	.token-radio {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.token-radio__option {
		display: inline-flex;
		align-items: center;
		min-height: 2rem;
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--md-sys-color-outline, #79747e);
		border-radius: 999px;
		cursor: pointer;
		font-size: 0.875rem;
		font-weight: 500;
		background: var(--md-sys-color-surface-container-low, #f7f2fa);
		color: var(--md-sys-color-on-surface, #1d1b20);
		transition:
			background 120ms ease,
			border-color 120ms ease,
			color 120ms ease;
	}

	.token-radio__option:hover:not([data-disabled]) {
		background: color-mix(
			in srgb,
			var(--md-sys-color-primary, #6750a4) 8%,
			var(--md-sys-color-surface-container-low, #f7f2fa) 92%
		);
	}

	.token-radio__option:focus-visible {
		outline: 2px solid var(--md-sys-color-primary, #6750a4);
		outline-offset: 2px;
	}

	.token-radio__option[data-active] {
		border-color: var(--md-sys-color-primary, #6750a4);
		background: var(--md-sys-color-secondary-container, #e8def8);
		color: var(--md-sys-color-on-secondary-container, #1d192b);
	}

	.token-radio__option[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
	}
</style>
