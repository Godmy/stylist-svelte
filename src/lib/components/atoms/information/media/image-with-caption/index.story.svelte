<script lang="ts">
  import ImageWithCaption from './index.svelte';

  let src = 'https://placehold.co/640x360';
  let caption = 'Example caption';
  let rounded = false;
  let bordered = true;
  let shadow = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ImageWithCaption</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Src</span>
      <input type="text" bind:value={src} class="border rounded p-1 w-64" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Caption</span>
      <input type="text" bind:value={caption} class="border rounded p-1 w-64" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Rounded</span>
      <input type="checkbox" bind:checked={rounded} />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Bordered</span>
      <input type="checkbox" bind:checked={bordered} />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Shadow</span>
      <input type="checkbox" bind:checked={shadow} />
    </label>
  </div>

  <div class="max-w-xl">
    <ImageWithCaption {src} {caption} {rounded} {bordered} {shadow} />
  </div>
</div>
