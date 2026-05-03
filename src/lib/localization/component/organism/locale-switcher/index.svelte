<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { createLocaleSwitcherState } from '$stylist/localization/function/state/locale-switcher';
  import type { SlotLocaleSwitcher as LocaleSwitcherProps } from '$stylist/localization/interface/slot/locale-switcher';

  let {
    onLocaleChange,
    onTimezoneChange,
    ...stateProps
  }: LocaleSwitcherProps = $props();
  
  const state = createLocaleSwitcherState(stateProps);
</script>

<div class={state.rootClass} {...state.restProps}>
  <div class={state.headerClass}>
    <div class="flex items-center">
      <BaseIcon name={state.iconGlobe} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Locale Switcher</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Change language, region, and formatting preferences</p>
  </div>

  <div class={state.contentClass}>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="text-sm font-medium text-[var(--color-text-primary)] mb-3">Language and Region</h4>
        <div class="space-y-3">
          {#each state.locales as locale}
            <button
              type="button"
              class={state.getLocaleButtonClass(locale.code === state.currentLocale)}
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
                  {#if state.showRegional && locale.region}
                    <div class="text-sm text-[var(--color-text-secondary)]">{locale.region}</div>
                  {/if}
                </div>
              </div>
              {#if locale.code === state.currentLocale}
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
          {#if state.currentLocaleObj}
            <div class="flex items-center mb-4">
              <BaseIcon name={state.iconGlobe} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
              <span class="text-sm font-medium">
                {state.currentLocaleObj.name} {state.showRegional && state.currentLocaleObj.region ? `(${state.currentLocaleObj.region})` : ''}
              </span>
            </div>

            {#if state.showDatePreview}
              <div class="mb-3">
                <div class="text-xs text-[var(--color-text-secondary)] mb-1">Date</div>
                <div class="font-medium">{state.formatDate(state.now, state.currentLocale, state.currentTimezone)}</div>
              </div>
            {/if}

            {#if state.showTimePreview}
              <div class="mb-3">
                <div class="text-xs text-[var(--color-text-secondary)] mb-1">Time</div>
                <div class="font-medium">{state.formatTime(state.now, state.currentLocale, state.currentTimezone)}</div>
              </div>
            {/if}

            <div class="mb-3">
              <div class="text-xs text-[var(--color-text-secondary)] mb-1">Date and Time</div>
              <div class="font-medium">{state.formatDateTime(state.now, state.currentLocale, state.currentTimezone)}</div>
            </div>

            <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
              <BaseIcon name={state.iconClock} class="h-4 w-4 mr-1" />
              <span>Timezone: {state.currentTimezone}</span>
            </div>
          {/if}
        </div>

        {#if state.timezoneOptions.length > 0}
          <div class="mt-4">
            <label for="timezone" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Timezone</label>
            <select
              id="timezone"
              class={state.timezoneSelectClass}
              value={state.currentTimezone}
              onchange={(event) => onTimezoneChange?.((event.target as HTMLSelectElement).value)}
            >
              {#each state.timezoneOptions as tz}
                <option value={tz.value}>{tz.label}</option>
              {/each}
            </select>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class={state.footerClass}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm text-[var(--color-text-secondary)]">
        <BaseIcon name={state.iconUser} class="h-4 w-4 mr-1" />
        <span>Locale: {state.currentLocale}</span>
      </div>
      <div class="text-sm text-[var(--color-text-secondary)]">
        {state.locales.length} locale{state.locales.length === 1 ? '' : 's'} available
      </div>
    </div>
  </div>
</div>





