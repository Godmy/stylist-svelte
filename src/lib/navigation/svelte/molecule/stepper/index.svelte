<script lang="ts">
  import type { StepperProps } from '$stylist/navigation/type/struct/stepper-props';
  import { createStepperState } from '$stylist/navigation/function/state/stepper';

  let props: StepperProps = $props();
  const state = createStepperState(props);
</script>

<div class={`w-full ${props.class ?? ''} ${state.orientationClass}`} {...props}>
  {#each props.steps as step, index}
    <div class={`flex ${props.orientation === 'vertical' ? 'flex-col' : 'items-center'}`}>
      <!-- Step item -->
      <div class={`flex items-center ${props.orientation === 'vertical' ? 'flex-row' : 'flex-col'}`}>
        <button
          type="button"
          class={`flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border-2 ${state.getStepCircleClass(step.status)} ${props.stepClass ?? ''} ${step.onClick ? 'cursor-pointer' : 'cursor-default'}`}
          onclick={() => step.onClick?.()}
          aria-current={step.status === 'current' ? 'step' : undefined}
        >
          {#if step.status === 'completed'}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          {:else}
            {index + 1}
          {/if}
        </button>

        <div class={`ml-3 text-left ${props.orientation === 'vertical' ? 'mt-0' : 'mt-2'} ${props.labelClass ?? ''}`}>
          <span class={`text-sm font-medium ${state.getStepLabelClass(step.status)}`}>
            {step.title}
          </span>
          {#if step.description}
            <p class={`text-xs ${props.descriptionClass ?? ''} ${state.getStepDescriptionClass(step.status)}`}>
              {step.description}
            </p>
          {/if}
        </div>
      </div>

      <!-- Connector -->
      {#if index < props.steps.length - 1}
        <div class={`${props.orientation === 'horizontal' ? 'flex-grow h-0.5 w-full mx-4' : 'w-0.5 h-full ml-4 mt-4'} ${state.getConnectorClass(props.steps, index)} ${props.connectorClass ?? ''}`}></div>
      {/if}
    </div>
  {/each}
</div>
