<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  import GraphNode from './GraphNode.svelte';

  type Props = {
    accentColor: string;
    focusNodeSize: 'sm' | 'md' | 'lg';
  };

  const controls: ControlConfig[] = [
    { name: 'accentColor', type: 'color', defaultValue: '#f97316' },
    { name: 'focusNodeSize', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'lg' }
  ];

  const demoNodes = [
    { id: 'custom-color-node', label: 'Custom Color', x: 100, y: 60 },
    { id: 'focus-node', label: 'Focus Size', x: 220, y: 150 },
    { id: 'small-node', label: 'Compact', x: 40, y: 190 }
  ];
</script>

<Story
  id="molecules-graph-node-advanced"
  title="GraphNodeAdvanced"
  component={GraphNode}
  category="Molecules"
  description="Examples showing custom colors and sizing for node markers."
  controls={controls}
>
  {#snippet children(props: Props)}
    <section class="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <header class="space-y-2">
          <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">Canvas preview</p>
          <p class="text-lg text-[--color-text-primary]">Use controls to tweak color accents and size presets.</p>
        </header>

        <div class="relative mt-6 h-[320px] rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-secondary]">
          <GraphNode
            id={demoNodes[0].id}
            x={demoNodes[0].x}
            y={demoNodes[0].y}
            label={demoNodes[0].label}
            color={props.accentColor}
          />

          <GraphNode
            id={demoNodes[1].id}
            x={demoNodes[1].x}
            y={demoNodes[1].y}
            label={demoNodes[1].label}
            size={props.focusNodeSize}
          />

          <GraphNode
            id={demoNodes[2].id}
            x={demoNodes[2].x}
            y={demoNodes[2].y}
            label={demoNodes[2].label}
            size="sm"
            color="#0ea5e9"
          />
        </div>
      </div>

      <div class="rounded-[2.5rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm space-y-4">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Why advanced nodes?</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Combine color coding with size emphasis to communicate hierarchy in architecture maps or flow tools.
        </p>
        <ul class="space-y-3 text-sm text-[--color-text-primary]">
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Use accent hues to map product surfaces or ownership.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Swap node sizes to distinguish entry points from supporting utilities.
          </li>
          <li class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
            Position nodes absolutely to simulate graph canvases prior to wiring edges.
          </li>
        </ul>
      </div>
    </section>
  {/snippet}
</Story>
