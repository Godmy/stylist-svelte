<script lang="ts">
	import type { ICharacterCountProps } from '$stylist/input/interface/component/input/other';
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
