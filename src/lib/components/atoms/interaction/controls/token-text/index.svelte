<script lang="ts">
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenTextControlDefinition } from '$stylist/design-system/types/interaction/token-controls';

	type TokenTextControlProps = {
		definition: TokenTextControlDefinition;
		value?: string;
		placeholder?: string;
		onChange?: (value: string) => void;
	};

	let {
		definition,
		value = '',
		placeholder = definition.placeholder ?? 'Enter value',
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
		border-radius: var(--border-radius-lg);
		background: color-mix(in srgb, var(--surface) 90%, var(--bg) 10%);
		color: var(--text);
		padding: var(--spacing-1) var(--spacing-2);
		font-size: var(--font-size-3);
		min-width: 220px;
	}
</style>



