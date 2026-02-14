<script lang="ts">
  import { Bell, Mail, Smartphone, Monitor, Settings } from 'lucide-svelte';
import type {
    INotificationSettingsProps,
    INotificationSettingsPreference,
    NotificationChannel
  } from '$stylist/design-system/props/notification-settings';

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

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Bell class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Notification Settings</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Manage how and when you receive notifications.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Channel headers -->
    <div class="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500">
      <div>Notification Type</div>
      {#if showEmail}
        <div class="flex items-center justify-center">
          <Mail class="h-4 w-4 mr-1" />
          Email
        </div>
      {/if}
      {#if showPush}
        <div class="flex items-center justify-center">
          <Smartphone class="h-4 w-4 mr-1" />
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
          <Monitor class="h-4 w-4 mr-1" />
          In-App
        </div>
      {/if}
    </div>

    <!-- Notification preferences -->
    {#each preferences as pref}
      <div class={`p-6 grid grid-cols-5 gap-4 items-center ${sectionClass}`}>
        <div>
          <h4 class="text-sm font-medium text-gray-900">{pref.name}</h4>
          <p class="mt-1 text-sm text-gray-500">{pref.description}</p>
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
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
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
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
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
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
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
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-gray-500">
      <Settings class="h-4 w-4 mr-1" />
      <span>Changes to notification preferences are saved automatically</span>
    </div>
  </div>
</div>
