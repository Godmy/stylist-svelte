<script lang="ts">
  import { ProductGalleryStyleManager } from '$stylist/design-system/styles/information/product-gallery';
  let {
    images = [],
    mainImage = '',
    onImageChange = (image: string) => {},
    class: className = ''
  } = $props<{
    images: string[];
    mainImage?: string;
    onImageChange?: (image: string) => void;
    class?: string;
  }>();

  let currentImage = $state(mainImage || images[0] || '');

  $effect(() => {
    if (mainImage) {
      currentImage = mainImage;
    } else if (images.length > 0 && !currentImage) {
      currentImage = images[0];
    }
  });

  const changeImage = (image: string) => {
    currentImage = image;
    onImageChange(image);
  };
</script>

<div class={ProductGalleryStyleManager.getContainerClass(className)}>
  <!-- Main image display -->
  <div class="md:w-3/4 mb-4 md:mb-0 md:pr-4">
    <div class="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-96">
      {#if currentImage}
        <img src={currentImage} alt="Product" class="max-h-80 object-contain" />
      {:else}
        <div class="text-gray-500">No image available</div>
      {/if}
    </div>
  </div>
  
  <!-- Thumbnails -->
  <div class="md:w-1/4 flex md:flex-col flex-wrap gap-2">
    {#each images as image, i}
      <button
        onclick={() => changeImage(image)}
        class={`flex-1 md:flex-none ${
          currentImage === image
            ? 'ring-2 ring-blue-500 rounded'
            : 'opacity-70 hover:opacity-100'
        }`}
      >
        <img 
          src={image} 
          alt={`Thumbnail ${i+1}`} 
          class="w-full h-20 object-cover rounded cursor-pointer" 
        />
      </button>
    {/each}
  </div>
</div>