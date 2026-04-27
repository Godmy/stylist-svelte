<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRadioControlProps } from '$stylist/control/type/struct/token-radio-control-props';
	import { createTokenRadioState } from '$stylist/control/function/state/token-radio';

	let props: TokenRadioControlProps = $props();
	const state = createTokenRadioState(props);
</script>

<TokenControlBase definition={state.definition} layout="inline">
	<div class="token-radio-control">
		{#each state.definition.options as option}
			<button
				type="button"
				class={`token-radio-control__chip ${state.internalValue === option.value ? 'token-radio-control__chip--active' : ''}`.trim()}
				onclick={() => state.selectOption(option.value)}
			>
				{option.label}
			</button>
		{/each}
	</div>
</TokenControlBase>

<style>
	.token-radio-control {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-1);
	}

	.token-radio-control__chip {
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--text);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--border-radius-full);
		font-size: var(--font-size-3);
		cursor: pointer;
	}

	.token-radio-control__chip--active {
		border-color: color-mix(in srgb, var(--accent, var(--color-primary-500)) 70%, var(--line, var(--color-border-primary)) 30%);
		background: color-mix(in srgb, var(--accent, var(--color-primary-500)) 18%, var(--surface, var(--color-background-primary)) 82%);
		box-shadow: var(--shadow-custom43);
	}
</style>



