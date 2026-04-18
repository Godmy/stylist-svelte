<script lang="ts">
	import type { SlotCharacterCount as ICharacterCountProps } from '$stylist/input/interface/slot/character-count';
	import { createCharactersCountState } from '$stylist/input/function/state/characters-count';

	let props: ICharacterCountProps = $props();
	const state = createCharactersCountState(props);
</script>

<div class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{:else}
		{state.message}
	{/if}
</div>
