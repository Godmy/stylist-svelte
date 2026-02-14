<script lang="ts">
  import { designSystemDefaultTheme, designSystemDarkTheme } from '$lib/types/design-tokens';
  // import { onMount } from 'svelte'; // Removed as its functionality is now covered by $state and $effect

  type Theme = typeof designSystemDefaultTheme;

  const { // Changed let to const
    theme = 'light' as 'light' | 'dark',
    showTokens = true,
    showColorPalette = true,
    showSpacing = true,
    showTypography = true,
    showBorderRadius = true,
    showShadows = true
  } = $props<{
    theme?: 'light' | 'dark';
    showTokens?: boolean;
    showColorPalette?: boolean;
    showSpacing?: boolean;
    showTypography?: boolean;
    showBorderRadius?: boolean;
    showShadows?: boolean;
  }>();

  // Changed to $state and initialized directly, removing the need for onMount to set initial theme
  let currentTheme = $state<Theme>(theme === 'light' ? designSystemDefaultTheme : designSystemDarkTheme);

  // onMount block is removed as the initial theme is set with $state and subsequent changes are handled by $effect
  // onMount(() => {
  //   currentTheme = theme === 'light' ? designSystemDefaultTheme : designSystemDarkTheme;
  // });

  $effect(() => {
    currentTheme = theme === 'light' ? designSystemDefaultTheme : designSystemDarkTheme;
  });

  // Функция для отображения примера цвета
  function renderColorToken(tokenName: string, tokenValue: string) {
    return `
      <div class="flex flex-col items-center p-2">
        <div 
          class="w-16 h-16 rounded-md border border-[--color-border-primary] mb-2" 
          style="background-color: ${tokenValue}"
        ></div>
        <span class="text-xs font-mono">${tokenName}</span>
        <span class="text-xs">${tokenValue}</span>
      </div>
    `;
  }
</script>

<div class="design-tokens-container p-6 bg-[--color-bg-primary] text-[--color-text-primary]">
  {#if showTokens}
    <h2 class="text-xl font-bold mb-4">Design Tokens</h2>
    
    {#if showColorPalette}
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-3">Color Palette</h3>
        <div class="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 gap-2">
          {#each Object.entries(currentTheme.colors) as [tokenName, tokenValue]}
            {#if tokenName.includes('color-') && !tokenName.includes('text') && !tokenName.includes('bg') && !tokenName.includes('border') && !tokenName.includes('control')}
              <div class="flex flex-col items-center p-2 rounded-md hover:bg-[--color-bg-secondary] transition-colors">
                <div 
                  class="w-16 h-16 rounded-md border border-[--color-border-primary] mb-2" 
                  style="background-color: {tokenValue}"
                ></div>
                <span class="text-xs font-mono truncate w-full text-center">{tokenName}</span>
                <span class="text-xs truncate w-full text-center">{tokenValue}</span>
              </div>
            {/if}
          {/each}
        </div>
      </section>
    {/if}
    
    {#if showSpacing}
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-3">Spacing</h3>
        <div class="flex flex-wrap gap-2">
          {#each Object.entries(currentTheme.spacing) as [tokenName, tokenValue]}
            <div class="flex flex-col items-center">
              <div 
                class="bg-[--color-primary-500] mb-1" 
                style="width: {tokenValue}; height: {tokenValue}"
              ></div>
              <span class="text-xs font-mono">{tokenName}</span>
              <span class="text-xs">{tokenValue}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if showTypography}
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-3">Typography</h3>
        <div class="space-y-2">
          {#each Object.entries(currentTheme.typography.fontSize) as [tokenName, tokenValue]}
            <div class="flex items-center justify-between p-2 border-b border-[--color-border-secondary]">
              <span class="font-mono text-sm">{tokenName}</span>
              <span style="font-size: {tokenValue}">Aa Bb Cc</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if showBorderRadius}
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-3">Border Radius</h3>
        <div class="flex flex-wrap gap-4 items-end">
          {#each Object.entries(currentTheme.borderRadius) as [tokenName, tokenValue]}
            <div class="flex flex-col items-center">
              <div 
                class="bg-[--color-secondary-200] dark:bg-[--color-secondary-700] border border-[--color-border-primary] dark:border-[--color-border-primary]"
                style="width: 6rem; height: 4rem; border-radius: {tokenValue}"
              ></div>
              <span class="text-xs font-mono mt-2">{tokenName}</span>
              <span class="text-xs">{tokenValue}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if showShadows}
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-3">Shadows</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each Object.entries(currentTheme.boxShadow) as [tokenName, tokenValue]}
            {#if tokenValue !== 'none'}
              <div
                class="p-4 rounded-md border border-[--color-border-primary]"
                style={`box-shadow: ${tokenValue}`}
              >
                <div class="font-mono text-sm mb-2">{tokenName}</div>
                <div class="text-xs font-mono">{tokenValue}</div>
              </div>
            {/if}
          {/each}
        </div>
      </section>
    {/if}
  {/if}
  
  {#if !showTokens}
    <p class="text-[--color-text-secondary]">Design tokens are hidden.</p>
  {/if}
</div>
