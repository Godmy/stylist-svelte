<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { GanttChart, Globe, Clock, User } from 'lucide-svelte';

  type Locale = {
    code: string;
    name: string;
    region?: string;
    flag?: string;
    dateFormat?: string;
    timeFormat?: string;
    firstDayOfWeek?: number; // 0 = Sunday, 1 = Monday
  };

  type Props = {
    locales: Locale[];
    currentLocale: string;
    onLocaleChange?: (localeCode: string) => void;
    timezoneOptions?: Array<{ value: string; label: string }>;
    currentTimezone?: string;
    onTimezoneChange?: (timezone: string) => void;
    showRegional?: boolean;
    showDatePreview?: boolean;
    showTimePreview?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    localeClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    locales = [],
    currentLocale,
    onLocaleChange,
    timezoneOptions = [],
    currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone,
    onTimezoneChange,
    showRegional = true,
    showDatePreview = true,
    showTimePreview = true,
    class: className = '',
    headerClass = '',
    contentClass = '',
    localeClass = '',
    footerClass = '',
  }: Props = $props();

  const currentLocaleObj = locales.find(loc => loc.code === currentLocale) || locales[0];
  const now = new Date();

  // Format date and time according to locale
  function formatDate(date: Date, localeCode: string, timeZone: string) {
    return new Intl.DateTimeFormat(localeCode, {
      dateStyle: 'full',
      timeZone: timeZone
    }).format(date);
  }

  function formatTime(date: Date, localeCode: string, timeZone: string) {
    return new Intl.DateTimeFormat(localeCode, {
      timeStyle: 'medium',
      timeZone: timeZone
    }).format(date);
  }

  function formatDateTime(date: Date, localeCode: string, timeZone: string) {
    return new Intl.DateTimeFormat(localeCode, {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: timeZone
    }).format(date);
  }

  // Get the first day of week for the current locale
  function getFirstDayOfWeek(localeCode: string) {
    // This is a simplified approach - in practice, this data comes from CLDR
    const firstDayMap: Record<string, number> = {
      'en-US': 0, // Sunday
      'en-GB': 1, // Monday
      'de-DE': 1, // Monday
      'fr-FR': 1, // Monday
      'ar-SA': 6, // Saturday
      'he-IL': 0, // Sunday
    };
    
    return firstDayMap[localeCode] ?? 1; // Default to Monday
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Globe class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Locale Switcher</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Change language, region, and formatting preferences</p>
  </div>

  <div class={`p-6 ${contentClass}`}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Locale Selector -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 mb-3">Language & Region</h4>
        
        <div class="space-y-3">
          {#each locales as locale}
            <button
              type="button"
              class={`border rounded-lg p-4 flex items-center cursor-pointer ${
                locale.code === currentLocale 
                  ? 'border-blue-500 ring-2 ring-blue-200' 
                  : 'border-gray-200 hover:border-gray-300'
              } ${localeClass}`}
              onclick={() => onLocaleChange && onLocaleChange(locale.code)}
            >
              <div class="flex items-center">
                {#if locale.flag}
                  <div class="mr-3 text-2xl">{locale.flag}</div>
                {:else}
                  <div class="mr-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span class="text-gray-700 font-medium">{locale.code.split('-')[0]}</span>
                  </div>
                {/if}
                
                <div>
                  <div class="font-medium text-gray-900">{locale.name}</div>
                  {#if showRegional && locale.region}
                    <div class="text-sm text-gray-500">{locale.region}</div>
                  {/if}
                </div>
              </div>
              
              {#if locale.code === currentLocale}
                <div class="ml-auto text-blue-600">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <!-- Date/Time Preview -->
      <div>
        <h4 class="text-sm font-medium text-gray-900 mb-3">Date & Time Preview</h4>
        
        <div class="border rounded-lg p-4 bg-gray-50">
          {#if currentLocaleObj}
            <div class="flex items-center mb-4">
              <Globe class="h-5 w-5 text-gray-500 mr-2" />
              <span class="text-sm font-medium">
                {currentLocaleObj.name} {showRegional && currentLocaleObj.region ? `(${currentLocaleObj.region})` : ''}
              </span>
            </div>
            
            {#if showDatePreview}
              <div class="mb-3">
                <div class="text-xs text-gray-500 mb-1">Date</div>
                <div class="font-medium">{formatDate(now, currentLocale, currentTimezone)}</div>
              </div>
            {/if}
            
            {#if showTimePreview}
              <div class="mb-3">
                <div class="text-xs text-gray-500 mb-1">Time</div>
                <div class="font-medium">{formatTime(now, currentLocale, currentTimezone)}</div>
              </div>
            {/if}
            
            <div class="mb-3">
              <div class="text-xs text-gray-500 mb-1">Date & Time</div>
              <div class="font-medium">{formatDateTime(now, currentLocale, currentTimezone)}</div>
            </div>
            
            <div class="flex items-center text-xs text-gray-500">
              <Clock class="h-4 w-4 mr-1" />
              <span>Timezone: {currentTimezone}</span>
            </div>
          {/if}
        </div>
        
        <!-- Timezone Selector -->
        {#if timezoneOptions.length > 0}
          <div class="mt-4">
            <label for="timezone" class="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
            <select
              id="timezone"
              class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              bind:value={currentTimezone}
              onchange={(e) => onTimezoneChange && onTimezoneChange((e.target as HTMLSelectElement).value)}
            >
              {#each timezoneOptions as tz}
                <option value={tz.value}>{tz.label}</option>
              {/each}
            </select>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm text-gray-500">
        <User class="h-4 w-4 mr-1" />
        <span>Locale: {currentLocale}</span>
      </div>
      <div class="text-sm text-gray-500">
        {locales.length} locale{locales.length !== 1 ? 's' : ''} available
      </div>
    </div>
  </div>
</div>