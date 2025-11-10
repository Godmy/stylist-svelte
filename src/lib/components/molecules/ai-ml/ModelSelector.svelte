<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';

  type Model = {
    id: string;
    name: string;
    description: string;
    capabilities: string[];
    provider: string;
    version: string;
    tags?: string[];
  };

  type Props = {
    models: Model[];
    selectedModel?: string;
    onModelSelect?: (modelId: string) => void;
    showTags?: boolean;
    showCapabilities?: boolean;
    placeholder?: string;
    class?: string;
    dropdownClass?: string;
    modelItemClass?: string;
    headerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    models = [],
    selectedModel,
    onModelSelect,
    showTags = true,
    showCapabilities = true,
    placeholder = 'Select a model...',
    class: className = '',
    dropdownClass = '',
    modelItemClass = '',
    headerClass = '',
    ...restProps
  }: Props = $props();

  // Определяем переменные, которые не являются пропсами
  let unused = { ...restProps }; // Используем restProps, чтобы избежать предупреждения о неиспользуемых переменных

  let isOpen = $state(false);
  let selectedModelValue = $state<Model | undefined>(models.find(m => m.id === selectedModel));

  function selectModel(model: Model) {
    selectedModelValue = model;
    isOpen = false;
    if (onModelSelect) {
      onModelSelect(model.id);
    }
  }
</script>

<div class={`relative ${className}`} {...restProps}>
  <button
    type="button"
    class={`w-full flex items-center justify-between px-4 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      dropdownClass
    }`}
    onclick={() => isOpen = !isOpen}
  >
    <div class="flex-1 min-w-0">
      {#if selectedModelValue}
        <span class="block truncate font-medium text-gray-900">{selectedModelValue.name}</span>
        <span class="block text-sm truncate text-gray-500">{selectedModelValue.description}</span>
      {:else}
        <span class="block truncate text-gray-500">{placeholder}</span>
      {/if}
    </div>
    <ChevronDown class={`h-5 w-5 text-gray-400 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
  </button>

  {#if isOpen}
    <div class={`absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm ${dropdownClass}`}>
      {#each models as model}
        <div
          class={`flex items-start p-4 hover:bg-gray-50 cursor-pointer ${modelItemClass} ${
            selectedModelValue?.id === model.id ? 'bg-blue-50' : ''
          }`}
          onclick={() => selectModel(model)}
          onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? selectModel(model) : null}
          role="button"
          tabindex="0"
        >
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline">
              <p class="text-sm font-medium text-gray-900">{model.name}</p>
              <p class="ml-2 text-xs text-gray-500">{model.provider} • v{model.version}</p>
            </div>
            <p class="text-sm text-gray-500 mt-1">{model.description}</p>
            
            {#if showCapabilities && model.capabilities.length > 0}
              <div class="mt-2 flex flex-wrap gap-1">
                {#each model.capabilities.slice(0, 3) as capability, i}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    {capability}
                  </span>
                {/each}
                {#if model.capabilities.length > 3}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    +{model.capabilities.length - 3} more
                  </span>
                {/if}
              </div>
            {/if}
            
            {#if showTags && model.tags && model.tags.length > 0}
              <div class="mt-2 flex flex-wrap gap-1">
                {#each model.tags.slice(0, 2) as tag}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    #{tag}
                  </span>
                {/each}
                {#if model.tags.length > 2}
                  <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                    +{model.tags.length - 2} more
                  </span>
                {/if}
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>