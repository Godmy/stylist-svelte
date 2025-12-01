<script lang="ts">
  import GraphvizCluster from './GraphvizCluster.svelte';

  let id: string = 'cluster1';
  let label: string = 'User Services';
  let x: number = 50;
  let y: number = 50;
  let width: number = 200;
  let height: number = 150;
  let color: string = '#4f46e5';
  let fillColor: string = '#ede9fe';
  let style: 'solid' | 'dashed' | 'dotted' | 'bold' | 'rounded' = 'solid';
  let fontSize: number = 14;
  let padding: number = 20;
  let selected: boolean = false;
  let highlight: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GraphvizCluster Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive GraphvizCluster</h2>
    <div class="relative w-full h-96 border rounded bg-gray-50">
      <svg viewBox="0 0 500 300" class="w-full h-full">
        <GraphvizCluster 
          {id}
          {label}
          {x}
          {y}
          {width}
          {height}
          {color}
          {fillColor}
          {style}
          {fontSize}
          {padding}
          {selected}
          {highlight}
        >
          <!-- Example content inside the cluster could go here -->
        </GraphvizCluster>
      </svg>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="cluster-id" class="block text-sm mb-1">ID:</label>
        <input
          id="cluster-id"
          type="text"
          bind:value={id}
          class="border rounded p-1 w-24"
        />
      </div>

      <div>
        <label for="cluster-label" class="block text-sm mb-1">Label:</label>
        <input
          id="cluster-label"
          type="text"
          bind:value={label}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="cluster-color" class="block text-sm mb-1">Color:</label>
        <input
          id="cluster-color"
          type="color"
          bind:value={color}
          class="border rounded p-1 w-16"
        />
      </div>

      <div>
        <label for="cluster-fill" class="block text-sm mb-1">Fill Color:</label>
        <input
          id="cluster-fill"
          type="color"
          bind:value={fillColor}
          class="border rounded p-1 w-16"
        />
      </div>

      <div>
        <label for="cluster-style" class="block text-sm mb-1">Style:</label>
        <select
          id="cluster-style"
          bind:value={style}
          class="border rounded p-1"
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="bold">Bold</option>
          <option value="rounded">Rounded</option>
        </select>
      </div>

      <div>
        <label for="cluster-font-size" class="block text-sm mb-1">Font Size:</label>
        <input
          id="cluster-font-size"
          type="number"
          bind:value={fontSize}
          class="border rounded p-1 w-20"
          min="8"
          max="24"
        />
      </div>

      <div class="flex items-end">
        <label for="cluster-selected" class="flex items-center gap-1">
          <input id="cluster-selected" type="checkbox" bind:checked={selected} />
          Selected
        </label>
      </div>

      <div class="flex items-end">
        <label for="cluster-highlight" class="flex items-center gap-1">
          <input id="cluster-highlight" type="checkbox" bind:checked={highlight} />
          Highlight
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">GraphvizCluster Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Rounded Cluster</h3>
        <div class="relative w-full h-64 border rounded bg-gray-50">
          <svg viewBox="0 0 400 250" class="w-full h-full">
            <GraphvizCluster 
              id="rounded-cluster"
              label="API Services"
              x={30}
              y={30}
              width={180}
              height={120}
              color="#059669"
              fillColor="#d1fae5"
              style="rounded"
            />
          </svg>
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Dashed Cluster</h3>
        <div class="relative w-full h-64 border rounded bg-gray-50">
          <svg viewBox="0 0 400 250" class="w-full h-full">
            <GraphvizCluster 
              id="dashed-cluster"
              label="External Services"
              x={40}
              y={40}
              width={200}
              height={140}
              color="#dc2626"
              fillColor="#fee2e2"
              style="dashed"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>