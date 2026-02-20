<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import BurnDownChart from './index.svelte';

  interface BurnDownPoint {
    date: Date;
    ideal: number;
    actual: number;
  }

  interface BurnDownData {
    sprintStart: Date;
    sprintEnd: Date;
    points: BurnDownPoint[];
  }

  // Sample burn down data
  const sampleData: BurnDownData = {
    sprintStart: new Date(2024, 10, 1), // November 1, 2024
    sprintEnd: new Date(2024, 10, 15),   // November 15, 2024
    points: [
      { date: new Date(2024, 10, 1), ideal: 40, actual: 40 },
      { date: new Date(2024, 10, 2), ideal: 35, actual: 38 },
      { date: new Date(2024, 10, 3), ideal: 30, actual: 35 },
      { date: new Date(2024, 10, 4), ideal: 25, actual: 30 },
      { date: new Date(2024, 10, 5), ideal: 20, actual: 26 },
      { date: new Date(2024, 10, 6), ideal: 15, actual: 22 },
      { date: new Date(2024, 10, 7), ideal: 10, actual: 18 },
      { date: new Date(2024, 10, 8), ideal: 5, actual: 12 },
      { date: new Date(2024, 10, 9), ideal: 0, actual: 8 },
    ]
  };

  type Props = {
    title: string;
    width: number;
    height: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Burn Down Chart'
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: 600,
      min: 300,
      max: 1000
    },
    {
      name: 'height',
      type: 'number',
      defaultValue: 400,
      min: 200,
      max: 800
    }
  ];
</script>

<Story
  id="molecules-burn-down-chart"
  title="Molecules / Information / Management / Agile / BurnDownChart"
  component={BurnDownChart}
  category="Molecules/Information/Management/Agile"
  description="A chart component to visualize sprint progress comparing ideal vs actual work remaining."
  controls={controls}
>
  {#snippet children(args)}
    <div class="sb-molecules-burn-down-chart p-4">
      <h1 class="text-xl font-bold mb-4">Burn Down Chart Component</h1>

      <div class="border rounded-lg p-4 bg-white">
        <BurnDownChart 
          data={sampleData} 
          title={args.title}
          width={args.width}
          height={args.height}
        />
      </div>
    </div>
  {/snippet}
</Story>



