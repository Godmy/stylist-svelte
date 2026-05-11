<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ErrorBoundary from './index.svelte';
	import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

	const controls = [
		{
			name: 'showError',
			type: 'boolean' as TokenControllerType,
			defaultValue: false,
			description: 'Whether to show error state'
		},
		{
			name: 'title',
			type: 'text' as TokenControllerType,
			defaultValue: 'Something went wrong',
			description: 'Error title'
		},
		{
			name: 'message',
			type: 'text' as TokenControllerType,
			defaultValue: 'An unexpected error occurred. Please try again.',
			description: 'Error message'
		}
	];
</script>

<Story
	{controls}
	title="ErrorBoundary Component"
	description="A component that catches and displays errors in its child components"
>
	{#snippet children(controlValues: any)}
		<div class="p-6">
			<div class="max-w-md rounded-lg border border-[var(--color-border-primary)] p-4">
				<ErrorBoundary title={controlValues.title} message={controlValues.message}>
					{#if !controlValues.showError}
						<div class="py-8 text-center">
							<h3 class="mb-2 text-lg font-medium text-[var(--color-text-primary)]">
								Normal Content
							</h3>
							<p class="text-[var(--color-text-secondary)]">
								This content displays when no error occurs
							</p>
						</div>
					{:else}
						<div class="py-8 text-center text-[var(--color-danger-500)]">
							<h3 class="mb-2 text-lg font-medium">Simulated Error</h3>
							<p>This would trigger the error boundary in a real scenario</p>
						</div>
					{/if}
				</ErrorBoundary>
			</div>
		</div>
	{/snippet}
</Story>
