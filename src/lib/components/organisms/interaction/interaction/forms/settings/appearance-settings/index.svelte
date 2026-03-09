<script lang="ts">
  import { AppearanceSettingsStyleManager } from '$stylist/design-system/styles/interaction/settings';
  import type { AppearanceSettingsProps } from '$stylist/design-system/contracts/interaction/interaction-forms';
  import { DarkModeToggle, ThemeSwitcher } from '$stylist/components/atoms';

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
    gap: 0.7rem;
    border-color: var(--line, #d8deea);
    background: linear-gradient(
      165deg,
      color-mix(in srgb, var(--surface, #fff) 93%, var(--accent, #3253d4) 7%),
      var(--surface, #fff)
    );
  }

  .settings-item {
    display: grid;
    gap: 0.65rem;
    grid-template-columns: minmax(140px, 1fr) auto;
    align-items: center;
    border: 1px solid var(--line, #d8deea);
    border-radius: 0.75rem;
    background: color-mix(in srgb, var(--surface, #fff) 94%, var(--bg, #f7f7f9) 6%);
    padding: 0.65rem 0.75rem;
  }

  .settings-item-column {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .settings-meta {
    display: grid;
    gap: 0.15rem;
  }

  .settings-title {
    font-size: 0.86rem;
    font-weight: 600;
    color: var(--text, #171923);
  }

  .settings-help {
    font-size: 0.74rem;
    color: var(--muted, #5f6572);
    line-height: 1.25;
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
