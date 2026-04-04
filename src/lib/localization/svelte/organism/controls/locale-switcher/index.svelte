<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
const Clock = 'clock';
const Globe = 'globe';
const User = 'user';

  import { LocaleSwitcherStyleManager } from '$stylist';
  import type { LocaleSwitcherProps, LocaleSwitcherLocale } from '$stylist/localization/interface/component/locale-switcher/other';

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
    ...restProps
  }: LocaleSwitcherProps = $props();

  const now = new Date();
  const currentLocaleObj = $derived(locales.find((loc: LocaleSwitcherLocale) => loc.code === currentLocale) ?? locales[0]);

  function formatDate(date: Date, localeCode: string, timeZone: string): string {
    return new Intl.DateTimeFormat(localeCode, { dateStyle: 'full', timeZone }).format(date);
  }

  function formatTime(date: Date, localeCode: string, timeZone: string): string {
    return new Intl.DateTimeFormat(localeCode, { timeStyle: 'medium', timeZone }).format(date);
  }

  function formatDateTime(date: Date, localeCode: string, timeZone: string): string {
    return new Intl.DateTimeFormat(localeCode, { dateStyle: 'long', timeStyle: 'short', timeZone }).format(date);
  }
</script>

<div class={LocaleSwitcherStyleManager.getRootClass(className)} {...restProps}>
  <div class={LocaleSwitcherStyleManager.getHeaderClass(headerClass)}>
    <div class="flex items-center">
      <BaseIcon name={Globe} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Locale Switcher</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Change language, region, and formatting preferences</p>
  </div>

  <div class={LocaleSwitcherStyleManager.getContentClass(contentClass)}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Language and Region</h4>
        <div class="space-y-3">
          {#each locales as locale}
            <button
              type="button"
              class={LocaleSwitcherStyleManager.getLocaleButtonClass(locale.code === currentLocale, localeClass)}
              onclick={() => onLocaleChange?.(locale.code)}
            >
              <div class="flex items-center">
                {#if locale.flag}
                  <div class="mr-3 text-2xl">{locale.flag}</div>
                {:else}
                  <div class="mr-3 w-10 h-10 rounded-full bg-[var(--color-background-tertiary)] flex items-center justify-center">
                    <span class="text-[var(--color-text-primary)] font-medium">{locale.code.split('-')[0]}</span>
                  </div>
                {/if}
                <div>
                  <div class="font-medium text-[var(--color-text-primary)]">{locale.name}</div>
                  {#if showRegional && locale.region}
                    <div class="text-sm text-[var(--color-text-secondary)]">{locale.region}</div>
                  {/if}
                </div>
              </div>
              {#if locale.code === currentLocale}
                <div class="ml-auto text-[var(--color-primary-600)]">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              {/if}
            </button>
          {/each}
        </div>
      </div>

      <div>
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Date and Time Preview</h4>
        <div class="border rounded-lg p-4 bg-[var(--color-background-secondary)]">
          {#if currentLocaleObj}
            <div class="flex items-center mb-4">
              <BaseIcon name={Globe} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
              <span class="text-sm font-medium">
                {currentLocaleObj.name} {showRegional && currentLocaleObj.region ? `(${currentLocaleObj.region})` : ''}
              </span>
            </div>

            {#if showDatePreview}
              <div class="mb-3">
                <div class="text-xs text-[var(--color-text-secondary)] mb-1">Date</div>
                <div class="font-medium">{formatDate(now, currentLocale, currentTimezone)}</div>
              </div>
            {/if}

            {#if showTimePreview}
              <div class="mb-3">
                <div class="text-xs text-[var(--color-text-secondary)] mb-1">Time</div>
                <div class="font-medium">{formatTime(now, currentLocale, currentTimezone)}</div>
              </div>
            {/if}

            <div class="mb-3">
              <div class="text-xs text-[var(--color-text-secondary)] mb-1">Date and Time</div>
              <div class="font-medium">{formatDateTime(now, currentLocale, currentTimezone)}</div>
            </div>

            <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
              <BaseIcon name={Clock} class="h-4 w-4 mr-1" />
              <span>Timezone: {currentTimezone}</span>
            </div>
          {/if}
        </div>

        {#if timezoneOptions.length > 0}
          <div class="mt-4">
            <label for="timezone" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Timezone</label>
            <select
              id="timezone"
              class={LocaleSwitcherStyleManager.getTimezoneSelectClass()}
              bind:value={currentTimezone}
              onchange={(event) => onTimezoneChange?.((event.target as HTMLSelectElement).value)}
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

  <div class={LocaleSwitcherStyleManager.getFooterClass(footerClass)}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm text-[var(--color-text-secondary)]">
        <BaseIcon name={User} class="h-4 w-4 mr-1" />
        <span>Locale: {currentLocale}</span>
      </div>
      <div class="text-sm text-[var(--color-text-secondary)]">
        {locales.length} locale{locales.length === 1 ? '' : 's'} available
      </div>
    </div>
  </div>
</div>





