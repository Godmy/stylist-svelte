<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenSelectControlDefinition } from '$stylist/control/type/struct/select-control-definition';
	import type { TokenValue } from '$stylist/control/type/struct/token-value';

	type TokenSelectControlProps = {
		definition: TokenSelectControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};

	let { definition, value = undefined, onChange }: TokenSelectControlProps = $props();

	const valueToIndex = (candidate: TokenValue) =>
		Math.max(
			0,
			definition.options.findIndex((option) => option.value === candidate)
		);

	let internalIndex = $state<number>(
		valueToIndex(value ?? definition.defaultValue ?? definition.options[0]?.value ?? '')
	);

	$effect(() => {
		if (value !== undefined) {
			const nextIndex = valueToIndex(value);
			if (nextIndex !== internalIndex) {
				internalIndex = nextIndex;
			}
		}
	});

	function handleChange(event: Event) {
		const nextIndex = Number((event.target as HTMLSelectElement).value);
		internalIndex = Number.isNaN(nextIndex) ? 0 : nextIndex;
		onChange?.(definition.options[internalIndex]?.value ?? definition.options[0]?.value ?? '');
	}
</script>

<TokenControlBase {definition} layout="inline">
	<select class="token-select-control" value={internalIndex} onchange={handleChange}>
		{#each definition.options as option, index}
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



