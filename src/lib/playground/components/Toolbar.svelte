<script lang="ts">
  import { playgroundStore } from '../stores/playground.svelte';

  let state = $derived(playgroundStore.state);
  let darkMode = $derived(state.darkMode);
  let viewport = $derived(state.viewport);
  let showCode = $derived(state.showCode);
  let controlsOpen = $derived(state.controlsOpen);
</script>

<div class="flex items-center gap-2">
  <!-- Viewport Controls -->
  <div class="flex items-center gap-1">
    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 {viewport === 'mobile' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : ''}"
      onclick={() => playgroundStore.setViewport('mobile')}
      title="Mobile view"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </button>

    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 {viewport === 'tablet' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : ''}"
      onclick={() => playgroundStore.setViewport('tablet')}
      title="Tablet view"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </button>

    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 {viewport === 'desktop' ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : ''}"
      onclick={() => playgroundStore.setViewport('desktop')}
      title="Desktop view"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </button>
  </div>

  <div class="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

  <!-- View Controls -->
  <div class="flex items-center gap-1">
    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 {showCode ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : ''}"
      onclick={() => playgroundStore.toggleCode()}
      title="Toggle code"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </button>

    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700 {controlsOpen ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300' : ''}"
      onclick={() => playgroundStore.toggleControls()}
      title="Toggle controls"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    </button>
  </div>

  <div class="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

  <!-- Theme Toggle -->
  <div class="flex items-center gap-1">
    <button
      class="p-2 rounded-md hover:bg-gray-100 transition-colors dark:hover:bg-gray-700"
      onclick={() => playgroundStore.toggleDarkMode()}
      title="Toggle theme"
    >
      {#if darkMode}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      {:else}
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      {/if}
    </button>
  </div>
</div>
