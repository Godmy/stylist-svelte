<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Contrast, Sun, Moon } from 'lucide-svelte';
  import { HighContrastToggleStyleManager } from './HighContrastToggle.styles';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(HighContrastToggleStyleManager.getContainerClass(className));
  const buttonClassComputed = $derived(HighContrastToggleStyleManager.getButtonClass(isHighContrast, theme, buttonClass));
  const descriptionClass = $derived(HighContrastToggleStyleManager.getDescriptionClass());
  const iconClass = $derived(HighContrastToggleStyleManager.getIconClass());
</script>

<div class={containerClass} {...restProps}>
  <button
    type="button"
    class={buttonClassComputed}
    onclick={toggleContrast}
    aria-pressed={isHighContrast}
    aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
  >
    <Contrast class={iconClass} />
    {isHighContrast ? 'High Contrast On' : 'High Contrast Off'}
  </button>

  <span class={descriptionClass}>
    {isHighContrast
      ? "High contrast mode is active. Colors have been adjusted for better visibility."
      : "High contrast mode is disabled. Colors are at standard contrast levels."}
  </span>
</div>