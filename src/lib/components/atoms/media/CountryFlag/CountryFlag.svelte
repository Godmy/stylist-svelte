<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ICountryFlagProps } from './types';
  import { CountryFlagStyleManager } from './styles';

  /**
   * CountryFlag component - Displays a country flag based on country code
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles country flag rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other flag components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param countryCode - Two-letter country code (e.g., 'US', 'FR')
   * @param size - Size of the flag in pixels
   * @param class - Additional CSS classes
   * @param content - Snippet content for fallback display
   * @returns An accessible, styled country flag element
   */
  type Props = ICountryFlagProps & HTMLAttributes<HTMLSpanElement>;

  let {
    countryCode = '',
    size = 24,
    class: className = '',
    content,
    ...restProps
  }: Props = $props();

  let flagEmoji = $derived(() => {
    if (!countryCode || countryCode.length !== 2) return '';
    // Convert country code to flag emoji
    return countryCode
      .toUpperCase()
      .split('')
      .map(char =>
        char.match(/[A-Z]/)
          ? String.fromCodePoint(127397 + char.charCodeAt(0) - 65)
          : char
      )
      .join('');
  });

  let validCountryCode = $derived(countryCode && countryCode.length === 2);
  let flagStyle = $derived(CountryFlagStyleManager.generateFlagStyle(size, false));
  let fallbackStyle = $derived(CountryFlagStyleManager.generateFlagStyle(size, true));
  let classes = $derived(CountryFlagStyleManager.getAllClasses(className));
</script>

{#if validCountryCode}
  <span
    class={classes}
    style={flagStyle}
    {...restProps}
  >
    {flagEmoji}
  </span>
{:else}
  <div
    class={CountryFlagStyleManager.getFallbackClasses()}
    style={fallbackStyle}
  >
    {#if content}
      {@render content()}
    {:else}
      ?
    {/if}
  </div>
{/if}