<script lang="ts">
	import BaseIcon from '$stylist/media/svelte/atom/icon/index.svelte';
	const Loader2 = 'loader-2';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonElementProps } from '$stylist/control/interface/component/button/other';
	import { createButtonFactoryInput } from '$stylist/interaction/factory/button';
	import { createButtonState } from '$stylist/control/function/state/button';

	/**
	 * Button component - A flexible button component with various styles and states
	 *
	 * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
	 * @param size - Size of the button ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in a loading state
	 * @param block - Whether the button should span the full width of its container
	 * @param content - Snippet content for the button (if not using default text content)
	 * @returns An accessible, styled button element
	 */

	let props: ButtonElementProps & HTMLButtonAttributes = $props();
	const factoryInput = $derived(createButtonFactoryInput(props));
	const state = $derived.by(() => createButtonState(factoryInput));
</script>

<button
	{...factoryInput.html.attrs}
	type={factoryInput.html.type ?? 'button'}
	class={state.classes}
	{...state.attrs}
>
	{#if state.loading}
		<BaseIcon name={Loader2} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{factoryInput.contract.loadingLabel ?? 'Loading...'}</span>
	{/if}

	{#if factoryInput.slots.children}
		{@render factoryInput.slots.children?.()}
	{:else if state.loading}
		{factoryInput.contract.loadingLabel ?? 'Loading...'}
	{/if}
</button>
