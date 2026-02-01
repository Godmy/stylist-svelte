<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { IStepConnectorProps } from '$stylist/design-system/interaction/feedback/progress/steps/step-connector';
  import { StepConnectorStyleManager } from '$stylist/design-system/interaction/feedback/progress/steps/step-connector';
  /**
   * StepConnector component - Connects steps in a progress indicator
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other connector components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param status - Status of the step connector ('pending' | 'active' | 'completed' | 'error')
   * @param children - Snippet content for the connector (if not using default content)
   * @returns An accessible, styled step connector element
   */
  let {
    status = 'pending',
    class: className = '',
    children,
    ...restProps
  }: IStepConnectorProps & HTMLAttributes<HTMLDivElement> = $props();

  let classes = $derived(StepConnectorStyleManager.generateClass(status, className));
</script>

<div
  {...restProps}
  class={classes}
>
  {#if children}
    {@render children()}
  {/if}
</div>

