<script lang="ts">
	import type { SlotCharacterCount as ICharacterCountProps } from '$stylist/input/interface/slot/character-count';
	import createCharactersCountState from '$stylist/input/function/state/characters-count/index.svelte';

	let props: ICharacterCountProps = $props();
	const state = createCharactersCountState(props);
</script>

<div class={state.classes}>
	{#if props.children}
		{@render props.children()}
	{:else}
		{state.message}
	{/if}
</div>

<style>
</style>
