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
	.c-code-with-copy {
		position: relative;
	}
	.c-code-with-copy__copy-btn {
		position: absolute;
		right: 0.5rem;
		top: 0.5rem;
		border: none;
		border-radius: 0.375rem;
		background-color: var(--color-background-secondary);
		padding: 0.375rem;
		cursor: pointer;
		opacity: 0;
		transition: opacity var(--duration-150, 150ms) var(--easing-smooth, ease-in-out),
			background-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.c-code-with-copy:hover .c-code-with-copy__copy-btn {
		opacity: 1;
	}
	.c-code-with-copy__copy-btn:hover {
		background-color: var(--color-neutral-200, var(--color-background-tertiary));
	}
	:global(.c-code-with-copy__icon) {
		width: 1rem;
		height: 1rem;
	}
	:global(.c-code-with-copy__icon--copied) {
		color: var(--color-success-600, #16a34a);
	}
</style>
