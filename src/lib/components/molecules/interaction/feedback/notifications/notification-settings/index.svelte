<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Bell = 'bell';
const Mail = 'mail';
const Smartphone = 'smartphone';
const Monitor = 'monitor';
const Settings = 'settings';

import type {
    INotificationSettingsProps,
    INotificationSettingsPreference
  } from '$stylist/design-system/contracts/interaction/notification-settings';
import type { NotificationChannel } from '$stylist/design-system/tokens/interaction/notification-channels';

  let {
    preferences = [],
    onPreferenceChange,
    showEmail = true,
    showPush = true,
    showSms = true,
    showInApp = true,
    class: className = '',
    headerClass = '',
    sectionClass = '',
    footerClass = '',
    ...restProps
  }: INotificationSettingsProps = $props();

  function updatePreference(id: string, channel: NotificationChannel, enabled: boolean) {
    if (onPreferenceChange) {
      onPreferenceChange(id, channel, enabled);
    }
  }
</script>

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <BaseIcon name={Bell} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Notification Settings</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Manage how and when you receive notifications.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Channel headers -->
    <div class="grid grid-cols-5 gap-4 px-6 py-3 bg-[var(--color-background-secondary)] text-xs font-medium text-[var(--color-text-secondary)]">
      <div>Notification Type</div>
      {#if showEmail}
        <div class="flex items-center justify-center">
          <BaseIcon name={Mail} class="h-4 w-4 mr-1" />
          Email
        </div>
      {/if}
      {#if showPush}
        <div class="flex items-center justify-center">
          <BaseIcon name={Smartphone} class="h-4 w-4 mr-1" />
          Push
        </div>
      {/if}
      {#if showSms}
        <div class="flex items-center justify-center">
          <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          SMS
        </div>
      {/if}
      {#if showInApp}
        <div class="flex items-center justify-center">
          <BaseIcon name={Monitor} class="h-4 w-4 mr-1" />
          In-App
        </div>
      {/if}
    </div>

    <!-- Notification preferences -->
    {#each preferences as pref}
      <div class={`p-6 grid grid-cols-5 gap-4 items-center ${sectionClass}`}>
        <div>
          <h4 class="text-sm font-medium text-[var(--color-text-primary)]">{pref.name}</h4>
          <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{pref.description}</p>
        </div>
        
        {#if showEmail}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['email']}
                onchange={(e) => updatePreference(pref.id, 'email', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}
        
        {#if showPush}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['push']}
                onchange={(e) => updatePreference(pref.id, 'push', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}
        
        {#if showSms}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['sms']}
                onchange={(e) => updatePreference(pref.id, 'sms', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}
        
        {#if showInApp}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['in_app']}
                onchange={(e) => updatePreference(pref.id, 'in_app', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
      <BaseIcon name={Settings} class="h-4 w-4 mr-1" />
      <span>Changes to notification preferences are saved automatically</span>
    </div>
  </div>
</div>






