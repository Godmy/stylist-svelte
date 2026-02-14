<script lang="ts">
  import ImageGallery from './index.svelte';

  type ImageItem = {
    id: string;
    src: string;
    alt: string;
    caption: string;
  };

  let images: ImageItem[] = [
    {
      id: '1',
      src: 'https://placehold.co/800x600/3b82f6/white?text=Image+1',
      alt: 'First image',
      caption: 'Beautiful landscape image'
    },
    {
      id: '2',
      src: 'https://placehold.co/800x600/ef4444/white?text=Image+2',
      alt: 'Second image',
      caption: 'Colorful sunset'
    },
    {
      id: '3',
      src: 'https://placehold.co/800x600/10b981/white?text=Image+3',
      alt: 'Third image',
      caption: 'Mountain view'
    },
    {
      id: '4',
      src: 'https://placehold.co/800x600/f59e0b/white?text=Image+4',
      alt: 'Fourth image',
      caption: 'Ocean waves'
    },
    {
      id: '5',
      src: 'https://placehold.co/800x600/8b5cf6/white?text=Image+5',
      alt: 'Fifth image',
      caption: 'Forest trail'
    }
  ];

  let showThumbnails: boolean = true;
  let autoPlay: boolean = false;
  let autoPlayInterval: number = 3000;
  let showCaptions: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ImageGallery Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ImageGallery</h2>
    <div class="max-w-2xl mx-auto">
      <ImageGallery 
        {images}
        {showThumbnails}
        {autoPlay}
        {autoPlayInterval}
        {showCaptions}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="show-thumbnails" class="flex items-center gap-1">
          <input id="show-thumbnails" type="checkbox" bind:checked={showThumbnails} />
          Show Thumbnails
        </label>
      </div>

      <div class="flex items-end">
        <label for="auto-play" class="flex items-center gap-1">
          <input id="auto-play" type="checkbox" bind:checked={autoPlay} />
          Auto Play
        </label>
      </div>

      <div class="flex items-end">
        <label for="show-captions" class="flex items-center gap-1">
          <input id="show-captions" type="checkbox" bind:checked={showCaptions} />
          Show Captions
        </label>
      </div>

      <div>
        <label for="auto-play-interval" class="block text-sm mb-1">Interval (ms):</label>
        <input
          id="auto-play-interval"
          type="number"
          bind:value={autoPlayInterval}
          class="border rounded p-1 w-20"
          min="1000"
          max="10000"
          step="500"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ImageGallery Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Without Thumbnails</h3>
        <div class="max-w-2xl mx-auto">
          <ImageGallery 
            {images}
            showThumbnails={false}
            showCaptions={true}
          />
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Captions</h3>
        <div class="max-w-2xl mx-auto">
          <ImageGallery 
            {images}
            showThumbnails={true}
            showCaptions={false}
          />
        </div>
      </div>
    </div>
  </div>
</div>