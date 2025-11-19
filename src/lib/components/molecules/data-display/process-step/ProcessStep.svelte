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

  import type { IProcessStepProps } from './types';
  import { ProcessStepStyleManager } from './styles';
  import IconCircle from '../../../atoms/media/icon-circle/IconCircle.svelte';

  // Define component props using the interface
  let {
    number,
    title,
    description,
    agent,
    icon,
    active = false,
    class: className = ''
  }: IProcessStepProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(ProcessStepStyleManager.getBaseClasses(active, className));
  let numberContainerClasses = $derived(ProcessStepStyleManager.getNumberContainerClasses(active));
  let contentContainerClasses = $derived(ProcessStepStyleManager.getContentContainerClasses());
  let titleClasses = $derived(ProcessStepStyleManager.getTitleClasses(active));
  let agentBadgeClasses = $derived(ProcessStepStyleManager.getAgentBadgeClasses());
  let descriptionClasses = $derived(ProcessStepStyleManager.getDescriptionClasses());
</script>

<div class={classes}>
  <div class={numberContainerClasses}>
    {number}
  </div>
  <div class={contentContainerClasses}>
    <h3 class={titleClasses}>
      {title}
      {#if agent}
        <span class={agentBadgeClasses}>{agent}</span>
      {/if}
    </h3>
    <p class={descriptionClasses}>{description}</p>
  </div>
</div>