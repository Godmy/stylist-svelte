<script lang="ts">
	import { createSpinnerState } from '$stylist/notification/function/state/spinner';
	import { Icon } from '$stylist';

	const props = $props();
	const state = createSpinnerState(props);
	const Loader2 = 'loader-2';
</script>

<div class={state.containerClasses} {...props} role="status" aria-live="polite">
	{#if state.variant === 'svg'}
		<svg
			class={`animate-spin ${state.sizeClasses} ${state.colorClasses} ${props.spinnerClass ?? ''}`}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<circle
				class="opacity-[var(--opacity-25)]"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="opacity-[var(--opacity-75)]"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	{:else if state.variant === 'css'}
		<span
			class={`loader-container ${state.sizeClasses} ${props.spinnerClass ?? ''}`}
			aria-hidden="true"
		>
			<style>
				.loader-container {
					position: relative;
					display: inline-block;
				}
				.loader-container::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					border: 3px solid currentColor;
					border-radius: 50%;
					border-color: currentColor transparent currentColor transparent;
					animation: spin var(--duration-1000) var(--animation-linear) infinite;
				}
				@keyframes spin {
					0% { transform: rotate(0deg); }
					100% { transform: rotate(360deg); }
				}
			</style>
		</span>
	{:else}
		<Icon
			name={Loader2}
			class={`animate-spin ${state.sizeClasses} ${state.iconColorClasses} ${props.spinnerClass ?? ''}`}
			aria-hidden="true"
		/>
	{/if}

	{#if state.showLabel}
		<span class="mt-2 text-sm text-[var(--color-text-secondary)]">{state.label}</span>
	{/if}

	<span class="sr-only">{state.label}</span>
</div>
