<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import AudioSlider from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: '50' },
    { name: 'min', type: 'text', defaultValue: '0' },
    { name: 'max', type: 'text', defaultValue: '100' },
    { name: 'step', type: 'text', defaultValue: '1' },
    { name: 'label', type: 'text', defaultValue: 'Volume' },
    { name: 'showValue', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-audio-slider"
  title="Audio Slider"
  component={AudioSlider}
  category="Atoms"
  description="An audio slider component for controlling audio levels."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Audio Slider Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">An audio slider component for controlling audio levels.</p>

        <div class="mt-6 flex items-center justify-center">
          <AudioSlider
            value={parseInt(values.value || '50')}
            min={parseInt(values.min || '0')}
            max={parseInt(values.max || '100')}
            step={parseInt(values.step || '1')}
            label={values.label}
            showValue={values.showValue}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Slider Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different slider configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Low Volume</p>
            <div class="flex items-center justify-center">
              <AudioSlider
                value={10}
                min={0}
                max={100}
                step={1}
                label="Low Volume"
                showValue={true}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">High Volume</p>
            <div class="flex items-center justify-center">
              <AudioSlider
                value={90}
                min={0}
                max={100}
                step={1}
                label="High Volume"
                showValue={true}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


