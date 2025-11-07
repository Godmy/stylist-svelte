<script lang="ts">
  // Define local types
  interface Position2D {
    x: number;
    y: number;
  }

  interface OntologyNode {
    id: string;
    name: string;
    type: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
    properties?: Record<string, any>;
  }
  import Button from '../../atoms/controls/Button.svelte';
  import Icon from '../../atoms/media/Icon.svelte';

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

  // Determine node appearance based on type
  const getNodeStyle = (type: string) => {
    switch (type) {
      case 'class':
        return {
          shape: 'rounded-lg',
          border: 'border-blue-500',
          bg: 'bg-blue-50',
          text: 'text-blue-700',
          icon: 'square'
        };
      case 'object-property':
        return {
          shape: 'rounded-full',
          border: 'border-green-500',
          bg: 'bg-green-50',
          text: 'text-green-700',
          icon: 'arrow-right'
        };
      case 'datatype-property':
        return {
          shape: 'rounded-md',
          border: 'border-purple-500',
          bg: 'bg-purple-50',
          text: 'text-purple-700',
          icon: 'database'
        };
      case 'datatype':
        return {
          shape: 'rounded',
          border: 'border-yellow-500',
          bg: 'bg-yellow-50',
          text: 'text-yellow-700',
          icon: 'type'
        };
      case 'deprecated':
        return {
          shape: 'rounded-lg line-through',
          border: 'border-gray-400',
          bg: 'bg-gray-100',
          text: 'text-gray-500',
          icon: 'x'
        };
      case 'equivalent-class':
        return {
          shape: 'rounded-lg border-dashed',
          border: 'border-indigo-500',
          bg: 'bg-indigo-50',
          text: 'text-indigo-700',
          icon: 'zap'
        };
      default:
        return {
          shape: 'rounded-lg',
          border: 'border-gray-400',
          bg: 'bg-gray-50',
          text: 'text-gray-700',
          icon: 'circle'
        };
    }
  };

  const style = $derived(getNodeStyle(node.type));
  
  // Calculate dimensions based on content
  let width = $state(node.width || 120);
  let height = $state(node.height || 60);
  
  // Calculate appropriate font size based on node size
  const fontSize = $derived(Math.min(14, width / (node.label?.length || node.name.length || 8)));
</script>

<div class="{className} {style.shape} {style.border} {style.bg} border-2 p-2 flex flex-col items-center justify-center text-center text-xs font-medium {style.text} shadow-sm hover:shadow-md transition-shadow duration-200">
  <div class="flex items-center justify-center w-full">
    <Icon name={style.icon} class="h-4 w-4 mr-1 text-current" />
    {#if showLabel}
      <span class="truncate max-w-[80px]" title={node.label || node.id}>
        {node.label || node.id}
      </span>
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