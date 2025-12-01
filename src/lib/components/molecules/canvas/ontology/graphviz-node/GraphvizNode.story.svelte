<script lang="ts">
  import GraphvizNode from './GraphvizNode.svelte';

  let id: string = 'node1';
  let label: string = 'Start';
  let shape: 'ellipse' | 'box' | 'circle' | 'diamond' | 'triangle' = 'ellipse';
  let color: string = '#1e40af';
  let fillColor: string = '#dbeafe';
  let style: 'solid' | 'dashed' | 'dotted' | 'bold' | 'filled' | 'invisible' | 'diagonals' | 'rounded' = 'solid';
  let fontSize: number = 12;
  let width: number = 100;
  let height: number = 60;
  let selected: boolean = false;
  let highlight: boolean = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GraphvizNode Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive GraphvizNode</h2>
    <div class="flex flex-wrap gap-8 items-center justify-center p-4 bg-gray-100 rounded">
      <div class="text-center">
        <p class="text-sm mb-2">Current Node</p>
        <GraphvizNode 
          {id}
          {label}
          {shape}
          {color}
          {fillColor}
          {style}
          {fontSize}
          {width}
          {height}
          {selected}
          {highlight}
        />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="node-id" class="block text-sm mb-1">ID:</label>
        <input
          id="node-id"
          type="text"
          bind:value={id}
          class="border rounded p-1 w-24"
        />
      </div>

      <div>
        <label for="node-label" class="block text-sm mb-1">Label:</label>
        <input
          id="node-label"
          type="text"
          bind:value={label}
          class="border rounded p-1 w-24"
        />
      </div>

      <div>
        <label for="node-shape" class="block text-sm mb-1">Shape:</label>
        <select
          id="node-shape"
          bind:value={shape}
          class="border rounded p-1"
        >
          <option value="ellipse">Ellipse</option>
          <option value="box">Box</option>
          <option value="circle">Circle</option>
          <option value="diamond">Diamond</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>

      <div>
        <label for="node-color" class="block text-sm mb-1">Color:</label>
        <input
          id="node-color"
          type="color"
          bind:value={color}
          class="border rounded p-1 w-16"
        />
      </div>

      <div>
        <label for="node-fill" class="block text-sm mb-1">Fill:</label>
        <input
          id="node-fill"
          type="color"
          bind:value={fillColor}
          class="border rounded p-1 w-16"
        />
      </div>

      <div>
        <label for="node-style" class="block text-sm mb-1">Style:</label>
        <select
          id="node-style"
          bind:value={style}
          class="border rounded p-1"
        >
          <option value="solid">Solid</option>
          <option value="dashed">Dashed</option>
          <option value="dotted">Dotted</option>
          <option value="bold">Bold</option>
          <option value="filled">Filled</option>
          <option value="diagonals">Diagonals</option>
          <option value="rounded">Rounded</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="node-selected" class="flex items-center gap-1">
          <input id="node-selected" type="checkbox" bind:checked={selected} />
          Selected
        </label>
      </div>

      <div class="flex items-end">
        <label for="node-highlight" class="flex items-center gap-1">
          <input id="node-highlight" type="checkbox" bind:checked={highlight} />
          Highlight
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Node Shape Variations</h2>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div class="text-center">
        <p class="text-sm mb-2">Ellipse</p>
        <GraphvizNode 
          id="node-ellipse"
          label="Start"
          shape="ellipse"
          color="#1e40af"
          fillColor="#dbeafe"
        />
      </div>
      <div class="text-center">
        <p class="text-sm mb-2">Box</p>
        <GraphvizNode 
          id="node-box"
          label="Process"
          shape="box"
          color="#166534"
          fillColor="#dcfce7"
        />
      </div>
      <div class="text-center">
        <p class="text-sm mb-2">Circle</p>
        <GraphvizNode 
          id="node-circle"
          label="Circle"
          shape="circle"
          color="#7c2d12"
          fillColor="#fef2cd"
        />
      </div>
      <div class="text-center">
        <p class="text-sm mb-2">Diamond</p>
        <GraphvizNode 
          id="node-diamond"
          label="Decision"
          shape="diamond"
          color="#7e22ce"
          fillColor="#f3e8ff"
        />
      </div>
      <div class="text-center">
        <p class="text-sm mb-2">Triangle</p>
        <GraphvizNode 
          id="node-triangle"
          label="Merge"
          shape="triangle"
          color="#9a3412"
          fillColor="#ffedd5"
        />
      </div>
    </div>
  </div>
</div>