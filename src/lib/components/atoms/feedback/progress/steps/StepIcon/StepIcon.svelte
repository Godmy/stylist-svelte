<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Check } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  import type { IStepIconProps } from './types';
  import { StepIconStyleManager } from './styles';
  import './StepIcon.css';

  /**
   * StepIcon component - Represents the icon for a step in a progress indicator
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other icon components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param status - Status of the step icon ('pending' | 'active' | 'completed' | 'error')
   * @param size - Size of the step icon ('sm' | 'md' | 'lg')
   * @param stepNumber - Step number to display when no icon is specified
   * @param iconName - Name of the icon to display
   * @param children - Snippet content for the icon (if not using default number or icon)
   * @returns An accessible, styled step icon element
   */
  let {
    status = 'pending',
    size = 'md',
    stepNumber,
    iconName,
    class: className = '',
    children,
    ...restProps
  }: IStepIconProps & HTMLAttributes<HTMLSpanElement> = $props();

  let classes = $derived(StepIconStyleManager.generateClass(status, size, className));
</script>

<span
  {...restProps}
  class={classes}
>
  {#if children}
    {@render children()}
  {:else if status === 'completed'}
    <Check size={size === 'sm' ? 12 : size === 'md' ? 16 : 20} class="step-icon-check" />
  {:else if stepNumber !== undefined}
    {stepNumber}
  {/if}
</span>