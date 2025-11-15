<script lang="ts">
  import type { Variant } from '$lib/types';
  import { Icon } from '$lib/components/atoms';

  // Props
  let { 
    label = '',
    type = 'object',
    count = 0,
    variant = 'default' as Variant,
    active = false,
    onClick
  }: {
    label: string;
    type: 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';
    count?: number;
    variant?: Variant;
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
  let itemClasses = $derived([
    'legend-item',
    `variant-${variant}`,
    active ? 'active' : '',
    onClick ? 'clickable' : ''
  ].filter(Boolean).join(' '));
</script>

<style>
  .legend-item {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
    gap: 0.5rem;
    transition: all 0.2s ease;
    cursor: default;
  }

  .legend-item.clickable {
    cursor: pointer;
  }

  .legend-item.clickable:hover {
    background-color: #f1f5f9;
  }

  .legend-item.active {
    background-color: #e0f2fe;
    border-left: 3px solid #0ea5e9;
  }

  .legend-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .legend-label {
    flex-grow: 1;
    font-size: 0.875rem;
    color: #1e293b;
  }

  .legend-count {
    font-size: 0.75rem;
    color: #64748b;
    background-color: #e2e8f0;
    border-radius: 9999px;
    padding: 0.125rem 0.5rem;
  }
</style>

<div 
  class={itemClasses}
  onclick={onClick}
  role={onClick ? "button" : undefined}
  {...(onClick ? {tabindex: 0} : {})}
  onkeydown={(e: KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  }}
>
  <div class="legend-icon">
    <Icon name={getIconName(type)} size="sm" />
  </div>
  <div class="legend-label">{label}</div>
  {#if count > 0}
    <div class="legend-count">{count}</div>
  {/if}
</div>