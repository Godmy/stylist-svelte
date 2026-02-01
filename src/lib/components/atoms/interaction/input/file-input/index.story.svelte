<script lang="ts">
  import FileInput from './index.svelte';

  let placeholder = 'Прикрепить файл';
  let accept = '.png,.jpg,.pdf';
  let multiple = false;
  let disabled = false;
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[280px_1fr]">
      <div class="space-y-4">
        <div>
          <label class="text-sm font-medium text-[--color-text-secondary]" for="placeholder">
            Placeholder
          </label>
          <input
            id="placeholder"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={placeholder}
          />
        </div>

        <div>
          <label class="text-sm font-medium text-[--color-text-secondary]" for="accept">
            Допустимые форматы (comma separated)
          </label>
          <input
            id="accept"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={accept}
          />
        </div>

        <div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]">
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={multiple} />
            Множественный выбор
          </label>
          <label class="mt-2 flex items-center gap-2">
            <input type="checkbox" bind:checked={disabled} />
            Недоступно
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Live preview</p>
        <div class="mt-4 max-w-md">
          <FileInput
            {placeholder}
            {accept}
            {multiple}
            {disabled}
          />
        </div>
        <p class="mt-3 text-sm text-[--color-text-secondary]">
          Компонент отображает выбранные файлы автоматически благодаря встроенному состоянию.
        </p>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Шаблоны загрузки</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Используйте разные placeholder и наборы типов в зависимости от сценария.
    </p>

    <div class="mt-4 grid gap-4 md:grid-cols-3">
      <div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
        <p class="text-sm font-semibold text-[--color-text-primary]">Дизайн-ресурсы</p>
        <FileInput placeholder="Добавить макеты" accept=".fig,.sketch,.pdf" multiple={true} />
      </div>
      <div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
        <p class="text-sm font-semibold text-[--color-text-primary]">Фото команды</p>
        <FileInput placeholder="Загрузить фото" accept=".png,.jpg" multiple={false} />
      </div>
      <div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
        <p class="text-sm font-semibold text-[--color-text-primary]">Документы</p>
        <FileInput placeholder="Прикрепить PDF" accept=".pdf" multiple={true} />
      </div>
    </div>
  </section>
</div>
