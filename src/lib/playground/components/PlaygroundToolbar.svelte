<script lang="ts">
  import { Monitor, Tablet, Smartphone, Maximize, Grid, Moon, Sun, Sidebar, Download, Copy, Settings, ChevronRight, Home, ArrowLeft, Bot, Info } from 'lucide-svelte';
  import { playgroundStore, type ViewportSize } from '../stores/playground.svelte';
  import { formatShortcut } from '../utils/keyboard';

  interface Props {
    componentName?: string;
    category?: string;
    subcategory?: string;
    onInfoClick?: () => void;
  }

  let { componentName = '', category = '', subcategory = '', onInfoClick }: Props = $props();

  // Reactive state from store
  let currentViewport = $derived(playgroundStore.state.viewport);
  let showGrid = $derived(playgroundStore.uiState.showGrid);
  let darkMode = $derived(playgroundStore.state.darkMode);

  // Get number of controls for current story
  const currentStory = $derived(playgroundStore.getCurrentStory());
  const controlsCount = $derived(currentStory?.controls?.length || 0);

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

<div class="toolbar-container h-20 border-b border-gray-200/80 dark:border-gray-700/80 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 backdrop-blur-sm flex items-center justify-between px-6 shadow-sm">
  <!-- Left: Component info with breadcrumbs -->
  <div class="flex flex-col gap-2 flex-1 min-w-0">
    <!-- Breadcrumb navigation -->
    <div class="flex items-center gap-2 text-xs">
      <button
        onclick={() => window.history.back()}
        class="group flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all hover:scale-105 active:scale-95"
        title="Go back"
      >
        <ArrowLeft class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
        <span class="font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Back</span>
      </button>

      <ChevronRight class="w-3.5 h-3.5 text-gray-400" />

      <a href="/" class="group flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <Home class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
        <span class="font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">Home</span>
      </a>

      {#if category}
        <ChevronRight class="w-3.5 h-3.5 text-gray-400" />
        <span class="px-2 py-1 rounded-md font-medium text-gray-700 dark:text-gray-300">{category}</span>
      {/if}

      {#if subcategory}
        <ChevronRight class="w-3.5 h-3.5 text-gray-400" />
        <span class="px-2 py-1 rounded-md font-medium text-gray-700 dark:text-gray-300">{subcategory}</span>
      {/if}
    </div>

    <!-- Component name with badges -->
    {#if componentName}
      <div class="flex items-center gap-3 animate-fade-in">
        <button
          onclick={() => playgroundStore.toggleSidebar()}
          class="toolbar-button group p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
          title={`Toggle sidebar (${formatShortcut({ key: '/', ctrl: true })})`}
        >
          <Sidebar class="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
        </button>

        <div class="flex items-center gap-2">
          <!-- AI Badge -->
          <div class="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800">
            <Bot class="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span class="text-[10px] font-bold text-purple-700 dark:text-purple-300">AI</span>
          </div>

          <!-- Component name -->
          <h1 class="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {componentName}
          </h1>

          <!-- Category badge -->
          {#if category}
            <span class="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              {category}
            </span>
          {/if}

          <!-- Props count badge -->
          {#if controlsCount > 0}
            <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-semibold bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800" title="{controlsCount} props available">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              {controlsCount} {controlsCount === 1 ? 'prop' : 'props'}
            </span>
          {/if}
        </div>
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
    <!-- Component Info -->
    {#if onInfoClick}
      <button
        onclick={onInfoClick}
        class="toolbar-icon-button group p-2.5 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
        title="Component Info"
      >
        <Info class="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
      </button>
    {/if}

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
