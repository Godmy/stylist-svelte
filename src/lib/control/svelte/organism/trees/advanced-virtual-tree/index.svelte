<script lang="ts">
  import { TreeControlsStyleManager } from '$stylist/control/class/style-manager/tree-controls';
  import type { AdvancedVirtualTreeProps } from '$stylist/control/type/struct/advanced-virtual-tree-props';
  import { createTreeExpansionState } from '$stylist/control/function/state/tree-expansion';
  let { nodes = [], class: className = '', ...restProps }: AdvancedVirtualTreeProps = $props();
  const state = createTreeExpansionState();
</script>

<div class={TreeControlsStyleManager.root('c-advanced-virtual-tree', className)} {...restProps}>
  <ul class="space-y-1">
    {#each nodes as node}
      <li>
        <button type="button" class="w-full text-left px-2 py-1 rounded hover:bg-[var(--color-background-secondary)]" onclick={() => state.toggle(node.id)}>{node.children?.length ? (state.isOpen(node)?'-':'+') : ''} {node.label}</button>
        {#if node.children?.length && state.isOpen(node)}
          <ul class="ml-5 mt-1 space-y-1">
            {#each node.children as child}
              <li class="px-2 py-1 rounded bg-[var(--color-background-secondary)]">{child.label}</li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>






