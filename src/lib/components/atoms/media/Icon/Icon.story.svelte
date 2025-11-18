<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Icon from './Icon.svelte';

  const iconOptions = ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box'] as const;
  const sizeOptions = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  type IconStoryProps = {
    name: (typeof iconOptions)[number];
    size: (typeof sizeOptions)[number];
    strokeWidth: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'name',
      type: 'select',
      defaultValue: 'box',
      options: [...iconOptions]
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [...sizeOptions]
    },
    {
      name: 'strokeWidth',
      type: 'number',
      defaultValue: 1.5,
      min: 0.5,
      max: 3,
      step: 0.5
    }
  ];
</script>

<Story
  id="atoms-icon"
  title="Icon"
  component={Icon}
  category="Atoms/Media"
  description="Displays an SVG icon based on the provided name."
  tags={['icon', 'svg', 'ui']}
  controls={controls}
>
  {#snippet children(props: IconStoryProps)}
    <div class="flex items-center space-x-4">
      <Icon
        name={props.name}
        size={props.size}
        strokeWidth={props.strokeWidth}
      />

      <div class="text-sm text-gray-600">
        <p>
          <strong>Icon:</strong> {props.name}
        </p>
        <p>
          <strong>Size:</strong> {props.size}
        </p>
        <p>
          <strong>Stroke Width:</strong> {props.strokeWidth}
        </p>
      </div>
    </div>
  {/snippet}
</Story>