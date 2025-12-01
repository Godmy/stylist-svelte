<script lang="ts">
  import { Button } from '$lib/components/atoms';
  import { createEventDispatcher } from 'svelte';

  type ToolbarItem = {
    id: string;
    label: string;
    icon: string;
    action: () => void;
  };

  interface ToolbarProps {
    toolbarItems?: ToolbarItem[];
    compact?: boolean;
    disabled?: boolean;
    class?: string;
  }

  let {
    toolbarItems = [],
    compact = false,
    disabled = false,
    class: className = ''
  }: ToolbarProps = $props();

  // Events
  const dispatch = createEventDispatcher<{
    togglelegend: {};
    togglesearch: {};
  }>();

  // Local state
  let showButtons = $state(true);

  // Helper function to get button size based on compact prop
  const getButtonSize = () => compact ? 'sm' : 'md';
</script>

<style>
  .toolbar {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.5rem;
    background-color: #f1f5f9;
    border-radius: 0.375rem;
    border: 1px solid #cbd5e1;
  }
</style>

<div class="toolbar" class:className>
  {#each toolbarItems as item}
    <Button
      variant="ghost"
      size={getButtonSize()}
      onclick={() => {
        if (!disabled) {
          item.action();
        }
      }}
      title={item.label}
      disabled={disabled}
    >
      {item.icon}
    </Button>
  {/each}
</div>
