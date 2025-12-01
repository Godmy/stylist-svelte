<script lang="ts">
  import Stack from './Stack.svelte';
  import type { IStackProps } from './types';

  let {
    variant = 'primary'
  } = $props();

  let direction: 'vertical' | 'horizontal' = $state('vertical');
  let spacing: string = $state('1rem');
  let align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = $state('stretch');
  let justify: 'start' | 'center' | 'end' | 'between' | 'around' = $state('start');
  let className: string = $state('');

  // Define controls for the story
  const args = $derived({
    direction,
    spacing,
    align,
    justify,
    className
  });
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Stack Component</h1>
  <p class="mb-4">A layout component that arranges elements in a row or column with configurable spacing and alignment.</p>

  <div class="mb-4 space-y-4">
    <div>
      <label class="block mb-1">
        Direction:
        <select bind:value={direction} class="border rounded p-1 ml-2">
          <option value="vertical">vertical</option>
          <option value="horizontal">horizontal</option>
        </select>
      </label>
    </div>

    <div>
      <label class="block mb-1">Spacing: <input
        type="text"
        bind:value={spacing}
        class="border rounded p-1 ml-2 w-24"
      /></label>
    </div>

    <div>
      <label class="block mb-1">
        Align:
        <select bind:value={align} class="border rounded p-1 ml-2">
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="stretch">stretch</option>
          <option value="baseline">baseline</option>
        </select>
      </label>
    </div>

    <div>
      <label class="block mb-1">
        Justify:
        <select bind:value={justify} class="border rounded p-1 ml-2">
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
          <option value="between">between</option>
          <option value="around">around</option>
        </select>
      </label>
    </div>

    <div>
      <label class="block mb-1">Class: <input
        type="text"
        bind:value={className}
        class="border rounded p-1 ml-2 w-full"
      /></label>
    </div>
  </div>

  <div class="border p-4 rounded">
    <Stack
      direction={direction}
      spacing={spacing}
      align={align}
      justify={justify}
      class={className}
    >
      <div class="bg-blue-200 p-4 rounded">Item 1</div>
      <div class="bg-green-200 p-4 rounded">Item 2</div>
      <div class="bg-yellow-200 p-4 rounded">Item 3</div>
    </Stack>
  </div>
</div>