<script lang="ts">
  import type { DesignTokensProps } from '$stylist/development/type/struct/design-tokens-props';
  import { createDesignTokensState } from '$stylist/development/function/state/design-tokens';

  let { ...props }: DesignTokensProps = $props();
  const state = createDesignTokensState(props);
</script>

<div class={state.containerClass}>
  {#if state.showTokens}
    <h2 class={state.sectionTitleClass}>Design Tokens</h2>

    {#if state.showColorPalette}
      <section class={state.sectionContainerClass}>
        <h3 class={state.sectionTitleClass}>Color Palette</h3>
        <div class={state.tokensGridClass}>
          {#each Object.entries(state.currentTheme.colors) as [tokenName, tokenValue]}
            {#if state.isColorToken(tokenName)}
              <div class={state.tokenCardClass}>
                <div
                  class={state.getColorPreviewClass(String(tokenValue))}
                  style="background-color: {tokenValue}"
                ></div>
                <span class={state.tokenNameClass}>{tokenName}</span>
                <span class={state.tokenValueClass}>{tokenValue}</span>
              </div>
            {/if}
          {/each}
        </div>
      </section>
    {/if}

    {#if state.showSpacing}
      <section class={state.sectionContainerClass}>
        <h3 class={state.sectionTitleClass}>Spacing</h3>
        <div class="flex flex-wrap gap-2">
          {#each Object.entries(state.layoutTokens.spacing ?? {}) as [tokenName, tokenValue]}
            <div class={state.tokenCardClass}>
              <div
                class={state.previewCellClass}
                style="width: {tokenValue}; height: {tokenValue}"
              ></div>
              <span class="text-xs font-mono">{tokenName}</span>
              <span class="text-xs">{tokenValue}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    {#if state.showTypography}
      <section class={state.sectionContainerClass}>
        <h3 class={state.sectionTitleClass}>Typography</h3>
        <div class="space-y-2">
          {#each Object.entries(state.currentTheme.typography.fontSize) as [tokenName, tokenValue]}
            <div class={state.tokenCardClass}>
              <span class="font-mono text-sm">{tokenName}</span>
              <span style="font-size: {tokenValue}">Aa Bb Cc</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    {#if state.showBorderRadius}
      <section class={state.sectionContainerClass}>
        <h3 class={state.sectionTitleClass}>Border Radius</h3>
        <div class="flex flex-wrap gap-4 items-end">
          {#each Object.entries(state.layoutTokens.borderRadius ?? {}) as [tokenName, tokenValue]}
            <div class={state.tokenCardClass}>
              <div
                class={state.previewCellClass}
                style="width: var(--border-radius-full); height: var(--spacing-16); border-radius: {tokenValue}"
              ></div>
              <span class="text-xs font-mono mt-2">{tokenName}</span>
              <span class="text-xs">{tokenValue}</span>
            </div>
          {/each}
        </div>
      </section>
    {/if}

    {#if state.showShadows}
      <section class={state.sectionContainerClass}>
        <h3 class={state.sectionTitleClass}>Shadows</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {#each Object.entries(state.layoutTokens.boxShadow ?? {}) as [tokenName, tokenValue]}
            {#if tokenValue !== 'none'}
              <div
                class={state.tokenCardClass}
                style={`box-shadow: var(--shadow-${tokenName}, ${tokenValue})`}
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

  {#if !state.showTokens}
    <p class="text-[--color-text-secondary]">Design tokens are hidden.</p>
  {/if}
</div>
