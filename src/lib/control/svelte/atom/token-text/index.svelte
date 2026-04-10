<script lang="ts">
	import { createTokenTextState } from '$stylist/control/function/state/token-text';
	import TokenControlBase from '../token-control-base/index.svelte';
	import type { TokenTextControlDefinition } from '$stylist/control/type/struct/text-control-definition';

	type TokenTextControlProps = {
		definition: TokenTextControlDefinition;
		value?: string;
		placeholder?: string;
		onChange?: (value: string) => void;
	};

	let props: TokenTextControlProps = $props();
	const controlState = createTokenTextState(props);

	let internalValue: string = $state(controlState.value);

	$effect(() => {
		if (controlState.value !== internalValue) {
			internalValue = controlState.value;
		}
	});

	function handleInput(event: Event) {
		internalValue = (event.target as HTMLInputElement).value;
		controlState.onChange?.(internalValue);
	}
</script>

<TokenControlBase definition={controlState.definition} layout="inline">
	<input class="token-text-control" type="text" value={internalValue} placeholder={controlState.placeholder} oninput={handleInput} />
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



