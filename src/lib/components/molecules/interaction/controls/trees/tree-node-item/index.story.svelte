<script context="module">
  export const title = "TreeNodeItem";
  export const category = "Molecules/Controls/Trees";
</script>

<script lang="ts">
  import TreeNodeItem from "./index.svelte";
  import type { ITreeNodeItemProps } from '$stylist/design-system/props/tree-node-item';
  import type { TreeNodeItemNode } from "$stylist/design-system/props/tree-node-item";

  // Sample tree node data
  const sampleTreeData: TreeNodeItemNode = {
    key: 'root',
    desc: 'Root Node',
    child: [
      {
        key: 'child1',
        desc: 'Child 1',
        child: [
          {
            key: 'grandchild1',
            desc: 'Grandchild 1'
          },
          {
            key: 'grandchild2',
            desc: 'Grandchild 2'
          }
        ]
      },
      {
        key: 'child2',
        desc: 'Child 2',
        child: [
          {
            key: 'grandchild3',
            desc: 'Grandchild 3'
          }
        ]
      },
      {
        key: 'child3',
        desc: 'Child 3 (no children)'
      }
    ]
  };

  const sampleTreeData2: TreeNodeItemNode = {
    key: 'folder1',
    desc: 'Documents',
    child: [
      {
        key: 'doc1',
        desc: 'Project Proposal.pdf'
      },
      {
        key: 'doc2',
        desc: 'Budget.xlsx'
      }
    ]
  };

  const sampleTreeData3: TreeNodeItemNode = {
    key: 'folder2',
    desc: 'Images',
    child: [
      {
        key: 'img1',
        desc: 'Photo1.jpg'
      },
      {
        key: 'img2',
        desc: 'Photo2.jpg'
      }
    ]
  };

  // Default scenarios
  const defaultPrimaryScenario: ITreeNodeItemProps = {
    node: sampleTreeData,
    expandedNodes: new Set(['root', 'child1'])
  };

  const variantScenariosData: ITreeNodeItemProps[] = [
    {
      node: sampleTreeData2,
      expandedNodes: new Set(['folder1'])
    },
    {
      node: sampleTreeData3,
      expandedNodes: new Set(['folder2'])
    }
  ];

  // State variables
  let faIcon = false;
  let disabled = false;

  // Use the provided scenarios or defaults
  let primaryScenario = defaultPrimaryScenario;
  let variantScenarios = variantScenariosData;

  // Handle node selection (for onSelectCallback, which expects key)
  function handleNodeSelectKey(key: string | undefined) {
    console.log('Node selected (key):', key);
  }

  // Handle node selection (event version - for onselect)
  function handleNodeSelectEvent(event: CustomEvent<{ node: TreeNodeItemNode }>) {
    console.log('Node selected (event):', event.detail.node);
  }

  // Handle node toggle (event version - for ontoggle)
  function handleNodeToggleEvent(event: CustomEvent<{ node: TreeNodeItemNode }>) {
    console.log('Node toggled (event):', event.detail.node);
  }
</script>

<div class="story-container">
  <h2>{title}</h2>
  <p>Interactive tree node with expandable/collapsible nodes.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Tree Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive tree node with expandable/collapsible nodes.</p>

        <div class="mt-6">
          <div class="border border-[--color-border-primary] rounded-lg p-4 bg-[--color-background-secondary]">
            <TreeNodeItem
              node={primaryScenario.node}
              onSelectCallback={handleNodeSelectKey}
              expandedNodes={primaryScenario.expandedNodes}
              onNodeSelect={handleNodeSelectEvent}
              onNodeToggle={handleNodeToggleEvent}
            />
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Tree Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different tree structures showing various folder and file hierarchies.
        </p>

        <div class="mt-5 space-y-4">
          {#each variantScenarios as scenario, i}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
              <div class="mb-2">
                <p class="text-sm font-semibold text-[--color-text-primary]">Tree {i + 1}</p>
                <p class="text-xs text-[--color-text-secondary]">Click nodes to expand/collapse</p>
              </div>
              <div class="ml-2 border-l border-[--color-border-secondary] pl-3">
                <TreeNodeItem
                  node={scenario.node}
                  onSelectCallback={handleNodeSelectKey}
                  expandedNodes={scenario.expandedNodes}
                  onNodeSelect={handleNodeSelectEvent}
                  onNodeToggle={handleNodeToggleEvent}
                />
              </div>
            </article>
          {/each}
        </div>
      </div>
    </section>
  </div>

  <!-- Controls -->
  <div class="controls-demo">
    <h3>Controls</h3>
    <div class="grid gap-3 sm:grid-cols-2">
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={faIcon} />
        FA Icon
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={disabled} />
        Disabled
      </label>
    </div>
  </div>

  <!-- Tags (optional) -->
  <div class="tags">
    <span class="tag">tree</span>
    <span class="tag">node</span>
    <span class="tag">hierarchy</span>
    <span class="tag">expandable</span>
  </div>
</div>

<style>
  .story-container {
    padding: 20px;
    max-width: 100%;
    font-family: sans-serif;
  }

  h2, h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .interactive-demo {
    margin: 1.5rem 0;
  }

  .controls-demo {
    margin-top: 2rem;
  }

  .controls-demo .grid {
    display: grid;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .controls-demo label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>


