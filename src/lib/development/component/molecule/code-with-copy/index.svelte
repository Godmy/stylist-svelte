<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { CopyCode } from '$stylist/development/type/struct/copy-code';
	import { createEventDispatcher } from 'svelte';
	import createCodeWithCopyState from '$stylist/development/function/state/code-with-copy/index.svelte';

	let props: CopyCode = $props();
	const dispatch = createEventDispatcher();
	const state = createCodeWithCopyState(props, dispatch);
</script>

<div {...props} class={state.containerClass}>
	<div class={state.codeContentClass}>
		{#if props.children}
			{#if props.children}{@render props.children()}{/if}
		{/if}
	</div>
	<button
		class={state.copyButtonClass}
		aria-label="Copy code"
		onclick={state.handleCopyToClipboard}
	>
		{#if state.copied}
			<BaseIcon name="check" class={state.iconClass(true)} />
		{:else}
			<BaseIcon name="copy" class={state.iconClass(false)} />
		{/if}
	</button>
</div>

<style>
</style>
