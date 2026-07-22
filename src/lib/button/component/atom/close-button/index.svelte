<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { PresetCloseButton } from '$stylist/button/const/preset/close-button';
	import type { RecipeCloseButton } from '$stylist/button/interface/recipe/close-button';
	import { createCloseButtonState } from '$stylist/button/function/state/close-button/index.svelte';

	let props: RecipeCloseButton = $props();
	const state = createCloseButtonState(props);

	let restButtonProps = $derived.by(() => {
		const {
			variant,
			size,
			disabled,
			loading,
			block,
			loadingLabel,
			children,
			class: classProp,
			...restProps
		} = props;
		return restProps;
	});
</script>

<button
	{...restButtonProps}
	type={props.type ?? 'button'}
	class="c-close-button"
	data-size={state.size}
	data-variant={state.variant || undefined}
	data-disabled={state.disabled || undefined}
	data-loading={state.loading || undefined}
	aria-busy={state.loading ? true : undefined}
	aria-live={state.loading ? 'polite' : undefined}
	aria-label={state.ariaLabel || undefined}
>
	{#if state.loading}
		<Icon
			name={PresetCloseButton.Loader2}
			class="c-close-button__loader"
			style="width: 1rem; height: 1rem;"
			aria-hidden="true"
		/>
		<span class="c-close-button__sr-only">{props.loadingLabel ?? 'Closing...'}</span>
	{:else}
		<Icon name={PresetCloseButton.X} style="width: 1rem; height: 1rem;" />
	{/if}
</button>

<style>
	.c-close-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		border: none;
		background: transparent;
		color: var(--color-text-secondary);
		cursor: pointer;
		transition:
			background-color 150ms ease,
			color 150ms ease;
		outline: none;
	}

	.c-close-button:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-close-button:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
	}

	.c-close-button[data-variant='ghost'] {
		background: transparent;
		color: var(--color-text-secondary);
	}

	.c-close-button[data-variant='ghost']:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
	}

	.c-close-button[data-variant='default'] {
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.c-close-button[data-variant='default']:hover:not([data-disabled]) {
		background: var(--color-background-secondary);
	}

	.c-close-button[data-size='xs'] {
		width: 1.25rem;
		height: 1.25rem;
	}

	.c-close-button[data-size='sm'] {
		width: 1.5rem;
		height: 1.5rem;
	}

	.c-close-button[data-size='md'] {
		width: 1.75rem;
		height: 1.75rem;
	}

	.c-close-button[data-size='lg'] {
		width: 2rem;
		height: 2rem;
	}

	.c-close-button[data-size='xl'] {
		width: 2.25rem;
		height: 2.25rem;
	}

	.c-close-button[data-size='2xl'] {
		width: 2.5rem;
		height: 2.5rem;
	}

	.c-close-button[data-disabled] {
		cursor: not-allowed;
		opacity: var(--opacity-50, 0.5);
		pointer-events: none;
	}

	.c-close-button__loader {
		animation: c-close-button-spin 1s linear infinite;
	}

	@keyframes c-close-button-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.c-close-button__sr-only {
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
