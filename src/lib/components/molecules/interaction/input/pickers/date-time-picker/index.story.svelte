<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import DateTimePicker from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: new Date().toISOString(),
      description: 'Selected date-time as ISO string'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the picker is disabled'
    },
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Select date and time',
      description: 'Placeholder text'
    }
  ];

  const toDateOrUndefined = (value?: string) => (value ? new Date(value) : undefined);
  const humanize = (value?: string) => (value ? new Date(value).toLocaleString() : 'Not set');
</script>

<Story
  {controls}
  title="DateTimePicker Component"
  description="Inline date + time picker with dropdown calendar and keyboard-friendly selectors"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <DateTimePicker
      value={toDateOrUndefined(controlValues.value)}
      disabled={controlValues.disabled}
      placeholder={controlValues.placeholder}
    />
    <div class="mt-4 rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] px-4 py-3 text-sm">
      Selected timestamp: {humanize(controlValues.value)}
    </div>
  </div>

  {/snippet}
</Story>