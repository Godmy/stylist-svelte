<script lang="ts">
	import type { ProductTourProps } from '$stylist/commerce/type/struct/product-tour-props';
	import { createProductTourState } from '$stylist/commerce/function/state/product-tour';

	let {
		steps = [],
		currentStep = 0,
		showTour = false,
		onComplete = () => {},
		class: className = ''
	}: ProductTourProps = $props();

	const state = createProductTourState({
		steps,
		currentStep,
		showTour,
		onComplete,
		class: className
	});
</script>

{#if state.showTour && steps.length > 0}
	<div
		class="bg-opacity-[var(--opacity-50)] fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)] p-4"
	>
		<div
			class={`relative w-full max-w-md rounded-lg bg-[var(--color-background-primary)] p-6 shadow-xl ${className} ${
				steps[state.currentStep]?.position || 'top'
			}`}
		>
			<button
				onclick={() => state.closeTour()}
				aria-label="Close tour"
				class="absolute top-3 right-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<h3 class="mb-2 text-lg font-bold">{steps[state.currentStep].title}</h3>
			<p class="mb-4 text-[var(--color-text-primary)]">{steps[state.currentStep].content}</p>

			<div class="flex items-center justify-between">
				<div>
					<span class="text-sm text-[var(--color-text-secondary)]">
						Step {state.currentStep + 1} of {steps.length}
					</span>
				</div>
				<div class="space-x-2">
					{#if state.currentStep > 0}
						<button
							onclick={() => state.prevStep()}
							class="rounded border border-[var(--color-border-primary)] px-3 py-1 hover:bg-[var(--color-background-secondary)]"
						>
							Previous
						</button>
					{/if}
					<button
						onclick={() => state.nextStep()}
						class="rounded bg-[var(--color-primary-500)] px-4 py-1 text-[var(--color-text-inverse)] hover:bg-[var(--color-primary-600)]"
					>
						{state.currentStep < steps.length - 1 ? 'Next' : 'Finish'}
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
