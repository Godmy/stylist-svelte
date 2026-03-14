<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ChevronDown = 'chevron-down';

  import { ModelSelectorStyleManager } from '$stylist/design-system/styles/interaction/model-selector';
  import type { Model, ModelSelectorProps } from '$stylist/design-system/types/interaction/model-selector';

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

  // РћРїСЂРµРґРµР»СЏРµРј РїРµСЂРµРјРµРЅРЅС‹Рµ, РєРѕС‚РѕСЂС‹Рµ РЅРµ СЏРІР»СЏСЋС‚СЃСЏ РїСЂРѕРїСЃР°РјРё
  let unused = { ...restProps }; // РСЃРїРѕР»СЊР·СѓРµРј restProps, С‡С‚РѕР±С‹ РёР·Р±РµР¶Р°С‚СЊ РїСЂРµРґСѓРїСЂРµР¶РґРµРЅРёСЏ Рѕ РЅРµРёСЃРїРѕР»СЊР·СѓРµРјС‹С… РїРµСЂРµРјРµРЅРЅС‹С…

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
    <BaseIcon name={ChevronDown} class={chevronClass} />
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
              <p class={modelProviderVersionClass}>{model.provider} вЂў v{model.version}</p>
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



