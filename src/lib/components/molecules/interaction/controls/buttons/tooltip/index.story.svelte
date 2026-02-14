<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import Tooltip from './index.svelte';

  const positionOptions = ['top', 'bottom', 'left', 'right'] as const;

  type TooltipStoryProps = {
    label: string;
    text: string;
    position: (typeof positionOptions)[number];
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Hover me'
    },
    {
      name: 'text',
      type: 'text',
      defaultValue: 'Helpful tooltip text'
    },
    {
      name: 'position',
      type: 'select',
      defaultValue: 'top',
      options: [...positionOptions]
    }
  ];
</script>

<Story
  id="atoms-tooltip"
  title="Tooltip"
  component={Tooltip}
  category="Atoms"
  description="Contextual tooltip that appears on hover or focus."
  tags={['informational', 'helper']}
  controls={controls}
>
  {#snippet children(props: any)}
    {#snippet trigger()}
      <button class="px-4 py-2 rounded-md bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {props.label || 'Hover me'}
      </button>
    {/snippet}

    <div class="flex items-center justify-center p-12 border border-dashed border-gray-300 rounded-lg bg-gray-50">
      <Tooltip text={props.text} position={props.position}>
      {@render trigger()}
    </Tooltip>
    </div>
  {/snippet}
</Story>



