<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductGallery from './index.svelte';

  let selectedImage = $state('https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1');

  const controls: ControlConfig[] = [
    {
      name: 'mainImage',
      type: 'select',
      options: [
        'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1',
        'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Image+2',
        'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Image+3',
        'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Image+4'
      ],
      defaultValue: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1'
    }
  ];

  const sampleImages = [
    'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Image+2',
    'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Image+3',
    'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Image+4'
  ];
</script>

<Story id="molecules-product-gallery" title="ProductGallery" component={ProductGallery} category="Molecules" controls={controls}>
  {#snippet children(values: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <ProductGallery
        images={sampleImages}
        mainImage={values.mainImage}
        onImageChange={(image) => (selectedImage = image)}
      />
      <p class="mt-3 text-sm text-gray-600">Selected image: {selectedImage}</p>
    </div>
  {/snippet}
</Story>
