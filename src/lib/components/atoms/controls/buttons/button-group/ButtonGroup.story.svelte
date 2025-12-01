<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ButtonGroup from './ButtonGroup.svelte';

  type Props = {
    orientation: 'horizontal' | 'vertical';
  };

  const controls: ControlConfig[] = [
    {
      name: 'orientation',
      type: 'select',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical']
    }
  ];
</script>

<Story
  id="molecules-button-group"
  title="ButtonGroup"
  component={ButtonGroup}
  category="Molecules"
  description="A group of related buttons that are visually connected."
  tags={['button', 'group', 'controls']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Button Group</h2>
      <div class="space-y-8">
        <div>
          <h3 class="font-medium mb-3">Horizontal</h3>
          <ButtonGroup orientation={props.orientation}>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-l">First</button>
            <button class="px-4 py-2 bg-blue-500 text-white">Middle</button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-r">Last</button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  {/snippet}
</Story>