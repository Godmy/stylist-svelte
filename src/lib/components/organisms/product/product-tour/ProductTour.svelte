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
  <div class="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
    <div class={`bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative ${
      steps[localCurrentStep]?.position || 'top'
    }`}>
      <button
        onclick={closeTour}
        aria-label="Close tour"
        class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h3 class="font-bold text-lg mb-2">{steps[localCurrentStep].title}</h3>
      <p class="text-gray-700 mb-4">{steps[localCurrentStep].content}</p>
      
      <div class="flex justify-between items-center">
        <div>
          <span class="text-sm text-gray-600">
            Step {localCurrentStep + 1} of {steps.length}
          </span>
        </div>
        <div class="space-x-2">
          {#if localCurrentStep > 0}
            <button
              onclick={prevStep}
              class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100"
            >
              Previous
            </button>
          {/if}
          <button
            onclick={nextStep}
            class="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {localCurrentStep < steps.length - 1 ? 'Next' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}