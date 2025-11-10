<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Languages, Check, Globe } from 'lucide-svelte';

  type Language = {
    code: string;
    name: string;
    nativeName?: string;
    flag?: string;
  };

  type Props = {
    languages: Language[];
    currentLanguage?: string;
    onLanguageChange?: (languageCode: string) => void;
    showFlags?: boolean;
    showNativeName?: boolean;
    searchable?: boolean;
    dropdownPlacement?: 'top' | 'bottom';
    class?: string;
    buttonClass?: string;
    dropdownClass?: string;
    languageClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    languages = [],
    currentLanguage,
    onLanguageChange,
    showFlags = true,
    showNativeName = false,
    searchable = true,
    dropdownPlacement = 'bottom',
    class: className = '',
    buttonClass = '',
    dropdownClass = '',
    languageClass = '',
  }: Props = $props();

  let isOpen = $state(false);
  let searchQuery = $state('');
  let filteredLanguages = $state<Language[]>(languages);

  $effect(() => {
    if (searchQuery) {
      filteredLanguages = languages.filter(lang =>
        lang.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lang.nativeName && lang.nativeName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        lang.code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filteredLanguages = languages;
    }
  });

  function selectLanguage(code: string) {
    if (onLanguageChange) {
      onLanguageChange(code);
    }
    isOpen = false;
    searchQuery = '';
  }

  function getSelectedLanguage() {
    return languages.find(lang => lang.code === currentLanguage);
  }
</script>

<div class={`relative inline-block text-left ${className}`}>
  <div>
    <button
      type="button"
      class={`inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${buttonClass}`}
      id="language-selector-button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onclick={() => isOpen = !isOpen}
    >
      {#if getSelectedLanguage()}
        {#if showFlags && getSelectedLanguage()?.flag}
          <span class="mr-2">{getSelectedLanguage()?.flag}</span>
        {/if}
        <span>
          {getSelectedLanguage()?.name}
          {#if showNativeName && getSelectedLanguage()?.nativeName && getSelectedLanguage()?.nativeName !== getSelectedLanguage()?.name}
            <span class="ml-1 text-gray-500">({getSelectedLanguage()?.nativeName})</span>
          {/if}
        </span>
      {:else}
        <span class="flex items-center">
          <Globe class="h-4 w-4 mr-2" />
          Select Language
        </span>
      {/if}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  {#if isOpen}
    <div class={`origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${dropdownClass} ${
      dropdownPlacement === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
    }`}>
      {#if searchable}
        <div class="p-2 border-b border-gray-200">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search languages..."
              bind:value={searchQuery}
              oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
            />
          </div>
        </div>
      {/if}
      
      <div class="py-1 max-h-60 overflow-y-auto">
        {#if filteredLanguages.length === 0}
          <div class="px-4 py-2 text-sm text-gray-500">
            No languages found
          </div>
        {:else}
          {#each filteredLanguages as language}
            <button
              type="button"
              class={`w-full text-left px-4 py-2 text-sm flex items-center ${
                language.code === currentLanguage
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-700 hover:bg-gray-100'
              } ${languageClass}`}
              onclick={() => selectLanguage(language.code)}
            >
              {#if showFlags && language.flag}
                <span class="mr-3">{language.flag}</span>
              {/if}
              <span class="flex-1">
                {language.name}
                {#if showNativeName && language.nativeName && language.name !== language.nativeName}
                  <span class="ml-2 text-gray-500 text-xs">({language.nativeName})</span>
                {/if}
              </span>
              {#if language.code === currentLanguage}
                <Check class="ml-2 h-4 w-4 text-blue-500" />
              {/if}
            </button>
          {/each}
        {/if}
      </div>
      
      <div class="py-1 border-t border-gray-200">
        <div class="px-4 py-2 text-xs text-gray-500">
          {filteredLanguages.length} language{filteredLanguages.length !== 1 ? 's' : ''} available
        </div>
      </div>
    </div>
  {/if}
</div>