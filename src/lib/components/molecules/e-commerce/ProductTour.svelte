<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { X, ArrowRight, ArrowLeft, Lightbulb, CheckCircle, Info } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type TourStep = {
    id: string;
    target: string; // CSS selector for the element to highlight
    title: string;
    content: string;
    placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    position?: { x: number; y: number }; // Alternative to target - absolute position
    attachTo?: string; // Element to attach tooltip to
    padding?: number; // Padding around highlighted element
    highlight?: boolean; // Whether to highlight the target element
    canBePaused?: boolean;
    onShow?: () => void;
    onHide?: () => void;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    steps: TourStep[];
    active?: boolean;
    currentIndex?: number;
    showProgress?: boolean;
    showDots?: boolean;
    showOverlay?: boolean;
    autoStart?: boolean;
    continuous?: boolean;
    showSkip?: boolean;
    showClose?: boolean;
    stepOffset?: number;
    class?: string;
    tourClass?: string;
    stepClass?: string;
    overlayClass?: string;
    highlightClass?: string;
    onStepChange?: (index: number, step: TourStep) => void;
    onTourStart?: () => void;
    onTourEnd?: () => void;
    onTourPause?: () => void;
    onTourResume?: () => void;
    onSkip?: () => void;
  };

  let {
    steps = [],
    active = false,
    currentIndex = 0,
    showProgress = true,
    showDots = true,
    showOverlay = true,
    autoStart = false,
    continuous = true,
    showSkip = true,
    showClose = true,
    stepOffset = 10,
    class: hostClass = '',
    tourClass = '',
    stepClass = '',
    overlayClass = '',
    highlightClass = '',
    onStepChange,
    onTourStart,
    onTourEnd,
    onTourPause,
    onTourResume,
    onSkip,
    ...restProps
  }: Props = $props();

  let isActive = $state(active);
  let currentStepIndex = $state(currentIndex);
  let paused = $state(false);

  $effect(() => {
    isActive = active;
    if (active && !paused) {
      onTourStart?.();
    }
  });

  $effect(() => {
    currentStepIndex = currentIndex;
  });

  let currentStep = $derived(steps[currentStepIndex]);

  function nextStep() {
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex++;
      onStepChange?.(currentStepIndex, steps[currentStepIndex]);
    } else {
      endTour();
    }
  }

  function prevStep() {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      onStepChange?.(currentStepIndex, steps[currentStepIndex]);
    }
  }

  function startTour() {
    isActive = true;
    currentStepIndex = 0;
    onTourStart?.();
  }

  function endTour() {
    isActive = false;
    onTourEnd?.();
  }

  function skipTour() {
    endTour();
    onSkip?.();
  }

  function togglePause() {
    paused = !paused;
    if (paused) {
      onTourPause?.();
    } else {
      onTourResume?.();
    }
  }

  function handleDotClick(index: number) {
    currentStepIndex = index;
    onStepChange?.(currentStepIndex, steps[currentStepIndex]);
  }

  // Calculate position for the tour step
  function calculatePosition(): { top: number; left: number; width?: number; height?: number } {
    if (!isActive || !currentStep) return { top: 0, left: 0 };

    // If position is defined, use it directly
    if (currentStep.position) {
      return { 
        top: currentStep.position.y, 
        left: currentStep.position.x,
        width: 0,
        height: 0
      };
    }

    // If target element is specified, calculate based on its position
    if (currentStep.target) {
      const element = document.querySelector(currentStep.target) as HTMLElement;
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        let top = 0;
        let left = 0;

        switch (currentStep.placement) {
          case 'top':
            top = rect.top + scrollY - stepOffset;
            left = rect.left + scrollX + rect.width / 2;
            break;
          case 'bottom':
            top = rect.bottom + scrollY + stepOffset;
            left = rect.left + scrollX + rect.width / 2;
            break;
          case 'left':
            top = rect.top + scrollY + rect.height / 2;
            left = rect.left + scrollX - stepOffset;
            break;
          case 'right':
            top = rect.top + scrollY + rect.height / 2;
            left = rect.right + scrollX + stepOffset;
            break;
          case 'top-start':
            top = rect.top + scrollY - stepOffset;
            left = rect.left + scrollX;
            break;
          case 'top-end':
            top = rect.top + scrollY - stepOffset;
            left = rect.right + scrollX;
            break;
          default:
            top = rect.top + scrollY - stepOffset;
            left = rect.left + scrollX + rect.width / 2;
            break;
        }

        return {
          top,
          left,
          width: rect.width,
          height: rect.height
        };
      }
    }

    // Default position if no target element is found
    return { top: 100, left: 100 };
  }

  let position = $derived(calculatePosition());
  let progress = $derived((currentStepIndex + 1) / steps.length * 100);
  let stepNumber = $derived(`${currentStepIndex + 1}/${steps.length}`);
