<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import GraphvizSubgraph from './GraphvizSubgraph.svelte';

  type Props = {
    padding: number;
    selected: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'padding', type: 'number', defaultValue: 32, min: 16, max: 80 },
    { name: 'selected', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="molecules-graphviz-subgraph-extra"
  title="GraphvizSubgraphExtra"
  component={GraphvizSubgraph}
  category="Molecules"
  description="Additional layouts demonstrating large canvases and filled treatments."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="space-y-2">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Enterprise lane</p>
          <p class="text-lg text-[--color-text-primary]">
            Adjust padding to simulate dense vs. airy graph sections.
          </p>
        </header>

        <div class="relative mt-6 h-[360px] rounded-3xl border border-dashed border-[--color-border-primary] bg-white">
          <GraphvizSubgraph
            id="large-subgraph"
            label="Large Container"
            x={40}
            y={30}
            width={400}
            height={220}
            color="#7c3aed"
            fillColor="rgba(124, 58, 237, 0.08)"
            padding={props.padding}
            selected={props.selected}
          >
            <div class="grid grid-cols-2 gap-3 p-4 text-xs text-gray-600">
              <span>Component A</span>
              <span>Component B</span>
              <span>Component C</span>
              <span>Component D</span>
              <span>Component E</span>
              <span>Component F</span>
            </div>
          </GraphvizSubgraph>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm space-y-4">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Filled variant</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Use filled styles for clusters that need to feel grouped or to call out compute planes.
        </p>

        <div class="relative h-[260px] rounded-3xl border border-dashed border-[--color-border-primary] bg-white">
          <GraphvizSubgraph
            id="filled-subgraph"
            label="Filled Container"
            x={30}
            y={30}
            width={300}
            height={180}
            color="#fb923c"
            fillColor="rgba(251, 146, 60, 0.2)"
            style="filled"
          >
            <div class="p-4 text-xs text-gray-600 space-y-2">
              <p>Service 1</p>
              <p>Service 2</p>
              <p>Service 3</p>
            </div>
          </GraphvizSubgraph>
        </div>
      </div>
    </section>
  {/snippet}
</Story>
