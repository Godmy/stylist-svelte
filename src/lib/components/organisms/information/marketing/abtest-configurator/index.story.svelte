<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ABTestConfigurator from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const testConfig = {
    id: 'ab-test-1',
    name: 'Homepage CTA Button',
    description: 'Testing different CTA button designs',
    variants: [
      { id: 'variant-a', name: 'Original', description: 'Blue button', weight: 50, isActive: true },
      { id: 'variant-b', name: 'Test', description: 'Green button', weight: 50, isActive: true }
    ],
    startDate: new Date(),
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    status: 'draft' as const,
    successMetrics: ['Conversion Rate', 'Click Through Rate']
  };

  function handleSave(config: any) {
    console.log('Saved:', config);
  }

  function handleLaunch(config: any) {
    console.log('Launched:', config);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ABTestConfigurator}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-abtest-configurator grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary A/B Test Configurator Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive A/B test configurator with customizable options.</p>

        <div class="mt-6">
          <ABTestConfigurator
            initialTest={testConfig}
            onSave={handleSave}
            onLaunch={handleLaunch}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">A/B Test Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different A/B test configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Running Test</p>
            <div>
              <ABTestConfigurator
                initialTest={{...testConfig, status: 'running'}}
                onSave={handleSave}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Completed Test</p>
            <div>
              <ABTestConfigurator
                initialTest={{...testConfig, status: 'completed'}}
                onSave={handleSave}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
