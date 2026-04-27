<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createTranslationEditorState } from '$stylist/localization/function/state/translation-editor';
  import type { SlotExtendedTranslationEditor as ExtendedTranslationEditorProps } from '$stylist/localization/interface/slot/extended-translation-editor';

  let {
    onTranslationChange,
    onSave,
    onImport,
    onExport,
    ...stateProps
  }: ExtendedTranslationEditorProps = $props();
  
  const state = createTranslationEditorState(stateProps);
</script>

<div class={state.rootClass} {...state.restProps}>
  <div class={state.panelClass}>
    <div class={`border-b px-4 py-3 flex items-center justify-between ${state.headerClass}`}>
      <div class="flex items-center gap-2"><BaseIcon name={state.iconLanguages} class="h-5 w-5" /><span class="font-semibold">Translation Editor</span></div>
      <div class="flex gap-2">
        <button type="button" class="px-2 py-1 border rounded" onclick={() => onImport?.({})}><BaseIcon name={state.iconUpload} class="h-4 w-4" /></button>
        <button type="button" class="px-2 py-1 border rounded" onclick={() => onExport?.()}><BaseIcon name={state.iconDownload} class="h-4 w-4" /></button>
        {#if onSave}<button type="button" class="px-2 py-1 border rounded" onclick={() => onSave?.()}><BaseIcon name={state.iconSave} class="h-4 w-4" /></button>{/if}
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class={`min-w-full divide-y divide-gray-200 ${state.tableClass}`}>
        <thead class="bg-[var(--color-background-secondary)] text-left text-xs text-[var(--color-text-secondary)]">
          <tr>
            {#if state.showKeyColumn}<th class="px-4 py-2">Key</th>{/if}
            <th class="px-4 py-2">Source ({state.defaultLocale})</th>
            <th class="px-4 py-2">Translation ({state.currentLocale})</th>
            {#if state.showContextColumn}<th class="px-4 py-2">Context</th>{/if}
            {#if state.showStatusColumn}<th class="px-4 py-2">Status</th>{/if}
            <th class="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each state.texts as text}
            <tr class={`border-t ${state.rowClass}`}>
              {#if state.showKeyColumn}<td class="px-4 py-2 text-sm text-[var(--color-text-secondary)]">{text.key}</td>{/if}
              <td class="px-4 py-2 text-sm">{text.original}</td>
              <td class="px-4 py-2 text-sm">
                {#if state.editingId === text.id}
                  <div class={`border rounded p-2 ${state.editorClass}`}>
                    <textarea class="w-full border rounded p-1" rows={3} bind:value={state.editedValue}></textarea>
                    <div class="mt-2 flex gap-2 justify-end">
                      <button type="button" class="px-2 py-1 border rounded" onclick={() => state.cancelEdit()}>Cancel</button>
                      <button type="button" class="px-2 py-1 border rounded" onclick={state.saveEdit}>Save</button>
                    </div>
                  </div>
                {:else}
                  <div class="flex items-start justify-between gap-2">
                    <div>{text.translations[state.currentLocale] || '-'}</div>
                    <button type="button" onclick={() => state.beginEdit(text)}><BaseIcon name={state.iconEdit} class="h-4 w-4" /></button>
                  </div>
                {/if}
              </td>
              {#if state.showContextColumn}<td class="px-4 py-2 text-sm text-[var(--color-text-secondary)]">{text.context || '-'}</td>{/if}
              {#if state.showStatusColumn}<td class="px-4 py-2 text-sm">{text.status}</td>{/if}
              <td class="px-4 py-2 text-right"><button type="button" onclick={() => onTranslationChange?.(text.key, state.currentLocale, '')}><BaseIcon name={state.iconTrash} class="h-4 w-4 inline" /></button></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>







