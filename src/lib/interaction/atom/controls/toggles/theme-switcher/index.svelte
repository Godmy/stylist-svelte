<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import { Icon as BaseIcon } from '$stylist';
  import type { ThemeMode } from '$stylist/information/function/css';
  import { applyThemeModeAndScheme } from '$stylist/information/function/css';
  import { THEME_SCHEMES } from '$stylist/information/const/theme/scheme';
  import type { ThemeScheme } from '$stylist/information/type/attribute/theme-scheme';
  import type { TokenSchemeId } from '$stylist/information/type/token/theme-scheme-id';

  const Palette = 'palette';


  type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    currentTheme?: TokenSchemeId;
    themeMode?: ThemeMode;
    class?: string;
    compact?: boolean;
    showHeader?: boolean;
    showLabels?: boolean;
    themes?: ThemeScheme[];
    onThemeChange?: (theme: TokenSchemeId) => void;
  };

  let {
    currentTheme = 'minimal',
    themeMode = 'system',
    class: hostClass = '',
    compact = false,
    showHeader = true,
    showLabels = false,
    themes = THEME_SCHEMES as ThemeScheme[],
    onThemeChange,
    ...restProps
  }: Props = $props();

  let theme = $state<TokenSchemeId>(currentTheme);

  $effect(() => {
    theme = currentTheme;
  });

  function applyTheme(newTheme: TokenSchemeId) {
    if (typeof document === 'undefined') return;
    const selected = themes.find((item) => item.id === newTheme);
    if (!selected) return;

    applyThemeModeAndScheme(themeMode, newTheme, document.documentElement);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('ui-theme', selected.id);
    }
  }

  function setTheme(newTheme: TokenSchemeId) {
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
    gap: var(--spacing-3);
  }

  .switcher-title {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-2);
    color: var(--text, var(--color-text-primary));
  }

  .theme-list {
    display: grid;
    gap: var(--spacing-2);
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }

  .theme-list.compact {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  }

  .theme-item {
    display: grid;
    gap: var(--spacing-1);
    align-items: center;
    grid-template-columns: 0.75rem 1fr;
    border: 1px solid var(--line, var(--color-border-primary));
    background: var(--surface, var(--color-background-primary));
    color: var(--text, var(--color-text-primary));
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-2) var(--spacing-3);
    cursor: pointer;
    text-align: left;
  }

  .theme-list.compact .theme-item {
    grid-template-columns: 0.65rem 1fr;
    padding: var(--spacing-2) var(--spacing-2);
    min-height: var(--spacing-8);
  }

  .theme-item.active {
    border-color: var(--accent, var(--color-primary-600));
    box-shadow: var(--shadow-custom45);
  }

  .chip {
    width: var(--spacing-3);
    height: var(--spacing-3);
    border-radius: var(--border-radius-full);
    border: 1px solid color-mix(in srgb, var(--color-text-primary) 18%, transparent);
  }

  .name {
    font-weight: var(--font-weight-semibold);
    line-height: 1.2;
  }

  .description {
    grid-column: 2;
    color: var(--muted, var(--color-text-secondary));
    font-size: var(--font-size-3);
    line-height: var(--line-height-tight);
  }
</style>


