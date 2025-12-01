<script lang="ts">
  import LazyLoader from './LazyLoader.svelte';
  import type { ILazyLoaderProps } from './types';

  // Define the controls for Storybook
  const content: ILazyLoaderProps['content'] = [
    {
      id: '1',
      type: 'image',
      src: 'https://via.placeholder.com/600x400/3b82f6/FFFFFF?text=Image+1',
      title: 'Placeholder Image 1',
      alt: 'Placeholder 1'
    },
    {
      id: '2',
      type: 'image',
      src: 'https://via.placeholder.com/600x400/ef4444/FFFFFF?text=Image+2',
      title: 'Placeholder Image 2',
      alt: 'Placeholder 2'
    },
    {
      id: '3',
      type: 'iframe',
      src: 'https://example.com',
      title: 'Example iframe'
    }
  ];

  let threshold = $state(0.1);
  let rootMargin = $state('0px');
  let placeholder = $state('Loading...');
  let fallback = $state('Failed to load content');
  let preload = $state(true);
  let showPlaceholder = $state(true);
  let showProgress = $state(true);
  let variant: ILazyLoaderProps['variant'] = $state('default');
  let size: ILazyLoaderProps['size'] = $state('md');
</script>

<div class="p-8">
  <h1>LazyLoader Story</h1>

  <div class="mb-4 space-y-2">
    <div>
      <label for="threshold-input" class="block mb-1">Threshold: {threshold}</label>
      <input
        id="threshold-input"
        type="range"
        min="0"
        max="1"
        step="0.05"
        bind:value={threshold}
        class="w-full"
      />
    </div>

    <div>
      <label for="rootMargin-input" class="block mb-1">Root Margin: {rootMargin}</label>
      <input
        id="rootMargin-input"
        type="text"
        bind:value={rootMargin}
        class="border rounded p-1 w-full"
        placeholder="e.g., 0px, 10px"
      />
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={showPlaceholder}
        id="showPlaceholder"
      />
      <label for="showPlaceholder">Show Placeholder</label>
    </div>

    <div class="flex items-center gap-2">
      <input
        type="checkbox"
        bind:checked={showProgress}
        id="showProgress"
      />
      <label for="showProgress">Show Progress</label>
    </div>
  </div>

  <LazyLoader
    {content}
    {threshold}
    {rootMargin}
    {placeholder}
    {fallback}
    {preload}
    {showPlaceholder}
    {showProgress}
    {variant}
    {size}
  />
</div>