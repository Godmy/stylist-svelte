<script lang="ts">
  import { TreeControlsStyleManager } from '$stylist/design-system/styles/tree-controls';
  import type { TreeNode, VirtualTreeProps } from '$stylist/design-system/props/tree-controls';
  let { nodes = [], class: className = '', ...restProps }: VirtualTreeProps = $props();
  let expanded = $state<Record<string,boolean>>({});
  function toggle(id:string){ expanded={...expanded,[id]:!expanded[id]}; }
  function isOpen(n:TreeNode){ return expanded[n.id] ?? !!n.expanded; }
</script>

<div class={TreeControlsStyleManager.root('c-virtual-tree', className)} {...restProps}>
  <ul class="space-y-1">
    {#each nodes as node}
      <li>
        <button type="button" class="w-full text-left px-2 py-1 rounded hover:bg-gray-100" onclick={() => toggle(node.id)}>{node.children?.length ? (isOpen(node)?'-':'+') : '•'} {node.label}</button>
        {#if node.children?.length && isOpen(node)}
          <ul class="ml-5 mt-1 space-y-1">
            {#each node.children as child}
              <li class="px-2 py-1 rounded bg-gray-50">{child.label}</li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>
