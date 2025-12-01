<script lang="ts">
  type BaseComponentProps = {
    class?: string;
    'data-testid'?: string;
  };
  
  import { Button, Icon } from '$lib/components/atoms';
  
  type QuickAction = {
    id: string;
    label: string;
    icon: string;
    shortcut?: string;
    action: () => void;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
    disabled?: boolean;
  };

  type Props = BaseComponentProps & {
    actions?: QuickAction[];
    position?: 'top' | 'bottom' | 'left' | 'right';
    compact?: boolean;
  };

  let { 
    actions = [],
    position = 'top',
    compact = false,
    class: className = '' 
  }: Props = $props();
  
  // Determine button classes based on compact mode
  const getButtonClass = (compact: boolean) => {
    return compact ? 
      'p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700' : 
      'mr-2';
  };
  
  // Get icon size based on compact mode
  const getIconSize = (compact: boolean) => {
    return compact ? 'h-5 w-5' : 'h-4 w-4';
  };
</script>

<div class="quick-access-buttons {position === 'top' || position === 'bottom' ? 'flex items-center' : 'flex flex-col items-center'} {compact ? 'space-x-1' : 'space-x-2'} {className}">
  {#each actions as action}
    <Button
      variant={action.variant}
      size={compact ? 'sm' : 'md'}
      onclick={action.action}
      disabled={action.disabled}
      title={action.shortcut ? `${action.label} (${action.shortcut})` : action.label}
      class={getButtonClass(compact)}
    >
      <Icon name={action.icon} class="{getIconSize(compact)} {compact ? '' : 'mr-2'}" />
      {#if !compact}
        <span>{action.label}</span>
      {/if}
    </Button>
  {/each}
</div>

<style>
  .quick-access-buttons {
    display: flex;
  }
</style>
