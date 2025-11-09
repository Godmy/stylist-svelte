<script lang="ts">
  import BurnDownChart from './BurnDownChart.svelte';
  
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
</script>

<div class="p-4">
  <h1 class="text-xl font-bold mb-4">Burn Down Chart Component</h1>
  
  <div class="border rounded-lg p-4 bg-white">
    <BurnDownChart data={sampleData} />
  </div>
</div>