<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ToggleRight, ToggleLeft, Settings, Users, Globe, Calendar } from 'lucide-svelte';

  type RolloutStrategy = 'gradual' | 'targeted' | 'instant' | 'custom';

  type FeatureToggle = {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    rolloutStrategy: RolloutStrategy;
    rolloutPercentage?: number; // For gradual rollout
    targetUsers: string[]; // For targeted rollout
    targetConditions: Array<{ attribute: string; operator: string; value: string }>; // For custom rollout
    createdAt: Date;
    updatedAt: Date;
  };

  type Props = {
    initialFeature?: FeatureToggle;
    onSave?: (feature: FeatureToggle) => void;
    onToggle?: (id: string, enabled: boolean) => void;
    class?: string;
    headerClass?: string;
    formClass?: string;
    rolloutClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialFeature,
    onSave,
    onToggle,
    class: className = '',
    headerClass = '',
    formClass = '',
    rolloutClass = '',
    footerClass = '',
  }: Props = $props();

  let feature = $state<FeatureToggle>({
    id: initialFeature?.id || `feature-${Date.now()}`,
    name: initialFeature?.name || 'New Feature',
    description: initialFeature?.description || '',
    enabled: initialFeature?.enabled || false,
    rolloutStrategy: initialFeature?.rolloutStrategy || 'gradual',
    rolloutPercentage: initialFeature?.rolloutPercentage || 10,
    targetUsers: initialFeature?.targetUsers || [],
    targetConditions: initialFeature?.targetConditions || [],
    createdAt: initialFeature?.createdAt || new Date(),
    updatedAt: initialFeature?.updatedAt || new Date()
  });

  let targetUsersString = $state(feature.targetUsers.join('\n'));
  $effect(() => {
    targetUsersString = feature.targetUsers.join('\n');
  });
  $effect(() => {
    feature.targetUsers = targetUsersString.split('\n').filter(u => u.trim());
  });

  let newConditionAttribute = $state('');
  let newConditionOperator = $state('');
  let newConditionValue = $state('');

  function toggleFeature() {
    feature.enabled = !feature.enabled;
    feature.updatedAt = new Date();
    
    if (onToggle) {
      onToggle(feature.id, feature.enabled);
    }
  }

  function saveFeature() {
    feature.updatedAt = new Date();
    if (onSave) {
      onSave(feature);
    }
  }

  function addCondition() {
    if (newConditionAttribute && newConditionOperator && newConditionValue) {
      feature.targetConditions = [
        ...feature.targetConditions,
        {
          attribute: newConditionAttribute,
          operator: newConditionOperator,
          value: newConditionValue
        }
      ];
      
      newConditionAttribute = '';
      newConditionOperator = '';
      newConditionValue = '';
    }
  }

  function removeCondition(index: number) {
    feature.targetConditions = [
      ...feature.targetConditions.slice(0, index),
      ...feature.targetConditions.slice(index + 1)
    ];
  }

  function updateRolloutPercentage(percentage: number) {
    feature.rolloutPercentage = Math.min(100, Math.max(0, percentage));
  }

  // Get strategy icon
  function getStrategyIcon(strategy: RolloutStrategy) {
    switch (strategy) {
      case 'gradual': return '<i class="text-green-500">Gradual</i>';
      case 'targeted': return '<i class="text-blue-500">Targeted</i>';
      case 'instant': return '<i class="text-yellow-500">Instant</i>';
      case 'custom': return '<i class="text-purple-500">Custom</i>';
      default: return '<i>Unknown</i>';
    }
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <ToggleRight class="h-6 w-6 text-gray-500 mr-2" />
      <h3 class="text-lg font-medium text-gray-900">Feature Toggle</h3>
    </div>
    <p class="mt-1 text-sm text-gray-500">Manage feature availability across environments</p>
  </div>

  <div class={`p-6 ${formClass}`}>
    <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
      <div class="sm:col-span-4">
        <label for="feature-name" class="block text-sm font-medium text-gray-700">Feature Name</label>
        <div class="mt-1">
          <input
            type="text"
            id="feature-name"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            bind:value={feature.name}
            placeholder="e.g., NewCheckoutFlow"
          />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="feature-status" class="block text-sm font-medium text-gray-700">Status</label>
        <div class="mt-1 flex items-center">
          <button
            type="button"
            class={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              feature.enabled ? 'bg-blue-600' : 'bg-gray-200'
            }`}
            onclick={toggleFeature}
            role="switch"
            aria-checked={feature.enabled}
          >
            <span class="sr-only">Change feature status</span>
            <span
              class={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                feature.enabled ? 'translate-x-5' : 'translate-x-0'
              }`}
            ></span>
          </button>
          <span class="ml-3 text-sm font-medium text-gray-900">
            {feature.enabled ? 'Enabled' : 'Disabled'}
          </span>
        </div>
      </div>

      <div class="sm:col-span-6">
        <label for="feature-description" class="block text-sm font-medium text-gray-700">Description</label>
        <div class="mt-1">
          <textarea
            id="feature-description"
            rows={3}
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            bind:value={feature.description}
            placeholder="Describe what this feature does and why it's being toggled..."
          ></textarea>
        </div>
      </div>

      <!-- Rollout Strategy -->
      <div class="sm:col-span-6">
        <fieldset>
          <legend class="block text-sm font-medium text-gray-700 mb-2">Rollout Strategy</legend>
          <div class={`border rounded-lg p-4 ${rolloutClass}`}>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="flex items-center">
              <input
                id="gradual"
                name="rollout-strategy"
                type="radio"
                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={feature.rolloutStrategy === 'gradual'}
                onchange={() => feature.rolloutStrategy = 'gradual'}
              />
              <label for="gradual" class="ml-3 flex items-center">
                <span class="block text-sm font-medium text-gray-700">Gradual</span>
              </label>
            </div>
            
            <div class="flex items-center">
              <input
                id="targeted"
                name="rollout-strategy"
                type="radio"
                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={feature.rolloutStrategy === 'targeted'}
                onchange={() => feature.rolloutStrategy = 'targeted'}
              />
              <label for="targeted" class="ml-3 flex items-center">
                <span class="block text-sm font-medium text-gray-700">Targeted</span>
              </label>
            </div>
            
            <div class="flex items-center">
              <input
                id="instant"
                name="rollout-strategy"
                type="radio"
                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={feature.rolloutStrategy === 'instant'}
                onchange={() => feature.rolloutStrategy = 'instant'}
              />
              <label for="instant" class="ml-3 flex items-center">
                <span class="block text-sm font-medium text-gray-700">Instant</span>
              </label>
            </div>
            
            <div class="flex items-center">
              <input
                id="custom"
                name="rollout-strategy"
                type="radio"
                class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                checked={feature.rolloutStrategy === 'custom'}
                onchange={() => feature.rolloutStrategy = 'custom'}
              />
              <label for="custom" class="ml-3 flex items-center">
                <span class="block text-sm font-medium text-gray-700">Custom</span>
              </label>
            </div>
          </div>

          <div class="mt-4">
            {#if feature.rolloutStrategy === 'gradual'}
              <div class="flex items-center space-x-4">
                <label for="rollout-percentage" class="block text-sm font-medium text-gray-700">
                  Rollout Percentage
                </label>
                <input
                  type="range"
                  id="rollout-percentage"
                  min="0"
                  max="100"
                  step="1"
                  class="w-full max-w-xs"
                  bind:value={feature.rolloutPercentage}
                  oninput={(e) => updateRolloutPercentage(parseInt((e.target as HTMLInputElement).value))}
                />
                <output class="text-sm font-medium text-gray-900 w-16">
                  {feature.rolloutPercentage || 0}%
                </output>
              </div>
              <p class="mt-2 text-sm text-gray-500">
                Gradually enable this feature for {feature.rolloutPercentage || 0}% of users
              </p>
            {/if}

            {#if feature.rolloutStrategy === 'targeted'}
              <div>
                <label for="target-users" class="block text-sm font-medium text-gray-700 mb-2">Target Users</label>
                <textarea
                  id="target-users"
                  rows={3}
                  class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  bind:value={targetUsersString}
                  oninput={(e) => {
                    targetUsersString = (e.target as HTMLTextAreaElement).value;
                  }}
                  placeholder="Enter user IDs or emails, one per line"
                ></textarea>
                <p class="mt-1 text-sm text-gray-500">
                  Enable feature for specific users (one ID/email per line)
                </p>
              </div>
            {/if}

            {#if feature.rolloutStrategy === 'custom'}
              <div>
                <p class="block text-sm font-medium text-gray-700 mb-2">Custom Conditions</p>
                <div class="space-y-3">
                  {#each feature.targetConditions as condition, i}
                    <div class="flex items-center space-x-2">
                      <span class="text-sm font-medium text-gray-700">{condition.attribute}</span>
                      <span class="text-sm text-gray-500">{condition.operator}</span>
                      <span class="text-sm text-gray-900">{condition.value}</span>
                      <button
                        type="button"
                        class="text-red-600 hover:text-red-900"
                        onclick={() => removeCondition(i)}
                        aria-label="Remove condition"
                      >
                        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  {/each}
                  
                  <div class="flex space-x-2">
                    <select
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      bind:value={newConditionAttribute}
                    >
                      <option value="">Select attribute</option>
                      <option value="country">Country</option>
                      <option value="device">Device Type</option>
                      <option value="browser">Browser</option>
                      <option value="userType">User Type</option>
                      <option value="region">Region</option>
                    </select>
                    
                    <select
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      bind:value={newConditionOperator}
                    >
                      <option value="">Select operator</option>
                      <option value="equals">Equals</option>
                      <option value="not-equals">Not Equals</option>
                      <option value="contains">Contains</option>
                      <option value="greater-than">Greater Than</option>
                      <option value="less-than">Less Than</option>
                    </select>
                    
                    <input
                      type="text"
                      class="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      bind:value={newConditionValue}
                      placeholder="Value"
                    />
                    
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                      onclick={addCondition}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            {/if}
          </div>
          </div>
        </fieldset>
      </div>
    </div>
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="flex items-center text-sm text-gray-500">
        <Calendar class="h-4 w-4 mr-1" />
        <span>Created: {feature.createdAt.toLocaleDateString()}</span>
        <span class="mx-2">•</span>
        <span>Updated: {feature.updatedAt.toLocaleDateString()}</span>
      </div>
      
      <div class="flex space-x-3">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
          onclick={saveFeature}
        >
          <Settings class="h-4 w-4 mr-1" />
          Save Configuration
        </button>
      </div>
    </div>
  </div>
</div>