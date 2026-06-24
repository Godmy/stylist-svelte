<script lang="ts">
	import { createSpinnerState } from '$stylist/notification/function/state/spinner/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createSpinnerState(props);
	const Loader2 = 'loader-2';
</script>

<div class={state.containerClasses} {...props} role="status" aria-live="polite">
	{#if state.variant === 'svg'}
		<svg
			class={`c-spinner__svg ${state.sizeClasses} ${state.colorClasses} ${props.spinnerClass ?? ''}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<circle
				class="c-spinner__svg-track"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="c-spinner__svg-fill"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	{:else if state.variant === 'css'}
		<span
			class={`c-spinner__css ${state.sizeClasses} ${props.spinnerClass ?? ''}`}
			aria-hidden="true"
		></span>
	{:else}
		<span
			class={`c-spinner__icon-wrap ${state.sizeClasses} ${state.iconColorClasses} ${props.spinnerClass ?? ''}`}
		>
			<Icon name={Loader2} aria-hidden="true" />
		</span>
	{/if}

	{#if state.showLabel}
		<span class="c-spinner__label">{state.label}</span>
	{/if}

	<span class="c-spinner__sr">{state.label}</span>
</div>

<style>
	.c-spinner {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	/* SVG variant */
	.c-spinner__svg {
		animation: spinner-spin 1s linear infinite;
	}

	.c-spinner__svg-track {
		opacity: 0.25;
	}

	.c-spinner__svg-fill {
		opacity: 0.75;
	}

	/* CSS variant */
	.c-spinner__css {
		display: inline-block;
		border-radius: 50%;
		border: 3px solid currentColor;
		border-color: currentColor transparent currentColor transparent;
		animation: spinner-spin 1s linear infinite;
	}

	/* Icon variant */
	.c-spinner__icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		animation: spinner-spin 1s linear infinite;
	}

	/* Sizes */
	.spinner-size-xs {
		width: 1rem;
		height: 1rem;
	}
	.spinner-size-sm {
		width: 1.25rem;
		height: 1.25rem;
	}
	.spinner-size-md {
		width: 2rem;
		height: 2rem;
	}
	.spinner-size-lg {
		width: 3rem;
		height: 3rem;
	}
	.spinner-size-xl {
		width: 4rem;
		height: 4rem;
	}

	/* Colors */
	.spinner-color-blue {
		color: var(--color-primary-500);
	}
	.spinner-color-gray {
		color: var(--color-text-secondary);
	}
	.spinner-color-green {
		color: var(--color-success-500);
	}
	.spinner-color-red {
		color: var(--color-danger-500);
	}
	.spinner-color-yellow {
		color: #eab308;
	}
	.spinner-color-white {
		color: var(--color-text-inverse);
	}
	.spinner-color-primary {
		color: var(--color-primary-500);
	}
	.spinner-color-secondary {
		color: var(--color-secondary-500);
	}

	.c-spinner__label {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-spinner__sr {
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

	@keyframes spinner-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
