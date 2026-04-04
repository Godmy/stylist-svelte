<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundTreeNode from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'selectedStoryId', type: 'select', defaultValue: 'button-story', options: ['button-story', 'input-story'] }
  ];

  const categoryConfig = {
    Atoms: { icon: 'code', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' }
  };

  const node = {
    name: 'Atoms',
    type: 'category',
    path: 'Atoms',
    count: 2,
    children: [
      {
        name: 'Controls',
        type: 'folder',
        path: 'Atoms/Controls',
        count: 2,
        children: [
          { name: 'Button', type: 'component', path: 'Atoms/Controls/Button', story: { id: 'button-story', componentName: 'Button', category: 'Atoms', path: 'button' } },
          { name: 'Input', type: 'component', path: 'Atoms/Controls/Input', story: { id: 'input-story', componentName: 'Input', category: 'Atoms', path: 'input' } }
        ]
      }
    ]
  } as any;
</script>

<Story
  component={PlaygroundTreeNode}
  title="Playground Tree Node"
  description="Individual node component for tree structures."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundTreeNode
      {node}
      level={0}
      expandedNodes={new Set(['Atoms', 'Atoms/Controls'])}
      {categoryConfig}
      onToggle={() => {}}
      onComponentClick={() => {}}
      selectedStoryId={values.selectedStoryId}
      focusedPath="Atoms/Controls"
    />
  {/snippet}
</Story>

