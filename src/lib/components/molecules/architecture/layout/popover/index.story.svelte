<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Popover from './index.svelte';

  type Props = {
    title: string;
    open: boolean;
    position: 'top' | 'bottom' | 'left' | 'right';
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Popover Title'
    },
    {
      name: 'open',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'position',
      type: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      defaultValue: 'bottom'
    }
  ];
</script>

<Story
  id="molecules-popover"
  title="Popover"
  component={Popover}
  category="Molecules"
  description="A versatile popover component for displaying contextual information."
  tags={['popover', 'tooltip', 'overlay']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-8 bg-gray-50 rounded-lg flex justify-center items-center h-48">
      <h2 class="text-xl font-bold mb-4">Popover Story</h2>
      <Popover 
        title={props.title}
        open={props.open}
        position={props.position}
      >
        {#snippet content()}
          <p class="text-sm">This is the popover content.</p>
          <button class="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm">Action</button>
        {/snippet}
        {#snippet trigger()}
          <button class="px-4 py-2 bg-gray-200 rounded">Hover or Click me</button>
        {/snippet}
      </Popover>
    </div>
  {/snippet}
</Story>




