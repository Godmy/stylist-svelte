<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProgressBar from '../ProgressBar.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'value', description: 'Value', type: 'number', min: 0, max: 100, defaultValue: 50 },
    { name: 'max', description: 'Max', type: 'number', min: 1, defaultValue: 100 },
    { name: 'label', description: 'Label', type: 'text' },
    { name: 'showPercentage', description: 'Show Percentage', type: 'boolean', defaultValue: true },
    { name: 'size', description: 'Size', type: 'select', options: ['sm', 'md', 'lg'] },
    { name: 'variant', description: 'Variant', type: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-feedback-progress-progressbar"
  title="ProgressBar"
  component={ProgressBar}
  category="Atoms/Feedback/Progress"
  description="A progress bar component that visually indicates the completion status of a task."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { value: number; max: number; label: string; showPercentage: boolean; size: string; variant: string; class: string; })}
    <ProgressBar value={props.value} />
  {/snippet}
</Story>