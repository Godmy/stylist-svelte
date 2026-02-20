<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import Counter from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'count', type: 'select', options: ['0', '1', '5', '10', '15', '25', '50', '99', '100', '150'], defaultValue: '5' },
    { name: 'max', type: 'select', options: ['10', '50', '99', '100', '200'], defaultValue: '99' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info'], defaultValue: 'primary' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' }
  ];
</script>

<Story
  id="atoms-counter"
  title="Counter"
  component={Counter}
  category="Atoms"
  description="A small badge to display numerical counts, often used for notifications."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Counter Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A small badge to display numerical counts, often used for notifications.</p>

        <div class="mt-6 flex items-center space-x-4">
          <Counter
            count={parseInt(props.count || '5')}
            max={parseInt(props.max || '99')}
            variant={props.variant}
            size={props.size}
          />
          <span class="text-[--color-text-primary]">Notifications</span>
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Counter Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different counter configurations with various properties.
        </p>

        <div class="mt-5 flex flex-wrap items-center gap-4">
          <Counter count={1} variant="primary" />
          <Counter count={15} variant="secondary" />
          <Counter count={100} max={99} variant="danger" />
          <Counter count={5} variant="success" size="sm" />
          <Counter count={25} variant="warning" size="lg" />
        </div>
      </div>
    </section>
  {/snippet}
</Story>

