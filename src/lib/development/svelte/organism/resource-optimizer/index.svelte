<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/resource-optimizer';
  import { Icon as BaseIcon } from '$stylist';
  import { createResourceOptimizerState } from '$stylist/development/function/state/resource-optimizer';

  const HardDrive = 'hard-drive';
  const Zap = 'zap';
  const Image = 'image';
  const File = 'file';
  const Package = 'package';
  const Upload = 'upload';
  const Download = 'download';
  const Settings = 'settings';

  let {
    resources = [],
    suggestions = [],
    showResourceDetails = true,
    showOptimizationSuggestions = true,
    showPrioritization = true,
    showSizeComparison = true,
    onResourceOptimize,
    onApplySuggestions,
    title = 'Resource Optimizer',
    description,
    class: className = '',
    ...restProps
  }: Props = $props();

  const state = createResourceOptimizerState({ resources, suggestions, showResourceDetails, showOptimizationSuggestions, showPrioritization, showSizeComparison, onResourceOptimize, onApplySuggestions, title, description, class: className, ...restProps });
</script>

<div class="bg-white rounded-lg shadow border border-gray-200 overflow-hidden {state.className}" {...restProps}>
  <div class="border-b px-6 py-5 {state.headerClass}">
    <div class="flex items-center">
      <BaseIcon name={Zap} class="h-6 w-6 text-gray-500 mr-2" />
      <div>
        <h3 class="text-lg font-medium text-gray-900">{state.title}</h3>
        {#if state.description}
          <p class="mt-1 text-sm text-gray-500">{state.description}</p>
        {/if}
      </div>
    </div>
  </div>

  <div class="px-6 py-5">
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="bg-gray-50 rounded p-4">
        <div class="text-2xl font-semibold text-gray-900">{state.resources.length}</div>
        <div class="text-sm text-gray-500">Total Resources</div>
      </div>
      <div class="bg-gray-50 rounded p-4">
        <div class="text-2xl font-semibold text-gray-900">{state.totalSize}</div>
        <div class="text-sm text-gray-500">Total Size</div>
      </div>
    </div>

    <div class="space-y-4">
      {#each state.resources as resource (resource.id)}
        <div class="border rounded-lg p-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <BaseIcon name={state.getResourceTypeIcon(resource.type)} class="h-5 w-5 text-gray-400 mr-2" />
              <span class="font-medium text-gray-900">{resource.name}</span>
            </div>
            <span class="text-sm text-gray-500">{state.formatBytes(resource.size)}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
