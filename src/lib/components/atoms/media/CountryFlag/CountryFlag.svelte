<script lang="ts">
  import type { CountryFlagProps } from './type';
  import { DEFAULT_FALLBACK_FLAG, DEFAULT_FLAG_SIZE, FLAG_ELEMENT_CLASSES, FALLBACK_FLAG_CLASSES } from './constant';
  import { countryCodeToFlagEmoji, isValidCountryCode, generateFlagStyle } from './util';

  const {
    countryCode = '',
    size = DEFAULT_FLAG_SIZE,
    className = '',
    content,
    ...restProps
  }: CountryFlagProps = $props();

  const flagEmoji = countryCodeToFlagEmoji(countryCode);
  const validCountryCode = isValidCountryCode(countryCode);
  const flagStyle = generateFlagStyle(size, false);
  const fallbackStyle = generateFlagStyle(size, true);
</script>

{#if validCountryCode}
  <span
    class={`${FLAG_ELEMENT_CLASSES} ${className}`}
    style={flagStyle}
    {...restProps}
  >
    {flagEmoji}
  </span>
{:else}
  <div
    class={`${FALLBACK_FLAG_CLASSES} ${className}`}
    style={fallbackStyle}
  >
    {#if content}
      {@render content()}
    {:else}
      {DEFAULT_FALLBACK_FLAG}
    {/if}
  </div>
{/if}