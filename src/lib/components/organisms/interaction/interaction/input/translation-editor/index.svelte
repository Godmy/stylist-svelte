<script lang="ts">
  import { Download, Edit3, Languages, Save, Trash2, Upload } from 'lucide-svelte';
  import type { TranslatableText } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

  interface ExtendedTranslationEditorProps {
    texts?: TranslatableText[];
    locales?: string[];
    defaultLocale?: string;
    currentLocale?: string;
    class?: string;
    headerClass?: string;
    tableClass?: string;
    rowClass?: string;
    editorClass?: string;
    showKeyColumn?: boolean;
    showContextColumn?: boolean;
    showStatusColumn?: boolean;
    onTranslationChange?: (key: string, locale: string, value: string) => void;
    onSave?: () => void;
    onImport?: (data: any) => void;
    onExport?: () => void;
  }

  let {
    texts = [],
    locales = [],
    defaultLocale = 'en',
    currentLocale = 'en',
    class: className = '',
    headerClass = '',
    tableClass = '',
    rowClass = '',
    editorClass = '',
    showKeyColumn = true,
    showContextColumn = true,
    showStatusColumn = true,
    onTranslationChange,
    onSave,
    onImport,
    onExport,
    ...restProps
  }: ExtendedTranslationEditorProps = $props();

  let editingId = $state<string | null>(null);
  let editedValue = $state('');

  function beginEdit(text: TranslatableText) {
    editingId = text.id;
    editedValue = text.translations[currentLocale] || '';
  }

  function saveEdit() {
    if (!editingId) return;
    const text = texts.find((item) => item.id === editingId);
    if (!text) return;
    text.translations[currentLocale] = editedValue;
    onTranslationChange?.(text.key, currentLocale, editedValue);
    editingId = null;
  }
</script>

<div class={InteractionInputStyleManager.root('c-translation-editor', className)} {...restProps}>
  <div class={InteractionInputStyleManager.panel('overflow-hidden')}>
    <div class={`border-b px-4 py-3 flex items-center justify-between ${headerClass}`}>
      <div class="flex items-center gap-2"><Languages class="h-5 w-5" /><span class="font-semibold">Translation Editor</span></div>
      <div class="flex gap-2">
        <button type="button" class="px-2 py-1 border rounded" onclick={() => onImport?.({})}><Upload class="h-4 w-4" /></button>
        <button type="button" class="px-2 py-1 border rounded" onclick={() => onExport?.()}><Download class="h-4 w-4" /></button>
        {#if onSave}<button type="button" class="px-2 py-1 border rounded" onclick={() => onSave()}><Save class="h-4 w-4" /></button>{/if}
      </div>
    </div>

    <div class="overflow-x-auto">
      <table class={`min-w-full divide-y divide-gray-200 ${tableClass}`}>
        <thead class="bg-gray-50 text-left text-xs text-gray-500">
          <tr>
            {#if showKeyColumn}<th class="px-4 py-2">Key</th>{/if}
            <th class="px-4 py-2">Source ({defaultLocale})</th>
            <th class="px-4 py-2">Translation ({currentLocale})</th>
            {#if showContextColumn}<th class="px-4 py-2">Context</th>{/if}
            {#if showStatusColumn}<th class="px-4 py-2">Status</th>{/if}
            <th class="px-4 py-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each texts as text}
            <tr class={`border-t ${rowClass}`}>
              {#if showKeyColumn}<td class="px-4 py-2 text-sm text-gray-600">{text.key}</td>{/if}
              <td class="px-4 py-2 text-sm">{text.original}</td>
              <td class="px-4 py-2 text-sm">
                {#if editingId === text.id}
                  <div class={`border rounded p-2 ${editorClass}`}>
                    <textarea class="w-full border rounded p-1" rows={3} bind:value={editedValue}></textarea>
                    <div class="mt-2 flex gap-2 justify-end">
                      <button type="button" class="px-2 py-1 border rounded" onclick={() => (editingId = null)}>Cancel</button>
                      <button type="button" class="px-2 py-1 border rounded" onclick={saveEdit}>Save</button>
                    </div>
                  </div>
                {:else}
                  <div class="flex items-start justify-between gap-2">
                    <div>{text.translations[currentLocale] || '-'}</div>
                    <button type="button" onclick={() => beginEdit(text)}><Edit3 class="h-4 w-4" /></button>
                  </div>
                {/if}
              </td>
              {#if showContextColumn}<td class="px-4 py-2 text-sm text-gray-600">{text.context || '-'}</td>{/if}
              {#if showStatusColumn}<td class="px-4 py-2 text-sm">{text.status}</td>{/if}
              <td class="px-4 py-2 text-right"><button type="button" onclick={() => onTranslationChange?.(text.key, currentLocale, '')}><Trash2 class="h-4 w-4 inline" /></button></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
