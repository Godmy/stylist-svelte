<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import DesignTokens from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'theme', type: 'select', options: ['light', 'dark'], defaultValue: 'light' },
      { name: 'showColorPalette', type: 'boolean', defaultValue: true },
      { name: 'showSpacing', type: 'boolean', defaultValue: true },
      { name: 'showTypography', type: 'boolean', defaultValue: true },
      { name: 'showShadows', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type Section = { label: string; copy: string; prop: string };

  const sections: Section[] = [
    { label: 'Colors', copy: 'Brand palettes, neutrals, and contextual hues used for UI surfaces.', prop: 'showColorPalette' },
    { label: 'Spacing', copy: 'Scale that keeps paddings and gaps in sync across breakpoints.', prop: 'showSpacing' },
    { label: 'Typography', copy: 'Font sizes for headings, paragraphs, and utility text.', prop: 'showTypography' },
    { label: 'Border radius', copy: 'Curvature system used for chips, cards, and dialogs.', prop: 'showBorderRadius' },
    { label: 'Shadows', copy: 'Elevation levels for states, flyouts, and modals.', prop: 'showShadows' }
  ];

  function handleSectionClick(section: string) {
    console.log('Section clicked:', section);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={DesignTokens}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-design-tokens grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Design Tokens Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive design tokens with customizable options.</p>

        <div class="mt-6">
          <DesignTokens
            theme={props.theme}
            showColorPalette={props.showColorPalette}
            showSpacing={props.showSpacing}
            showTypography={props.showTypography}
            showShadows={props.showShadows}
            onSectionClick={handleSectionClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Design Tokens Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different design tokens configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Dark Theme</p>
            <div>
              <DesignTokens
                theme="dark"
                showColorPalette={true}
                onSectionClick={handleSectionClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Colors Only</p>
            <div>
              <DesignTokens
                theme="light"
                showColorPalette={true}
                showSpacing={false}
                showTypography={false}
                showShadows={false}
                onSectionClick={handleSectionClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

