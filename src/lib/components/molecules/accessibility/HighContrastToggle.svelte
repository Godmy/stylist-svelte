<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Contrast, Sun, Moon } from 'lucide-svelte';

  type Props = {
    enabled?: boolean;
    onToggle?: (enabled: boolean) => void;
    theme?: 'light' | 'dark';
    class?: string;
    buttonClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    enabled = false,
    onToggle,
    theme = 'light',
    class: className = '',
    buttonClass = '',
    ...restProps
  }: Props = $props();

  let isHighContrast = $state(enabled);

  function toggleContrast() {
    isHighContrast = !isHighContrast;
    
    // Apply high contrast accessibility styles
    if (isHighContrast) {
      document.body.classList.add('high-contrast-mode');
      document.documentElement.style.setProperty('--hc-bg-primary', '#000000');
      document.documentElement.style.setProperty('--hc-text-primary', '#ffffff');
      document.documentElement.style.setProperty('--hc-border', '#ffffff');
      document.documentElement.style.setProperty('--hc-link', '#ffff00');
    } else {
      document.body.classList.remove('high-contrast-mode');
      document.documentElement.style.removeProperty('--hc-bg-primary');
      document.documentElement.style.removeProperty('--hc-text-primary');
      document.documentElement.style.removeProperty('--hc-border');
      document.documentElement.style.removeProperty('--hc-link');
    }
    
    if (onToggle) {
      onToggle(isHighContrast);
    }
  }

  // Apply initial high contrast setting
  $effect(() => {
    if (enabled) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  });
</script>

<div class={`flex items-center ${className}`} {...restProps}>
  <button
    type="button"
    class={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      isHighContrast 
        ? 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500' 
        : theme === 'dark' ? 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
    } ${buttonClass}`}
    onclick={toggleContrast}
    aria-pressed={isHighContrast}
    aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
  >
    <Contrast class="h-4 w-4 mr-2" />
    {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
  </button>
  
  <span class="ml-3 text-sm text-gray-500">
    {isHighContrast 
      ? "High contrast mode is active. Colors have been adjusted for better visibility." 
      : "High contrast mode is disabled. Colors are at standard contrast levels."}
  </span>
</div>