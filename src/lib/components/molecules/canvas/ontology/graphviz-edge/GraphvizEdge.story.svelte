<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import GraphvizEdge from './GraphvizEdge.svelte';

  type Props = {
    highlightActive: boolean;
    globalStyle: 'solid' | 'dashed' | 'dotted';
  };

  type EdgeExample = {
    id: string;
    label: string;
    source: string;
    target: string;
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    width?: number;
    color?: string;
    style?: 'solid' | 'dashed' | 'dotted' | 'bold';
    description: string;
  };

  const controls: ControlConfig[] = [
    { name: 'highlightActive', type: 'boolean', defaultValue: false },
    { name: 'globalStyle', type: 'select', options: ['solid', 'dashed', 'dotted'], defaultValue: 'solid' }
  ];

  const edgeExamples: EdgeExample[] = [
    {
      id: 'edge-default',
      label: 'Default edge',
      source: 'node-a',
      target: 'node-b',
      sourceX: 40,
      sourceY: 120,
      targetX: 240,
      targetY: 60,
      description: 'Standard weight connection great for neutral flows.'
    },
    {
      id: 'edge-color',
      label: 'Custom color',
      source: 'node-b',
      target: 'node-c',
      sourceX: 60,
      sourceY: 60,
      targetX: 220,
      targetY: 160,
      color: '#a855f7',
      description: 'Accent a path with brand colors or KPIs.'
    },
    {
      id: 'edge-width',
      label: 'Thick edge',
      source: 'node-c',
      target: 'node-d',
      sourceX: 120,
      sourceY: 160,
      targetX: 260,
      targetY: 200,
      width: 4,
      description: 'Use heavier strokes to communicate throughput.'
    },
    {
      id: 'edge-dashed',
      label: 'Dashed edge',
      source: 'node-d',
      target: 'node-e',
      sourceX: 30,
      sourceY: 190,
      targetX: 190,
      targetY: 30,
      style: 'dashed',
      description: 'Dashed styling implies tentative or optional routes.'
    }
  ];
</script>

<Story
  id="molecules-graphviz-edge"
  title="GraphvizEdge"
  component={GraphvizEdge}
  category="Molecules"
  description="SVG-based edges for graph canvases with styling controls."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="space-y-2">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Edge palette</p>
          <p class="text-lg text-[--color-text-primary]">
            Highlight toggles glow states; switch stroke style globally for the first example.
          </p>
        </header>

        <div class="mt-6 space-y-4">
          {#each edgeExamples as edge, index}
            <article class="rounded-2xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">
              <div class="flex items-center justify-between pb-3 text-sm font-medium text-[--color-text-primary]">
                <span>{edge.label}</span>
                <span class="text-xs text-[--color-text-secondary]">#{index + 1}</span>
              </div>
              <div class="relative h-40 rounded-xl border border-dashed border-[--color-border-primary] bg-white">
                <GraphvizEdge
                  id={edge.id}
                  source={edge.source}
                  target={edge.target}
                  sourceX={edge.sourceX}
                  sourceY={edge.sourceY}
                  targetX={edge.targetX}
                  targetY={edge.targetY}
                  label={edge.label}
                  style={index === 0 ? props.globalStyle : edge.style}
                  color={edge.color}
                  width={edge.width}
                  highlight={props.highlightActive}
                />
              </div>
              <p class="mt-3 text-xs text-[--color-text-secondary]">{edge.description}</p>
            </article>
          {/each}
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm space-y-3">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Usage tips</h3>
        <ul class="space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Map dashed edges to experimental flows or disabled features.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Encode traffic volume with width plus color hue pairings.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Use highlight state while stepping through diagrams live.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
