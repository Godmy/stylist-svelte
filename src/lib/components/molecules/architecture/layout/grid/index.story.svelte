<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Grid from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'cols', type: 'select', options: [1, 2, 3, 4], defaultValue: 2 },
    { name: 'gap', type: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    { name: 'responsive', type: 'boolean', defaultValue: true }
  ];

  let cols = $state(2);
  let gap = $state<'none' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  let responsive = $state(true);
</script>

<Story
  id="molecules-grid"
  title="Grid"
  component={Grid}
  category="Molecules"
  description="Responsive grid layout component with configurable columns and spacing."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Interactive Grid Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Responsive grid layout with configurable columns and spacing.</p>

        <div class="mt-6">
          <Grid cols={props.cols} gap={props.gap} responsive={props.responsive}>
            <div class="p-4 bg-[--color-primary-100] border border-[--color-border-primary]">Item 1</div>
            <div class="p-4 bg-[--color-primary-200] border border-[--color-border-primary]">Item 2</div>
            <div class="p-4 bg-[--color-primary-300] border border-[--color-border-primary]">Item 3</div>
            <div class="p-4 bg-[--color-primary-400] border border-[--color-border-primary]">Item 4</div>
          </Grid>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Grid Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different grid configurations with various column counts and spacing.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Grid with 3 Columns</p>
            <Grid cols={3} gap="md" responsive={true}>
              <div class="p-4 bg-[--color-success-100] border border-[--color-border-primary]">Item 1</div>
              <div class="p-4 bg-[--color-success-200] border border-[--color-border-primary]">Item 2</div>
              <div class="p-4 bg-[--color-success-300] border border-[--color-border-primary]">Item 3</div>
              <div class="p-4 bg-[--color-success-400] border border-[--color-border-primary]">Item 4</div>
              <div class="p-4 bg-[--color-success-500] text-[--color-text-inverse] border border-[--color-border-primary]">Item 5</div>
              <div class="p-4 bg-[--color-success-600] text-[--color-text-inverse] border border-[--color-border-primary]">Item 6</div>
            </Grid>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Grid with Large Gap</p>
            <Grid cols={2} gap="xl" responsive={true}>
              <div class="p-4 bg-[--color-warning-100] border border-[--color-border-primary]">Item 1</div>
              <div class="p-4 bg-[--color-warning-200] border border-[--color-border-primary]">Item 2</div>
              <div class="p-4 bg-[--color-warning-300] border border-[--color-border-primary]">Item 3</div>
              <div class="p-4 bg-[--color-warning-400] border border-[--color-border-primary]">Item 4</div>
            </Grid>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Non-responsive Grid</p>
            <Grid cols={2} gap="md" responsive={false}>
              <div class="p-4 bg-[--color-info-100] border border-[--color-border-primary]">Item 1</div>
              <div class="p-4 bg-[--color-info-200] border border-[--color-border-primary]">Item 2</div>
            </Grid>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

