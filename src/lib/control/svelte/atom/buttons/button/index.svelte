<script lang="ts">
	import BaseIcon from '$stylist/media/svelte/atom/icon/index.svelte';
	import { CONTROL_BUTTON_ICON } from '$stylist/control/const/map/button';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { SlotButtonElement as ButtonElementProps } from '$stylist/control/interface/slot/button-element';
	import { createButtonState } from '$stylist/control/function/state/button-atom';

	let props: ButtonElementProps & HTMLButtonAttributes = $props();
	const state = createButtonState(props);
</script>

<button
	{...state.factoryInput.html.attrs}
	type={state.factoryInput.html.type ?? 'button'}
	class={state.classes}
	{...state.attrs}
>
	{#if state.loading}
		<BaseIcon name={CONTROL_BUTTON_ICON.LOADER} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{state.factoryInput.contract.loadingLabel ?? 'Loading...'}</span>
	{/if}

	{#if state.factoryInput.slots.children}
		{@render state.factoryInput.slots.children?.()}
	{:else if state.loading}
		{state.factoryInput.contract.loadingLabel ?? 'Loading...'}
	{/if}
</button>
