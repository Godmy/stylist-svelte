<script lang="ts">
	type Props = {
		label?: string;
		loadingLabel?: string;
		isLoading?: boolean;
		disabled?: boolean;
		class?: string;
	};

	let {
		label = 'Submit',
		loadingLabel = 'Loading...',
		isLoading = false,
		disabled = false,
		class: cls
	}: Props = $props();
</script>

<button type="submit" disabled={isLoading || disabled} class="c-submit-button {cls ?? ''}">
	{#if isLoading}
		<span class="c-submit-button__spinner" aria-hidden="true"></span>
	{/if}
	{isLoading ? loadingLabel : label}
</button>

<style>
	.c-submit-button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		width: 100%;
		padding: 0.625rem 1rem;
		background: var(--color-primary-600, #4f46e5);
		color: var(--color-text-inverse, #fff);
		border: none;
		border-radius: 0.5rem;
		cursor: pointer;
		font-weight: 600;
		font-size: 0.875rem;
		transition: background 0.15s;
	}

	.c-submit-button:hover:not(:disabled) {
		background: var(--color-primary-700, #4338ca);
	}

	.c-submit-button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.c-submit-button__spinner {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border: 2px solid transparent;
		border-top-color: currentColor;
		border-radius: 50%;
		animation: spin 0.6s linear infinite;
		flex-shrink: 0;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
