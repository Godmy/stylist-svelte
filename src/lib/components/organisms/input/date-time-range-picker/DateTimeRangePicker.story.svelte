<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DateTimeRangePicker from './DateTimeRangePicker.svelte';

  type Props = {
    startDateTime?: string;
    endDateTime?: string;
    disabled: boolean;
    placeholder: string;
  };

  const controls: ControlConfig[] = [
    { name: 'startDateTime', type: 'text', defaultValue: new Date().toISOString() },
    {
      name: 'endDateTime',
      type: 'text',
      defaultValue: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString()
    },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'text', defaultValue: 'Select start and end' }
  ];

  const toDate = (value?: string) => (value ? new Date(value) : null);
  const humanize = (value?: string) => (value ? new Date(value).toLocaleString() : '—');

  const quickRanges = [
    { label: 'Launch window', duration: '3h', startOffset: 0, endOffset: 3 },
    { label: 'Maintenance', duration: '6h', startOffset: 6, endOffset: 12 },
    { label: 'All-hands', duration: '1h', startOffset: 24, endOffset: 25 }
  ];
</script>

<Story
  id="molecules-date-time-range-picker"
  title="DateTimeRangePicker"
  component={DateTimeRangePicker}
  category="Molecules"
  description="Dual calendar + time selector for booking maintenance windows or live events."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Maintenance scheduler</p>
            <p class="text-lg text-[--color-text-primary]">Adjust ISO strings in the controls to see the live selection.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.disabled ? 'Disabled' : 'Interactive'}
          </span>
        </header>

        <div class="mt-6 space-y-4">
          <DateTimeRangePicker
            value={{ start: toDate(props.startDateTime), end: toDate(props.endDateTime) }}
            disabled={props.disabled}
            placeholder={props.placeholder}
          />
          <div class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] px-4 py-3 text-sm">
            {humanize(props.startDateTime)} → {humanize(props.endDateTime)}
          </div>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Suggested windows</h3>
        <p class="text-sm text-[--color-text-secondary]">Use presets to prefill ranges for users.</p>
        <div class="mt-6 space-y-3">
          {#each quickRanges as preset}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div class="flex items-center justify-between text-sm text-[--color-text-primary]">
                <span class="font-semibold">{preset.label}</span>
                <span class="text-xs text-[--color-text-secondary]">{preset.duration}</span>
              </div>
              <p class="text-xs text-[--color-text-secondary]">
                {new Date(Date.now() + preset.startOffset * 3600000).toLocaleString()}
                →
                {new Date(Date.now() + preset.endOffset * 3600000).toLocaleString()}
              </p>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
