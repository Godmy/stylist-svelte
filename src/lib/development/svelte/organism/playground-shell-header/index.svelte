<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { createPlaygroundShellHeaderState } from '$stylist/development/function/state/playground-shell-header';
  import type { PlaygroundShellHeaderProps } from '$stylist/development/type/struct/playground-shell-header-props';
  import type { PlaygroundShellHeaderViewportSize } from '$stylist/development/type/struct/playground-shell-header-viewport-size';
  import type { PlaygroundShellHeaderColorScheme } from '$stylist/development/type/struct/playground-shell-header-color-scheme';
const ZoomIn = 'zoom-in';
const ZoomOut = 'zoom-out';
const Smartphone = 'smartphone';
const Tablet = 'tablet';
const Monitor = 'monitor';
const ChevronDown = 'chevron-down';
const Check = 'check';
const Camera = 'camera';
const Sparkles = 'sparkles';
const Pencil = 'pencil';
const X = 'x';

  let props: PlaygroundShellHeaderProps = $props();
  const state = createPlaygroundShellHeaderState(props);
</script>

<svelte:window
  onclick={() => { state.closeAllMenus(); }}
/>

<div class="flex items-center justify-between h-14 px-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 relative z-[var(--z-index-modal)] {state.className}">
  <div class="flex items-center gap-2">
    <a href="/" class="flex items-center group">
      <img src="/stylist.png" alt="RecipeStylist" class="w-10 h-10" loading="lazy" decoding="async" />
    </a>

    <button
      onclick={state.onToggleComponentTree}
      class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-[var(--duration-200)] {state.showComponentTree
        ? 'bg-[var(--playground-accent-surface)] dark:bg-[var(--playground-accent-surface-strong)] ring-2 ring-[var(--playground-accent)] shadow-[0_15px_30px_var(--playground-accent-shadow)]'
        : 'hover:bg-[var(--playground-accent-surface)] dark:hover:bg-[var(--playground-accent-surface-strong)]'}"
    >
      <span class="text-xl font-black tracking-tight {state.showComponentTree ? 'text-[var(--playground-accent)]' : 'text-gray-900 dark:text-white'}">
        STYLIST
      </span>
    </button>

    <button
      onclick={state.onToggleAIPanel}
      class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-[var(--duration-200)] {state.showAIPanel
        ? 'bg-[var(--playground-accent-surface)] dark:bg-[var(--playground-accent-surface-strong)] ring-2 ring-[var(--playground-accent)] shadow-[0_15px_30px_var(--playground-accent-shadow)]'
        : 'hover:bg-[var(--playground-accent-surface)] dark:hover:bg-[var(--playground-accent-surface-strong)]'}"
      title="AI Panel"
    >
      <BaseIcon name={Sparkles} class="w-5 h-5 {state.showAIPanel ? 'text-[var(--playground-accent)]' : 'text-gray-600 dark:text-gray-400'}" />
      <span class="text-sm font-bold {state.showAIPanel ? 'text-[var(--playground-accent)]' : 'text-gray-900 dark:text-white'}">
        AI
      </span>
    </button>

    <button
      onclick={state.onToggleDrawingMode}
      class="p-2 rounded-lg transition-all duration-[var(--duration-200)] {state.drawingMode
        ? 'bg-red-500 text-white shadow-lg'
        : 'text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30'}"
      title="Drawing mode"
    >
      <BaseIcon name={Pencil} class="w-5 h-5" />
    </button>

    {#if state.drawingMode}
      <div class="relative">
        <div
          onclick={(e) => { e.stopPropagation(); state.drawColorMenuOpen = !state.drawColorMenuOpen; }}
          onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); state.drawColorMenuOpen = !state.drawColorMenuOpen; }}}
          class="w-8 h-8 rounded-full border-2 shadow-sm transition-colors cursor-pointer hover:scale-110"
          style="background-color: {state.drawColor}; border-color: {state.drawingMode ? 'var(--color-error-500)' : 'currentColor'};"
          title="Select drawing color"
          role="button"
          tabindex="0"
        ></div>

        {#if state.drawColorMenuOpen}
          <div class="absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl p-2 z-[var(--z-index-modal)]">
            <div class="grid grid-cols-3 gap-1.5">
              {#each state.drawColors as color}
                <button
                  onclick={(e) => {
                    e.stopPropagation();
                    state.onChangeDrawColor?.(color.value);
                    state.drawColorMenuOpen = false;
                  }}
                  class="w-8 h-8 rounded-md border-2 transition-all hover:scale-110 {color.value === state.drawColor ? 'ring-2 ring-red-500 border-red-500' : 'border-gray-300 dark:border-gray-600'}"
                  style="background-color: {color.value};"
                  title={color.name}
                ></button>
              {/each}
            </div>
          </div>
        {/if}
      </div>

      <button
        onclick={state.onToggleDrawingMode}
        class="p-2 rounded-lg transition-all duration-[var(--duration-200)] text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
        title="Close drawing mode"
      >
        <BaseIcon name={X} class="w-5 h-5" />
      </button>
    {/if}

    <button
      onclick={state.onTakeScreenshot}
      class="p-2 rounded-lg transition-all duration-[var(--duration-200)] text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      title="Take screenshot"
    >
      <BaseIcon name={Camera} class="w-5 h-5" />
    </button>
  </div>

  {#if state.showComponentTree}
    <div class="flex items-center gap-2">
      <div class="relative">
        <button
          class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 px-3 py-1.5 shadow-sm h-9 min-w-[11rem]"
          aria-haspopup="listbox"
          aria-expanded={state.deviceMenuOpen}
          onclick={(e) => { e.stopPropagation(); state.deviceMenuOpen = !state.deviceMenuOpen; }}
        >
          {#if state.selectedDevice}
            <BaseIcon name={state.selectedDevice.icon} class="w-4 h-4 text-[var(--playground-accent)]" />
            <div class="flex flex-col leading-tight text-left">
              <span class="text-xs font-semibold text-gray-900 dark:text-white">{state.selectedDevice.label}</span>
              <span class="text-[11px] text-gray-500 dark:text-gray-400">{state.selectedDevice.description}</span>
            </div>
          {/if}
          <BaseIcon name={ChevronDown} class={`w-3.5 h-3.5 text-gray-500 dark:text-gray-400 transition-transform ml-auto ${state.deviceMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        {#if state.deviceMenuOpen}
          <div class="absolute top-full mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-1 z-[var(--z-index-modal)]" role="listbox">
            {#each state.deviceOptions as option}
              <button
                class={`w-full flex items-start gap-3 px-3 py-2 rounded-lg text-left transition-colors ${option.id === state.currentViewport
                  ? 'bg-[var(--playground-accent-surface)] text-[var(--playground-accent)]'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                role="option"
                aria-selected={option.id === state.currentViewport}
                onclick={(e) => { e.stopPropagation(); state.selectDevice(option.id); }}
              >
                <BaseIcon name={option.icon} class="w-4 h-4 mt-0.5" />
                <div class="flex flex-col leading-tight">
                  <span class="text-xs font-semibold">{option.label}</span>
                  <span class="text-[11px] text-gray-500 dark:text-gray-400">{option.description}</span>
                </div>
              </button>
            {/each}
          </div>
        {/if}
      </div>

      {#if state.currentViewport !== 'fullscreen'}
        <button class={state.toggleButtonClasses(state.showDeviceFrame)} aria-pressed={state.showDeviceFrame} title="SlotToggle device frame" onclick={state.onToggleDeviceFrame}>
          <span class="inline-flex h-2 w-2 rounded-full {state.showDeviceFrame ? 'bg-white' : 'bg-gray-400/70'}"></span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="4" y="3" width="16" height="18" rx="2" stroke-width="2"/>
            <path d="M9 21h6" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span class="text-xs font-medium">
            Frame
            <span class="ml-1 text-[10px] font-semibold uppercase tracking-wide">{state.showDeviceFrame ? 'ON' : 'OFF'}</span>
          </span>
        </button>
      {/if}

      <div class="flex items-center gap-0.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-0.5 shadow-sm h-9">
        <button onclick={state.onZoomOut} class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group h-8" title="Zoom out (Ctrl + -)">
          <BaseIcon name={ZoomOut} class="w-3.5 h-3.5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--playground-accent)] dark:group-hover:text-[var(--playground-accent)] transition-colors" />
        </button>
        <span class="text-xs font-mono font-semibold text-[var(--playground-accent)] min-w-[2.5rem] text-center px-2 h-8 flex items-center justify-center">
          {Math.round(state.zoom * 100)}%
        </span>
        <button onclick={state.onZoomIn} class="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group h-8" title="Zoom in (Ctrl + +)">
          <BaseIcon name={ZoomIn} class="w-3.5 h-3.5 text-gray-600 dark:text-gray-400 group-hover:text-[var(--playground-accent)] dark:group-hover:text-[var(--playground-accent)] transition-colors" />
        </button>
      </div>

      <button class={state.toggleButtonClasses(state.showGrid)} aria-pressed={state.showGrid} title="SlotToggle grid" onclick={state.onToggleGrid}>
        <span class="inline-flex h-2 w-2 rounded-full {state.showGrid ? 'bg-white' : 'bg-gray-400/70'}"></span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
        <span class="text-xs font-medium">
          Grid
          <span class="ml-1 text-[10px] font-semibold uppercase tracking-wide">{state.showGrid ? 'ON' : 'OFF'}</span>
        </span>
      </button>
    </div>
  {:else}
    <div></div>
  {/if}

  <div class="flex items-center gap-2">
    <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Svelte" title="Built with Svelte">
      <svg class="w-5 h-5" viewBox="0 0 98.1 118" fill="none">
        <path d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5" fill="var(--color-danger-500)"/>
        <path d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5" fill="var(--color-background-primary)"/>
      </svg>
    </a>

    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Tailwind CSS" title="Styled with Tailwind CSS">
      <svg class="w-5 h-5" viewBox="0 0 54 33" fill="none">
        <g clip-path="url(#prefix__clip0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="var(--color-info-500)"/>
        </g>
      </svg>
    </a>

    <button onclick={state.onToggleDarkMode} class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="SlotToggle dark mode">
      {#if state.darkMode}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      {/if}
    </button>

    <div class="relative">
      <button
        class="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm transition-all"
        aria-haspopup="menu"
        aria-expanded={state.colorMenuOpen}
        aria-label="Select color scheme"
        onclick={(e) => { e.stopPropagation(); state.colorMenuOpen = !state.colorMenuOpen; }}
        style={`--gradient-start: ${state.selectedColorScheme?.accent ?? 'var(--color-warning-500)'}; --gradient-end: ${state.selectedColorScheme?.accentStrong ?? 'var(--color-warning-600)'}; background-image: var(--gradient-directional-diagonal);`}
      ></button>
      {#if state.colorMenuOpen}
        <div class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-2 z-[var(--z-index-modal)]">
          <p class="px-3 pb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Color Schemes</p>
          {#each state.colorSchemes as scheme}
            <button
              class="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onclick={() => state.selectColorScheme(scheme.id)}
            >
              <span class="font-medium">{scheme.name}</span>
              <div class="flex items-center gap-2">
                <span
                  class="w-6 h-6 rounded-full border border-white/70 ring-1 ring-gray-200 dark:ring-gray-700"
                  style={`--gradient-start: ${scheme.accent}; --gradient-end: ${scheme.accentStrong}; background-image: var(--gradient-directional-diagonal);`}
                ></span>
                {#if scheme.id === state.selectedColorScheme?.id}
                  <BaseIcon name={Check} class="w-4 h-4" style={`color: ${scheme.accent};`} />
                {/if}
              </div>
            </button>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
