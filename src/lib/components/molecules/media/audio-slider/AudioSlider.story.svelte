<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AudioSlider from './AudioSlider.svelte';

  type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    showValue?: boolean;
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
      name: 'step',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Volume'
    },
    {
      name: 'showValue',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-audio-slider"
  title="AudioSlider"
  component={AudioSlider}
  category="Molecules"
  description="An audio slider component for controlling audio levels."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AudioSlider Story</h2>
      <AudioSlider {...props} />
    </div>
  {/snippet}
</Story>