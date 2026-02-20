<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import DatePicker from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Выберите дату',
      description: 'Placeholder text for the date picker'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the date picker is disabled'
    }
  ];

  let minDate: Date | undefined = new Date();
  let maxDate: Date | undefined = new Date();
  let selectedDate: Date | undefined = new Date();

  minDate.setDate(minDate.getDate() - 14);
  maxDate.setDate(maxDate.getDate() + 45);

  const milestones = [
    { id: 'launch', label: 'Релиз продукта', date: new Date().toISOString().split('T')[0] },
    {
      id: 'retro',
      label: 'Ретро команды',
      date: new Date(new Date().setDate(new Date().getDate() + 5)).toISOString().split('T')[0]
    },
    {
      id: 'marketing',
      label: 'Кампания маркетинга',
      date: new Date(new Date().setDate(new Date().getDate() + 12)).toISOString().split('T')[0]
    }
  ];

  function handleManualSelection(value: string) {
    selectedDate = value ? new Date(`${value}T00:00:00`) : undefined;
  }
</script>

<Story
  {controls}
  title="DatePicker Component"
  description="Interactive date picker with customizable options"
  let:controlValues
>
  <div class="p-4">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <div>
          <label for="manual-date" class="text-sm font-medium text-[--color-text-secondary]">
            Установить выбранную дату
          </label>
          <input
            id="manual-date"
            type="date"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
            on:change={(event) => handleManualSelection((event.target as HTMLInputElement).value)}
          />
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <div class="mt-4 flex flex-col gap-3">
          <DatePicker
            value={selectedDate}
            placeholder={controlValues.placeholder}
            disabled={controlValues.disabled}
            {minDate}
            {maxDate}
          />
          <p class="text-sm text-[--color-text-secondary]">
            Выбрано: {selectedDate ? selectedDate.toLocaleDateString() : '—'}
          </p>
        </div>
      </div>
    </div>
  </div>
</Story>