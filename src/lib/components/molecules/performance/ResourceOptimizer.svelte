<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { HardDrive, Zap, Image, File, Package, Upload, Download, Settings } from 'lucide-svelte';

  type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';

  type Resource = {
    id: string;
    name: string;
    url: string;
    type: ResourceType;
    size: number; // in bytes
    transferSize?: number; // compressed size in bytes
    loadTime?: number; // in milliseconds
    status: 'loading' | 'loaded' | 'error' | 'cached';
    priority: 'high' | 'normal' | 'low';
    isOptimized: boolean;
  };

  type OptimizationSuggestion = {
    id: string;
    resourceId: string;
    type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
    description: string;
    estimatedSavings: number; // in bytes or percentage
    implementationEffort: 'low' | 'medium' | 'high';
  };

  type Props = {
    resources: Resource[];
    suggestions?: OptimizationSuggestion[];
    showResourceDetails?: boolean;
    showOptimizationSuggestions?: boolean;
    showPrioritization?: boolean;
    showSizeComparison?: boolean;
    onResourceOptimize?: (resourceId: string) => void;
    onApplySuggestions?: () => void;
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    resourceClass?: string;
    suggestionClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

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
    description = 'Optimize your application resources for better performance',
    class: className = '',
    headerClass = '',
    resourceClass = '',
    suggestionClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let expandedResources = $state<Record<string, boolean>>({});
  let selectedOptimizations = $state<string[]>([]);

  function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  function getResourceTypeIcon(type: ResourceType) {
    switch(type) {
      case 'image': return Image;
      case 'api': return Package;
      case 'script': return File;
      case 'stylesheet': return File;
      case 'font': return Settings;
      default: return File;
    }
  }

  function getResourceColor(status: string) {
    switch(status) {
      case 'loaded': return 'bg-green-100 text-green-800';
      case 'loading': return 'bg-blue-100 text-blue-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'cached': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  function toggleResourceDetails(id: string) {
    expandedResources = {
      ...expandedResources,
      [id]: !expandedResources[id]
    };
  }

  function toggleOptimization(id: string) {
    if (selectedOptimizations.includes(id)) {
      selectedOptimizations = selectedOptimizations.filter(sid => sid !== id);
    } else {
      selectedOptimizations = [...selectedOptimizations, id];
    }
  }

  function applySelectedOptimizations() {
    if (onApplySuggestions) {
      onApplySuggestions();
    }
    // Reset selections after applying
    selectedOptimizations = [];
  }

  // Calculate summary statistics
  const totalSize = resources.reduce((sum, res) => sum + res.size, 0);
  const totalTransferSize = resources.reduce((sum, res) => sum + (res.transferSize || res.size), 0);
  const optimizationPotential = suggestions.reduce((sum, s) => sum + s.estimatedSavings, 0);
  
  const savingsPercent = totalSize > 0 ? (optimizationPotential / totalSize) * 100 : 0;
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 overflow-hidden ${className}`} {...restProps}>
  <div class={`border-b px-6 py-5 ${headerClass}`}>
    <div class="flex items-center">
      <Zap class="h-6 w-6 text-gray-500 mr-2" />
      <div>
        <h3 class="text-lg font-medium text-gray-900">{title}</h3>
        {#if description}
          <p class="mt-1 text-sm text-gray-500">{description}</p>
        {/if}
      </div>
    </div>
    
    <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="text-sm text-blue-800">Total Resources</div>
        <div class="text-lg font-semibold text-blue-900">{resources.length}</div>
      </div>
      
      <div class="bg-green-50 p-3 rounded-lg">
        <div class="text-sm text-green-800">Total Size</div>
        <div class="text-lg font-semibold text-green-900">{formatBytes(totalSize)}</div>
      </div>
      
      <div class="bg-purple-50 p-3 rounded-lg">
        <div class="text-sm text-purple-800">Transfer Size</div>
        <div class="text-lg font-semibold text-purple-900">{formatBytes(totalTransferSize)}</div>
      </div>
      
      <div class="bg-yellow-50 p-3 rounded-lg">
        <div class="text-sm text-yellow-800">Potential Savings</div>
        <div class="text-lg font-semibold text-yellow-900">
          {formatBytes(optimizationPotential)} ({savingsPercent.toFixed(1)}%)
        </div>
      </div>
    </div>
  </div>

  <div class="p-6">
    <!-- Resource List -->
    <div class="mb-8">
      <h4 class="text-md font-medium text-gray-900 mb-4">Resources</h4>
      
      <div class="space-y-4">
        {#each resources as resource}
          <div class={`border rounded-lg overflow-hidden ${resourceClass}`}>
            <div class="flex items-center p-4">
              {#if true}
                {@const ResourceIcon = getResourceTypeIcon(resource.type)}
                <ResourceIcon class="h-5 w-5 text-gray-500 mr-3" />
              {/if}
              
              <div class="flex-1 min-w-0">
                <div class="flex items-center">
                  <p class="text-sm font-medium text-gray-900 truncate">{resource.name}</p>
                  <span class={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getResourceColor(resource.status)}`}>
                    {resource.status}
                  </span>
                  {#if resource.isOptimized}
                    <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Optimized
                    </span>
                  {/if}
                </div>
                
                <div class="flex items-center mt-1 text-sm text-gray-500">
                  <span>{resource.url}</span>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                {#if showSizeComparison && resource.transferSize !== undefined}
                  <div class="text-right">
                    <div class="text-sm text-gray-900">{formatBytes(resource.size)}</div>
                    <div class="text-xs text-gray-500 line-through">{formatBytes(resource.transferSize)}</div>
                  </div>
                {/if}
                
                <button
                  type="button"
                  class="text-blue-600 hover:text-blue-900"
                  onclick={() => toggleResourceDetails(resource.id)}
                >
                  {#if expandedResources[resource.id]}
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                    </svg>
                  {:else}
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  {/if}
                </button>
              </div>
            </div>
            
            {#if expandedResources[resource.id]}
              <div class="border-t border-gray-200 bg-gray-50 p-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p class="text-xs text-gray-500">Type</p>
                    <p class="text-sm font-medium text-gray-900 capitalize">{resource.type}</p>
                  </div>
                  
                  <div>
                    <p class="text-xs text-gray-500">Size</p>
                    <p class="text-sm font-medium text-gray-900">{formatBytes(resource.size)}</p>
                  </div>
                  
                  <div>
                    <p class="text-xs text-gray-500">Priority</p>
                    <p class="text-sm font-medium text-gray-900 capitalize">{resource.priority}</p>
                  </div>
                  
                  <div>
                    <p class="text-xs text-gray-500">Load Time</p>
                    <p class="text-sm font-medium text-gray-900">
                      {resource.loadTime ? `${resource.loadTime}ms` : 'N/A'}
                    </p>
                  </div>
                </div>
                
                {#if showOptimizationSuggestions}
                  <div class="mt-4">
                    <h5 class="text-sm font-medium text-gray-900 mb-2">Optimization Suggestions</h5>
                    <div class="space-y-2">
                      {#each suggestions.filter(s => s.resourceId === resource.id) as suggestion}
                        <div class="flex items-start">
                          <input
                            type="checkbox"
                            id="suggest-{suggestion.id}"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            onchange={() => toggleOptimization(suggestion.id)}
                          />
                          <label for="suggest-{suggestion.id}" class="ml-2 flex-1">
                            <span class="text-sm font-medium text-gray-900">{suggestion.description}</span>
                            <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Save ~{formatBytes(suggestion.estimatedSavings)}
                            </span>
                          </label>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/if}
                
                <div class="mt-4 flex space-x-3">
                  <button
                    type="button"
                    class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                    onclick={() => onResourceOptimize && onResourceOptimize(resource.id)}
                  >
                    <Zap class="h-4 w-4 mr-1" />
                    Optimize
                  </button>
                  
                  {#if resource.type === 'image' && onResourceOptimize}
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      onclick={() => onResourceOptimize && onResourceOptimize(resource.id)}
                    >
                      <Image class="h-4 w-4 mr-1" />
                      Compress Image
                    </button>
                  {/if}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    {#if showOptimizationSuggestions && suggestions.length > 0}
      <div>
        <div class="flex items-center justify-between mb-4">
          <h4 class="text-md font-medium text-gray-900">Optimization Suggestions</h4>
          <button
            type="button"
            class="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            onclick={applySelectedOptimizations}
          >
            <Settings class="h-4 w-4 mr-1" />
            Apply Selected
          </button>
        </div>
        
        <div class="space-y-3">
          {#each suggestions as suggestion}
            <div class={`border rounded-lg p-4 flex items-start ${suggestionClass}`}>
              <input
                type="checkbox"
                id="optimize-{suggestion.id}"
                class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                checked={selectedOptimizations.includes(suggestion.id)}
                onchange={() => toggleOptimization(suggestion.id)}
              />
              <label for="optimize-{suggestion.id}" class="ml-3 flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-sm font-medium text-gray-900">{suggestion.description}</p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Save {formatBytes(suggestion.estimatedSavings)}
                  </span>
                </div>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <span>
                    Effort: 
                    <span class={`ml-1 px-1.5 py-0.5 rounded-full ${
                      suggestion.implementationEffort === 'low' ? 'bg-green-100 text-green-800' :
                      suggestion.implementationEffort === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {suggestion.implementationEffort}
                    </span>
                  </span>
                </div>
              </label>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>

  <div class={`border-t px-6 py-4 ${footerClass}`}>
    <div class="flex items-center justify-between">
      <div class="text-sm text-gray-500">
        {suggestions.length} optimization{ suggestions.length !== 1 ? 's' : ''} available
      </div>
      <div class="flex items-center">
        <Zap class="h-4 w-4 text-yellow-500 mr-1" />
        <span class="text-sm font-medium text-gray-900">
          Potential savings: {formatBytes(optimizationPotential)} ({savingsPercent.toFixed(1)}%)
        </span>
      </div>
    </div>
  </div>
</div>