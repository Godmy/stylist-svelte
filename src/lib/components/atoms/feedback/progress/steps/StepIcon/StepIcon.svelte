<script lang="ts">
  import { Icon } from '$lib/components/atoms';
  import type { IStepIconProps } from './types';
  import { StepIconStyleManager } from './styles';

  /**
   * StepIcon component - renders a circular status indicator within a stepper.
   *
   * Displays either a custom icon, a provided step number, or a fallback symbol
   * that depends on the current status.
   */
  const {
    status = 'pending',
    size = 'md',
    stepNumber,
    iconName,
    class: className = '',
    ...restProps
  }: IStepIconProps = $props();

  const iconSizeMap = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  } as const;

  const fallbackSymbol = $derived(() => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'error':
        return '!';
      default:
        return '•';
    }
  });

  const containerClass = $derived(
    StepIconStyleManager.generateClass(status, size, className)
  );
</script>

<span class={containerClass} {...restProps}>
  {#if iconName}
    <Icon name={iconName} size={iconSizeMap[size]} aria-hidden="true" />
  {:else if stepNumber !== undefined && stepNumber !== null}
    {stepNumber}
  {:else}
    {fallbackSymbol}
  {/if}
</span>
