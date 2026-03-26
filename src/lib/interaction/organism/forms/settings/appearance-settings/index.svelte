<script lang="ts">
  import { AppearanceSettingsStyleManager } from '$stylist/interaction/class/style-manager/settings';
  import type { AppearanceSettingsProps } from '$stylist/interaction/interface/interaction-forms';
  import { DarkModeToggle, ThemeSwitcher } from '$stylist';

  type ThemeMode = 'light' | 'dark' | 'system';
  type UiTheme = 'minimal' | 'ocean' | 'forest' | 'sunset';

  let {
    theme = 'system',
    uiTheme = 'minimal',
    onThemeChange,
    onUiThemeChange,
    class: className = '',
    ...restProps
  }: AppearanceSettingsProps = $props();

  let localTheme = $state<ThemeMode>(theme);
  let localUiTheme = $state<UiTheme>(uiTheme);

  $effect(() => {
    localTheme = theme;
    localUiTheme = uiTheme;
  });

  function handleThemeChange(nextTheme: ThemeMode) {
    localTheme = nextTheme;
    onThemeChange?.(nextTheme);
  }

  function handleUiThemeChange(nextTheme: UiTheme) {
    localUiTheme = nextTheme;
    onUiThemeChange?.(nextTheme);
  }

</script>

<form class={AppearanceSettingsStyleManager.preferences('c-appearance-settings border rounded-lg p-4 space-y-4', className)} {...restProps}>
  <div class="settings-item">
    <div class="settings-meta">
      <div class="settings-title">Mode</div>
      <div class="settings-help">{localTheme}</div>
    </div>
    <div class="settings-control">
      <DarkModeToggle currentTheme={localTheme} onThemeChange={handleThemeChange} />
    </div>
  </div>

  <div class="settings-item settings-item-column">
    <div class="settings-meta">
      <div class="settings-title">UI palette</div>
      <div class="settings-help">Minimal, Ocean, Forest, Sunset</div>
    </div>
    <div class="settings-control">
      <ThemeSwitcher
        currentTheme={localUiTheme}
        compact={true}
        showHeader={false}
        showLabels={false}
        onThemeChange={handleUiThemeChange}
      />
    </div>
  </div>

</form>

<style>
  .c-appearance-settings {
    display: grid;
    gap: var(--spacing-3);
    border-color: var(--line, var(--color-border-primary));
    background: var(--gradient-custom32);
  }

  .settings-item {
    display: grid;
    gap: var(--spacing-3);
    grid-template-columns: minmax(140px, 1fr) auto;
    align-items: center;
    border: 1px solid var(--line, var(--color-border-primary));
    border-radius: var(--border-radius-xl);
    background: color-mix(in srgb, var(--surface, var(--color-background-primary)) 94%, var(--bg, var(--color-background-secondary)) 6%);
    padding: var(--spacing-3) var(--spacing-3);
  }

  .settings-item-column {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .settings-meta {
    display: grid;
    gap: var(--spacing-1);
  }

  .settings-title {
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-semibold);
    color: var(--text, var(--color-text-primary));
  }

  .settings-help {
    font-size: var(--font-size-3);
    color: var(--muted, var(--color-text-secondary));
    line-height: var(--line-height-tight);
  }

  .settings-control {
    display: inline-flex;
    align-items: center;
    justify-self: end;
  }

  @media (max-width: 640px) {
    .settings-item {
      grid-template-columns: 1fr;
    }

    .settings-control {
      justify-self: start;
    }
  }
</style>





