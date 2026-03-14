<script lang="ts">
import TokenRadioControl from '../token-radio/index.svelte';
import TokenRangeControl from '../token-range/index.svelte';
import TokenSelectControl from '../token-select/index.svelte';
import TokenTextControl from '../token-text/index.svelte';
	import type { TokenControlDefinition, TokenValue } from '$stylist/design-system/runtime/token-controls';

	type TokenControlComposerProps = {
		definition: TokenControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};

	let { definition, value = undefined, onChange }: TokenControlComposerProps = $props();
</script>

{#if definition.controlKind === 'radio'}
	<TokenRadioControl definition={definition} {value} {onChange} />
{:else if definition.controlKind === 'select'}
	<TokenSelectControl definition={definition} {value} {onChange} />
{:else if definition.controlKind === 'range'}
	<TokenRangeControl
		definition={definition}
		value={typeof value === 'number' ? value : Number(definition.defaultValue ?? definition.min)}
		onChange={(next) => onChange?.(next)}
	/>
{:else}
	<TokenTextControl
		definition={definition}
		value={typeof value === 'string' ? value : String(value ?? definition.defaultValue ?? '')}
		onChange={(next) => onChange?.(next)}
	/>
{/if}




