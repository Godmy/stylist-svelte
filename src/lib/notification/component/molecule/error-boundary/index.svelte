<script lang="ts">
	import { createErrorBoundaryState } from '$stylist/notification/function/state/error-boundary/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	const props = $props();
	const state = createErrorBoundaryState(props);
	const AlertTriangle = 'alert-triangle';
	const RotateCcw = 'refresh';
</script>

<svelte:boundary>
	{#if props.children}{@render props.children()}{/if}
	{#snippet failed(error: unknown, reset: () => void)}
		{#if props.fallback}
			{@render props.fallback(error, reset)}
		{:else}
			<div class={state.themedClasses} {...props}>
				<div class={state.contentClasses}>
					<div class="error-boundary__icon-wrap">
						<Icon name={AlertTriangle} class={state.iconClasses} />
					</div>
					<div class="error-boundary__main">
						<h3 class={state.headerClasses}>{props.title ?? 'Something went wrong'}</h3>
						<div class={state.bodyClasses}>
							<p class="error-boundary__message">
								{props.message ?? 'An error occurred. Please try again.'}
							</p>
							{#if props.showDetails}
								<details class={state.detailsClasses}>
									<summary class={state.summaryClasses}>Error details</summary>
									<pre class={state.detailsTextClasses}>
										{(error as Error).stack}
										{`\n\nComponent Stack:`}
									</pre>
								</details>
							{/if}
						</div>
						<div class={state.footerClasses}>
							<Button
								variant="primary"
								onclick={() => state.handleReset(reset)}
								class="error-boundary__reset-btn"
							>
								<Icon name={RotateCcw} class="error-boundary__reset-icon" />
								Try again
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/snippet}
</svelte:boundary>

<style>
	.error-boundary {
		display: flex;
		align-items: flex-start;
		padding: 1.5rem;
		border-radius: var(--border-radius-large, 0.5rem);
		border: 1px solid var(--color-border-danger);
		background-color: var(--color-background-danger-muted);
		color: var(--color-text-danger);
	}

	.error-boundary__content {
		display: flex;
		align-items: flex-start;
	}

	.error-boundary__icon-wrap {
		flex-shrink: 0;
	}

	.error-boundary__icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-icon-danger);
	}

	.error-boundary__main {
		margin-left: 1rem;
	}

	.error-boundary__header {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-danger-strong);
	}

	.error-boundary__body {
		margin-top: 0.5rem;
	}

	.error-boundary__message {
		color: var(--color-text-danger);
	}

	.error-boundary__details {
		margin-top: 1rem;
	}

	.error-boundary__summary {
		cursor: pointer;
		color: var(--color-text-danger);
		font-weight: 500;
	}

	.error-boundary__details-pre {
		margin-top: 0.5rem;
		padding: 1rem;
		border-radius: var(--border-radius-base, 0.375rem);
		font-size: 0.875rem;
		overflow: auto;
		background-color: var(--color-background-danger-subtle);
		color: var(--color-text-danger);
	}

	.error-boundary__footer {
		margin-top: 1rem;
	}

	.error-boundary__reset-icon {
		margin-right: 0.5rem;
		width: 1rem;
		height: 1rem;
	}
</style>
