<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PictureToolbar from './PictureToolbar.svelte';

  type Props = {
    activeTool: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'activeTool',
      type: 'select',
      options: ['crop', 'rotate', 'zoom', 'filter'],
      defaultValue: 'crop'
    }
  ];
</script>

<Story
  id="molecules-picture-toolbar"
  title="PictureToolbar"
  component={PictureToolbar}
  category="Molecules"
  description="A toolbar for picture editing."
  tags={['picture', 'toolbar', 'editing']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PictureToolbar Story</h2>
      <PictureToolbar
        tools={[
          { id: 'crop', label: 'Crop' },
          { id: 'rotate', label: 'Rotate' },
          { id: 'zoom', label: 'Zoom' },
          { id: 'filter', label: 'Filter' }
        ]}
        activeTool={props.activeTool}
        onToolSelect={(toolId) => console.log('Tool selected:', toolId)}
      />
    </div>
  {/snippet}
</Story>

