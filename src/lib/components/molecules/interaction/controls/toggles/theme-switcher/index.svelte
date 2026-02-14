<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Sun, Moon, Laptop } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  type Theme = 'light' | 'dark' | 'system';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    currentTheme?: Theme;
    class?: string;
    buttonClass?: string;
    showLabels?: boolean;
    onThemeChange?: (theme: Theme) => void;
  };

  let {
    currentTheme = 'system',
    class: hostClass = '',
    buttonClass = '',
    showLabels = false,
    onThemeChange,
    ...restProps
  }: Props = $props();

  let theme = $state(currentTheme);

  $effect(() => {
    theme = currentTheme;
  });

  function setTheme(newTheme: Theme) {
    theme = newTheme;
    onThemeChange?.(newTheme);

    // Apply theme to document
    if (newTheme === 'system') {
      // Detect system preference
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add(systemTheme);
    } else {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
    }

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
  }

  function cycleTheme() {
    const themes: Theme[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  let currentIcon = $derived({
    'light': Sun,
    'dark': Moon,
    'system': Laptop
  }[theme]);
  
  let CurrentIcon = $derived(currentIcon);
</script>

<div class={`theme-switcher flex items-center ${hostClass}`} {...restProps}>
  <Button
    variant="ghost"
    size="sm"
    aria-label="Toggle theme"
    onclick={cycleTheme}
    class={`flex items-center justify-center ${buttonClass}`}
  >
    <CurrentIcon class="h-5 w-5" />
    {#if showLabels}
      <span class="ml-2 capitalize">{theme}</span>
    {/if}
  </Button>
</div>
