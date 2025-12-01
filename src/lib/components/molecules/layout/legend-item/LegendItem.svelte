/**
 * LegendItem Component
 *
 * This component follows the SAMO (SOLID, Atomic Design) principles:
 *
 * S - Single Responsibility Principle: This component is responsible only for displaying legend items
 * O - Open/Closed Principle: Extensible through properties without modifying the component's core logic
 * L - Liskov Substitution Principle: Can be replaced with another legend item without affecting the API
 * I - Interface Segregation Principle: Provides a minimal and focused interface for legend items
 * D - Dependency Inversion Principle: Depends on abstractions rather than concrete implementations
 *
 * @since 2025.1
 * @status stable
 */
<script lang="ts">
  import type { ILegendItemProps } from './types';
  import { LegendItemStyleManager } from './styles';
  import { Icon } from '$lib/components/atoms';

  let {
    label = '',
    type = 'object',
    count = 0,
    variant = 'default',
    active = false,
    onClick
  }: ILegendItemProps = $props();

  // Get appropriate icon for type
  const getIconName = (type: string) => {
    switch (type) {
      case 'object': return 'object';
      case 'interface': return 'interface';
      case 'union': return 'union';
      case 'enum': return 'enum';
      case 'scalar': return 'scalar';
      case 'input': return 'input';
      default: return 'default';
    }
  };

  // Determine classes based on variant and active state
  const itemClasses = $derived(`${LegendItemStyleManager.getBaseClasses()} ${LegendItemStyleManager.getVariantClasses(variant, active, !!onClick)}`);
  const iconClasses = $derived(LegendItemStyleManager.getIconClasses());
  const labelClasses = $derived(LegendItemStyleManager.getLabelClasses());
  const countClasses = $derived(LegendItemStyleManager.getCountClasses());

  // Handle click with proper null check
  function handleClick() {
    onClick?.();
  }

  // Handle keydown with proper null check
  function handleKeyDown(e: KeyboardEvent) {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  }
</script>

<div
  class={itemClasses}
  onclick={handleClick}
  role={onClick ? "button" : undefined}
  {...(onClick ? {tabindex: 0} : {})}
  onkeydown={handleKeyDown}
>
  <div class={iconClasses}>
    <Icon name={getIconName(type)} size="sm" />
  </div>
  <div class={labelClasses}>{label}</div>
  {#if count > 0}
    <div class={countClasses}>{count}</div>
  {/if}
</div>