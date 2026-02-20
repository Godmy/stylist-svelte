<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TreeView from './index.svelte';

  type Props = {
    expandable: boolean;
    selectable: boolean;
    showIcons: boolean;
    indentSize: number;
    virtualScroll: boolean;
    showCheckboxes: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'expandable', type: 'boolean', defaultValue: true },
    { name: 'selectable', type: 'boolean', defaultValue: true },
    { name: 'showIcons', type: 'boolean', defaultValue: true },
    { name: 'indentSize', type: 'number', defaultValue: 20 },
    { name: 'virtualScroll', type: 'boolean', defaultValue: true },
    { name: 'showCheckboxes', type: 'boolean', defaultValue: false }
  ];

  // Generate a large tree for virtual scrolling demo
  const generateLargeTree = () => {
    const roots = [];
    for (let i = 1; i <= 10; i++) {
      const root = {
        id: `root-${i}`,
        label: `Root ${i}`,
        icon: 'рџ“Ѓ',
        children: [] as any[]
      };
      for (let j = 1; j <= 5; j++) {
        const child = {
          id: `root-${i}-child-${j}`,
          label: `Child ${i}-${j}`,
          icon: 'рџ“Ѓ',
          children: [] as any[]
        };
        for (let k = 1; k <= 3; k++) {
          child.children.push({
            id: `root-${i}-child-${j}-leaf-${k}`,
            label: `Leaf ${i}-${j}-${k}`,
            icon: 'рџ“„',
            type: 'leaf'
          });
        }
        root.children.push(child);
      }
      roots.push(root);
    }
    return roots;
  };

  const nodes = generateLargeTree();

  function handleNodeSelect(node: any) {
    console.log('Node selected:', node);
  }

  function handleNodeExpand(node: any) {
    console.log('Node expanded:', node);
  }

  function handleNodeCollapse(node: any) {
    console.log('Node collapsed:', node);
  }

  function handleCheck(node: any) {
    console.log('Node checked:', node);
  }
</script>

<Story
  id="organisms-advanced-virtual-tree"
  title="Organisms / Interaction / Controls / Trees / Advanced Virtual Tree"
  component={TreeView}
  category="Organisms/Interaction/Controls/Trees"
  description="An advanced virtual tree component for displaying large hierarchical datasets with optimal performance."
  tags={['tree', 'virtual', 'large-data', 'performance']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-organisms-advanced-virtual-tree p-4">
      <h1 class="text-lg font-semibold mb-4">AdvancedVirtualTree Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">
          Interactive AdvancedVirtualTree ({nodes.length} root nodes, ~{nodes.length * 5} children)
        </h2>
        <div class="max-w-md" style="height: 400px; overflow: auto;">
          <TreeView 
            {nodes} 
            expandable={props.expandable}
            selectable={props.selectable}
            showIcons={props.showIcons}
            indentSize={props.indentSize}
            virtualScroll={props.virtualScroll}
            showCheckboxes={props.showCheckboxes}
            onNodeSelect={handleNodeSelect}
            onNodeExpand={handleNodeExpand}
            onNodeCollapse={handleNodeCollapse}
            onCheck={handleCheck}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

