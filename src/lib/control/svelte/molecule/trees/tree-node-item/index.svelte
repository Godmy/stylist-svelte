<script lang="ts">
  import type { TreeNodeItemNode } from '$stylist/control/type/struct/tree-node-item-node';
  import { Icon as BaseIcon } from '$stylist';
  import type { TreeNodeItemProps } from '$stylist/control/function/state/tree-node-item';
  import { createTreeNodeItemState } from '$stylist/control/function/state/tree-node-item';
  import Self from './index.svelte';

  let props: TreeNodeItemProps = $props();
  const state = createTreeNodeItemState(props);
</script>

<div class={state.containerClasses}>
  <div
    class={state.headerClasses}
    onclick={() => !state.hasChildren && state.handleSelect()}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        !state.hasChildren && state.handleSelect();
      }
    }}
    role="treeitem"
    tabindex="0"
    aria-expanded={state.hasChildren ? state.expanded : undefined}
    aria-selected="false"
    {...state.filteredRestProps}
  >
    {#if state.hasChildren}
      <button
        type="button"
        class={state.toggleIconClasses}
        onclick={state.toggleExpand}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            state.toggleExpand(e);
          }
        }}
        tabindex="0"
        aria-label={state.expanded ? 'Collapse' : 'Expand'}
      >
        {#if state.expanded}
          <BaseIcon name={state.ChevronDown} class="w-4 h-4" />
        {:else}
          <BaseIcon name={state.ChevronRight} class="w-4 h-4" />
        {/if}
      </button>
    {:else}
      <div class={state.noToggleClasses}></div>
    {/if}

    <span class={state.textClasses}>{state.node.desc}</span>

    {#if state.secondaryIcon}
      {#if state.faIcon}
        <span class={state.secondaryIconClasses}>{state.secondaryIcon}</span>
      {:else}
        <img src={state.secondaryIcon} alt="secondary icon" class={state.secondaryIconImageClasses} />
      {/if}
    {/if}
  </div>

  {#if state.hasChildren && state.expanded}
    <div class={state.childrenClasses} role="group">
      {#each state.node.child as child (child.key || child.desc)}
        <Self
          node={child}
          onSelectCallback={props.onSelectCallback}
          secondaryIcon={state.secondaryIcon}
          faIcon={state.faIcon}
          expandedNodes={state.expandedNodes}
        />
      {/each}
    </div>
  {/if}
</div>

<style>
/* Base tree node container styles */
.tree-node-container {
  display: flex;
  flex-direction: column;
}

/* Tree node header styles */
.tree-node-header {
  display: flex;
  align-items: center;
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-base);
  cursor: pointer;
  transition: background-color ;
  min-height: var(--spacing-8);
}

.tree-node-header:hover {
  background-color: var(--color-secondary-100);
}

.tree-node-header-expanded {
  background-color: var(--color-secondary-50);
}

/* Tree toggle icon styles */
.tree-toggle-icon {
  width: var(--spacing-4);
  height: var(--spacing-4);
  margin-right: var(--spacing-2);
  cursor: pointer;
  color: var(--color-text-secondary);
}

.tree-toggle-icon:hover {
  color: var(--color-text-primary);
}

/* No toggle placeholder */
.tree-no-toggle {
  width: var(--spacing-4);
  height: var(--spacing-4);
  margin-right: var(--spacing-2);
}

/* Tree node text */
.tree-node-text {
  flex: 1;
  color: var(--color-text-primary);
}

/* Secondary icon */
.tree-secondary-icon {
  margin-left: var(--spacing-2);
  color: var(--color-text-secondary);
}

.tree-secondary-icon-img {
  margin-left: var(--spacing-2);
  width: var(--spacing-4);
  height: var(--spacing-4);
}

/* Tree node children */
.tree-node-children {
  margin-left: var(--spacing-6);
  border-left: 2px solid var(--color-border-secondary);
  padding-left: var(--spacing-2);
}
</style>






