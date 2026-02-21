<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import PictureToolbar from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'activeTool',
      type: 'select' as ControlType,
      defaultValue: 'crop',
      options: ['crop', 'rotate', 'zoom', 'filter'],
      description: 'Currently active tool'
    }
  ];

  const tools = [
    { id: 'crop', label: 'Crop' },
    { id: 'rotate', label: 'Rotate' },
    { id: 'zoom', label: 'Zoom' },
    { id: 'filter', label: 'Filter' }
  ];

  function handleToolSelect(toolId: string) {
    console.log('Tool selected:', toolId);
  }
</script>

<Story
  {controls}
  title="PictureToolbar Component"
  description="Toolbar component for image editing tools"
 
>
  {#snippet children(controlValues: any)}
  <div class="rounded-lg bg-gray-50 p-8">
    <PictureToolbar
      tools={tools}
      activeTool={controlValues.activeTool}
      onToolSelect={handleToolSelect}
    />
  </div>

  {/snippet}
</Story>