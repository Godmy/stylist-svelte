<script lang="ts">
  import { LegendItemStyleManager } from '$stylist/design-system/styles/legend-item';
  import { Icon } from '$stylist/components/atoms';

  type LegendItemType = 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';

  type LegendItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

  let {
    label = '',
    type = 'object',
    count = 0,
    variant = 'default',
    active = false,
    onClick
  }: {
    label: string;
    type: LegendItemType;
    count?: number;
    variant?: LegendItemVariant;
    active?: boolean;
    onClick?: () => void;
  } = $props();

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

