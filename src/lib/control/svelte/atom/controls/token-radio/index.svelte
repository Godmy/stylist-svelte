<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRadioControlDefinition, TokenValue } from '$stylist/control/type/struct/token-control-definition';

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



