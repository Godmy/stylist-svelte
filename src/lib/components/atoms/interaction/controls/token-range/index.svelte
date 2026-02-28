<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenRangeControlDefinition } from '../token-controls/types';

	type TokenRangeControlProps = {
		definition: TokenRangeControlDefinition;
		value?: number;
		onChange?: (value: number) => void;
	};

	let { definition, value = undefined, onChange }: TokenRangeControlProps = $props();

	const initialValue =
		typeof value === 'number'
			? value
			: typeof definition.defaultValue === 'number'
				? definition.defaultValue
				: definition.min;

	let internalValue = $state<number>(initialValue);

	$effect(() => {
		if (typeof value === 'number' && value !== internalValue) {
			internalValue = value;
		}
	});

	function handleInput(event: Event) {
		const next = Number((event.target as HTMLInputElement).value);
		internalValue = Number.isNaN(next) ? definition.min : next;
		onChange?.(internalValue);
	}
</script>

<TokenControlBase {definition} layout="inline">
	<div class="token-range-control">
		<input
			type="range"
			min={definition.min}
			max={definition.max}
			step={definition.step ?? 1}
			value={internalValue}
			oninput={handleInput}
		/>
		<span class="token-range-control__value">{internalValue}</span>
	</div>
</TokenControlBase>

<style>
	.token-range-control {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 0.5rem;
		align-items: center;
		min-width: 220px;
	}

	.token-range-control__value {
		font-size: 0.72rem;
		font-weight: 600;
		color: var(--text);
		min-width: 2rem;
		text-align: right;
	}
</style>
