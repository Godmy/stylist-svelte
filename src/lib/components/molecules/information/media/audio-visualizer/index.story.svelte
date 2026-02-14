<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AudioVisualizer from './index.svelte';

  type Props = {
    src?: string;
    alt?: string;
    title?: string;
    author?: string;
    duration?: string;
    isPlaying?: boolean;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Sample Track'
    },
    {
      name: 'author',
      type: 'text',
      defaultValue: 'Sample Artist'
    },
    {
      name: 'duration',
      type: 'text',
      defaultValue: '3:45'
    },
    {
      name: 'isPlaying',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-audio-visualizer"
  title="AudioVisualizer"
  component={AudioVisualizer}
  category="Molecules"
  description="An audio visualizer component that shows audio tracks with play controls."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AudioVisualizer Story</h2>
      <AudioVisualizer
        {...props}
        alt="Sample track artwork"
        src="https://placehold.co/64x64"
      />
    </div>
  {/snippet}
</Story>

