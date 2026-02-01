<script lang="ts">
  import Image from './index.svelte';

  let props = $props();

  let src: string = $derived(props.src ?? 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Main+Image');
  let alt: string = $derived(props.alt ?? 'Sample image');
  let fallback: string = $derived(props.fallback ?? 'https://via.placeholder.com/600x400/94a3b8/ffffff?text=Fallback+Image');
  let loading: 'lazy' | 'eager' = $derived(props.loading ?? 'lazy');
  let width: number | string = $derived(props.width ?? '');
  let height: number | string = $derived(props.height ?? '');
  let size: 'sm' | 'md' | 'lg' | 'xl' = $derived(props.size ?? 'md');

  export const controls = [
    { name: 'src', type: 'text', defaultValue: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Main+Image', group: 'Content' },
    { name: 'alt', type: 'text', defaultValue: 'Sample image', group: 'Content' },
    { name: 'fallback', type: 'text', defaultValue: 'https://via.placeholder.com/600x400/94a3b8/ffffff?text=Fallback+Image', group: 'Content' },
    { name: 'loading', type: 'select', options: ['lazy', 'eager'], defaultValue: 'lazy', group: 'Behavior' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md', group: 'Layout' },
    { name: 'width', type: 'text', defaultValue: '', group: 'Layout' },
    { name: 'height', type: 'text', defaultValue: '', group: 'Layout' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Image Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Image</h2>
    <div class="flex flex-col gap-4">
      <div class="inline-block">
        <Image
          src={src}
          alt={alt}
          fallback={fallback}
          loading={loading}
          width={width || undefined}
          height={height || undefined}
          size={size}
        />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="image-src" class="block text-sm mb-1">Src:</label>
        <input
          id="image-src"
          type="text"
          bind:value={src}
          class="border rounded p-1 w-64"
        />
      </div>

      <div>
        <label for="image-alt" class="block text-sm mb-1">Alt:</label>
        <input
          id="image-alt"
          type="text"
          bind:value={alt}
          class="border rounded p-1 w-48"
        />
      </div>

      <div>
        <label for="image-fallback" class="block text-sm mb-1">Fallback:</label>
        <input
          id="image-fallback"
          type="text"
          bind:value={fallback}
          class="border rounded p-1 w-64"
        />
      </div>

      <div>
        <label for="image-loading" class="block text-sm mb-1">Loading:</label>
        <select id="image-loading" bind:value={loading} class="border rounded p-1">
          <option value="lazy">Lazy</option>
          <option value="eager">Eager</option>
        </select>
      </div>

      <div>
        <label for="image-size" class="block text-sm mb-1">Size:</label>
        <select id="image-size" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div>
        <label for="image-width" class="block text-sm mb-1">Width:</label>
        <input
          id="image-width"
          type="text"
          bind:value={width}
          class="border rounded p-1 w-24"
        />
      </div>

      <div>
        <label for="image-height" class="block text-sm mb-1">Height:</label>
        <input
          id="image-height"
          type="text"
          bind:value={height}
          class="border rounded p-1 w-24"
        />
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col items-center">
        <Image src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=SM" size="sm" alt="Small image" />
        <span class="text-xs mt-1">Small</span>
      </div>
      <div class="flex flex-col items-center">
        <Image src="https://via.placeholder.com/400x300/1d4ed8/ffffff?text=MD" size="md" alt="Medium image" />
        <span class="text-xs mt-1">Medium</span>
      </div>
      <div class="flex flex-col items-center">
        <Image src="https://via.placeholder.com/600x400/1e40af/ffffff?text=LG" size="lg" alt="Large image" />
        <span class="text-xs mt-1">Large</span>
      </div>
      <div class="flex flex-col items-center">
        <Image src="https://via.placeholder.com/800x600/1e3a8a/ffffff?text=XL" size="xl" alt="Extra Large image" />
        <span class="text-xs mt-1">Extra Large</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Image with Fallback</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <Image
          src="https://invalid-url-for-testing.com/image.jpg"
          fallback="https://via.placeholder.com/300x200/f59e0b/ffffff?text=Fallback"
          size="md"
          alt="Image with fallback"
        />
        <span class="text-xs mt-1">With Fallback</span>
      </div>
      <div class="flex flex-col items-center">
        <Image
          src="https://via.placeholder.com/300x200/10b981/ffffff?text=Normal"
          size="md"
          alt="Normal image"
        />
        <span class="text-xs mt-1">Normal</span>
      </div>
    </div>
  </div>
</div>