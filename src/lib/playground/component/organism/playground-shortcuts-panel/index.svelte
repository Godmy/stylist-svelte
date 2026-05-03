<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/media';
  import { createPlaygroundShortcutsPanelState } from '$stylist/playground/function/state/playground-shortcuts-panel';
  import type { PlaygroundShortcutsPanelProps } from '$stylist/playground/type/struct/playground-shortcuts-panel-props';
const Keyboard = 'keyboard';
const Command = 'command';
const Search = 'search';
const Zap = 'zap';
const Eye = 'eye';
const SidebarIcon = 'sidebar';
const Layout = 'layout';
const Grid = 'grid';
const Moon = 'moon';
const Code = 'code';
const Copy = 'copy';


  let props: PlaygroundShortcutsPanelProps = $props();
  const state = createPlaygroundShortcutsPanelState(props);
</script>

<div class="shortcuts-panel p-6 h-full overflow-auto bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
  <!-- Header -->
  <div class="mb-6">
    <div class="flex items-center gap-3 mb-2">
      <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
        <BaseIcon name={Keyboard} class="w-6 h-6 text-white" />
      </div>
      <h3 class="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
        Keyboard Shortcuts
      </h3>
    </div>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Master the playground with these keyboard shortcuts
    </p>
  </div>

  <!-- Shortcuts by category -->
  <div class="space-y-6">
    {#each state.categoryOrder as category}
      {#if state.groupedShortcuts.has(category)}
        {@const categoryShortcuts = state.groupedShortcuts.get(category) || []}
        <div class="category-section">
          <!-- Category header -->
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-gradient-to-br {state.getCategoryColor(category)} flex items-center justify-center border-2">
              <BaseIcon name={state.getCategoryIcon(category)} class="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </div>
            <h4 class="text-sm font-bold text-gray-900 dark:text-white">
              {category}
            </h4>
            <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-semibold">
              {categoryShortcuts.length}
            </span>
          </div>

          <!-- Shortcuts list -->
          <div class="space-y-2 ml-10">
            {#each categoryShortcuts as shortcut, index}
              <div
                class="shortcut-item group p-3 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
                style="animation-delay: {index * 30}ms"
              >
                <div class="flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3 flex-1 min-w-0">
                    {#if shortcut.icon}
                      <BaseIcon name={shortcut.icon} class="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    {/if}
                    <span class="text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
                      {shortcut.description}
                    </span>
                  </div>
                  <div class="flex items-center gap-1 flex-shrink-0">
                    {#each shortcut.keys as key, i}
                      <kbd class="px-2.5 py-1 rounded text-xs font-bold {state.getKeyColor(key)} border shadow-sm font-mono transition-all group-hover:scale-105">
                        {key}
                      </kbd>
                      {#if i < shortcut.keys.length - 1}
                        <span class="text-gray-400 dark:text-gray-600 text-xs mx-0.5">+</span>
                      {/if}
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Tips section -->
  <div class="mt-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
    <h4 class="text-xs font-bold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
      <BaseIcon name={Zap} class="w-4 h-4" />
      Pro Tips
    </h4>
    <ul class="space-y-1.5 text-xs text-indigo-700 dark:text-indigo-300">
      <li class="flex items-start gap-2">
        <span class="text-indigo-500 mt-0.5">•</span>
        <span>Hold <kbd class="px-1 py-0.5 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700 font-mono text-[10px]">Shift</kbd> while using zoom shortcuts for finer control</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-indigo-500 mt-0.5">•</span>
        <span>Press <kbd class="px-1 py-0.5 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700 font-mono text-[10px]">?</kbd> anytime to open this shortcuts panel</span>
      </li>
      <li class="flex items-start gap-2">
        <span class="text-indigo-500 mt-0.5">•</span>
        <span>Use <kbd class="px-1 py-0.5 bg-white dark:bg-gray-800 rounded border border-indigo-300 dark:border-indigo-700 font-mono text-[10px]">Esc</kbd> to close any modal or panel</span>
      </li>
    </ul>
  </div>

  <!-- Platform note -->
  <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <p class="text-xs text-gray-600 dark:text-gray-400 text-center">
      On macOS, replace <kbd class="px-1 py-0.5 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono">Ctrl</kbd> with <kbd class="px-1 py-0.5 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 font-mono">⌘</kbd> (Command)
    </p>
  </div>
</div>

<style>
  .shortcut-item {
    animation: fade-slide-in var(--duration-300) var(--animation-ease-out);
  }

  @keyframes fade-slide-in {
    from {
      opacity: var(--opacity-0);
      transform: translateX(-8px);
    }
    to {
      opacity: var(--opacity-100);
      transform: translateX(0);
    }
  }

  .category-section {
    animation: fade-in var(--duration-400) var(--animation-ease-out);
  }

  @keyframes fade-in {
    from {
      opacity: var(--opacity-0);
    }
    to {
      opacity: var(--opacity-100);
    }
  }
</style>
