<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AnimatedProgress from './index.svelte';

  type Props = {
    value?: number;
    min?: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100
    },
    {
      name: 'min',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100
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
    }
  ];
</script>

<Story
  id="molecules-animated-progress"
  title="AnimatedProgress"
  component={AnimatedProgress}
  category="Molecules"
  description="A progress bar component with animated value display."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AnimatedProgress Story</h2>
      <AnimatedProgress {...props} />
    </div>
  {/snippet}
</Story>
