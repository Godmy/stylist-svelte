<script lang="ts">
	import type { DevelopmentErrorBoundaryProps } from '$stylist/development/type/struct/development-error-boundary-props';
	import createDevelopmentErrorBoundaryState from '$stylist/development/function/state/development-error-boundary/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';

	let { ...props }: DevelopmentErrorBoundaryProps = $props();
	const state = createDevelopmentErrorBoundaryState(props);
</script>

{#if state.hasError}
	<div class={state.fallbackContainerClass}>
		<div class={state.headerComputedClass}>
			<div class="flex-shrink-0">
				<BaseIcon name={state.Bug} class="h-6 w-6 text-red-500" />
			</div>
			<div class="ml-3">
				<h3 class="text-lg font-medium text-red-800">{state.title}</h3>
				<p class="mt-1 text-sm text-red-700">{state.message}</p>
			</div>
		</div>

		{#if state.showDetails && state.error}
			<div class={state.detailsComputedClass}>
				<h4 class="flex items-center text-sm font-medium text-gray-900">
					<BaseIcon name={state.FileText} class="mr-1 h-4 w-4" />
					Error Details
				</h4>
				<div class="mt-2">
					<p class="font-mono text-sm break-words text-red-600">{state.error.message}</p>

					{#if state.errorInfo?.componentStack}
						<details class="mt-3">
							<summary class="cursor-pointer text-xs text-gray-500">Component Stack Trace</summary>
							<pre class="mt-2 overflow-x-auto rounded bg-gray-100 p-3 text-xs">
                {state.errorInfo.componentStack}
              </pre>
						</details>
					{/if}
				</div>
			</div>
		{/if}

		<div class={state.actionsComputedClass}>
			{#if state.showReload}
				<button
					type="button"
					class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none"
					onclick={state.resetError}
				>
					<BaseIcon name={state.RotateCcw} class="mr-1 h-4 w-4" />
					Reload Page
				</button>
			{/if}

			{#if state.showCopyError}
				<button
					type="button"
					class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
					onclick={state.copyError}
				>
					{#if state.copied}
						<svg
							class="mr-1 h-4 w-4 text-green-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						Copied!
					{:else}
						<BaseIcon name={state.Copy} class="mr-1 h-4 w-4" />
						Copy Error
					{/if}
				</button>
			{/if}

			{#if state.showReportIssue}
				<a
					href={state.reportUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
				>
					<BaseIcon name={state.ExternalLink} class="mr-1 h-4 w-4" />
					Report Issue
				</a>
			{/if}
		</div>
	</div>
{:else}
	<div class={state.containerClass}>
		{#if state.children}
			{#if state.children}{@render state.children()}{/if}
		{/if}
	</div>
{/if}
