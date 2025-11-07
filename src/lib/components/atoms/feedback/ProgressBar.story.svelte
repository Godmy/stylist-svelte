<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProgressBar from './ProgressBar.svelte';

  type ProgressBarStoryProps = {
    value: number;
    max: number;
    label: string;
    showPercentage: boolean;
    size: 'sm' | 'md' | 'lg';
    variant: 'primary' | 'success' | 'warning' | 'danger';
  };

  const sizeOptions = ['sm', 'md', 'lg'];
  const variantOptions = ['primary', 'success', 'warning', 'danger'];

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100,
      min: 1,
      max: 100
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Progress'
    },
    {
      name: 'showPercentage',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: sizeOptions
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: variantOptions
    }
  ];
</script>

<Story
  id="atoms-progress-bar"
  title="ProgressBar"
  component={ProgressBar}
  category="Atoms"
  description="ProgressBar component for showing progress of a task."
  tags={['feedback', 'progress', 'loading']}
  controls={controls}
>
  {#snippet children(props: ProgressBarStoryProps)}
    <div class="w-full max-w-md">
      <ProgressBar
        value={props.value}
        max={props.max}
        label={props.label}
        showPercentage={props.showPercentage}
        size={props.size}
        variant={props.variant}
      />
    </div>
  {/snippet}
</Story>