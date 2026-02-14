<script lang="ts">
  import RichTextEditor from './index.svelte';

  type TemplateName = 'update' | 'notes' | 'docs';

  const templates: Record<TemplateName, string> = {
    update: `<h2>Еженедельный статус</h2>
<p>Команда выполнила 87% плана. Наибольший прогресс — в разработке редактора.</p>
<ul>
  <li><strong>Product</strong>: завершены тесты.</li>
  <li><strong>Design</strong>: handoff v2.1 в Figma.</li>
  <li><strong>Engineering</strong>: деплой staging среды.</li>
</ul>`,
    notes: `<p><em>Быстрая заметка</em> о точках роста:</p>
<ol>
  <li>Проверить интеграции с CRM</li>
  <li>Добавить inline-комментарии</li>
  <li>Собрать отзывы от 5 клиентов</li>
</ol>`,
    docs: `<h1>Редактор RichText</h1>
<p>Используется для long-form контента, поддерживает списки, цитаты, ссылки и вставку изображений.</p>
<blockquote>“Инструмент удобно тестировать прямо здесь, меняя настройки справа.”</blockquote>`
  };

  let editorValue = templates.update;
  let placeholder = 'Напишите заметку или вставьте готовый шаблон…';
  let showToolbar = true;
  let toolbarPosition: 'top' | 'bottom' = 'top';
  let liveContent = editorValue;
  let savedContent = '';
  let updateLog: string[] = [];

  function handleInput(content: string) {
    liveContent = content;
    updateLog = [
      `Ввод: ${content.replace(/<[^>]+>/g, '').trim().length} символов`,
      ...updateLog
    ].slice(0, 4);
  }

  function handleChange(content: string) {
    savedContent = content;
    updateLog = [`Состояние сохранено в ${new Date().toLocaleTimeString()}`, ...updateLog].slice(0, 4);
  }

  function useTemplate(template: TemplateName) {
    editorValue = templates[template];
    liveContent = templates[template];
    savedContent = '';
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">RichTextEditor</h1>
    <p class="text-gray-600">
      Интерактивная песочница редактора: переключайте позицию тулбара, вставляйте шаблоны и отслеживайте HTML-вывод.
    </p>
  </div>

  <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
    <div class="space-y-4">
      <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <RichTextEditor
          value={editorValue}
          placeholder={placeholder}
          {showToolbar}
          {toolbarPosition}
          onInput={handleInput}
          onChange={handleChange}
        />
      </div>

      <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900">Предпросмотр HTML</h2>
          <span class="text-sm text-gray-500">
            {savedContent ? 'Показывается сохранённая версия' : 'Черновик (onInput)'}
          </span>
        </div>
        <div class="mt-3 rounded-md bg-white p-4 prose prose-sm max-w-none">
          {@html savedContent || liveContent}
        </div>
      </div>
    </div>

    <div class="space-y-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showToolbar} class="rounded border-gray-300" />
          Показать тулбар
        </label>
      </div>

      <div>
        <label for="rte-toolbar-position" class="block text-sm font-medium text-gray-700">Позиция панели</label>
        <select
          id="rte-toolbar-position"
          bind:value={toolbarPosition}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="top">Сверху</option>
          <option value="bottom">Снизу</option>
        </select>
      </div>

      <div>
        <label for="rte-placeholder" class="block text-sm font-medium text-gray-700">Placeholder</label>
        <input
          id="rte-placeholder"
          type="text"
          bind:value={placeholder}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Шаблоны</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => useTemplate('update')}
          >
            Weekly update
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => useTemplate('notes')}
          >
            Action items
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => useTemplate('docs')}
          >
            Документ
          </button>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Журнал событий</h3>
        {#if updateLog.length > 0}
          <ul class="mt-2 space-y-2 text-sm text-gray-700">
            {#each updateLog as entry}
              <li class="rounded-md bg-gray-50 px-3 py-2">{entry}</li>
            {/each}
          </ul>
        {:else}
          <p class="mt-2 text-sm text-gray-500">Действия появятся после работы с редактором.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
