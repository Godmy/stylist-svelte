<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import VerticalLayout from './index.svelte';

  type Props = {
    gap: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems: 'start' | 'center' | 'end' | 'stretch';
    justifyContent: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };

  const controls: ControlConfig[] = [
    { name: 'gap', type: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'], defaultValue: 'lg' },
    { name: 'alignItems', type: 'select', options: ['start', 'center', 'end', 'stretch'], defaultValue: 'stretch' },
    {
      name: 'justifyContent',
      type: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      defaultValue: 'start'
    }
  ];

  const dashboardBlocks = [
    { title: 'Campaign health', value: '86%', detail: 'в†‘ 6% vs last week', accent: 'bg-emerald-100 text-emerald-700' },
    { title: 'Experiments running', value: '12', detail: '4 finishing this week', accent: 'bg-blue-100 text-blue-700' },
    { title: 'Pending approvals', value: '4', detail: 'Design + Ops', accent: 'bg-orange-100 text-orange-700' }
  ];
</script>

<Story
  id="molecules-vertical-layout"
  title="VerticalLayout"
  component={VerticalLayout}
  category="Molecules"
  description="Utility stacker used to create evenly spaced vertical flows with consistent rhythm."
  controls={controls}
>
  {#snippet children(props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-8 shadow-sm">
        <header class="flex items-center justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Stacked dashboard</p>
            <p class="text-lg text-[--color-text-primary]">Gap + alignment obey playground controls on the left.</p>
          </div>
          <span class="rounded-full bg-[--color-background-secondary] px-4 py-1 text-xs font-semibold text-[--color-text-primary]">
            {props.gap} gap
          </span>
        </header>

        <div class="mt-6">
          <VerticalLayout gap={props.gap} alignItems={props.alignItems} justifyContent={props.justifyContent}>
            {#each dashboardBlocks as block}
              <article class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] px-5 py-4">
                <p class="text-sm font-semibold text-[--color-text-secondary]">{block.title}</p>
                <div class="mt-2 flex items-baseline gap-3">
                  <span class="text-3xl font-semibold text-[--color-text-primary]">{block.value}</span>
                  <span class={`rounded-full px-3 py-0.5 text-xs font-semibold ${block.accent}`}>
                    {block.detail}
                  </span>
                </div>
              </article>
            {/each}
          </VerticalLayout>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Other stack examples</h3>
        <p class="text-sm text-[--color-text-secondary]">VerticalLayout powers menu sheets, form flows, and onboarding steps.</p>

        <div class="mt-6 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary]">Onboarding checklist</p>
            <VerticalLayout gap="sm" alignItems="stretch" justifyContent="start" class="mt-3">
              <label class="flex items-center gap-3 rounded-xl border border-[--color-border-primary] px-3 py-2 text-sm">
                <input type="checkbox" checked />
                Invite teammates
              </label>
              <label class="flex items-center gap-3 rounded-xl border border-[--color-border-primary] px-3 py-2 text-sm">
                <input type="checkbox" />
                Connect data source
              </label>
            </VerticalLayout>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary]">Hero copy stack</p>
            <VerticalLayout gap="sm" alignItems="start" justifyContent="start" class="mt-3">
              <h4 class="text-lg font-semibold text-[--color-text-primary]">Stories that scale</h4>
              <p class="text-sm text-[--color-text-secondary]">
                Drop any child content inside VerticalLayout to maintain a clean rhythm without writing custom CSS.
              </p>
              <button class="mt-2 inline-flex items-center rounded-full bg-[--color-primary-600] px-4 py-2 text-xs font-semibold text-[--color-text-inverse]">
                Explore layouts
              </button>
            </VerticalLayout>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>




