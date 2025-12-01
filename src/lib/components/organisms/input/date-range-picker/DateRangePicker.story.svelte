<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DateRangePicker from './DateRangePicker.svelte';

  type Props = {
    startDate?: string;
    endDate?: string;
    disabled: boolean;
    placeholder: string;
  };

  const controls: ControlConfig[] = [
    { name: 'startDate', type: 'date', defaultValue: new Date().toISOString().split('T')[0] },
    {
      name: 'endDate',
      type: 'date',
      defaultValue: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'text', defaultValue: 'Select date range' }
  ];

  const quickPresets = [
    { label: 'Last 7 days', range: { start: -7, end: -1 } },
    { label: 'Last 30 days', range: { start: -30, end: -1 } },
    { label: 'Next 14 days', range: { start: 0, end: 14 } }
  ];

  const toDate = (iso?: string) => (iso ? new Date(iso) : null);
  const formatRangeLabel = (start?: string, end?: string) => {
    const startDate = start ? new Date(start).toLocaleDateString() : 'Start';
    const endDate = end ? new Date(end).toLocaleDateString() : 'End';
    return `${startDate} → ${endDate}`;
  };
</script>

<Story
  id="molecules-date-range-picker"
  title="DateRangePicker"
  component={DateRangePicker}
  category="Molecules"
  description="Built-in calendar overlay that supports quick ranges, manual selection, and disabled states."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Booking window</p>
            <p class="text-lg text-[--color-text-primary]">Change the selection dates to preview formatted output.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.disabled ? 'Disabled' : 'Interactive'}
          </span>
        </header>

        <div class="mt-6 space-y-4">
          <DateRangePicker
            value={{ start: toDate(props.startDate), end: toDate(props.endDate) }}
            disabled={props.disabled}
            placeholder={props.placeholder}
          />

          <div class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] px-4 py-3 text-sm">
            Current selection: {formatRangeLabel(props.startDate, props.endDate)}
          </div>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Preset ranges</h3>
        <p class="text-sm text-[--color-text-secondary]">These illustrate how you might render custom quick actions.</p>
        <div class="mt-6 space-y-3">
          {#each quickPresets as preset}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <p class="text-sm font-semibold text-[--color-text-primary]">{preset.label}</p>
              <p class="text-xs text-[--color-text-secondary]">
                {new Date(Date.now() + preset.range.start * 86400000).toLocaleDateString()}
                →
                {new Date(Date.now() + preset.range.end * 86400000).toLocaleDateString()}
              </p>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
