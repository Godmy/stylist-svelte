<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import Timeline from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const defaultItems = [
    { id: '1', date: '2023-01-15', title: 'Project Started', content: undefined },
    { id: '2', date: '2023-02-01', title: 'Design Phase', content: undefined },
    { id: '3', date: '2023-03-10', title: 'Development', content: undefined },
    { id: '4', date: '2023-04-20', title: 'Testing', content: undefined },
    { id: '5', date: '2023-05-05', title: 'Launch', content: undefined }
  ];

  const controls = [
    {
      name: 'orientation',
      type: 'select' as ControlType,
      defaultValue: 'vertical',
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the timeline'
    }
  ];
</script>

<Story
  {controls}
  title="Timeline Component"
  description="Timeline component to show events chronologically"
  let:controlValues
>
  <div class="p-4">
    <Timeline
      items={defaultItems}
      orientation={controlValues.orientation}
    />
  </div>
</Story>