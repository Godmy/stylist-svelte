<script lang="ts">
  import type { PlaygroundAiPanelProps } from '$stylist/development/type/struct/playground-ai-panel-props';
  import { createPlaygroundAiPanelState } from '$stylist/development/function/state/playground-ai-panel';
  import { Icon as BaseIcon } from '$stylist';

  let { ...props }: PlaygroundAiPanelProps = $props();
  const state = createPlaygroundAiPanelState(props);
</script>

<div class={state.containerClass}>
  <div class={state.headerClass}>
    <h2 class="text-lg font-bold text-gray-900 dark:text-white">AI Assistants</h2>
    <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
      Выберите AI-модель для работы
    </p>
  </div>

  <div class="p-2">
    {#each state.aiProviders as provider}
      <div class="mb-1">
        <!-- Provider header -->
        <button
          onclick={() => state.toggleProvider(provider.id)}
          class={state.providerHeaderClass + " w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left"}
        >
          <div class="flex items-center gap-2">
            {#if state.isExpanded(provider.id)}
              <BaseIcon name={state.ChevronDown} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            {:else}
              <BaseIcon name={state.ChevronRight} class="w-4 h-4 text-gray-500 dark:text-gray-400" />
            {/if}
            <span class="font-bold text-sm text-gray-900 dark:text-white">
              {provider.name}
            </span>
          </div>
        </button>

        <!-- Provider options -->
        {#if state.isExpanded(provider.id)}
          <div class="ml-6 mt-1 space-y-0.5">
            {#each provider.options as option}
              <button
                onclick={() => state.handleOptionClick(provider.id, option.id)}
                class={state.optionItemClass + " w-full text-left px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300" + (state.isSelected(provider.id, option.id) ? ' ' + state.selectedOptionItemClass + ' font-medium' : '')}
              >
                {option.label}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
