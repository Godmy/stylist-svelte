<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, Square, ArrowLeft, ArrowRight } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  type DemoStep = {
    id: string;
    title: string;
    description: string;
    component: any; // Component to render for this step
    props?: Record<string, any>; // Props to pass to the component
    duration?: number; // Duration in ms for this step (0 = manual advance)
    autoAdvance?: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    title?: string;
    description?: string;
    steps: DemoStep[];
    autoPlay?: boolean;
    stepDuration?: number; // Default duration in ms
    showControls?: boolean;
    showStepIndicators?: boolean;
    showStepTitle?: boolean;
    showStepDescription?: boolean;
    showStepProgress?: boolean;
    showRestart?: boolean;
    class?: string;
    demoClass?: string;
    stepClass?: string;
    controlsClass?: string;
    onStepChange?: (stepIndex: number, step: DemoStep) => void;
    onDemoStart?: () => void;
    onDemoEnd?: () => void;
  };

  let {
    title = 'Product Demo',
    description = 'See how this product works in action',
    steps = [],
    autoPlay = false,
    stepDuration = 5000,
    showControls = true,
    showStepIndicators = true,
    showStepTitle = true,
    showStepDescription = true,
    showStepProgress = true,
    showRestart = true,
    class: hostClass = '',
    demoClass = '',
    stepClass = '',
    controlsClass = '',
    onStepChange,
    onDemoStart,
    onDemoEnd,
    ...restProps
  }: Props = $props();

  let currentStepIndex = $state(0);
  let isPlaying = $state(autoPlay);
  let playInterval: number | null = null;

  $effect(() => {
    if (autoPlay && steps.length > 0) {
      startAutoPlay();
    }
    
    return () => {
      if (playInterval) {
        clearInterval(playInterval);
      }
    };
  });

  $effect(() => {
    if (isPlaying && steps.length > 0) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
  });

  function startAutoPlay() {
    if (playInterval) clearInterval(playInterval);
    
    playInterval = window.setInterval(() => {
      nextStep();
    }, stepDuration) as unknown as number;
  }

  function stopAutoPlay() {
    if (playInterval) {
      clearInterval(playInterval);
      playInterval = null;
    }
  }

  function play() {
    isPlaying = true;
    onDemoStart?.();
  }

  function pause() {
    isPlaying = false;
    stopAutoPlay();
  }

  function nextStep() {
    if (currentStepIndex < steps.length - 1) {
      currentStepIndex++;
    } else {
      // Reached the end, either restart or stop
      if (isPlaying) {
        currentStepIndex = 0;
      } else {
        endDemo();
      }
    }
    
    onStepChange?.(currentStepIndex, steps[currentStepIndex]);
  }

  function prevStep() {
    if (currentStepIndex > 0) {
      currentStepIndex--;
      onStepChange?.(currentStepIndex, steps[currentStepIndex]);
    }
  }

  function goToStep(index: number) {
    if (index >= 0 && index < steps.length) {
      currentStepIndex = index;
      onStepChange?.(currentStepIndex, steps[currentStepIndex]);
    }
  }

  function restartDemo() {
    currentStepIndex = 0;
    if (autoPlay) {
      isPlaying = true;
      startAutoPlay();
    }
    onDemoStart?.();
  }

  function endDemo() {
    isPlaying = false;
    stopAutoPlay();
    onDemoEnd?.();
  }

  let currentStep = $derived(steps[currentStepIndex]);
  let progress = $derived(((currentStepIndex + 1) / steps.length) * 100);
  let stepNumber = $derived(`${currentStepIndex + 1}/${steps.length}`);
</script>

<div class={`product-demo ${hostClass}`} {...restProps}>
  <div class={`border border-gray-200 rounded-lg p-6 ${demoClass}`}>
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-xl font-bold text-gray-900">{title}</h2>
        {#if description}
          <p class="mt-1 text-gray-600">{description}</p>
        {/if}
      </div>
      
      {#if showRestart}
        <button
          type="button"
          class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onclick={restartDemo}
        >
          <RotateCcw class="h-3 w-3 mr-1" />
          Restart
        </button>
      {/if}
    </div>
    
    {#if steps.length > 0}
      <!-- Demo step display -->
      <div class="mt-6">
        <div class={`bg-gray-50 rounded-lg p-6 border border-gray-200 ${stepClass}`}>
          {#if currentStep.component}
            {@const StepComponent = currentStep.component}
            <StepComponent {...currentStep.props} />
          {/if}
        </div>
        
        {#if showStepTitle || showStepDescription}
          <div class="mt-4">
            {#if showStepTitle && currentStep.title}
              <h3 class="text-lg font-medium text-gray-900">{currentStep.title}</h3>
            {/if}
            
            {#if showStepDescription && currentStep.description}
              <p class="mt-2 text-gray-600">{currentStep.description}</p>
            {/if}
          </div>
        {/if}
      </div>
      
      {#if showStepProgress}
        <!-- Progress indicator -->
        <div class="mt-6">
          <div class="flex items-center justify-between text-sm text-gray-600 mb-1">
            <span>Step {stepNumber}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div 
              class="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={`width: ${progress}%`}
            ></div>
          </div>
        </div>
      {/if}
      
      {#if showStepIndicators}
        <!-- Step indicators -->
        <div class="mt-6 flex justify-center space-x-2">
          {#each steps as _, i}
            <button
              type="button"
              class={`h-2 w-2 rounded-full ${
                i === currentStepIndex 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${i + 1}`}
              onclick={() => goToStep(i)}
            ></button>
          {/each}
        </div>
      {/if}
      
      {#if showControls}
        <!-- Controls -->
        <div class={`mt-6 flex items-center justify-center space-x-4 ${controlsClass}`}>
          <Button
            variant="outline"
            onclick={prevStep}
            disabled={currentStepIndex === 0}
          >
            <ArrowLeft class="h-4 w-4 mr-1" />
            Previous
          </Button>
          
          <Button
            variant="primary"
            onclick={isPlaying ? pause : play}
          >
            {#if isPlaying}
              <Pause class="h-4 w-4 mr-1" />
              Pause
            {:else}
              <Play class="h-4 w-4 mr-1" />
              Play
            {/if}
          </Button>
          
          <Button
            variant="outline"
            onclick={nextStep}
            disabled={currentStepIndex === steps.length - 1}
          >
            Next
            <ArrowRight class="h-4 w-4 ml-1" />
          </Button>
        </div>
      {/if}
    {/if}
  </div>
</div>

