<script lang="ts">
	import BaseIcon from '$stylist/media/svelte/atom/icon/index.svelte';
	import { CONTROL_BUTTON_ICON } from '$stylist/control/const/map/button';
	import type { ButtonComposedRecipe } from '$stylist/control/interface/recipe/button-composed';
	import { createButtonComposedState } from '$stylist/control/function/state/button-composed';

	let props: ButtonComposedRecipe = $props();
	const state = createButtonComposedState(props);
</script>

<button
	{...state.restProps}
	type="button"
	class={state.classes}
	style={state.inlineStyle}
	disabled={state.isDisabled}
	aria-busy={state.isLoading}
	aria-label={props.ariaLabel ?? state.label}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
	onfocus={state.handleFocus}
	onblur={state.handleBlur}
>
	{#if state.isLoading}
		<BaseIcon name={CONTROL_BUTTON_ICON.LOADER} class="h-4 w-4 animate-spin" aria-hidden="true" />
		<span class="sr-only">{state.loadingLabel}</span>
	{/if}

	{#if props.iconLeft}
		<BaseIcon name={props.iconLeft} class="h-4 w-4" aria-hidden="true" />
	{:else if props.icon}
		<BaseIcon name={props.icon} class="h-4 w-4" aria-hidden="true" />
	{/if}

	{#if props.children}
		{@render props.children()}
	{:else if state.label}
		<span>{state.label}</span>
	{/if}

	{#if props.iconRight}
		<BaseIcon name={props.iconRight} class="h-4 w-4" aria-hidden="true" />
	{/if}

	{#if state.badgeText}
		<span class="ml-1 rounded-full bg-current px-1.5 py-0.5 text-[0.65rem] leading-none text-white">
			{state.badgeText}
		</span>
	{:else if state.showDot}
		<span class="ml-1 h-2 w-2 rounded-full bg-current" aria-hidden="true"></span>
	{/if}
</button>
