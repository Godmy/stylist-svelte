/**
 * LanguageSelector Component
 *
 * This component follows the SAMO (SOLID, Atomic Design) principles:
 *
 * S - Single Responsibility Principle: This component is responsible only for language selection functionality
 * O - Open/Closed Principle: Extensible through properties without modifying the component's core logic
 * L - Liskov Substitution Principle: Can be replaced with another language selector without affecting the API
 * I - Interface Segregation Principle: Provides a minimal and focused interface for language selection
 * D - Dependency Inversion Principle: Depends on abstractions rather than concrete implementations
 *
 * @since 2025.1
 * @status stable
 */
<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ILanguageSelectorProps } from './types';
  import { LanguageSelectorStyleManager } from './styles';
  import { Check, Globe } from 'lucide-svelte';

  let {
    languages = [],
    currentLanguage,
    onLanguageChange,
    showFlags = true,
    showNativeName = false,
    searchable = true,
    dropdownPlacement = 'bottom',
    variant = 'default',
    size = 'md',
    class: className = '',
    buttonClass = '',
    dropdownClass = '',
    languageClass = '',
  }: ILanguageSelectorProps & HTMLAttributes<HTMLDivElement> = $props();

  let isOpen = $state(false);
  let searchQuery = $state('');
  let filteredLanguages = $state<ILanguageSelectorProps['languages']>(languages);

  // Определяем стили
  const baseClasses = $derived(`${LanguageSelectorStyleManager.getBaseClasses()} ${className}`);
  const buttonBaseClasses = $derived(`${LanguageSelectorStyleManager.getButtonBaseClasses()} ${LanguageSelectorStyleManager.getButtonVariantClasses(variant)} ${LanguageSelectorStyleManager.getButtonSizeClasses(size)} ${buttonClass}`);
  const dropdownBaseClasses = $derived(`${LanguageSelectorStyleManager.getDropdownBaseClasses()} ${dropdownClass} ${LanguageSelectorStyleManager.getDropdownPositionClasses(dropdownPlacement)}`);
  const searchInputClasses = $derived(LanguageSelectorStyleManager.getSearchInputClasses());
  const flagClasses = $derived(LanguageSelectorStyleManager.getFlagClasses());
  const checkIconClasses = $derived(LanguageSelectorStyleManager.getCheckIconClasses());

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

<div class={baseClasses}>
  <div>
    <button
      type="button"
      class={buttonBaseClasses}
      id="language-selector-button"
      aria-haspopup="true"
      aria-expanded={isOpen}
      onclick={() => isOpen = !isOpen}
    >
      {#if getSelectedLanguage()}
        {#if showFlags && getSelectedLanguage()?.flag}
          <span class={flagClasses}>{getSelectedLanguage()?.flag}</span>
        {/if}
        <span>
          {getSelectedLanguage()?.name}
          {#if showNativeName && getSelectedLanguage()?.nativeName && getSelectedLanguage()?.nativeName !== getSelectedLanguage()?.name}
            <span class="ml-1 text-[--color-text-secondary]">({getSelectedLanguage()?.nativeName})</span>
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
    <div class={dropdownBaseClasses}>
      {#if searchable}
        <div class="p-2 border-b border-[--color-border-default]">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg class="h-5 w-5 text-[--color-text-secondary]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </div>
            <input
              type="text"
              class={searchInputClasses}
              placeholder="Search languages..."
              bind:value={searchQuery}
              oninput={(e) => searchQuery = (e.target as HTMLInputElement).value}
            />
          </div>
        </div>
      {/if}

      <div class="py-1 max-h-60 overflow-y-auto">
        {#if filteredLanguages.length === 0}
          <div class="px-4 py-2 text-sm text-[--color-text-secondary]">
            No languages found
          </div>
        {:else}
          {#each filteredLanguages as language}
            <button
              type="button"
              class={`${LanguageSelectorStyleManager.getLanguageItemBaseClasses(language.code === currentLanguage)} ${languageClass}`}
              onclick={() => selectLanguage(language.code)}
            >
              {#if showFlags && language.flag}
                <span class={flagClasses}>{language.flag}</span>
              {/if}
              <span class="flex-1">
                {language.name}
                {#if showNativeName && language.nativeName && language.name !== language.nativeName}
                  <span class="ml-2 text-[--color-text-secondary] text-xs">({language.nativeName})</span>
                {/if}
              </span>
              {#if language.code === currentLanguage}
                <Check class={checkIconClasses} />
              {/if}
            </button>
          {/each}
        {/if}
      </div>

      <div class="py-1 border-t border-[--color-border-default]">
        <div class="px-4 py-2 text-xs text-[--color-text-secondary]">
          {filteredLanguages.length} language{filteredLanguages.length !== 1 ? 's' : ''} available
        </div>
      </div>
    </div>
  {/if}
</div>