<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Contrast = 'contrast';


  type Props = {
    enabled?: boolean;
    onToggle?: (enabled: boolean) => void;
    theme?: 'light' | 'dark';
    showStateText?: boolean;
    showDescription?: boolean;
    class?: string;
    buttonClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    enabled = false,
    onToggle,
    theme = 'light',
    showStateText = true,
    showDescription = true,
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

<div class={`c-high-contrast-toggle ${className}`} {...restProps}>
  <button
    type="button"
    class={`c-high-contrast-toggle__button ${isHighContrast ? 'is-on' : 'is-off'} ${theme === 'dark' ? 'is-dark' : 'is-light'} ${buttonClass}`}
    onclick={toggleContrast}
    aria-pressed={isHighContrast}
    aria-label={isHighContrast ? "Disable high contrast mode" : "Enable high contrast mode"}
  >
    <BaseIcon name={Contrast} size={15} />
    {#if showStateText}
      <span>{isHighContrast ? 'High contrast' : 'Standard contrast'}</span>
    {/if}
  </button>

  {#if showDescription}
    <span class="c-high-contrast-toggle__description">
      {isHighContrast
        ? "High contrast mode is active. Colors are adjusted for readability."
        : "High contrast mode is disabled. Standard contrast is active."}
    </span>
  {/if}
</div>

<style>
  .c-high-contrast-toggle {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    flex-wrap: wrap;
  }

  .c-high-contrast-toggle__button {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    border-radius: 0.6rem;
    border: 1px solid var(--line, #d8deea);
    background: var(--surface, #fff);
    color: var(--text, #171923);
    padding: 0.45rem 0.7rem;
    cursor: pointer;
    transition: background-color 120ms ease, border-color 120ms ease;
  }

  .c-high-contrast-toggle__button.is-off:hover {
    background: color-mix(in srgb, var(--surface, #fff) 90%, var(--accent, #3253d4) 10%);
  }

  .c-high-contrast-toggle__button.is-on {
    border-color: var(--accent, #3253d4);
    box-shadow: inset 0 0 0 1px var(--accent, #3253d4);
    background: color-mix(in srgb, var(--surface, #fff) 85%, var(--accent, #3253d4) 15%);
  }

  .c-high-contrast-toggle__description {
    color: var(--muted, #5f6572);
    font-size: 0.82rem;
  }
</style>



