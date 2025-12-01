<script lang="ts">
  import ImageWithCaption from './ImageWithCaption.svelte';

  let src: string = 'https://placehold.co/600x400/3b82f6/white?text=Sample+Image';
  let alt: string = 'A sample image';
  let caption: string = 'This is a beautiful sample image';
  let width: string = '100%';
  let height: string = 'auto';
  let rounded: boolean = false;
  let bordered: boolean = true;
  let shadow: boolean = true;
  let loading: 'lazy' | 'eager' = 'lazy';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ImageWithCaption Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ImageWithCaption</h2>
    <div class="flex justify-center">
      <ImageWithCaption 
        {src}
        {alt}
        {caption}
        {width}
        {height}
        {rounded}
        {bordered}
        {shadow}
        {loading}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="image-src" class="block text-sm mb-1">Src:</label>
        <input
          id="image-src"
          type="text"
          bind:value={src}
          class="border rounded p-1 w-40"
        />
      </div>

      <div>
        <label for="image-alt" class="block text-sm mb-1">Alt:</label>
        <input
          id="image-alt"
          type="text"
          bind:value={alt}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="image-caption" class="block text-sm mb-1">Caption:</label>
        <input
          id="image-caption"
          type="text"
          bind:value={caption}
          class="border rounded p-1 w-40"
        />
      </div>

      <div class="flex items-end">
        <label for="image-rounded" class="flex items-center gap-1">
          <input id="image-rounded" type="checkbox" bind:checked={rounded} />
          Rounded
        </label>
      </div>

      <div class="flex items-end">
        <label for="image-bordered" class="flex items-center gap-1">
          <input id="image-bordered" type="checkbox" bind:checked={bordered} />
          Bordered
        </label>
      </div>

      <div class="flex items-end">
        <label for="image-shadow" class="flex items-center gap-1">
          <input id="image-shadow" type="checkbox" bind:checked={shadow} />
          Shadow
        </label>
      </div>

      <div>
        <label for="image-loading" class="block text-sm mb-1">Loading:</label>
        <select
          id="image-loading"
          bind:value={loading}
          class="border rounded p-1"
        >
          <option value="lazy">Lazy</option>
          <option value="eager">Eager</option>
        </select>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ImageWithCaption Variations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Rounded with Shadow</h3>
        <ImageWithCaption 
          src="https://placehold.co/400x300/ef4444/white?text=Rounded"
          alt="Rounded image"
          caption="A rounded image with shadow"
          rounded={true}
          shadow={true}
          bordered={false}
        />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Bordered Only</h3>
        <ImageWithCaption 
          src="https://placehold.co/400x300/10b981/white?text=Bordered"
          alt="Bordered image"
          caption="An image with border only"
          rounded={false}
          shadow={false}
          bordered={true}
        />
      </div>
    </div>
  </div>
</div>