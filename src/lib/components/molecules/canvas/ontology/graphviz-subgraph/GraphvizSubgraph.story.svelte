<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import GraphvizSubgraph from './GraphvizSubgraph.svelte';

  type SubgraphStyle = 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded' | 'filled';

  type Props = {
    stylePreset: 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded' | 'filled';
    highlightPrimary: boolean;
  };

  const controls: ControlConfig[] = [
    { name: 'stylePreset', type: 'select', options: ['solid', 'dashed', 'dotted', 'bold', 'rounded', 'filled'], defaultValue: 'solid' },
    { name: 'highlightPrimary', type: 'boolean', defaultValue: false }
  ];

  type SubgraphExample = {
    id: string;
    label: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    fillColor: string;
    style?: SubgraphStyle;
  };

  const subgraphExamples: SubgraphExample[] = [
    {
      id: 'subgraph-primary',
      label: 'User Management',
      x: 40,
      y: 30,
      width: 220,
      height: 160,
      color: '#3b82f6',
      fillColor: 'rgba(59, 130, 246, 0.05)'
    },
    {
      id: 'subgraph-data',
      label: 'Data Processing',
      x: 300,
      y: 60,
      width: 220,
      height: 170,
      color: '#22c55e',
      fillColor: 'rgba(34, 197, 94, 0.08)',
      style: 'rounded'
    },
    {
      id: 'subgraph-analytics',
      label: 'Analytics',
      x: 100,
      y: 210,
      width: 260,
      height: 150,
      color: '#f97316',
      fillColor: 'rgba(249, 115, 22, 0.08)',
      style: 'dashed'
    }
  ];
</script>

<Story
  id="molecules-graphviz-subgraph"
  title="GraphvizSubgraph"
  component={GraphvizSubgraph}
  category="Molecules"
  description="Cluster nodes into labeled subgraphs with stroke, fill, and highlight options."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="space-y-2">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Canvas preview</p>
          <p class="text-lg text-[--color-text-primary]">
            Toggle highlight or quickly swap styles for the primary cluster.
          </p>
        </header>

        <div class="relative mt-6 h-[420px] rounded-3xl border border-dashed border-[--color-border-primary] bg-white">
          <GraphvizSubgraph
            id={subgraphExamples[0].id}
            label={subgraphExamples[0].label}
            x={subgraphExamples[0].x}
            y={subgraphExamples[0].y}
            width={subgraphExamples[0].width}
            height={subgraphExamples[0].height}
            color={subgraphExamples[0].color}
            fillColor={subgraphExamples[0].fillColor}
            style={props.stylePreset}
            highlight={props.highlightPrimary}
          >
            <div class="p-4 text-xs text-gray-600">
              Identity service, profile sync, audit log
            </div>
          </GraphvizSubgraph>

          <GraphvizSubgraph
            id={subgraphExamples[1].id}
            label={subgraphExamples[1].label}
            x={subgraphExamples[1].x}
            y={subgraphExamples[1].y}
            width={subgraphExamples[1].width}
            height={subgraphExamples[1].height}
            color={subgraphExamples[1].color}
            fillColor={subgraphExamples[1].fillColor}
            style={subgraphExamples[1].style}
          >
            <div class="p-4 text-xs text-gray-600">
              Ingest queue, transformer, loader
            </div>
          </GraphvizSubgraph>

          <GraphvizSubgraph
            id={subgraphExamples[2].id}
            label={subgraphExamples[2].label}
            x={subgraphExamples[2].x}
            y={subgraphExamples[2].y}
            width={subgraphExamples[2].width}
            height={subgraphExamples[2].height}
            color={subgraphExamples[2].color}
            fillColor={subgraphExamples[2].fillColor}
            style={subgraphExamples[2].style}
          >
            <div class="p-4 text-xs text-gray-600">
              Dashboard, alerting, warehouse export
            </div>
          </GraphvizSubgraph>
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm space-y-3">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Subgraph patterns</h3>
        <ul class="space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Use highlight state during walkthroughs to emphasize the current subsystem.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Filled styles help differentiate data planes from control planes.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Rounded strokes pair nicely with modern, high-level architecture decks.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
