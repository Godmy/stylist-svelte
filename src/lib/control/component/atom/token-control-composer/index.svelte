<script lang="ts">
import TokenRadioControl from '$stylist/control/component/atom/token-radio/index.svelte';
import TokenRangeControl from '$stylist/control/component/atom/token-range/index.svelte';
import TokenSelectControl from '$stylist/control/component/atom/token-select/index.svelte';
import TokenTextControl from '$stylist/control/component/atom/token-text/index.svelte';
	import type { TokenControlComposerProps } from '$stylist/control/type/struct/token-control-composer-props';
	import { createTokenControlComposerState } from '$stylist/control/function/state/token-control-composer';

	let props: TokenControlComposerProps = $props();
	const state = createTokenControlComposerState(props);
</script>

{#if state.controlKind === 'radio'}
	<TokenRadioControl definition={state.definition as any} value={state.value} onChange={state.onChange} />
{:else if state.controlKind === 'select'}
	<TokenSelectControl definition={state.definition as any} value={state.value} onChange={state.onChange} />
{:else if state.controlKind === 'range'}
	<TokenRangeControl
		definition={state.definition as any}
		value={state.rangeValue}
		onChange={(next) => state.onChange?.(next)}
	/>
{:else}
	<TokenTextControl
		definition={state.definition as any}
		value={state.textValue}
		onChange={(next) => state.onChange?.(next)}
	/>
{/if}




