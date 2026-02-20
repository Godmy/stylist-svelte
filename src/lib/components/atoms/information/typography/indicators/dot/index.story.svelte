<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Dot from './index.svelte';

  const colorOptions = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'gray'
  ];
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    { name: 'color', type: 'select', options: colorOptions, defaultValue: 'primary' },
    { name: 'size', type: 'select', options: sizeOptions, defaultValue: 'md' }
  ];
</script>

<Story
  id="atoms-dot"
  title="Dot"
  component={Dot}
  category="Atoms"
  description="A small, colored dot indicator for statuses or notifications."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Dot Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A small, colored dot indicator for statuses or notifications.</p>

        <div class="mt-6 flex items-center space-x-4">
          <Dot color={props.color} size={props.size} />
          <span class="text-[--color-text-primary]">Status Indicator</span>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Dot Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different dot configurations with various properties.
        </p>

        <div class="mt-5 flex flex-wrap items-center gap-4">
          <div class="flex items-center space-x-2">
            <Dot color="primary" size="sm" />
            <span class="text-xs">Primary Small</span>
          </div>
          <div class="flex items-center space-x-2">
            <Dot color="secondary" size="md" />
            <span class="text-xs">Secondary Medium</span>
          </div>
          <div class="flex items-center space-x-2">
            <Dot color="success" size="lg" />
            <span class="text-xs">Success Large</span>
          </div>
          <div class="flex items-center space-x-2">
            <Dot color="warning" size="sm" />
            <span class="text-xs">Warning Small</span>
          </div>
          <div class="flex items-center space-x-2">
            <Dot color="danger" size="md" />
            <span class="text-xs">Danger Medium</span>
          </div>
          <div class="flex items-center space-x-2">
            <Dot color="info" size="lg" />
            <span class="text-xs">Info Large</span>
          </div>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

