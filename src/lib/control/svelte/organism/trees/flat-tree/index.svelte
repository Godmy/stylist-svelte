<script lang="ts">
  import { TreeControlsStyleManager } from '$stylist/control/class/style-manager/tree-controls';
  import type { FlatTreeProps } from '$stylist/control/type/struct/flat-tree-props';
  import { createTreeExpansionState } from '$stylist/control/function/state/tree-expansion';
  let { nodes = [], class: className = '', ...restProps }: FlatTreeProps = $props();
  const state = createTreeExpansionState();
</script>

<div class={TreeControlsStyleManager.root('c-flat-tree', className)} {...restProps}>
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






