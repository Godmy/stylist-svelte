<script lang="ts">
	import { onMount } from 'svelte';
	import { createPlaygroundErrorBoundaryState } from '$stylist/playground/function/state/playground-error-boundary';
	import type { PlaygroundErrorBoundaryProps } from '$stylist/playground/type/struct/playground-error-boundary-props';
	let props: PlaygroundErrorBoundaryProps = $props();
	const state = createPlaygroundErrorBoundaryState(props);

	onMount(() => {
		const handleError = (event: ErrorEvent) => {
			state.handleError(event);
		};

		window.addEventListener('error', handleError);
		return () => window.removeEventListener('error', handleError);
	});

	$effect(() => {
		if (state.component) {
			state.clearError();
		}
	});
</script>

{#if state.error}
	<div class="flex flex-col items-center justify-center gap-4 p-8 text-center">
		<div
			class="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20"
		>
			<svg
				class="h-8 w-8 text-red-600 dark:text-red-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>
		</div>
		<div>
			<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
				Component render error
			</h3>
			<p class="max-w-md text-sm text-gray-600 dark:text-gray-400">
				{state.error}
			</p>
		</div>
		<button
			onclick={() => {
				state.clearError();
			}}
			class="mt-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
		>
			Close
		</button>
	</div>
{:else if state.component}
	{@const DynamicComponent = state.component}
	<DynamicComponent {...state.componentProps} />
{:else if state.children}
	{#if state.children}{@render state.children()}{/if}
{/if}
