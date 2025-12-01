<script lang="ts">
  import LanguageSelector from './LanguageSelector.svelte';
  import type { ILanguageSelectorProps } from './types';

  // Define the controls for Storybook
  const languages: ILanguageSelectorProps['languages'] = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  ];

  let currentLanguage = $state('en');
  let showFlags = $state(true);
  let showNativeName = $state(false);
  let searchable = $state(true);
  let dropdownPlacement: ILanguageSelectorProps['dropdownPlacement'] = $state('bottom');
  let variant: ILanguageSelectorProps['variant'] = $state('default');
  let size: ILanguageSelectorProps['size'] = $state('md');

  function handleLanguageChange(newLanguage: string) {
    currentLanguage = newLanguage;
    console.log('Language changed to:', newLanguage);
  }
</script>

<div class="p-8">
  <h1>LanguageSelector Story</h1>

  <div class="mb-4">
    <label class="block mb-2">Current Language:
      <select bind:value={currentLanguage} class="ml-2 border rounded p-1">
        {#each languages as lang}
          <option value={lang.code}>{lang.name}</option>
        {/each}
      </select>
    </label>
  </div>

  <LanguageSelector
    {languages}
    {currentLanguage}
    onLanguageChange={handleLanguageChange}
    {showFlags}
    {showNativeName}
    {searchable}
    {dropdownPlacement}
    {variant}
    {size}
  />
</div>