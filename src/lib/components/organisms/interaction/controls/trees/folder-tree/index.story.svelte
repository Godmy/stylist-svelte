<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import TreeView from './index.svelte';

  type Props = {
    expandable: boolean;
    selectable: boolean;
    showIcons: boolean;
    indentSize: number;
  };

  const controls: ControlConfig[] = [
    { name: 'expandable', type: 'boolean', defaultValue: true },
    { name: 'selectable', type: 'boolean', defaultValue: true },
    { name: 'showIcons', type: 'boolean', defaultValue: true },
    { name: 'indentSize', type: 'number', defaultValue: 20 }
  ];

  const nodes = [
    { 
      id: '1', 
      label: 'Documents', 
      icon: '📁',
      type: 'folder',
      children: [
        { id: '1-1', label: 'Reports', icon: '📁', type: 'folder', children: [
          { id: '1-1-1', label: 'Q1 Report.pdf', icon: '📄', type: 'file' },
          { id: '1-1-2', label: 'Q2 Report.pdf', icon: '📄', type: 'file' }
        ]}, 
        { id: '1-2', label: 'Images', icon: '📁', type: 'folder', children: [
          { id: '1-2-1', label: 'photo1.jpg', icon: '🖼️', type: 'file' },
          { id: '1-2-2', label: 'photo2.jpg', icon: '🖼️', type: 'file' }
        ]} 
      ] 
    },
    { 
      id: '2', 
      label: 'Projects', 
      icon: '📁',
      type: 'folder',
      children: [
        { id: '2-1', label: 'Project Alpha', icon: '📁', type: 'folder', children: [
          { id: '2-1-1', label: 'spec.docx', icon: '📄', type: 'file' },
          { id: '2-1-2', label: 'budget.xlsx', icon: '📊', type: 'file' }
        ]},
        { id: '2-2', label: 'Project Beta', icon: '📁', type: 'folder' }
      ] 
    },
    { 
      id: '3', 
      label: 'Downloads', 
      icon: '📁',
      type: 'folder',
      children: [
        { id: '3-1', label: 'installer.exe', icon: '⚙️', type: 'file' },
        { id: '3-2', label: 'archive.zip', icon: '📦', type: 'file' }
      ] 
    }
  ];

  function handleNodeSelect(node: any) {
    console.log('Node selected:', node);
  }

  function handleNodeExpand(node: any) {
    console.log('Node expanded:', node);
  }

  function handleNodeCollapse(node: any) {
    console.log('Node collapsed:', node);
  }
</script>

<Story
  id="organisms-folder-tree"
  title="Organisms / Interaction / Controls / Trees / Folder Tree"
  component={TreeView}
  category="Organisms/Interaction/Controls/Trees"
  description="A folder tree component for displaying file system-like hierarchical data."
  tags={['tree', 'folder', 'file-system', 'navigation']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-folder-tree p-4">
      <h1 class="text-lg font-semibold mb-4">FolderTree Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive FolderTree</h2>
        <div class="max-w-md">
          <TreeView 
            {nodes}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>

