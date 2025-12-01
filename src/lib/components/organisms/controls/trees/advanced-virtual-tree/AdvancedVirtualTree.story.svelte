<script lang="ts">
  import AdvancedVirtualTree from './AdvancedVirtualTree.svelte';
  import type { TreeNode } from '$lib/types';

  // Create sample tree data
  const createSampleTree = (): TreeNode[] => [
    {
      key: 'folder-1',
      desc: 'Documents',
      child: [
        { 
          key: 'doc-1', 
          desc: 'Project Proposal.pdf',
          child: []
        },
        { 
          key: 'doc-2', 
          desc: 'Financial Report.xlsx',
          child: []
        },
        {
          key: 'folder-1-1',
          desc: 'Contracts',
          child: [
            { 
              key: 'contract-1', 
              desc: 'Vendor Agreement.docx',
              child: []
            },
            { 
              key: 'contract-2', 
              desc: 'Customer Contract.pdf',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'folder-2',
      desc: 'Projects',
      child: [
        {
          key: 'project-1',
          desc: 'Website Redesign',
          child: [
            { 
              key: 'project-1-1', 
              desc: 'Research',
              child: [
                { 
                  key: 'research-1', 
                  desc: 'User Interviews.pdf',
                  child: []
                }
              ]
            },
            { 
              key: 'project-1-2', 
              desc: 'Design',
              child: []
            }
          ]
        },
        {
          key: 'project-2',
          desc: 'Mobile App',
          child: [
            { 
              key: 'mobile-1', 
              desc: 'Wireframes',
              child: []
            },
            { 
              key: 'mobile-2', 
              desc: 'Prototypes',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'folder-3',
      desc: 'Archive',
      child: []
    }
  ];

  let treeData: TreeNode[] = $state(createSampleTree());
  let selectedKey: string | undefined = $state(undefined);

  function handleSelectCallback(key: string | undefined) {
    console.log('Selected node:', key);
    selectedKey = key;
  }

  function handleToggleCallback(key: string | undefined) {
    console.log('Toggled node:', key);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AdvancedVirtualTree Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Advanced Virtual Tree</h2>
    <p class="text-sm text-gray-600 mb-2">Selected node: {selectedKey || 'None'}</p>
    <div class="border rounded">
      <AdvancedVirtualTree
        tree={treeData}
        onSelectCallback={handleSelectCallback}
        onToggleCallback={handleToggleCallback}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Virtual Tree with Custom Heights</h2>
      <div class="border rounded h-64">
        <AdvancedVirtualTree
          tree={treeData}
          itemHeight={40}
          visibleItemCount={10}
          onSelectCallback={(key) => console.log('Custom height tree selection:', key)}
          onToggleCallback={(key) => console.log('Custom height tree toggle:', key)}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Virtual Tree with Buffer Size</h2>
      <div class="border rounded h-64">
        <AdvancedVirtualTree
          tree={treeData}
          bufferSize={8}
          visibleItemCount={12}
          onSelectCallback={(key) => console.log('Buffer tree selection:', key)}
          onToggleCallback={(key) => console.log('Buffer tree toggle:', key)}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Advanced Virtual Tree</h2>
    <div class="border rounded h-80">
      <AdvancedVirtualTree
        tree={treeData}
      />
    </div>
  </div>
  
  <div class="mt-4 p-4 border rounded bg-gray-50">
    <h2 class="text-md font-semibold mb-2">Tree Controls</h2>
    <div class="flex flex-wrap gap-2">
      <button 
        class="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onclick={() => treeData = createSampleTree()}
      >
        Reset Tree
      </button>
      <button 
        class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        onclick={() => {
          const newTree = [...treeData];
          newTree.push({
            key: `folder-${Date.now()}`,
            desc: `New Folder ${treeData.length + 1}`,
            child: []
          });
          treeData = newTree;
        }}
      >
        Add Folder
      </button>
    </div>
  </div>
</div>