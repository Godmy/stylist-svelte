<script lang="ts">
  import FlatTree from './FlatTree.svelte';
  import type { TreeNode } from '$lib/types';

  // Create sample tree data
  const createSampleTree = (): TreeNode[] => [
    {
      key: 'category-1',
      desc: 'Fruits',
      child: [
        { 
          key: 'fruit-1', 
          desc: 'Apple',
          child: []
        },
        { 
          key: 'fruit-2', 
          desc: 'Banana',
          child: []
        },
        {
          key: 'sub-category-1',
          desc: 'Berries',
          child: [
            { 
              key: 'berry-1', 
              desc: 'Strawberry',
              child: []
            },
            { 
              key: 'berry-2', 
              desc: 'Blueberry',
              child: []
            },
            { 
              key: 'berry-3', 
              desc: 'Raspberry',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'category-2',
      desc: 'Vegetables',
      child: [
        {
          key: 'veg-1',
          desc: 'Leafy Greens',
          child: [
            { 
              key: 'leaf-1', 
              desc: 'Spinach',
              child: []
            },
            { 
              key: 'leaf-2', 
              desc: 'Lettuce',
              child: []
            }
          ]
        },
        {
          key: 'veg-2',
          desc: 'Root Vegetables',
          child: [
            { 
              key: 'root-1', 
              desc: 'Carrot',
              child: []
            },
            { 
              key: 'root-2', 
              desc: 'Potato',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'category-3',
      desc: 'Grains',
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
  <h1 class="text-lg font-semibold mb-4">FlatTree Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Flat Tree</h2>
    <p class="text-sm text-gray-600 mb-2">Selected node: {selectedKey || 'None'}</p>
    <div class="border rounded p-4 bg-white">
      <FlatTree
        tree={treeData}
        onSelectCallback={handleSelectCallback}
        onToggleCallback={handleToggleCallback}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Flat Tree with Custom Styling</h2>
      <div class="border rounded p-4 bg-gray-50">
        <FlatTree
          tree={treeData}
          class="custom-flat-tree"
          onSelectCallback={(key: string | undefined) => console.log('Custom tree selection:', key)}
          onToggleCallback={(key: string | undefined) => console.log('Custom tree toggle:', key)}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Flat Tree with Expanded Default</h2>
      <div class="border rounded p-4 bg-white">
        <FlatTree
          tree={treeData}
          onSelectCallback={(key: string | undefined) => console.log('Expanded tree selection:', key)}
          onToggleCallback={(key: string | undefined) => console.log('Expanded tree toggle:', key)}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Flat Tree</h2>
    <div class="border rounded p-4 bg-white">
      <FlatTree
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
            key: `category-${Date.now()}`,
            desc: `New Category ${treeData.length + 1}`,
            child: []
          });
          treeData = newTree;
        }}
      >
        Add Category
      </button>
    </div>
  </div>
</div>