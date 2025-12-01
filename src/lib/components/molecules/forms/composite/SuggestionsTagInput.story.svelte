<script lang="ts">
  import SuggestionsTagInput from './SuggestionsTagInput.svelte';

  const suggestions = [
    { id: 'ux', label: 'UX' },
    { id: 'motion', label: 'Motion' },
    { id: 'system', label: 'Design systems' },
    { id: 'research', label: 'Research' },
    { id: 'leadership', label: 'Leadership' }
  ];

  let value = ['ux', 'system'];
  let placeholder = 'Добавьте навыки через Enter';
  let description = 'Используется в карточке профиля и подборе менторов.';
  let allowCustom = true;
  let maxTags = 5;
  let disabled = false;
</script>

<div class="space-y-8 p-6">
  <section class="rounded-2xl border border-[--color-border-primary] bg-white p-6 shadow-sm">
    <div class="grid gap-6 lg:grid-cols-[320px_1fr]">
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
          <label for="description-input" class="text-sm font-medium text-[--color-text-secondary]">
            Подпись
          </label>
          <textarea
            id="description-input"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            rows="2"
            bind:value={description}
          ></textarea>
        </div>

        <div>
          <label for="max-tags" class="text-sm font-medium text-[--color-text-secondary]">
            Максимум тегов
          </label>
          <input
            id="max-tags"
            type="number"
            min="1"
            max="10"
            class="mt-1 w-full rounded-lg border border-[--color-border-primary] px-3 py-2 text-sm"
            bind:value={maxTags}
          />
        </div>

        <div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4 text-sm text-[--color-text-secondary]">
          <label class="flex items-center gap-2">
            <input type="checkbox" bind:checked={allowCustom} />
            Разрешить кастомные теги
          </label>
          <label class="mt-2 flex items-center gap-2">
            <input type="checkbox" bind:checked={disabled} />
            Недоступно
          </label>
        </div>
      </div>

      <div class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary] p-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Live preview
        </p>
        <SuggestionsTagInput
          id="skills-tags"
          class="mt-4"
          label="Командные навыки"
          bind:value
          {suggestions}
          {placeholder}
          {description}
          {allowCustom}
          {maxTags}
          {disabled}
        />
        <p class="mt-3 text-sm text-[--color-text-secondary]">
          Значения: {value.join(', ') || '—'}
        </p>
      </div>
    </div>
  </section>

  <section class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6">
    <h2 class="text-base font-semibold text-[--color-text-primary]">Шаблоны</h2>
    <p class="text-sm text-[--color-text-secondary]">
      Пара быстрых конфигураций для поиска проектов и навыков.
    </p>

    <div class="mt-4 grid gap-4 md:grid-cols-2">
      <div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
        <SuggestionsTagInput
          id="projects"
          label="Проекты"
          placeholder="Добавьте проект"
          suggestions={[
            { id: 'orion', label: 'Orion' },
            { id: 'spotlight', label: 'Spotlight' },
            { id: 'atlas', label: 'Atlas' }
          ]}
          value={['orion']}
          allowCustom={false}
        />
      </div>
      <div class="rounded-xl border border-[--color-border-primary] bg-white p-4">
        <SuggestionsTagInput
          id="interests"
          label="Интересы"
          placeholder="Введите интерес"
          suggestions={suggestions}
          description="Используется в подборке каналов."
          maxTags={8}
        />
      </div>
    </div>
  </section>
</div>
