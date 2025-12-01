<script lang="ts">
  import AdvancedColorPicker from './AdvancedColorPicker.svelte';

  const accentPresets = [
    '#0ea5e9',
    '#6366f1',
    '#ec4899',
    '#f97316',
    '#22c55e',
    '#eab308'
  ];

  let value = '#2563eb';
  let disabled = false;
  let showInput = true;
  let showPalette = true;
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <label class="text-sm font-medium text-[--color-text-secondary]" for="hex-input">
          HEX значение
        </label>
        <input
          id="hex-input"
          class="w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
          bind:value
          placeholder="#2563eb"
        />

        <div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
          <p class="text-xs uppercase tracking-wide text-[--color-text-secondary]">Опции</p>
          <label class="mt-2 flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showInput} />
            Поле ввода
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={showPalette} />
            Палитра снизу
          </label>
          <label class="flex items-center gap-2 text-sm text-[--color-text-secondary]">
            <input type="checkbox" bind:checked={disabled} />
            Заблокировано
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Live preview
        </p>
        <div class="mt-4">
          <AdvancedColorPicker
            value={value}
            {disabled}
            {showInput}
            {showPalette}
          />
        </div>
        <p class="mt-4 text-sm text-[--color-text-secondary]">
          Текущее значение: <span class="font-mono text-[--color-text-primary]">{value}</span>
        </p>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Предустановленные оттенки</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Быстрые кнопки помогают переключаться между брендовыми цветами.
    </p>

    <div class="mt-4 flex flex-wrap gap-3">
      {#each accentPresets as preset}
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border border-[--color-border-primary] bg-white px-4 py-2 text-sm"
          onclick={() => value = preset}
        >
          <span class="h-4 w-4 rounded-full border" style={`background:${preset}`}></span>
          {preset}
        </button>
      {/each}
    </div>
  </section>
</div>
