<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Palette, Sun, Moon, Monitor, Type } from 'lucide-svelte';

  type ThemeOption = {
    id: string;
    name: string;
    description: string;
    previewColors: string[];
  };

  type Props = {
    theme?: string;
    onThemeChange?: (theme: string) => void;
    language?: string;
    onLanguageChange?: (language: string) => void;
    fontSize?: 'sm' | 'md' | 'lg';
    onFontSizeChange?: (size: 'sm' | 'md' | 'lg') => void;
    themeOptions?: ThemeOption[];
    languageOptions?: Array<{ value: string; label: string }>;
    class?: string;
    headerClass?: string;
    sectionClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    theme = 'light',
    onThemeChange,
    language = 'en',
    onLanguageChange,
    fontSize = 'md',
    onFontSizeChange,
    themeOptions = [
      { id: 'light', name: 'Light', description: 'Default light theme', previewColors: ['#f3f4f6', '#374151', '#6b7280'] },
      { id: 'dark', name: 'Dark', description: 'High contrast dark theme', previewColors: ['#1f2937', '#9ca3af', '#6b7280'] },
      { id: 'system', name: 'System', description: 'Adapts to system preference', previewColors: ['#374151', '#9ca3af', '#1f2937'] }
    ],
    languageOptions = [
      { value: 'en', label: 'English' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
      { value: 'zh', label: 'Chinese' }
    ],
    class: className = '',
    headerClass = '',
    sectionClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  $effect(() => {
    // Update the theme class on the document body
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  });
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Palette class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Appearance Settings</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Customize the look and feel of the application.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Theme Selection -->
    <div class={`p-6 ${sectionClass}`}>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-sm font-medium text-gray-900">Theme</h4>
          <p class="mt-1 text-sm text-gray-500">Choose your preferred color scheme.</p>
        </div>
        <div class="flex space-x-2">
          <button
            type="button"
            class={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              theme === 'light' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onThemeChange && onThemeChange('light')}
          >
            <Sun class="h-4 w-4 mr-1" />
            Light
          </button>
          <button
            type="button"
            class={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              theme === 'dark' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onThemeChange && onThemeChange('dark')}
          >
            <Moon class="h-4 w-4 mr-1" />
            Dark
          </button>
          <button
            type="button"
            class={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
              theme === 'system' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onThemeChange && onThemeChange('system')}
          >
            <Monitor class="h-4 w-4 mr-1" />
            System
          </button>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {#each themeOptions as option}
          <button
            type="button"
            aria-label={`Select ${option.name} theme`}
            class={`relative rounded-lg border cursor-pointer ${
              theme === option.id ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'
            }`}
            onclick={() => onThemeChange && onThemeChange(option.id)}
          >
            <div class="p-4">
              <div class="flex items-center">
                {#each option.previewColors as color, i}
                  <div 
                    class="w-5 h-5 rounded-full border border-gray-300" 
                    style={`background-color: ${color}; margin-left: ${i > 0 ? '-0.5rem' : '0'};`}
                  ></div>
                {/each}
              </div>
              <div class="mt-3">
                <p class="text-sm font-medium text-gray-900">{option.name}</p>
                <p class="text-sm text-gray-500">{option.description}</p>
              </div>
            </div>
            {#if theme === option.id}
              <div class="absolute top-2 right-2">
                <div class="bg-blue-500 rounded-full p-1">
                  <svg class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            {/if}
          </button>
        {/each}
      </div>
    </div>

    <!-- Language Selection -->
    <div class={`p-6 ${sectionClass}`}>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-sm font-medium text-gray-900">Language</h4>
          <p class="mt-1 text-sm text-gray-500">Select the language for the application.</p>
        </div>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            bind:value={language}
            onchange={(e) => onLanguageChange && onLanguageChange((e.target as HTMLSelectElement).value)}
          >
            {#each languageOptions as lang}
              <option value={lang.value}>{lang.label}</option>
            {/each}
          </select>
        </div>
      </div>
    </div>

    <!-- Font Size -->
    <div class={`p-6 ${sectionClass}`}>
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-sm font-medium text-gray-900">Font Size</h4>
          <p class="mt-1 text-sm text-gray-500">Adjust the text size for better readability.</p>
        </div>
        <div class="flex space-x-2">
          <button
            type="button"
            class={`px-3 py-1 rounded-md text-sm ${
              fontSize === 'sm' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onFontSizeChange && onFontSizeChange('sm')}
          >
            Sm
          </button>
          <button
            type="button"
            class={`px-3 py-1 rounded-md text-base ${
              fontSize === 'md' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onFontSizeChange && onFontSizeChange('md')}
          >
            Md
          </button>
          <button
            type="button"
            class={`px-3 py-1 rounded-md text-lg ${
              fontSize === 'lg' 
                ? 'bg-blue-100 text-blue-700 font-medium' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onclick={() => onFontSizeChange && onFontSizeChange('lg')}
          >
            Lg
          </button>
        </div>
      </div>
      
      <div class="mt-4 p-4 bg-gray-50 rounded-md">
        <p class={`text-${fontSize === 'sm' ? 'sm' : fontSize === 'lg' ? 'lg' : 'base'} text-gray-700`}>
          This is a preview of the selected font size. Increasing or decreasing the size can improve readability for users with different vision needs.
        </p>
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="text-xs text-gray-500 flex items-center">
      <Palette class="h-4 w-4 mr-1" />
      <span>Appearance settings are saved automatically</span>
    </div>
  </div>
</div>