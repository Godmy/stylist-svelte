<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Shield, Eye, EyeOff, Users, Globe, Lock, Settings } from 'lucide-svelte';

  type PrivacyOption = {
    id: string;
    name: string;
    description: string;
    value: 'public' | 'friends' | 'private' | 'custom';
    options: Array<{ value: 'public' | 'friends' | 'private' | 'custom'; label: string; icon: any }>;
  };

  type DataSharingOption = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
  };

  type Props = {
    privacyOptions?: PrivacyOption[];
    dataSharingOptions?: DataSharingOption[];
    onPrivacyChange?: (id: string, value: 'public' | 'friends' | 'private' | 'custom') => void;
    onDataSharingChange?: (id: string, enabled: boolean) => void;
    class?: string;
    headerClass?: string;
    sectionClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    privacyOptions = [
      {
        id: 'profile',
        name: 'Profile Visibility',
        description: 'Who can see your profile information',
        value: 'public',
        options: [
          { value: 'public', label: 'Public', icon: Globe },
          { value: 'friends', label: 'Friends', icon: Users },
          { value: 'private', label: 'Private', icon: Lock },
          { value: 'custom', label: 'Custom', icon: Settings }
        ]
      },
      {
        id: 'posts',
        name: 'Posts Visibility',
        description: 'Who can see your posts',
        value: 'friends',
        options: [
          { value: 'public', label: 'Public', icon: Globe },
          { value: 'friends', label: 'Friends', icon: Users },
          { value: 'private', label: 'Private', icon: Lock },
          { value: 'custom', label: 'Custom', icon: Settings }
        ]
      },
      {
        id: 'search',
        name: 'Search Visibility',
        description: 'Appear in search results',
        value: 'public',
        options: [
          { value: 'public', label: 'Yes', icon: Eye },
          { value: 'private', label: 'No', icon: EyeOff },
          { value: 'friends', label: 'Friends only', icon: Users },
          { value: 'custom', label: 'Custom', icon: Settings }
        ]
      }
    ],
    dataSharingOptions = [
      {
        id: 'analytics',
        name: 'Share usage analytics',
        description: 'Help improve our services by sharing anonymous usage data',
        enabled: true
      },
      {
        id: 'personalization',
        name: 'Personalization',
        description: 'Allow personalized content and recommendations',
        enabled: true
      },
      {
        id: 'marketing',
        name: 'Marketing communications',
        description: 'Receive promotional emails and offers',
        enabled: false
      }
    ],
    onPrivacyChange,
    onDataSharingChange,
    class: className = '',
    headerClass = '',
    sectionClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  function updatePrivacy(id: string, value: 'public' | 'friends' | 'private' | 'custom') {
    if (onPrivacyChange) {
      onPrivacyChange(id, value);
    }
  }

  function updateDataSharing(id: string, enabled: boolean) {
    if (onDataSharingChange) {
      onDataSharingChange(id, enabled);
    }
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Shield class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Privacy Settings</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Control your privacy and data sharing preferences.</p>
  </div>

  <div class="divide-y divide-gray-200">
    <!-- Privacy options -->
    {#each privacyOptions as option}
      <div class={`p-6 ${sectionClass}`}>
        <div class="flex items-center justify-between">
          <div>
            <h4 class="text-sm font-medium text-gray-900">{option.name}</h4>
            <p class="mt-1 text-sm text-gray-500">{option.description}</p>
          </div>
          
          <div class="relative inline-flex bg-gray-100 rounded-md p-1">
            {#each option.options as opt}
              <button
                type="button"
                class={`px-3 py-1 text-xs font-medium rounded-sm ${
                  option.value === opt.value 
                    ? 'bg-white shadow text-gray-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onclick={() => updatePrivacy(option.id, opt.value)}
              >
                <div class="flex items-center">
                  <opt.icon class="h-4 w-4 mr-1" />
                  {opt.label}
                </div>
              </button>
            {/each}
          </div>
        </div>
      </div>
    {/each}

    <!-- Data sharing options -->
    {#if dataSharingOptions.length > 0}
      <div class={`p-6 ${sectionClass}`}>
        <h4 class="text-sm font-medium text-gray-900 mb-3">Data Sharing</h4>
        <div class="space-y-4">
          {#each dataSharingOptions as sharingOption}
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="checkbox-{sharingOption.id}"
                    class="sr-only peer"
                    checked={sharingOption.enabled}
                    onchange={(e) => updateDataSharing(sharingOption.id, (e.target as HTMLInputElement).checked)}
                  />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div class="ml-3 text-sm">
                <label for="checkbox-{sharingOption.id}" class="font-medium text-gray-700">{sharingOption.name}</label>
                <p class="text-gray-500">{sharingOption.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center text-xs text-gray-500">
      <Settings class="h-4 w-4 mr-1" />
      <span>Privacy settings are saved automatically</span>
    </div>
  </div>
</div>