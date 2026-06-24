<script lang="ts">
	import { createButtonState } from '$stylist/control/function/state/button/index.svelte';
	import type { RecipeButton } from '$stylist/control/interface/recipe/button';
	import { CONTROL_BUTTON_ICON } from '$stylist/control/const/map/button';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: RecipeButton = $props();
	const state = createButtonState(props);
</script>

<button
	{...state.restAttrs}
	{...state.attrs}
	type={props.type ?? 'button'}
	class={['c-button-m', props.class, state.classes].filter(Boolean).join(' ')}
	data-variant={state.variant}
	data-size={state.size}
	data-disabled={state.isDisabled || undefined}
	data-loading={state.loading || undefined}
	data-block={state.block || undefined}
>
	{#if state.loading}
		<BaseIcon
			name={CONTROL_BUTTON_ICON.LOADER}
			class="c-button-m__loader"
			style="width:1rem;height:1rem;"
			aria-hidden="true"
		/>
		<span class="c-button-m__sr-only">{state.loadingLabel}</span>
	{/if}

	{#if props.children}
		<span class="c-button-m__text">{@render props.children()}</span>
	{:else if state.loading}
		<span class="c-button-m__text">{state.loadingLabel}</span>
	{:else if props.label}
		<span class="c-button-m__text">{props.label}</span>
	{/if}
</button>

<style>
	.c-button-m {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-weight: 500;
		white-space: nowrap;
		cursor: pointer;
		text-decoration: none;
		transition:
			background-color 150ms ease,
			color 150ms ease,
			border-color 150ms ease,
			opacity 150ms ease;
		outline: none;
		position: relative;
	}

	.c-button-m:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	.c-button-m[data-variant='default'] {
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		border: 1px solid var(--color-border-primary);
	}

	.c-button-m[data-variant='default']:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
	}

	.c-button-m[data-variant='primary'] {
		background: var(--color-primary-600);
		color: var(--color-text-inverse);
		border: 1px solid transparent;
	}

	.c-button-m[data-variant='primary']:hover:not([data-disabled]) {
		background: var(--color-primary-700);
	}

	.c-button-m[data-variant='secondary'] {
		background: var(--color-secondary-600);
		color: var(--color-text-inverse);
		border: 1px solid var(--color-secondary-700);
	}

	.c-button-m[data-variant='secondary']:hover:not([data-disabled]) {
		background: var(--color-secondary-500);
	}

	.c-button-m[data-variant='success'] {
		background: var(--color-success-600);
		color: var(--color-text-inverse);
		border: 1px solid transparent;
	}

	.c-button-m[data-variant='danger'] {
		background: var(--color-danger-600);
		color: var(--color-text-inverse);
		border: 1px solid transparent;
	}

	.c-button-m[data-variant='outline'] {
		background: transparent;
		color: var(--color-text-primary);
		border: 1px solid var(--color-neutral-400);
	}

	.c-button-m[data-variant='outline']:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
	}

	.c-button-m[data-variant='ghost'] {
		background: transparent;
		color: var(--color-text-primary);
		border: 1px solid transparent;
	}

	.c-button-m[data-variant='ghost']:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
	}

	.c-button-m[data-variant='subtle'] {
		background: var(--color-neutral-100);
		color: var(--color-text-primary);
		border: 1px solid transparent;
	}

	.c-button-m[data-variant='subtle']:hover:not([data-disabled]) {
		background: var(--color-neutral-200);
	}

	.c-button-m[data-size='xs'] {
		height: 1.5rem;
		padding: 0 0.5rem;
		font-size: 0.75rem;
		border-radius: 0.25rem;
	}

	.c-button-m[data-size='sm'] {
		height: 2rem;
		padding: 0 0.75rem;
		font-size: 0.875rem;
		border-radius: 0.375rem;
	}

	.c-button-m[data-size='md'] {
		height: 2.25rem;
		padding: 0 1rem;
		font-size: 0.875rem;
		border-radius: 0.375rem;
	}

	.c-button-m[data-size='lg'] {
		height: 2.75rem;
		padding: 0 1.5rem;
		font-size: 1rem;
		border-radius: 0.5rem;
	}

	.c-button-m[data-size='xl'] {
		height: 3rem;
		padding: 0 1.75rem;
		font-size: 1.125rem;
		border-radius: 0.75rem;
	}

	.c-button-m[data-size='2xl'] {
		height: 3.5rem;
		padding: 0 2rem;
		font-size: 1.25rem;
		border-radius: 0.75rem;
	}

	.c-button-m[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-button-m[data-loading] .c-button-m__text {
		color: transparent;
	}

	.c-button-m[data-block] {
		width: 100%;
	}

	.c-button-m__loader {
		animation: c-button-m-spin 1s linear infinite;
		position: absolute;
	}

	@keyframes c-button-m-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.c-button-m__sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
