<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import DesignTokens from './DesignTokens.svelte';

  type Props = {
    theme: 'light' | 'dark';
    showColorPalette: boolean;
    showSpacing: boolean;
    showTypography: boolean;
    showBorderRadius: boolean;
    showShadows: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'theme', type: 'select', options: ['light', 'dark'], defaultValue: 'light' },
    { name: 'showColorPalette', type: 'boolean', defaultValue: true },
    { name: 'showSpacing', type: 'boolean', defaultValue: true },
    { name: 'showTypography', type: 'boolean', defaultValue: true },
    { name: 'showBorderRadius', type: 'boolean', defaultValue: true },
    { name: 'showShadows', type: 'boolean', defaultValue: true }
  ];

  type Section = { label: string; copy: string; prop: keyof Props };

  const sections: Section[] = [
    { label: 'Colors', copy: 'Brand palettes, neutrals, and contextual hues used for UI surfaces.', prop: 'showColorPalette' },
    { label: 'Spacing', copy: 'Scale that keeps paddings and gaps in sync across breakpoints.', prop: 'showSpacing' },
    { label: 'Typography', copy: 'Font sizes for headings, paragraphs, and utility text.', prop: 'showTypography' },
    { label: 'Border radius', copy: 'Curvature system used for chips, cards, and dialogs.', prop: 'showBorderRadius' },
    { label: 'Shadows', copy: 'Elevation levels for states, flyouts, and modals.', prop: 'showShadows' }
  ];
</script>

<Story
  id="molecules-design-tokens"
  title="DesignTokens"
  component={DesignTokens}
  category="Molecules"
  description="Interactive explorer for your design-system tokens with light/dark context."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Token explorer</p>
            <p class="text-lg text-[--color-text-primary]">Flip sections on/off to craft curated reference pages.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            Theme: {props.theme}
          </span>
        </header>

        <div class="mt-6 rounded-3xl border border-[--color-border-primary] bg-[--color-background-secondary]">
          <DesignTokens
            theme={props.theme}
            showTokens={true}
            showColorPalette={props.showColorPalette}
            showSpacing={props.showSpacing}
            showTypography={props.showTypography}
            showBorderRadius={props.showBorderRadius}
            showShadows={props.showShadows}
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Section overview</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Use this component to document tokens in onboarding docs or live style guides.
        </p>
        <div class="mt-6 space-y-3 text-sm text-[--color-text-primary]">
          {#each sections as section}
            <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div class="flex items-center justify-between">
                <span class="font-semibold">{section.label}</span>
                <span class="text-xs text-[--color-text-secondary]">
                  {#if props[section.prop]}
                    visible
                  {:else}
                    hidden
                  {/if}
                </span>
              </div>
              <p class="text-xs text-[--color-text-secondary]">{section.copy}</p>
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
