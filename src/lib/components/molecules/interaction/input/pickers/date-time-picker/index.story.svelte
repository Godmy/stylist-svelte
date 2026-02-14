<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import DateTimePicker from './index.svelte';

  type Props = {
    value?: string;
    disabled: boolean;
    placeholder: string;
  };

  const controls: ControlConfig[] = [
    { name: 'value', type: 'text', defaultValue: new Date().toISOString(), description: 'ISO string' },
    { name: 'disabled', type: 'boolean', defaultValue: false },
    { name: 'placeholder', type: 'text', defaultValue: 'Select date and time' }
  ];

  const reminders = [
    { label: '1:1 with CPO', time: '2025-04-18T15:00:00Z' },
    { label: 'Roadmap review', time: '2025-04-20T09:30:00Z' },
    { label: 'Launch readiness', time: '2025-04-22T18:00:00Z' }
  ];

  const toDateOrUndefined = (value?: string) => (value ? new Date(value) : undefined);
  const humanize = (value?: string) => (value ? new Date(value).toLocaleString() : 'Not set');
</script>

<Story
  id="molecules-date-time-picker"
  title="DateTimePicker"
  component={DateTimePicker}
  category="Molecules"
  description="Inline date + time picker with dropdown calendar and keyboard-friendly selectors."
  controls={controls}
>
  {#snippet children(props: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Schedule hand-off</p>
            <p class="text-lg text-[--color-text-primary]">
              Control the pre-selected timestamp via ISO strings in the panel.
            </p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.disabled ? 'Disabled' : 'Interactive'}
          </span>
        </header>

        <div class="mt-6 space-y-4">
          <DateTimePicker
            value={toDateOrUndefined(props.value)}
            disabled={props.disabled}
            placeholder={props.placeholder}
          />
          <div class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] px-4 py-3 text-sm">
            Selected timestamp: {humanize(props.value)}
          </div>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Upcoming reminders</h3>
        <p class="text-sm text-[--color-text-secondary]">
          DateTimePicker pairs nicely with automation triggers or reminder feeds like these.
        </p>
        <ul class="mt-6 space-y-3 text-sm text-[--color-text-primary]">
          {#each reminders as reminder}
            <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div class="flex items-center justify-between gap-3">
                <span class="font-semibold">{reminder.label}</span>
                <span class="text-xs text-[--color-text-secondary]">{new Date(reminder.time).toLocaleString()}</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </section>
  {/snippet}
</Story>



