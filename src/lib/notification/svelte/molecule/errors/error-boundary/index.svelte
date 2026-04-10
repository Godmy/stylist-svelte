<script lang="ts">
	import { createErrorBoundaryState } from '$stylist/notification/function/state/error-boundary';
	import { Icon, Button } from '$stylist';

	const props = $props();
	const state = createErrorBoundaryState(props);
	const AlertTriangle = 'alert-triangle';
	const RotateCcw = 'refresh';
</script>

<svelte:boundary>
	{@render props.children()}
	{#snippet failed(error: unknown, reset: () => void)}
		{#if props.fallback}
			{@render props.fallback(error, reset)}
		{:else}
			<div class={state.themedClasses} {...props}>
				<div class={state.contentClasses}>
					<div class="flex-shrink-0">
						<Icon name={AlertTriangle} class={state.iconClasses} />
					</div>
					<div class="ml-4">
						<h3 class={state.headerClasses}>{props.title ?? 'Something went wrong'}</h3>
						<div class={state.bodyClasses}>
							<p class="text-[--color-text-danger]">{props.message ?? 'An error occurred. Please try again.'}</p>
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
								class="flex items-center"
							>
								<Icon name={RotateCcw} class="w-4 h-4 mr-2" />
								Try again
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}
	{/snippet}
</svelte:boundary>
