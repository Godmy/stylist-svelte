<script lang="ts">
  import TreeViewer from './index.svelte';
  import type { TreeNode } from '$stylist/design-system/props/tree-node-item';

  // Create sample tree data
  const createSampleTree = (): TreeNode[] => [
    {
      key: 'root-1',
      desc: 'System Architecture',
      child: [
        { 
          key: 'module-1', 
          desc: 'Authentication Module',
          child: [
            { 
              key: 'auth-1', 
              desc: 'Login Component',
              child: []
            },
            { 
              key: 'auth-2', 
              desc: 'Registration Component',
              child: []
            }
          ]
        },
        { 
          key: 'module-2', 
          desc: 'Data Management',
          child: [
            { 
              key: 'data-1', 
              desc: 'Database Layer',
              child: []
            },
            { 
              key: 'data-2', 
              desc: 'API Services',
              child: []
            }
          ]
        },
        {
          key: 'module-3',
          desc: 'UI Components',
          child: [
            { 
              key: 'ui-1', 
              desc: 'Layout Components',
              child: []
            },
            { 
              key: 'ui-2', 
              desc: 'Form Components',
              child: []
            },
            { 
              key: 'ui-3', 
              desc: 'Navigation Components',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'root-2',
      desc: 'Documentation',
      child: [
        {
          key: 'doc-1',
          desc: 'API Documentation',
          child: [
            { 
              key: 'api-1', 
              desc: 'User API',
              child: []
            },
            { 
              key: 'api-2', 
              desc: 'Product API',
              child: []
            }
          ]
        },
        {
          key: 'doc-2',
          desc: 'User Guides',
          child: [
            { 
              key: 'guide-1', 
              desc: 'Getting Started',
              child: []
            },
            { 
              key: 'guide-2', 
              desc: 'Advanced Usage',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'root-3',
      desc: 'Configuration',
      child: []
    }
  ];

  let treeData: TreeNode[] = $state(createSampleTree());
  let selectedKey: string | undefined = $state(undefined);

  function handleSelectCallback(key: string | undefined) {
    console.log('Selected node in TreeViewer:', key);
    selectedKey = key;
  }

  function handleToggleCallback(key: string | undefined) {
    console.log('Toggled node in TreeViewer:', key);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">TreeViewer Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Tree Viewer</h2>
    <p class="text-sm text-gray-600 mb-2">Selected node: {selectedKey || 'None'}</p>
    <div class="border rounded">
      <TreeViewer
        tree={treeData}
        onSelectCallback={handleSelectCallback}
        onToggleCallback={handleToggleCallback}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Tree Viewer with Custom Heights</h2>
      <div class="border rounded h-64">
        <TreeViewer
          tree={treeData}
          itemHeight={42}
          visibleItemCount={12}
          onSelectCallback={(key) => console.log('Custom height tree viewer selection:', key)}
          onToggleCallback={(key) => console.log('Custom height tree viewer toggle:', key)}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Tree Viewer with Buffer Size</h2>
      <div class="border rounded h-64">
        <TreeViewer
          tree={treeData}
          bufferSize={10}
          visibleItemCount={10}
          onSelectCallback={(key) => console.log('Buffer tree viewer selection:', key)}
          onToggleCallback={(key) => console.log('Buffer tree viewer toggle:', key)}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Tree Viewer</h2>
    <div class="border rounded h-80">
      <TreeViewer 
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
            key: `root-${Date.now()}`,
            desc: `New Root ${treeData.length + 1}`,
            child: []
          });
          treeData = newTree;
        }}
      >
        Add Root Node
      </button>
    </div>
  </div>
</div>