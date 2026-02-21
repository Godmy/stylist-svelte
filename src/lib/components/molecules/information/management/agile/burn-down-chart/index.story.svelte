<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import BurnDownChart from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Sprint Burn Down' },
    { name: 'width', type: 'number', defaultValue: 640, min: 320, max: 1000 },
    { name: 'height', type: 'number', defaultValue: 360, min: 220, max: 700 },
    { name: 'actualDrift', type: 'number', defaultValue: 6, min: -8, max: 12 }
  ];

  function buildData(actualDrift: number) {
    const points = Array.from({ length: 10 }, (_, i) => {
      const ideal = Math.max(0, 40 - i * 4.5);
      const actual = Math.max(0, ideal + actualDrift - i * 0.8);
      return { date: new Date(2026, 1, i + 1), ideal: Math.round(ideal), actual: Math.round(actual) };
    });

    return {
      sprintStart: points[0].date,
      sprintEnd: points[points.length - 1].date,
      points
    };
  }
</script>

<Story
  id="molecules-burn-down-chart"
  title="Molecules / Information / Management / Agile / BurnDownChart"
  component={BurnDownChart}
  category="Molecules/Information/Management/Agile"
  description="Sprint progress chart comparing ideal and actual remaining work."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <BurnDownChart data={buildData(args.actualDrift)} title={args.title} width={args.width} height={args.height} />
    </div>
  {/snippet}
</Story>
