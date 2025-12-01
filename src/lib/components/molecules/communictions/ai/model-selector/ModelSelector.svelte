<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';
  import { ModelSelectorStyleManager } from './styles';
  import type { Model, ModelSelectorProps } from './types';

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
  }: ModelSelectorProps = $props();

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(ModelSelectorStyleManager.getContainerClass(className));
  const dropdownButtonClass = $derived(ModelSelectorStyleManager.getDropdownButtonClass(dropdownClass));
  const modelInfoContainerClass = $derived(ModelSelectorStyleManager.getModelInfoContainerClass());
  const selectedModelNameClass = $derived(ModelSelectorStyleManager.getSelectedModelNameClass());
  const selectedModelDescriptionClass = $derived(ModelSelectorStyleManager.getSelectedModelDescriptionClass());
  const placeholderClass = $derived(ModelSelectorStyleManager.getPlaceholderClass());
  const chevronClass = $derived(ModelSelectorStyleManager.getChevronClass(isOpen));
  const dropdownMenuClass = $derived(ModelSelectorStyleManager.getDropdownMenuClass(dropdownClass));
  const modelDetailsContainerClass = $derived(ModelSelectorStyleManager.getModelDetailsContainerClass());
  const modelNameClass = $derived(ModelSelectorStyleManager.getModelNameClass());
  const modelProviderVersionClass = $derived(ModelSelectorStyleManager.getModelProviderVersionClass());
  const modelDescriptionClass = $derived(ModelSelectorStyleManager.getModelDescriptionClass());
  const capabilitiesContainerClass = $derived(ModelSelectorStyleManager.getCapabilitiesContainerClass());
  const capabilityTagClass = $derived(ModelSelectorStyleManager.getCapabilityTagClass());
  const moreCapabilitiesTagClass = $derived(ModelSelectorStyleManager.getMoreCapabilitiesTagClass());
  const tagsContainerClass = $derived(ModelSelectorStyleManager.getTagsContainerClass());
  const tagClass = $derived(ModelSelectorStyleManager.getTagClass());
</script>
<div class={containerClass} {...restProps}>
  <button
    type="button"
    class={dropdownButtonClass}
    onclick={() => isOpen = !isOpen}
  >
    <div class={modelInfoContainerClass}>
      {#if selectedModelValue}
        <span class={selectedModelNameClass}>{selectedModelValue.name}</span>
        <span class={selectedModelDescriptionClass}>{selectedModelValue.description}</span>
      {:else}
        <span class={placeholderClass}>{placeholder}</span>
      {/if}
    </div>
    <ChevronDown class={chevronClass} />
  </button>

  {#if isOpen}
    <div class={dropdownMenuClass}>
      {#each models as model}
        <div
          class={ModelSelectorStyleManager.getModelItemClass(selectedModelValue?.id === model.id, modelItemClass)}
          onclick={() => selectModel(model)}
          onkeydown={(e) => e.key === 'Enter' || e.key === ' ' ? selectModel(model) : null}
          role="button"
          tabindex="0"
        >
          <div class={modelDetailsContainerClass}>
            <div class="flex items-baseline">
              <p class={modelNameClass}>{model.name}</p>
              <p class={modelProviderVersionClass}>{model.provider} • v{model.version}</p>
            </div>
            <p class={modelDescriptionClass}>{model.description}</p>

            {#if showCapabilities && model.capabilities.length > 0}
              <div class={capabilitiesContainerClass}>
                {#each model.capabilities.slice(0, 3) as capability, i}
                  <span class={capabilityTagClass}>
                    {capability}
                  </span>
                {/each}
                {#if model.capabilities.length > 3}
                  <span class={moreCapabilitiesTagClass}>
                    +{model.capabilities.length - 3} more
                  </span>
                {/if}
              </div>
            {/if}

            {#if showTags && model.tags && model.tags.length > 0}
              <div class={tagsContainerClass}>
                {#each model.tags.slice(0, 2) as tag}
                  <span class={tagClass}>
                    #{tag}
                  </span>
                {/each}
                {#if model.tags.length > 2}
                  <span class={tagClass}>
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
