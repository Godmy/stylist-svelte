<script lang="ts">
  import { OntologyNodeComponentStyleManager } from '$stylist/design-system/styles/ontology-node-component';
  import { Icon } from '$stylist/components/atoms';

  type Position2D = { x: number; y: number };

  type OntologyNode = {
    id: string;
    name: string;
    type: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };

  type Props = {
    node: OntologyNode;
    showLabel?: boolean;
    class?: string;
  };

  let {
    node,
    showLabel = true,
    class: className = ''
  }: Props = $props();

  const style = $derived(OntologyNodeComponentStyleManager.getNodeStyle(node.type));
  const baseClasses = $derived(OntologyNodeComponentStyleManager.getBaseClasses(node.type, className));
</script>

<div class={baseClasses}>
  <div class="flex items-center justify-center w-full">
    <Icon name={style.icon} class="h-4 w-4 mr-1 text-current" />
    {#if showLabel}
      <span class="truncate max-w-[80px]" title={node.label || node.id}>{node.label || node.id}</span>
    {/if}
  </div>

  {#if node.attributes && node.attributes.length > 0}
    <div class="mt-1 text-[0.6rem] opacity-75 flex flex-wrap justify-center gap-1">
      {#each node.attributes as attr}
        <span class="bg-current bg-opacity-10 px-1 rounded">{attr}</span>
      {/each}
    </div>
  {/if}
</div>
