<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProgressBarWithLabel from './ProgressBarWithLabel.svelte';

  const colorOptions = ['blue', 'green', 'red', 'yellow', 'purple'] as const;

  type ProgressBarWithLabelStoryProps = {
    value: number;
    max: number;
    label: string;
    showPercentage: boolean;
    color: (typeof colorOptions)[number];
    height: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'number',
      defaultValue: 75,
      min: 0,
      max: 100
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
      min: 1
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Upload Progress'
    },
    {
      name: 'showPercentage',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'color',
      type: 'select',
      defaultValue: 'blue',
      options: [...colorOptions]
    },
    {
      name: 'height',
      type: 'text',
      defaultValue: 'h-2'
    }
  ];
</script>

<Story
  id="molecules-progress-bar-with-label"
  title="ProgressBarWithLabel"
  component={ProgressBarWithLabel}
  category="Molecules"
  description="A progress bar component with label."
  tags={['progress', 'bar', 'indicator']}
  controls={controls}
>
  {#snippet children(props: ProgressBarWithLabelStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProgressBarWithLabel Story</h2>
      <ProgressBarWithLabel
        value={props.value}
        max={props.max}
        label={props.label}
        showPercentage={props.showPercentage}
        color={props.color}
        height={props.height}
      />
    </div>
  {/snippet}
</Story>