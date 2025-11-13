<script lang="ts">
  import { Layers, Sliders, FileText, Code, Accessibility, X } from 'lucide-svelte';
  import { playgroundStore } from '../stores/playground.svelte';
  import type { Snippet } from 'svelte';

  type SidebarTab = 'variants' | 'props' | 'docs' | 'code' | 'a11y';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  const tabs: { id: SidebarTab; icon: any; label: string }[] = [
    { id: 'variants', icon: Layers, label: 'Variants' },
    { id: 'props', icon: Sliders, label: 'Props' },
    { id: 'docs', icon: FileText, label: 'Docs' },
    { id: 'code', icon: Code, label: 'Code' },
    { id: 'a11y', icon: Accessibility, label: 'A11y' }
  ];
</script>

{#if playgroundStore.state.sidebarOpen}
  <div class="sidebar-container w-80 border-r border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex flex-col shadow-lg">
    <!-- Tabs -->
    <div class="tabs-container flex items-center border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
      <div class="flex-1 flex overflow-x-auto">
        {#each tabs as tab}
          <button
            onclick={() => playgroundStore.setSidebarTab(tab.id)}
            class={`tab-button group relative flex items-center gap-2 px-5 py-4 border-b-3 transition-all duration-200 whitespace-nowrap hover:scale-105 ${(playgroundStore.state.sidebarTab === tab.id) ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20' : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700/50'}`}
          >
            {#if tab.icon}
              {@const Icon = tab.icon}
              <Icon class="w-4 h-4 transition-transform group-hover:scale-110" />
            {/if}
            <span class="text-sm font-semibold">{tab.label}</span>
            {#if playgroundStore.state.sidebarTab === tab.id}
              <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Close button -->
      <button
        onclick={() => playgroundStore.toggleSidebar()}
        class="close-button group p-2 m-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-all hover:scale-110 active:scale-95"
        title="Close sidebar"
      >
        <X class="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
      </button>
    </div>

    <!-- Content -->
    <div class="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300 dark:scrollbar-thumb-indigo-700">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{/if}

<style>
  .sidebar-container {
    animation: slide-in-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slide-in-left {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .border-b-3 {
    border-bottom-width: 3px;
  }
</style>
