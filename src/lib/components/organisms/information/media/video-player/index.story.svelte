<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import VideoPlayer from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'src', type: 'text', defaultValue: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { name: 'autoPlay', type: 'boolean', defaultValue: false },
      { name: 'showControls', type: 'boolean', defaultValue: true },
      { name: 'muted', type: 'boolean', defaultValue: false },
      { name: 'width', type: 'text', defaultValue: '100%' },
      { name: 'height', type: 'text', defaultValue: '400px' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();
</script>

<Story
  {id}
  {title}
  {description}
  component={VideoPlayer}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-video-player grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Video Player Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive video player with customizable options.</p>

        <div class="mt-6">
          <VideoPlayer
            src={props.src}
            autoPlay={props.autoPlay}
            showControls={props.showControls}
            muted={props.muted}
            width={props.width}
            height={props.height}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Video Player Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different video player configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Autoplay Enabled</p>
            <div>
              <VideoPlayer
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                autoPlay={true}
                showControls={true}
                muted={true}
                width="100%"
                height="200px"
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">No Controls</p>
            <div>
              <VideoPlayer
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                autoPlay={false}
                showControls={false}
                muted={false}
                width="100%"
                height="200px"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
