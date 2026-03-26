<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import PictureToolbar from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'activeTool',
      type: 'select' as TokenControllerType,
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
  <div class="rounded-lg bg-[var(--color-background-secondary)] p-8">
    <PictureToolbar
      tools={tools}
      activeTool={controlValues.activeTool}
      onToolSelect={handleToolSelect}
    />
  </div>

  {/snippet}
</Story>



