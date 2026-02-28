<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Palette = 'palette';


  type ThemeId = 'minimal' | 'ocean' | 'forest' | 'sunset';
  type ThemePalette = {
    id: ThemeId;
    label: string;
    description: string;
    colors: {
      bg: string;
      surface: string;
      text: string;
      muted: string;
      line: string;
      accent: string;
    };
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    currentTheme?: ThemeId;
    class?: string;
    compact?: boolean;
    showHeader?: boolean;
    showLabels?: boolean;
    themes?: ThemePalette[];
    onThemeChange?: (theme: ThemeId) => void;
  };

  let {
    currentTheme = 'minimal',
    class: hostClass = '',
    compact = false,
    showHeader = true,
    showLabels = false,
    themes = [
      {
        id: 'minimal',
        label: 'Minimal',
        description: 'Neutral light palette',
        colors: {
          bg: '#f7f7f9',
          surface: '#ffffff',
          text: '#171923',
          muted: '#5f6572',
          line: '#d8deea',
          accent: '#3253d4'
        }
      },
      {
        id: 'ocean',
        label: 'Ocean',
        description: 'Cold blue palette',
        colors: {
          bg: '#ecf3fa',
          surface: '#ffffff',
          text: '#0f2942',
          muted: '#47617a',
          line: '#c4d9ee',
          accent: '#0f7ad8'
        }
      },
      {
        id: 'forest',
        label: 'Forest',
        description: 'Natural green palette',
        colors: {
          bg: '#eff6f1',
          surface: '#ffffff',
          text: '#193126',
          muted: '#496355',
          line: '#cadece',
          accent: '#22754b'
        }
      },
      {
        id: 'sunset',
        label: 'Sunset',
        description: 'Warm orange palette',
        colors: {
          bg: '#fdf2ea',
          surface: '#ffffff',
          text: '#402417',
          muted: '#7f5946',
          line: '#f0d5c6',
          accent: '#d86a2f'
        }
      }
    ] as ThemePalette[],
    onThemeChange,
    ...restProps
  }: Props = $props();

  let theme = $state<ThemeId>(currentTheme);

  $effect(() => {
    theme = currentTheme;
  });

  function applyTheme(newTheme: ThemeId) {
    const selected = themes.find((item) => item.id === newTheme);
    if (!selected || typeof document === 'undefined') return;

    const root = document.documentElement;
    root.style.setProperty('--app-bg', selected.colors.bg);
    root.style.setProperty('--app-surface', selected.colors.surface);
    root.style.setProperty('--app-text', selected.colors.text);
    root.style.setProperty('--app-muted', selected.colors.muted);
    root.style.setProperty('--app-line', selected.colors.line);
    root.style.setProperty('--app-accent', selected.colors.accent);
    root.setAttribute('data-ui-theme', selected.id);

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ui-theme', selected.id);
    }
  }

  function setTheme(newTheme: ThemeId) {
    theme = newTheme;
    onThemeChange?.(newTheme);
    applyTheme(newTheme);
  }

  $effect(() => {
    applyTheme(theme);
  });
</script>

<div class={`theme-switcher ${hostClass}`} {...restProps}>
  {#if showHeader}
    <div class="switcher-title">
      <BaseIcon name={Palette} size={16} />
      <span>UI Theme</span>
    </div>
  {/if}
  <div class={`theme-list ${compact ? 'compact' : ''}`}>
    {#each themes as item}
      <button
        type="button"
        class={`theme-item ${theme === item.id ? 'active' : ''}`}
        onclick={() => setTheme(item.id)}
        aria-pressed={theme === item.id}
      >
        <span class="chip" style={`background:${item.colors.accent};`}></span>
        <span class="name">{item.label}</span>
        {#if showLabels && !compact}
          <span class="description">{item.description}</span>
        {/if}
      </button>
    {/each}
  </div>
</div>

<style>
  .theme-switcher {
    display: grid;
    gap: 0.65rem;
  }

  .switcher-title {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    color: var(--text, #171923);
  }

  .theme-list {
    display: grid;
    gap: 0.45rem;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }

  .theme-list.compact {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  .theme-item {
    display: grid;
    gap: 0.25rem;
    align-items: center;
    grid-template-columns: 0.75rem 1fr;
    border: 1px solid var(--line, #d8deea);
    background: var(--surface, #fff);
    color: var(--text, #171923);
    border-radius: 0.65rem;
    padding: 0.55rem 0.65rem;
    cursor: pointer;
    text-align: left;
  }

  .theme-list.compact .theme-item {
    grid-template-columns: 0.65rem 1fr;
    padding: 0.42rem 0.55rem;
    min-height: 2rem;
  }

  .theme-item.active {
    border-color: var(--accent, #3253d4);
    box-shadow: inset 0 0 0 1px var(--accent, #3253d4);
  }

  .chip {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(0, 0, 0, 0.18);
  }

  .name {
    font-weight: 600;
    line-height: 1.2;
  }

  .description {
    grid-column: 2;
    color: var(--muted, #5f6572);
    font-size: 0.78rem;
    line-height: 1.25;
  }
</style>




