<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { createNotificationSettingsState } from '$stylist/management/function/state/notification-settings';
  import type { INotificationSettingsProps } from '$stylist/chat/type/struct/notification-settings-props';

  let props: INotificationSettingsProps = $props();
  const state = createNotificationSettingsState(props);
</script>

<div class={`bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${state.className}`} {...state.restProps}>
  <div class={`border-b px-6 py-5 ${state.headerClassName}`}>
    <div class="flex items-center">
      <BaseIcon name={state.bellIcon} class="h-6 w-6 text-[var(--color-text-secondary)] mr-2" />
      <h3 class="text-lg font-medium text-[var(--color-text-primary)]">Notification Settings</h3>
    </div>
    <p class="mt-1 text-sm text-[var(--color-text-secondary)]">Manage how and when you receive notifications.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Channel headers -->
    <div class="grid grid-cols-5 gap-4 px-6 py-3 bg-[var(--color-background-secondary)] text-xs font-medium text-[var(--color-text-secondary)]">
      <div>Notification Type</div>
      {#if state.showEmail}
        <div class="flex items-center justify-center">
          <BaseIcon name={state.mailIcon} class="h-4 w-4 mr-1" />
          Email
        </div>
      {/if}
      {#if state.showPush}
        <div class="flex items-center justify-center">
          <BaseIcon name={state.smartphoneIcon} class="h-4 w-4 mr-1" />
          Push
        </div>
      {/if}
      {#if state.showSms}
        <div class="flex items-center justify-center">
          <svg class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          SMS
        </div>
      {/if}
      {#if state.showInApp}
        <div class="flex items-center justify-center">
          <BaseIcon name={state.monitorIcon} class="h-4 w-4 mr-1" />
          In-App
        </div>
      {/if}
    </div>

    <!-- Notification preferences -->
    {#each state.preferences as pref}
      <div class={`p-6 grid grid-cols-5 gap-4 items-center ${state.sectionClassName}`}>
        <div>
          <h4 class="text-sm font-medium text-[var(--color-text-primary)]">{pref.name}</h4>
          <p class="mt-1 text-sm text-[var(--color-text-secondary)]">{pref.description}</p>
        </div>

        {#if state.showEmail}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['email']}
                onchange={(e) => state.handlePreferenceChange(pref.id, 'email', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}

        {#if state.showPush}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['push']}
                onchange={(e) => state.handlePreferenceChange(pref.id, 'push', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}

        {#if state.showSms}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['sms']}
                onchange={(e) => state.handlePreferenceChange(pref.id, 'sms', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}

        {#if state.showInApp}
          <div class="flex items-center justify-center">
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                checked={!!pref.channels['in_app']}
                onchange={(e) => state.handlePreferenceChange(pref.id, 'in_app', (e.target as HTMLInputElement).checked)}
              />
              <div class="w-11 h-6 bg-[var(--color-background-tertiary)] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[var(--color-background-primary)] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[var(--color-background-primary)] after:border-[var(--color-border-primary)] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--color-primary-600)]"></div>
            </label>
          </div>
        {/if}
      </div>
    {/each}
  </div>

  <div class={`border-t px-6 py-4 ${state.footerClassName}`}>
    <div class="flex items-center text-xs text-[var(--color-text-secondary)]">
      <BaseIcon name={state.settingsIcon} class="h-4 w-4 mr-1" />
      <span>Changes to notification preferences are saved automatically</span>
    </div>
  </div>
</div>
