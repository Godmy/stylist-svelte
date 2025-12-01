<script lang="ts">
  import DatePicker from './DatePicker.svelte';

  let placeholder = 'Выберите дату';
  let disabled = false;
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

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <div>
          <label for="placeholder-input" class="text-sm font-medium text-[--color-text-secondary]">
            Placeholder
          </label>
          <input
            id="placeholder-input"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={placeholder}
          />
        </div>

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

        <div class="space-y-2 rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]">
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={disabled} />
            Отключить ввод
          </label>
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              checked={minDate !== undefined}
              on:change={(event) => {
                const enabled = (event.target as HTMLInputElement).checked;
                minDate = enabled ? new Date(new Date().setDate(new Date().getDate() - 14)) : undefined;
              }}
            />
            Минимальная дата
          </label>
          <label class="flex items-center gap-2">
            <input
              type="checkbox"
              checked={maxDate !== undefined}
              on:change={(event) => {
                const enabled = (event.target as HTMLInputElement).checked;
                maxDate = enabled ? new Date(new Date().setDate(new Date().getDate() + 45)) : undefined;
              }}
            />
            Максимальная дата
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live preview</p>
        <div class="mt-4 flex flex-col gap-3">
          <DatePicker
            value={selectedDate}
            {placeholder}
            {disabled}
            {minDate}
            {maxDate}
          />
          <p class="text-sm text-[--color-text-secondary]">
            Выбрано: {selectedDate ? selectedDate.toLocaleDateString() : '—'}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Важные события</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Календарь помогает синхронизировать сроки запуска, ретро и кампаний.
    </p>

    <div class="mt-4 grid gap-4 md:grid-cols-3">
      {#each milestones as milestone}
        <article class="rounded-xl border border-[--color-border-primary] bg-white p-4">
          <p class="text-sm font-semibold text-[--color-text-primary]">{milestone.label}</p>
          <p class="text-xs text-[--color-text-secondary]">Дата: {milestone.date}</p>
          <div class="mt-3">
            <DatePicker
              value={new Date(`${milestone.date}T00:00:00`)}
              placeholder="Выбрать"
              disabled={true}
            />
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>
