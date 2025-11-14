<script lang="ts">
  import { Sliders, Code, ChevronDown, ChevronUp, Zap, Layers, Download, Keyboard } from 'lucide-svelte';
  import { playgroundStore } from '../stores/playground.svelte';
  import type { Snippet } from 'svelte';
  import type { BottomTab } from '../types';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  const tabs: { id: BottomTab; icon: any; label: string }[] = [
    { id: 'controls', icon: Sliders, label: 'Controls' },
    { id: 'code', icon: Code, label: 'Code' },
    { id: 'actions', icon: Zap, label: 'Actions' },
    { id: 'variants', icon: Layers, label: 'Variants' },
    { id: 'export', icon: Download, label: 'Export' },
    { id: 'shortcuts', icon: Keyboard, label: 'Shortcuts' }
  ];
</script>

{#if playgroundStore.uiState.bottomPanelOpen}
  <div class="bottom-panel-expanded h-80 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-t from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex flex-col shadow-2xl">
    <!-- Tabs -->
    <div class="flex items-center border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div class="flex-1 flex">
        {#each tabs as tab}
          <button
            onclick={() => playgroundStore.setBottomTab(tab.id)}
            class={`tab-button group relative flex items-center gap-2 px-5 py-4 border-b-3 transition-all duration-200 hover:scale-105 ${(playgroundStore.state.bottomTab === tab.id) ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
          >
            {#if tab.icon}
              {@const Icon = tab.icon}
              <Icon class="w-4 h-4 transition-transform group-hover:scale-110" />
            {/if}
            <span class="text-sm font-semibold">{tab.label}</span>
            {#if playgroundStore.state.bottomTab === tab.id}
              <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Toggle button -->
      <button
        onclick={() => playgroundStore.toggleBottomPanel()}
        class="collapse-button group p-2 m-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all hover:scale-110 active:scale-95"
        title="Collapse panel"
      >
        <ChevronDown class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all group-hover:translate-y-1" />
      </button>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{:else}
  <!-- Collapsed state -->
  <div class="bottom-panel-collapsed h-12 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm flex items-center justify-between px-6 shadow-lg">
    <div class="flex gap-2">
      {#each tabs as tab}
        <button
          onclick={() => {
            playgroundStore.setBottomTab(tab.id);
            playgroundStore.toggleBottomPanel();
          }}
          class="quick-tab group flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 active:scale-95 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm hover:shadow-md hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30"
        >
          {#if tab.icon}
            {@const Icon = tab.icon}
            <Icon class="w-4 h-4 transition-transform group-hover:scale-110" />
          {/if}
          <span>{tab.label}</span>
        </button>
      {/each}
    </div>

    <button
      onclick={() => playgroundStore.toggleBottomPanel()}
      class="expand-button group p-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all hover:scale-110 active:scale-95"
      title="Expand panel"
    >
      <ChevronUp class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all group-hover:-translate-y-1" />
    </button>
  </div>
{/if}

<style>
  .bottom-panel-expanded {
    animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .bottom-panel-collapsed {
    animation: slide-down 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .border-b-3 {
    border-bottom-width: 3px;
  }
</style>
