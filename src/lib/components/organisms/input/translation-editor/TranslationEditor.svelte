<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Languages, Upload, Download, Save, Edit3, Trash2 } from 'lucide-svelte';

  type TranslatableText = {
    id: string;
    key: string;
    original: string;
    translations: Record<string, string>; // Maps locale to translation
    context?: string; // Additional context for translators
    status: 'translated' | 'needs-review' | 'untranslated';
  };

  type Locale = {
    code: string;
    name: string;
    flag?: string;
  };

  type Props = {
    texts: TranslatableText[];
    locales: Locale[];
    defaultLocale: string;
    currentLocale: string;
    onTranslationChange?: (key: string, locale: string, translation: string) => void;
    onSave?: (texts: TranslatableText[]) => void;
    onImport?: (data: any) => void;
    onExport?: () => void;
    showKeyColumn?: boolean;
    showContextColumn?: boolean;
    showStatusColumn?: boolean;
    class?: string;
    headerClass?: string;
    tableClass?: string;
    rowClass?: string;
    editorClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    texts = [],
    locales = [],
    defaultLocale = 'en',
    currentLocale,
    onTranslationChange,
    onSave,
    onImport,
    onExport,
    showKeyColumn = true,
    showContextColumn = true,
    showStatusColumn = true,
    class: className = '',
    headerClass = '',
    tableClass = '',
    rowClass = '',
    editorClass = '',
  }: Props = $props();

  let editingTextId: string | null = $state(null);
  let editedTranslation = $state('');

  function startEditing(text: TranslatableText) {
    editingTextId = text.id;
    editedTranslation = text.translations[currentLocale] || '';
  }

  function saveTranslation() {
    if (editingTextId && onTranslationChange) {
      const text = texts.find(t => t.id === editingTextId);
      if (text) {
        text.translations[currentLocale] = editedTranslation;
        onTranslationChange(text.key, currentLocale, editedTranslation);
        editingTextId = null;
      }
    }
  }

  function cancelEdit() {
    editingTextId = null;
  }

  function deleteTranslation(key: string) {
    // Implementation would depend on the specific requirements
    // For now, just clear the translation for the current locale
    const text = texts.find(t => t.key === key);
    if (text && onTranslationChange) {
      text.translations[currentLocale] = '';
      onTranslationChange(key, currentLocale, '');
    }
  }

  function getStatusIcon(status: 'translated' | 'needs-review' | 'untranslated') {
    switch(status) {
      case 'translated':
        return '<span class="text-green-500">✓</span>';
      case 'needs-review':
        return '<span class="text-yellow-500">⚠</span>';
      case 'untranslated':
        return '<span class="text-red-500">○</span>';
      default:
        return '';
    }
  }

  function importTranslations() {
    // This would typically open a file dialog
    if (onImport) {
      // Create a temporary file input
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json,.csv';
      input.onchange = (e) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
          const file = target.files[0];
          const reader = new FileReader();
          reader.onload = (event) => {
            if (event.target?.result) {
              try {
                const data = JSON.parse(event.target.result as string);
                onImport(data);
              } catch (e) {
                console.error('Error parsing imported file:', e);
                // Handle error appropriately
              }
            }
          };
          reader.readAsText(file);
        }
      };
      input.click();
    }
  }

  function exportTranslations() {
    if (onExport) {
      onExport();
    } else {
      // Default export behavior - download JSON
      const dataStr = JSON.stringify(texts, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
      
      const exportFileDefaultName = `translations_${currentLocale}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
  }

  // Get current locale name
  const currentLocaleName = locales.find(l => l.code === currentLocale)?.name || currentLocale;
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <Languages class="h-6 w-6 text-gray-500 mr-2" />
        <h3 class="text-lg font-medium text-gray-900">Translation Editor</h3>
        <span class="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {currentLocaleName}
        </span>
      </div>
      
      <div class="flex items-center space-x-3">
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={importTranslations}
        >
          <Upload class="h-4 w-4 mr-1" />
          Import
        </button>
        <button
          type="button"
          class="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={exportTranslations}
        >
          <Download class="h-4 w-4 mr-1" />
          Export
        </button>
        {#if onSave}
          <button
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={() => onSave && onSave(texts)}
          >
            <Save class="h-4 w-4 mr-1" />
            Save All
          </button>
        {/if}
      </div>
    </div>
    
    <p class="mt-1 text-sm text-gray-500">
      Manage translations for {locales.length} locale{locales.length !== 1 ? 's' : ''}
    </p>
  </div>

  <div class="overflow-x-auto">
    <table class={`min-w-full divide-y divide-gray-200 ${tableClass}`}>
      <thead class="bg-gray-50">
        <tr>
          {#if showKeyColumn}
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Key
            </th>
          {/if}
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Source Text ({defaultLocale})
          </th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Translation ({currentLocale})
          </th>
          {#if showContextColumn}
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Context
            </th>
          {/if}
          {#if showStatusColumn}
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          {/if}
          <th scope="col" class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        {#each texts as text}
          <tr class={`hover:bg-gray-50 ${rowClass}`}>
            {#if showKeyColumn}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {text.key}
              </td>
            {/if}
            
            <td class="px-6 py-4 text-sm text-gray-900">
              {text.original}
            </td>
            
            <td class="px-6 py-4 text-sm">
              {#if editingTextId === text.id}
                <div class={`border rounded-md p-2 ${editorClass}`}>
                  <textarea
                    class="w-full border-0 focus:ring-0 text-sm"
                    bind:value={editedTranslation}
                    rows={3}
                    placeholder={`Translate to ${currentLocaleName}...`}
                  ></textarea>
                  <div class="mt-2 flex justify-end space-x-2">
                    <button
                      type="button"
                      class="text-sm font-medium text-gray-600 hover:text-gray-900"
                      onclick={cancelEdit}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="text-sm font-medium text-blue-600 hover:text-blue-900"
                      onclick={saveTranslation}
                    >
                      Save
                    </button>
                  </div>
                </div>
              {:else}
                <div class="flex items-start justify-between">
                  <div class="text-gray-900 max-w-md">
                    {text.translations[currentLocale] || 
                      (text.status === 'untranslated' ? 
                        '<span class="text-gray-400 italic">No translation yet</span>' : 
                        text.translations[defaultLocale] || text.original)}
                  </div>
                  <button
                    type="button"
                    class="ml-4 text-gray-400 hover:text-gray-500"
                    onclick={() => startEditing(text)}
                  >
                    <Edit3 class="h-4 w-4" />
                  </button>
                </div>
              {/if}
            </td>
            
            {#if showContextColumn}
              <td class="px-6 py-4 text-sm text-gray-500 max-w-xs">
                {text.context || '-'}
              </td>
            {/if}
            
            {#if showStatusColumn}
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  text.status === 'translated' ? 'bg-green-100 text-green-800' :
                  text.status === 'needs-review' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {text.status === 'translated' ? 'Translated' : 
                   text.status === 'needs-review' ? 'Needs Review' : 'Untranslated'}
                </span>
              </td>
            {/if}
            
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                type="button"
                class="text-red-600 hover:text-red-900"
                onclick={() => deleteTranslation(text.key)}
                title="Delete translation"
              >
                <Trash2 class="h-4 w-4" />
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div class="border-t px-6 py-4 bg-gray-50 text-sm text-gray-500">
    <div class="flex items-center justify-between">
      <div>
        Showing {texts.length} translatable text{texts.length !== 1 ? 's' : ''}
      </div>
      <div>
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {texts.filter(t => t.status === 'translated').length} translated
        </span>
        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          {texts.filter(t => t.status === 'needs-review').length} needs review
        </span>
        <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
          {texts.filter(t => t.status === 'untranslated').length} untranslated
        </span>
      </div>
    </div>
  </div>
</div>