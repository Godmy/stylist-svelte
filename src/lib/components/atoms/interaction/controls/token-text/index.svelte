<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenSelectControlDefinition } from '../token-controls/types';

	type TokenTextControlProps = {
		definition: TokenSelectControlDefinition;
		value?: string;
		placeholder?: string;
		onChange?: (value: string) => void;
	};

	let {
		definition,
		value = '',
		placeholder = 'Enter value',
		onChange
	}: TokenTextControlProps = $props();

	let internalValue = $state<string>(value);

	$effect(() => {
		if (value !== internalValue) {
			internalValue = value;
		}
	});

	function handleInput(event: Event) {
		internalValue = (event.target as HTMLInputElement).value;
		onChange?.(internalValue);
	}
</script>

<TokenControlBase {definition} layout="inline">
	<input class="token-text-control" type="text" value={internalValue} placeholder={placeholder} oninput={handleInput} />
</TokenControlBase>

<style>
	.token-text-control {
		border: 1px solid var(--line);
		border-radius: 0.45rem;
		background: color-mix(in srgb, var(--surface) 90%, var(--bg) 10%);
		color: var(--text);
		padding: 0.35rem 0.45rem;
		font-size: 0.72rem;
		min-width: 220px;
	}
</style>
