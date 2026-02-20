<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import AudioPlayer from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'title', type: 'text', defaultValue: 'Sample Audio Track' },
      { name: 'showControls', type: 'boolean', defaultValue: true }
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
  component={AudioPlayer}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-audio-player grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Audio Player Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive audio player with customizable options.</p>

        <div class="mt-6">
          <AudioPlayer
            title={props.title}
            showControls={props.showControls}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Audio Player Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different audio player configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">With Controls</p>
            <div>
              <AudioPlayer
                title="Track with Controls"
                showControls={true}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Controls</p>
            <div>
              <AudioPlayer
                title="Track without Controls"
                showControls={false}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
