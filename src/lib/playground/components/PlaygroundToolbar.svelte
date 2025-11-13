<script lang="ts">
  import { Monitor, Tablet, Smartphone, Maximize, Grid, Moon, Sun, Sidebar, Download, Copy, Settings } from 'lucide-svelte';
  import { playgroundStore, type ViewportSize } from '../stores/playground.svelte';
  import { formatShortcut } from '../utils/keyboard';

  interface Props {
    componentName?: string;
    category?: string;
  }

  let { componentName = '', category = '' }: Props = $props();

  // Reactive state from store
  let currentViewport = $derived(playgroundStore.state.viewport);
  let showGrid = $derived(playgroundStore.uiState.showGrid);
  let darkMode = $derived(playgroundStore.state.darkMode);

  const viewportSizes: { size: ViewportSize; icon: any; label: string; width: string }[] = [
    { size: 'mobile', icon: Smartphone, label: 'Mobile', width: '375px' },
    { size: 'tablet', icon: Tablet, label: 'Tablet', width: '768px' },
    { size: 'desktop', icon: Monitor, label: 'Desktop', width: '1440px' },
    { size: 'fullscreen', icon: Maximize, label: 'Full', width: '100%' }
  ];

  function handleViewportChange(size: ViewportSize) {
    console.log('Changing viewport to:', size);
    playgroundStore.setViewport(size);
    console.log('Current viewport:', playgroundStore.state.viewport);
  }

  function handleToggleGrid() {
    console.log('Toggling grid. Current:', playgroundStore.uiState.showGrid);
    playgroundStore.toggleGrid();
    console.log('After toggle:', playgroundStore.uiState.showGrid);
  }

  function handleToggleDarkMode() {
    console.log('Toggling dark mode. Current:', playgroundStore.state.darkMode);
    playgroundStore.toggleDarkMode();
    console.log('After toggle:', playgroundStore.state.darkMode);
  }

  function copyCode() {
    console.log('Copy code');
  }

  function downloadScreenshot() {
    console.log('Download screenshot');
  }
</script>

<div class="toolbar-container h-16 border-b border-gray-200/80 dark:border-gray-700/80 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm flex items-center justify-between px-6 shadow-sm">
  <!-- Left: Component info -->
  <div class="flex items-center gap-4">
    <button
      onclick={() => playgroundStore.toggleSidebar()}
      class="toolbar-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
      title={`Toggle sidebar (${formatShortcut({ key: '/', ctrl: true })})`}
    >
      <Sidebar class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
    </button>

    {#if componentName}
      <div class="flex flex-col animate-fade-in">
        <h1 class="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          {componentName}
        </h1>
        {#if category}
          <p class="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {category}
          </p>
        {/if}
      </div>
    {/if}
  </div>

  <!-- Center: Viewport controls -->
  <div class="viewport-controls flex items-center gap-1 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded-xl p-1.5 shadow-inner">
    {#each viewportSizes as { size, icon: Icon, label, width }}
      <button
        onclick={() => handleViewportChange(size)}
        class="viewport-button group relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95 {currentViewport === size ? 'bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/50 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-white/80 dark:hover:bg-gray-600/80'}"
        title={`${label} (${width})`}
      >
        <Icon class="w-4 h-4 transition-transform group-hover:rotate-12" />
        <span class="text-sm font-semibold hidden md:inline">{label}</span>
        {#if currentViewport === size}
          <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400/20 to-purple-400/20 animate-pulse"></div>
        {/if}
      </button>
    {/each}
  </div>

  <!-- Right: Actions -->
  <div class="flex items-center gap-2">
    <!-- Grid toggle -->
    <button
      onclick={handleToggleGrid}
      class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 {showGrid ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/50' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}"
      title="Toggle grid"
    >
      <Grid class={`w-5 h-5 transition-transform group-hover:rotate-90 ${showGrid ? '' : 'text-gray-600 dark:text-gray-400'}`} />
    </button>

    <!-- Dark mode toggle -->
    <button
      onclick={handleToggleDarkMode}
      class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-amber-50 dark:hover:bg-amber-900/30"
      title={`Toggle dark mode (${formatShortcut({ key: 'd', ctrl: true })})`}
    >
      {#if darkMode}
        <Sun class="w-5 h-5 text-amber-500 group-hover:text-amber-600 transition-all group-hover:rotate-180 group-hover:scale-110" />
      {:else}
        <Moon class="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-all group-hover:-rotate-12" />
      {/if}
    </button>

    <!-- Copy code -->
    <button
      onclick={copyCode}
      class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-green-50 dark:hover:bg-green-900/30"
      title={`Copy code (${formatShortcut({ key: 'c', ctrl: true })})`}
    >
      <Copy class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
    </button>

    <!-- Download screenshot -->
    <button
      onclick={downloadScreenshot}
      class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-blue-50 dark:hover:bg-blue-900/30"
      title="Download screenshot"
    >
      <Download class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:translate-y-1" />
    </button>

    <!-- Settings -->
    <button
      class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-purple-50 dark:hover:bg-purple-900/30"
      title="Settings"
    >
      <Settings class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all group-hover:rotate-90" />
    </button>
  </div>
</div>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }

  .toolbar-container {
    position: relative;
    z-index: 10;
  }

  .toolbar-container::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent);
  }

  :global(.dark) .toolbar-container::after {
    background: linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.2), transparent);
  }
</style>
