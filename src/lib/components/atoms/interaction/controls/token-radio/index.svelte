<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRadioControlDefinition, TokenValue } from '../token-controls/types';

	type TokenRadioControlProps = {
		definition: TokenRadioControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};

	let { definition, value = undefined, onChange }: TokenRadioControlProps = $props();

	let internalValue = $state<TokenValue>(value ?? definition.defaultValue ?? definition.options[0]?.value ?? '');

	$effect(() => {
		if (value !== undefined && value !== internalValue) {
			internalValue = value;
		}
	});

	function selectOption(next: TokenValue) {
		internalValue = next;
		onChange?.(next);
	}
</script>

<TokenControlBase {definition} layout="inline">
	<div class="token-radio-control">
		{#each definition.options as option}
			<button
				type="button"
				class={`token-radio-control__chip ${internalValue === option.value ? 'token-radio-control__chip--active' : ''}`.trim()}
				onclick={() => selectOption(option.value)}
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
		gap: 0.35rem;
	}

	.token-radio-control__chip {
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--text);
		padding: 0.2rem 0.5rem;
		border-radius: 999px;
		font-size: 0.68rem;
		cursor: pointer;
	}

	.token-radio-control__chip--active {
		border-color: color-mix(in srgb, var(--accent, #3b82f6) 70%, var(--line, #d9e2ef) 30%);
		background: color-mix(in srgb, var(--accent, #3b82f6) 18%, var(--surface, #ffffff) 82%);
		box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--accent, #3b82f6) 55%, transparent 45%);
	}
</style>
