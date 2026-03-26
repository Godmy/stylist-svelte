<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';

  import LanguageSelector from './index.svelte';
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

  type Props = {
    showFlags: boolean;
    showNativeName: boolean;
    searchable: boolean;
    dropdownPlacement: 'top' | 'bottom';
    variant: 'default' | 'minimal' | 'compact';
    size: 'sm' | 'md' | 'lg';
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'showFlags', type: 'boolean', defaultValue: true },
    { name: 'showNativeName', type: 'boolean', defaultValue: false },
    { name: 'searchable', type: 'boolean', defaultValue: true },
    { name: 'dropdownPlacement', type: 'select', options: ['top', 'bottom'], defaultValue: 'bottom' },
    { name: 'variant', type: 'select', options: ['default', 'minimal', 'compact'], defaultValue: 'default' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
  ];
</script>

<Story
  id="organisms-language-selector"
  title="Organisms / Interaction / Controls / LanguageSelector"
  component={LanguageSelector}
  category="Organisms/Interaction/Controls"
  description="Language selector component with search, flags, and native language names."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-language-selector p-4">
      <h1 class="text-lg font-semibold mb-4">LanguageSelector Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive LanguageSelector</h2>
        <LanguageSelector
          {languages}
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          showFlags={values.showFlags}
          showNativeName={values.showNativeName}
          searchable={values.searchable}
          dropdownPlacement={values.dropdownPlacement}
          variant={values.variant}
          size={values.size}
        />
      </div>

      <div class="p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">LanguageSelector Variants</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="text-sm font-medium mb-2">Compact Variant</h3>
            <LanguageSelector
              {languages}
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
              variant="compact"
              size="sm"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2">Minimal Variant (No Flags)</h3>
            <LanguageSelector
              {languages}
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
              showFlags={false}
              variant="minimal"
            />
          </div>
        </div>
      </div>
    </div>
  {/snippet}
</Story>





