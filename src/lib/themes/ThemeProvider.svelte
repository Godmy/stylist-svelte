<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import {
    lightTheme,
    darkTheme,
    setThemeContext,
    applyThemeToDOM
  } from '../design-system';
  import type { Theme, ThemeName } from '../design-system';

  type Props = {
    initialTheme?: ThemeName;
    class?: string;
    children: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    initialTheme = 'light',
    class: className = '',
    children,
    ...restProps
  }: Props = $props();

  const themes: Record<ThemeName, Theme> = {
    light: lightTheme,
    dark: darkTheme
  };

  let currentTheme = $state<ThemeName>(initialTheme);

  /**
   * Change the current theme
   */
  function setTheme(themeName: ThemeName): void {
    currentTheme = themeName;
    const theme = themes[themeName];

    // Apply theme using our new automated system
    applyThemeToDOM(theme);
  }

  // Sync when parent updates initialTheme
  $effect(() => {
    if (initialTheme && initialTheme !== currentTheme) {
      setTheme(initialTheme);
    }
  });

  // Initialize theme on mount
  $effect(() => {
    setTheme(currentTheme);
  });

  // Update context when theme changes
  $effect(() => {
    const theme = themes[currentTheme];
    setThemeContext(theme, currentTheme, setTheme);
  });

  const containerClass = $derived(
    className ? `w-full h-full ${className}` : 'w-full h-full'
  );
</script>

<div class={containerClass} {...restProps}>
  {@render children()}
</div>
