<script lang="ts">
  import type { IAccountProgressTrackerProps } from '$stylist/design-system/interaction/feedback/progress/account-progress-tracker';
  import { AccountProgressTrackerStyleManager } from '$stylist/design-system/interaction/feedback/progress/account-progress-tracker';

  let {
    steps = [],
    currentStep = 0,
    class: className = ''
  }: IAccountProgressTrackerProps = $props();

  let localCurrentStep = $state(currentStep);

  $effect(() => {
    localCurrentStep = currentStep;
  });
</script>

<div class={AccountProgressTrackerStyleManager.getContainerClass(className)}>
  {#each steps as step, i}
    <div class="flex items-center">
      <div class={AccountProgressTrackerStyleManager.getStepIndicatorClass(i <= localCurrentStep)}>
        {i + 1}
      </div>
      {#if i < steps.length - 1}
        <div class={AccountProgressTrackerStyleManager.getConnectorClass(i < localCurrentStep)}></div>
      {/if}
    </div>
  {/each}
  <div class={AccountProgressTrackerStyleManager.getProgressTextClass()}>
    <p>Step {localCurrentStep + 1} of {steps.length}: {steps[localCurrentStep]}</p>
  </div>
</div>
