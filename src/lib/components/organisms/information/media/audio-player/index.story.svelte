<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AudioPlayer from './index.svelte';

  type Props = {
    title: string;
    showControls: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Sample Audio Track'
    },
    {
      name: 'showControls',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-audio-player"
  title="AudioPlayer"
  component={AudioPlayer}
  category="Molecules"
  description="A component for playing audio files with controls."
  tags={['audio', 'player', 'media']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Audio Player</h2>
      <div class="max-w-md mx-auto">
        <AudioPlayer
          title={props.title}
          showControls={props.showControls}
        />
      </div>
    </div>
  {/snippet}
</Story>