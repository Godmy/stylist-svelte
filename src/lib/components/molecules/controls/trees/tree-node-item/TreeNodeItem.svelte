<script lang="ts">
  import type { ITreeNodeItemProps } from './types';
  import { TreeNodeItemStyleManager } from './styles';
  import { ChevronRight, ChevronDown, type Component } from 'lucide-svelte';
  import type { TreeNode } from '$lib/types';
  import Self from './TreeNodeItem.svelte';
  import './TreeNodeItem.css';

  /**
   * TreeNodeItem component - A flexible tree node item component with various states
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles tree node item rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other tree components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param node - The tree node data
   * @param onSelectCallback - Callback function when node is selected
   * @param secondaryIcon - Secondary icon to display
   * @param faIcon - Whether to use Font Awesome icons
   * @param expandedNodes - Set of expanded node IDs
   * @returns An accessible, styled tree node item element
   */
  let {
    node,
    onSelectCallback = () => {},
    secondaryIcon = undefined,
    faIcon = false,
    expandedNodes,
    class: className = '',
    children,
    ...restProps
  }: ITreeNodeItemProps = $props();

  // Initialize expandedNodes if not provided
  if (!expandedNodes) {
    expandedNodes = new Set();
  }

  import { createEventDispatcher } from 'svelte';

  let dispatch = createEventDispatcher();

  // Function to handle node selection
  const handleSelect = () => {
    if (node.key) {
      onSelectCallback(node.key);
      dispatch('nodeSelect', { node });
    }
  };

  // Function to toggle node expansion
  const toggleExpand = (e: Event) => {
    e.stopPropagation();
    if (node.key) {
      if (expandedNodes.has(node.key)) {
        expandedNodes.delete(node.key);
      } else {
        expandedNodes.add(node.key);
      }
    }
    dispatch('nodeToggle', { node });
  };

  // Function to check if node has children
  const hasChildren = (node: TreeNode): boolean => {
    return node.child !== undefined && node.child.length > 0;
  };

  // Check if this node is expanded
  let expanded = $derived(node.key ? expandedNodes.has(node.key) : false);

  // Get CSS classes
  const containerClasses = $derived(TreeNodeItemStyleManager.getNodeContainerClasses());
  const headerClasses = $derived(TreeNodeItemStyleManager.getNodeHeaderClasses(expanded));
  const toggleIconClasses = $derived(TreeNodeItemStyleManager.getToggleIconClasses());
  const noToggleClasses = $derived(TreeNodeItemStyleManager.getNoToggleClasses());
  const textClasses = $derived(TreeNodeItemStyleManager.getNodeTextClasses());
  const secondaryIconClasses = $derived(TreeNodeItemStyleManager.getSecondaryIconClasses());
  const secondaryIconImageClasses = $derived(TreeNodeItemStyleManager.getSecondaryIconImageClasses());
  const childrenClasses = $derived(TreeNodeItemStyleManager.getNodeChildrenClasses());

  // Function to filter restProps to avoid conflicts with native HTML events
  const filteredRestProps = $derived(() => {
    // Create a copy of restProps and remove conflicting event handlers
    const filtered: Record<string, any> = {};
    for (const [key, value] of Object.entries(restProps)) {
      if (key !== 'ontoggle' && key !== 'onselect') {  // Exclude conflicting event handlers
        filtered[key] = value;
      }
    }
    return filtered;
  });
</script>

<div class={containerClasses}>
  <div
    class={headerClasses}
    onclick={() => !hasChildren(node) && handleSelect()}
    onkeydown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        !hasChildren(node) && handleSelect();
      }
    }}
    role="treeitem"
    tabindex="0"
    aria-expanded={hasChildren(node) ? expanded : undefined}
    aria-selected="false"
    {...filteredRestProps}
  >
    {#if hasChildren(node)}
      <button
        type="button"
        class={toggleIconClasses}
        onclick={toggleExpand}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand(e);
          }
        }}
        tabindex="0"
        aria-label={expanded ? 'Collapse' : 'Expand'}
      >
        {#if expanded}
          <ChevronDown class="w-4 h-4" />
        {:else}
          <ChevronRight class="w-4 h-4" />
        {/if}
      </button>
    {:else}
      <div class={noToggleClasses}></div>
    {/if}

    <span class={textClasses}>{node.desc}</span>

    {#if secondaryIcon}
      {#if faIcon}
        <span class={secondaryIconClasses}>{secondaryIcon}</span>
      {:else}
        <img src={secondaryIcon} alt="secondary icon" class={secondaryIconImageClasses} />
      {/if}
    {/if}
  </div>

  {#if hasChildren(node) && expanded}
    <div class={childrenClasses} role="group">
      {#each node.child as child (child.key || child.desc)}
        <Self
          node={child}
          onSelectCallback={onSelectCallback}
          secondaryIcon={secondaryIcon}
          faIcon={faIcon}
          expandedNodes={expandedNodes}
        />
      {/each}
    </div>
  {/if}
</div>