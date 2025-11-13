<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Settings, Bell, Mail, Sms, Smartphone, Save, User, Shield } from 'lucide-svelte';

  type NotificationCategory = {
    id: string;
    name: string;
    description: string;
    channels: ('email' | 'push' | 'sms' | 'in-app')[];
  };

  type NotificationPreference = {
    categoryId: string;
    channel: 'email' | 'push' | 'sms' | 'in-app';
    enabled: boolean;
  };

  type Props = {
    categories: NotificationCategory[];
    preferences: NotificationPreference[];
    onPreferenceChange?: (categoryId: string, channel: 'email' | 'push' | 'sms' | 'in-app', enabled: boolean) => void;
    onSave?: (preferences: NotificationPreference[]) => void;
    showEmail?: boolean;
    showPush?: boolean;
    showSms?: boolean;
    showInApp?: boolean;
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    categoryClass?: string;
    channelClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    categories = [],
    preferences = [],
    onPreferenceChange,
    onSave,
    showEmail = true,
    showPush = true,
    showSms = true,
    showInApp = true,
    title = 'Notification Preferences',
    description = 'Manage how you receive notifications',
    class: className = '',
    headerClass = '',
    categoryClass = '',
    channelClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props()>;

  let prefs = $state<NotificationPreference[]>([...preferences]);

  function togglePreference(categoryId: string, channel: NotificationChannel) {
    const prefIndex = prefs.findIndex(p => p.categoryId === categoryId && p.channel === channel);
    
    if (prefIndex >= 0) {
      prefs[prefIndex].enabled = !prefs[prefIndex].enabled;
    } else {
      prefs = [...prefs, { categoryId, channel, enabled: true }];
    }
    
    if (onPreferenceChange) {
      onPreferenceChange(categoryId, channel, prefs.find(p => p.categoryId === categoryId && p.channel === channel)?.enabled || false);
    }
  }

  function savePreferences() {
    if (onSave) {
      onSave(prefs);
    }
  }

  // Get preference status for a category and channel
  function getPreference(categoryId: string, channel: NotificationChannel): boolean {
    const pref = prefs.find(p => p.categoryId === categoryId && p.channel === channel);
    return pref ? pref.enabled : true; // Default to true if not set
  }

  // Select all channels for a category
  function selectAllChannels(categoryId: string, select: boolean) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;

    const updatedPrefs = [...prefs];
    
    for (const channel of category.channels) {
      const existingIndex = updatedPrefs.findIndex(
        p => p.categoryId === categoryId && p.channel === channel
      );
      
      if (existingIndex >= 0) {
        updatedPrefs[existingIndex].enabled = select;
      } else if (select) {
        updatedPrefs.push({ categoryId, channel, enabled: true });
      }
    }
    
    prefs = updatedPrefs;
  }

  // Check if all channels for a category are enabled
  function allChannelsEnabled(categoryId: string): boolean {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return false;

    return category.channels.every(channel => {
      const pref = prefs.find(p => p.categoryId === categoryId && p.channel === channel);
      return pref ? pref.enabled : true;
    });
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Bell class="h-6 w-6 text-gray-500 mr-2" />
      <div>
        <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        <p class="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>

  <div class="p-6">
    <div class="space-y-8">
      {#each categories as category}
        <div class={`border border-gray-200 rounded-lg ${categoryClass}`}>
          <div class="border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div>
              <h4 class="text-sm font-medium text-gray-900">{category.name}</h4>
              <p class="mt-1 text-sm text-gray-500">{category.description}</p>
            </div>
            
            <div class="flex items-center space-x-2">
              <button
                type="button"
                class="text-xs font-medium text-blue-600 hover:text-blue-900"
                on:click={() => selectAllChannels(category.id, true)}
              >
                Select All
              </button>
              <span class="text-gray-300">|</span>
              <button
                type="button"
                class="text-xs font-medium text-blue-600 hover:text-blue-900"
                on:click={() => selectAllChannels(category.id, false)}
              >
                Clear All
              </button>
            </div>
          </div>
          
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              {#if showEmail && category.channels.includes('email')}
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id={`email-${category.id}`}
                      type="checkbox"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={getPreference(category.id, 'email')}
                      on:change={() => togglePreference(category.id, 'email')}
                    />
                    <label for={`email-${category.id}`} class="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      <Mail class="h-4 w-4 mr-1" />
                      Email
                    </label>
                  </div>
                </div>
              {/if}
              
              {#if showPush && category.channels.includes('push')}
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id={`push-${category.id}`}
                      type="checkbox"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={getPreference(category.id, 'push')}
                      on:change={() => togglePreference(category.id, 'push')}
                    />
                    <label for={`push-${category.id}`} class="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      <Bell class="h-4 w-4 mr-1" />
                      Push
                    </label>
                  </div>
                </div>
              {/if}
              
              {#if showSms && category.channels.includes('sms')}
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id={`sms-${category.id}`}
                      type="checkbox"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={getPreference(category.id, 'sms')}
                      on:change={() => togglePreference(category.id, 'sms')}
                    />
                    <label for={`sms-${category.id}`} class="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      <MessageSquare class="h-4 w-4 mr-1" />
                      SMS
                    </label>
                  </div>
                </div>
              {/if}
              
              {#if showInApp && category.channels.includes('in-app')}
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id={`inapp-${category.id}`}
                      type="checkbox"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                      checked={getPreference(category.id, 'in-app')}
                      on:change={() => togglePreference(category.id, 'in-app')}
                    />
                    <label for={`inapp-${category.id}`} class="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      <Smartphone class="h-4 w-4 mr-1" />
                      In-App
                    </label>
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-end">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
        on:click={savePreferences}
      >
        <Save class="h-4 w-4 mr-1" />
        Save Preferences
      </button>
    </div>
  </div>
</div>