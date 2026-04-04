<script lang="ts">
  let {
    steps = [],
    currentStep = 0,
    showTour = false,
    onComplete = () => {},
    class: className = ''
  } = $props<{
    steps: Array<{
      title: string;
      content: string;
      position?: 'top' | 'bottom' | 'left' | 'right';
    }>;
    currentStep?: number;
    showTour?: boolean;
    onComplete?: () => void;
    class?: string;
  }>();

  let localCurrentStep = $state(currentStep);
  let localShowTour = $state(showTour);

  $effect(() => {
    localCurrentStep = currentStep;
    localShowTour = showTour;
  });

  const nextStep = () => {
    if (localCurrentStep < steps.length - 1) {
      localCurrentStep++;
    } else {
      localShowTour = false;
      onComplete();
    }
  };

  const prevStep = () => {
    if (localCurrentStep > 0) {
      localCurrentStep--;
    }
  };

  const closeTour = () => {
    localShowTour = false;
    onComplete();
  };
</script>

{#if localShowTour && steps.length > 0}
  <div class="fixed inset-0 bg-[var(--color-neutral-900)] bg-opacity-[var(--opacity-50)] z-[var(--z-index-overlay)] flex items-center justify-center p-4">
    <div class={`bg-[var(--color-background-primary)] rounded-lg shadow-xl p-6 max-w-md w-full relative ${
      steps[localCurrentStep]?.position || 'top'
    }`}>
      <button
        onclick={closeTour}
        aria-label="Close tour"
        class="absolute top-3 right-3 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h3 class="font-bold text-lg mb-2">{steps[localCurrentStep].title}</h3>
      <p class="text-[var(--color-text-primary)] mb-4">{steps[localCurrentStep].content}</p>
      
      <div class="flex justify-between items-center">
        <div>
          <span class="text-sm text-[var(--color-text-secondary)]">
            Step {localCurrentStep + 1} of {steps.length}
          </span>
        </div>
        <div class="space-x-2">
          {#if localCurrentStep > 0}
            <button
              onclick={prevStep}
              class="px-3 py-1 border border-[var(--color-border-primary)] rounded hover:bg-[var(--color-background-secondary)]"
            >
              Previous
            </button>
          {/if}
          <button
            onclick={nextStep}
            class="px-4 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded hover:bg-[var(--color-primary-600)]"
          >
            {localCurrentStep < steps.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}