</script>

{#if isActive}
  {#if showOverlay}
    <button
      type="button"
      class={`fixed inset-0 z-40 bg-black bg-opacity-50 ${overlayClass}`}
      onclick={() => endTour()}
      aria-label="Close tour"
    ></button>
  {/if}
  
  <div
    class={`fixed z-50 max-w-sm bg-white rounded-lg shadow-xl border border-gray-200 p-4 ${tourClass}`}
    style={`top: ${position.top}px; left: ${position.left}px; transform: translate(-50%, -100%);`}
  >
    {#if showClose}
      <button
        type="button"
        class="absolute top-3 right-3 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
        onclick={endTour}
        aria-label="Close tour"
      >
        <X class="h-5 w-5" />
      </button>
    {/if}
    
    {#if showProgress && steps.length > 1}
      <div class="mb-3">
        <div class="flex items-center justify-between text-sm text-gray-600">
          <span>Step {stepNumber}</span>
          <button 
            type="button" 
            class="text-blue-600 hover:text-blue-500"
            onclick={togglePause}
          >
            {paused ? 'Resume' : 'Pause'}
          </button>
        </div>
        <div class="mt-1 w-full bg-gray-200 rounded-full h-1.5">
          <div 
            class="bg-blue-600 h-1.5 rounded-full transition-all duration-300 ease-out" 
            style={`width: ${progress}%`}
          ></div>
        </div>
      </div>
    {/if}
    
    <div class="flex items-start">
      <div class="flex-shrink-0 mt-1">
        <Lightbulb class="h-5 w-5 text-blue-500" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-gray-900">{currentStep.title}</h3>
        <div class="mt-2 text-sm text-gray-500">
          {currentStep.content}
        </div>
      </div>
    </div>
    
    {#if showDots && steps.length > 1}
      <div class="mt-4 flex justify-center space-x-1">
        {#each steps as _, i}
          <button
            type="button"
            class={`h-2 w-2 rounded-full ${
              i === currentStepIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to step ${i + 1}`}
            onclick={() => handleDotClick(i)}
          ></button>
        {/each}
      </div>
    {/if}
    
    <div class="mt-4 flex justify-between">
      <div>
        {#if showSkip}
          <button
            type="button"
            class="text-sm font-medium text-gray-600 hover:text-gray-500"
            onclick={skipTour}
          >
            Skip tour
          </button>
        {/if}
      </div>
      
      <div class="flex space-x-2">
        <button
          type="button"
          class="inline-flex justify-center items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick={prevStep}
          disabled={currentStepIndex === 0}
        >
          <ArrowLeft class="h-4 w-4 mr-1" />
          Previous
        </button>
        
        <button
          type="button"
          class="inline-flex justify-center items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          onclick={currentStepIndex < steps.length - 1 ? nextStep : endTour}
        >
          {currentStepIndex < steps.length - 1 ? 'Next' : 'Finish'}
          <ArrowRight class="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  </div>
  
  {#if currentStep?.highlight && currentStep.target}
    {@const element = document.querySelector(currentStep.target) as HTMLElement}
    {#if element}
      {@const rect = element.getBoundingClientRect()}
      <div
        class={`fixed z-40 border-2 border-blue-500 rounded-lg pointer-events-none ${highlightClass}`}
        style={`
          top: ${rect.top + (window.scrollY || window.pageYOffset)}px;
          left: ${rect.left + (window.scrollX || window.pageXOffset)}px;
          width: ${rect.width}px;
          height: ${rect.height}px;
        `}
      ></div>
    {/if}
  {/if}
{/if}

{#if autoStart && !isActive}
  <button
    type="button"
    class="fixed bottom-4 right-4 z-50 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    onclick={startTour}
  >
    <Info class="h-4 w-4 mr-2" />
    Start Product Tour
  </button>
{/if}


