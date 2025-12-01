<script lang="ts">
  import LoadingOverlay from './LoadingOverlay.svelte';

  type SpinnerSize = 'sm' | 'md' | 'lg';

  let loading = true;
  let message = 'Синхронизируем данные рабочего пространства...';
  let spinnerSize: SpinnerSize = 'md';
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <div>
          <label for="message-input" class="text-sm font-medium text-[--color-text-secondary]">Сообщение</label>
          <textarea
            id="message-input"
            rows="3"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={message}
          ></textarea>
        </div>

        <div>
          <label for="size-select" class="text-sm font-medium text-[--color-text-secondary]">Размер индикатора</label>
          <select
            id="size-select"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={spinnerSize}
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>

        <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
          <input type="checkbox" bind:checked={loading} />
          Показывать оверлей
        </label>
      </div>

      <div class="relative min-h-[220px] rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary]">
        <div class="h-full p-6">
          <h3 class="text-sm font-semibold text-[--color-text-primary]">Dashboard</h3>
          <p class="text-xs text-[--color-text-secondary]">Плейсхолдер контента под загрузочным слоем.</p>
        </div>
        <LoadingOverlay loading={loading} {message} spinnerSize={spinnerSize} />
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Пресеты</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Быстрые варианты показывают разные сообщения и размеры.
    </p>

    <div class="mt-4 grid gap-4 md:grid-cols-3">
      {#each ['sm', 'md', 'lg'] as size}
        <div class="relative h-48 rounded-xl border border-[--color-border-primary] bg-white p-4">
          <p class="text-sm font-semibold text-[--color-text-primary]">Размер {size.toUpperCase()}</p>
          <LoadingOverlay loading={true} message={`Загрузка (${size})`} spinnerSize={size as SpinnerSize} />
        </div>
      {/each}
    </div>
  </section>
</div>
