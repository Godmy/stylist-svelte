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

  const state = createProductTourState({ steps, currentStep, showTour, onComplete, class: className });
</script>

{#if state.showTour && steps.length > 0}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)] bg-opacity-[var(--opacity-50)] z-[var(--z-index-overlay)] flex items-center justify-center p-4">
    <div class={`bg-[var(--color-background-primary)] rounded-lg shadow-xl p-6 max-w-md w-full relative ${className} ${
      steps[state.currentStep]?.position || 'top'
    }`}>
      <button
        onclick={() => state.closeTour()}
        aria-label="Close tour"
        class="absolute top-3 right-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h3 class="font-bold text-lg mb-2">{steps[state.currentStep].title}</h3>
      <p class="text-[var(--color-text-primary)] mb-4">{steps[state.currentStep].content}</p>
      
      <div class="flex justify-between items-center">
        <div>
          <span class="text-sm text-[var(--color-text-secondary)]">
            Step {state.currentStep + 1} of {steps.length}
          </span>
        </div>
        <div class="space-x-2">
          {#if state.currentStep > 0}
            <button
              onclick={() => state.prevStep()}
              class="px-3 py-1 border border-[var(--color-border-primary)] rounded hover:bg-[var(--color-background-secondary)]"
            >
              Previous
            </button>
          {/if}
          <button
            onclick={() => state.nextStep()}
            class="px-4 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]"
          >
            {state.currentStep < steps.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}




