<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { CONTROL_BUTTON_ICON } from '$stylist/button/const/map/button';
	import type { RecipeButtonComposed } from '$stylist/button/interface/recipe/button-composed';
	import createButtonComposedState from '$stylist/button/function/state/button-composed/index.svelte';

	let props: RecipeButtonComposed = $props();
	const state = createButtonComposedState(props);
</script>

<button
	{...state.restProps}
	type="button"
	class={state.classes}
	style={state.inlineStyle}
	disabled={state.isDisabled}
	data-disabled={state.isDisabled || undefined}
	data-loading={state.isLoading || undefined}
	data-block={props.block || undefined}
	aria-busy={state.isLoading}
	aria-label={props.ariaLabel ?? state.label}
	onclick={state.handleClick}
	ondblclick={state.handleDblClick}
	oncontextmenu={state.handleContextMenu}
	onfocus={state.handleFocus}
	onblur={state.handleBlur}
>
	{#if state.isLoading}
		<BaseIcon
			name={CONTROL_BUTTON_ICON.LOADER}
			style="width:1rem;height:1rem;"
			class="c-button-composed__loader"
			aria-hidden="true"
		/>
		<span class="c-button-composed__sr-only">{state.loadingLabel}</span>
	{/if}

	{#if props.iconLeft}
		<BaseIcon name={props.iconLeft} style="width:1rem;height:1rem;" aria-hidden="true" />
	{:else if props.icon}
		<BaseIcon name={props.icon} style="width:1rem;height:1rem;" aria-hidden="true" />
	{/if}

	{#if props.children}
		{@render props.children()}
	{:else if state.label}
		<span>{state.label}</span>
	{/if}

	{#if props.iconRight}
		<BaseIcon name={props.iconRight} style="width:1rem;height:1rem;" aria-hidden="true" />
	{/if}

	{#if state.badgeText}
		<span class="c-button-composed__badge">{state.badgeText}</span>
	{:else if state.showDot}
		<span class="c-button-composed__dot" aria-hidden="true"></span>
	{/if}
</button>

<style>
	.c-button-composed {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border-radius: 0.375rem;
		padding: 0.5rem 1rem;
		font-weight: 500;
		transition:
			background-color var(--duration-120, 120ms),
			color var(--duration-120, 120ms);
		cursor: pointer;
		border: 1px solid transparent;
	}

	.c-button-composed:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	.c-button-composed[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-button-composed[data-block] {
		width: 100%;
	}

	.c-button-composed__loader {
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	.c-button-composed__sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
		border: 0;
	}

	.c-button-composed__badge {
		margin-left: 0.25rem;
		border-radius: 9999px;
		background: currentColor;
		padding: 0.125rem 0.375rem;
		font-size: 0.65rem;
		line-height: 1;
		color: white;
	}

	.c-button-composed__dot {
		margin-left: 0.25rem;
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 9999px;
		background: currentColor;
	}
</style>
