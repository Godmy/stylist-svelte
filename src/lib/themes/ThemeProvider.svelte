<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { setThemeContext } from './context';
  import type { ThemeName } from './types';
  import { themes } from './types';
  import { ThemeProviderStyleManager } from './ThemeProvider.styles';

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

  let currentTheme = $state<ThemeName>(initialTheme);

  function setTheme(themeName: ThemeName) {
    currentTheme = themeName;

    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', themeName);

    // Update CSS variables for the theme
    const theme = themes[themeName];

    // Color variables
    document.documentElement.style.setProperty('--color-primary-100', theme.colors.primary[100]);
    document.documentElement.style.setProperty('--color-primary-200', theme.colors.primary[200]);
    document.documentElement.style.setProperty('--color-primary-300', theme.colors.primary[300]);
    document.documentElement.style.setProperty('--color-primary-400', theme.colors.primary[400]);
    document.documentElement.style.setProperty('--color-primary-500', theme.colors.primary[500]);
    document.documentElement.style.setProperty('--color-primary-600', theme.colors.primary[600]);
    document.documentElement.style.setProperty('--color-primary-700', theme.colors.primary[700]);
    document.documentElement.style.setProperty('--color-primary-800', theme.colors.primary[800]);
    document.documentElement.style.setProperty('--color-primary-900', theme.colors.primary[900]);

    // Secondary colors
    document.documentElement.style.setProperty('--color-secondary-100', theme.colors.secondary[100]);
    document.documentElement.style.setProperty('--color-secondary-200', theme.colors.secondary[200]);
    document.documentElement.style.setProperty('--color-secondary-300', theme.colors.secondary[300]);
    document.documentElement.style.setProperty('--color-secondary-400', theme.colors.secondary[400]);
    document.documentElement.style.setProperty('--color-secondary-500', theme.colors.secondary[500]);
    document.documentElement.style.setProperty('--color-secondary-600', theme.colors.secondary[600]);
    document.documentElement.style.setProperty('--color-secondary-700', theme.colors.secondary[700]);
    document.documentElement.style.setProperty('--color-secondary-800', theme.colors.secondary[800]);
    document.documentElement.style.setProperty('--color-secondary-900', theme.colors.secondary[900]);

    // Success colors
    document.documentElement.style.setProperty('--color-success-100', theme.colors.success[100]);
    document.documentElement.style.setProperty('--color-success-200', theme.colors.success[200]);
    document.documentElement.style.setProperty('--color-success-300', theme.colors.success[300]);
    document.documentElement.style.setProperty('--color-success-400', theme.colors.success[400]);
    document.documentElement.style.setProperty('--color-success-500', theme.colors.success[500]);
    document.documentElement.style.setProperty('--color-success-600', theme.colors.success[600]);
    document.documentElement.style.setProperty('--color-success-700', theme.colors.success[700]);
    document.documentElement.style.setProperty('--color-success-800', theme.colors.success[800]);
    document.documentElement.style.setProperty('--color-success-900', theme.colors.success[900]);

    // Warning colors
    document.documentElement.style.setProperty('--color-warning-100', theme.colors.warning[100]);
    document.documentElement.style.setProperty('--color-warning-200', theme.colors.warning[200]);
    document.documentElement.style.setProperty('--color-warning-300', theme.colors.warning[300]);
    document.documentElement.style.setProperty('--color-warning-400', theme.colors.warning[400]);
    document.documentElement.style.setProperty('--color-warning-500', theme.colors.warning[500]);
    document.documentElement.style.setProperty('--color-warning-600', theme.colors.warning[600]);
    document.documentElement.style.setProperty('--color-warning-700', theme.colors.warning[700]);
    document.documentElement.style.setProperty('--color-warning-800', theme.colors.warning[800]);
    document.documentElement.style.setProperty('--color-warning-900', theme.colors.warning[900]);

    // Danger colors
    document.documentElement.style.setProperty('--color-danger-100', theme.colors.danger[100]);
    document.documentElement.style.setProperty('--color-danger-200', theme.colors.danger[200]);
    document.documentElement.style.setProperty('--color-danger-300', theme.colors.danger[300]);
    document.documentElement.style.setProperty('--color-danger-400', theme.colors.danger[400]);
    document.documentElement.style.setProperty('--color-danger-500', theme.colors.danger[500]);
    document.documentElement.style.setProperty('--color-danger-600', theme.colors.danger[600]);
    document.documentElement.style.setProperty('--color-danger-700', theme.colors.danger[700]);
    document.documentElement.style.setProperty('--color-danger-800', theme.colors.danger[800]);
    document.documentElement.style.setProperty('--color-danger-900', theme.colors.danger[900]);

    // Text colors
    document.documentElement.style.setProperty('--color-text-primary', theme.colors.text.primary);
    document.documentElement.style.setProperty('--color-text-secondary', theme.colors.text.secondary);
    document.documentElement.style.setProperty('--color-text-inverse', theme.colors.text.inverse);

    // Background colors
    document.documentElement.style.setProperty('--color-bg-primary', theme.colors.background.primary);
    document.documentElement.style.setProperty('--color-bg-secondary', theme.colors.background.secondary);
    document.documentElement.style.setProperty('--color-bg-tertiary', theme.colors.background.tertiary);

    // Border colors
    document.documentElement.style.setProperty('--color-border-primary', theme.colors.border.primary);
    document.documentElement.style.setProperty('--color-border-secondary', theme.colors.border.secondary);

    // Spacing variables
    document.documentElement.style.setProperty('--spacing-xs', theme.spacing.xs);
    document.documentElement.style.setProperty('--spacing-sm', theme.spacing.sm);
    document.documentElement.style.setProperty('--spacing-md', theme.spacing.md);
    document.documentElement.style.setProperty('--spacing-lg', theme.spacing.lg);
    document.documentElement.style.setProperty('--spacing-xl', theme.spacing.xl);
  }

  // Initialize with the initial theme on mount
  $effect(() => {
    setTheme(currentTheme);
  });

  // Register the theme context
  $effect(() => {
    setThemeContext(themes[currentTheme], setTheme, currentTheme);
  });

  // Generate CSS classes using the style manager
  const containerClass = $derived(ThemeProviderStyleManager.getContainerClass(className));
</script>

<div class={containerClass} {...restProps}>
  {@render children()}
</div>