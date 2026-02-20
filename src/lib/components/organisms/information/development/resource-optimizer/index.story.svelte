<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ResourceOptimizer from './index.svelte';

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

  type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';

  type Resource = {
    id: string;
    name: string;
    url: string;
    type: ResourceType;
    size: number;
    transferSize?: number;
    loadTime?: number;
    status: 'loading' | 'loaded' | 'error' | 'cached';
    priority: 'high' | 'normal' | 'low';
    isOptimized: boolean;
  };

  const resources: Resource[] = [
    { id: 'cpu', name: 'CPU', url: '/api/cpu', type: 'api', size: 1024, status: 'loaded', priority: 'high', isOptimized: true },
    { id: 'memory', name: 'Memory', url: '/api/memory', type: 'api', size: 2048, status: 'loaded', priority: 'normal', isOptimized: false },
    { id: 'disk', name: 'Disk', url: '/api/disk', type: 'api', size: 4096, status: 'loading', priority: 'low', isOptimized: true },
    { id: 'network', name: 'Network', url: '/api/network', type: 'api', size: 512, status: 'cached', priority: 'high', isOptimized: false }
  ];

  function handleOptimize(resource: Resource) {
    console.log('Optimize:', resource.name);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ResourceOptimizer}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-resource-optimizer grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Resource Optimizer Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive resource optimizer with real-time monitoring.</p>

        <div class="mt-6">
          <ResourceOptimizer
            {resources}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Resource Optimizer Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different resource optimizer configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">High Priority Only</p>
            <div>
              <ResourceOptimizer
                resources={resources.filter(r => r.priority === 'high')}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Not Optimized</p>
            <div>
              <ResourceOptimizer
                resources={resources.filter(r => !r.isOptimized)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
