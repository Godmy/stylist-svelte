<script lang="ts">
  /**
   * @component ProcessStep
   * @description Process step for timeline
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles process step display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any process step
   * - Interface Segregation: Minimal interface via IProcessStepProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful process unit
   */

  import type { SlotProcessStep as IProcessStepProps } from '$stylist/management/interface/slot/process-step';
  import { createProcessStepState } from '$stylist/management/function/state/process-step';

  let props: IProcessStepProps = $props();
  const state = createProcessStepState(props);
</script>

<div class={state.classes}>
  <div class={state.numberContainerClasses}>
    {state.number}
  </div>
  <div class={state.contentContainerClasses}>
    <h3 class={state.titleClasses}>
      {state.title}
      {#if state.agent}
        <span class={state.agentBadgeClasses}>{state.agent}</span>
      {/if}
    </h3>
    <p class={state.descriptionClasses}>{state.description}</p>
  </div>
</div>
