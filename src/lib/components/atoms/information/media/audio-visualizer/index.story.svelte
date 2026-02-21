<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import AudioVisualizer from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Sample Track' },
    { name: 'author', type: 'text', defaultValue: 'Sample Artist' },
    { name: 'duration', type: 'text', defaultValue: '3:45' },
    { name: 'isPlaying', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="atoms-audio-visualizer"
  title="Audio Visualizer"
  component={AudioVisualizer}
  category="Atoms"
  description="An audio visualizer component that shows audio tracks with play controls."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Audio Visualizer Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">An audio visualizer component that shows audio tracks with play controls.</p>

        <div class="mt-6">
          <AudioVisualizer
            title={values.title}
            author={values.author}
            duration={values.duration}
            isPlaying={values.isPlaying}
            alt="Sample track artwork"
            src="https://placehold.co/64x64"
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Visualizer Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different visualizer configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Playing Track</p>
            <AudioVisualizer
              title="Summer Vibes"
              author="Beach Tunes"
              duration="4:20"
              isPlaying={true}
              alt="Album artwork"
              src="https://placehold.co/64x64"
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Paused Track</p>
            <AudioVisualizer
              title="Chill Beats"
              author="Relaxing Sounds"
              duration="5:15"
              isPlaying={false}
              alt="Album artwork"
              src="https://placehold.co/64x64"
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


