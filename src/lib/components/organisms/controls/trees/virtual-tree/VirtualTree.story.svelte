<script lang="ts">
  import VirtualTree from './VirtualTree.svelte';
  import type { TreeNode } from '$lib/types';

  // Create sample tree data
  const createSampleTree = (): TreeNode[] => [
    {
      key: 'org-1',
      desc: 'Company Structure',
      child: [
        { 
          key: 'dept-1', 
          desc: 'Engineering',
          child: [
            { 
              key: 'team-1', 
              desc: 'Frontend Team',
              child: [
                { 
                  key: 'member-1', 
                  desc: 'Frontend Developer 1',
                  child: []
                },
                { 
                  key: 'member-2', 
                  desc: 'Frontend Developer 2',
                  child: []
                }
              ]
            },
            { 
              key: 'team-2', 
              desc: 'Backend Team',
              child: [
                { 
                  key: 'member-3', 
                  desc: 'Backend Developer 1',
                  child: []
                },
                { 
                  key: 'member-4', 
                  desc: 'Backend Developer 2',
                  child: []
                }
              ]
            }
          ]
        },
        { 
          key: 'dept-2', 
          desc: 'Marketing',
          child: [
            { 
              key: 'team-3', 
              desc: 'Digital Marketing',
              child: []
            },
            { 
              key: 'team-4', 
              desc: 'Content Creation',
              child: []
            }
          ]
        },
        {
          key: 'dept-3',
          desc: 'Human Resources',
          child: [
            { 
              key: 'team-5', 
              desc: 'Recruitment',
              child: []
            },
            { 
              key: 'team-6', 
              desc: 'Employee Relations',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'org-2',
      desc: 'Partners',
      child: [
        {
          key: 'partner-1',
          desc: 'Technology Partners',
          child: [
            { 
              key: 'tech-1', 
              desc: 'Cloud Services',
              child: []
            },
            { 
              key: 'tech-2', 
              desc: 'Security Solutions',
              child: []
            }
          ]
        },
        {
          key: 'partner-2',
          desc: 'Consulting Partners',
          child: [
            { 
              key: 'consult-1', 
              desc: 'Strategy Consulting',
              child: []
            },
            { 
              key: 'consult-2', 
              desc: 'Technical Consulting',
              child: []
            }
          ]
        }
      ]
    },
    {
      key: 'org-3',
      desc: 'External Vendors',
      child: []
    }
  ];

  let treeData: TreeNode[] = $state(createSampleTree());
  let selectedKey: string | undefined = $state(undefined);

  function handleSelectCallback(key: string | undefined) {
    console.log('Selected node in VirtualTree:', key);
    selectedKey = key;
  }

  function handleToggleCallback(key: string | undefined) {
    console.log('Toggled node in VirtualTree:', key);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">VirtualTree Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Virtual Tree</h2>
    <p class="text-sm text-gray-600 mb-2">Selected node: {selectedKey || 'None'}</p>
    <div class="border rounded">
      <VirtualTree
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
        <VirtualTree
          tree={treeData}
          itemHeight={40}
          visibleItemCount={10}
          onSelectCallback={(key: string | undefined) => console.log('Custom height virtual tree selection:', key)}
          onToggleCallback={(key: string | undefined) => console.log('Custom height virtual tree toggle:', key)}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Virtual Tree with More Visible Items</h2>
      <div class="border rounded h-64">
        <VirtualTree
          tree={treeData}
          visibleItemCount={20}
          onSelectCallback={(key: string | undefined) => console.log('More items virtual tree selection:', key)}
          onToggleCallback={(key: string | undefined) => console.log('More items virtual tree toggle:', key)}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default Virtual Tree</h2>
    <div class="border rounded h-80">
      <VirtualTree
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
            key: `org-${Date.now()}`,
            desc: `New Organization ${treeData.length + 1}`,
            child: []
          });
          treeData = newTree;
        }}
      >
        Add Organization
      </button>
    </div>
  </div>
</div>