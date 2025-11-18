<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SimpleTooltip from './SimpleTooltip.svelte';

  const positionOptions = ['top', 'right', 'bottom', 'left'] as const;

  type SimpleTooltipStoryProps = {
    position: (typeof positionOptions)[number];
    visible: boolean;
    content: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'top',
      options: [...positionOptions]
    },
    {
      name: 'visible',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'content',
      type: 'text',
      defaultValue: 'This is a tooltip'
    }
  ];
</script>

<Story
  id="atoms-simple-tooltip"
  title="SimpleTooltip"
  component={SimpleTooltip}
  category="Atoms"
  description="Tooltip overlay that displays additional information."
  tags={['overlay', 'information', 'tooltip']}
  controls={controls}
>
  {#snippet children(props: SimpleTooltipStoryProps)}
    <div class="flex flex-col gap-4 items-center justify-center h-64">
      <div class="relative inline-block">
        <span class="px-4 py-2 bg-gray-200 rounded cursor-pointer">Hover over me</span>
        <SimpleTooltip
          position={props.position}
          visible={props.visible}
          content={props.content}
        />
      </div>
      <p class="text-sm text-gray-500">
        The tooltip is shown at the {props.position} position relative to the trigger element.
      </p>
    </div>
  {/snippet}
</Story>