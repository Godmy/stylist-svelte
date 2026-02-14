<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductGallery from './index.svelte';

  type Props = {
    mainImage: string;
  };

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

<Story
  id="molecules-product-gallery"
  title="ProductGallery"
  component={ProductGallery}
  category="Molecules"
  description="A gallery component for displaying product images with thumbnails."
  tags={['product', 'gallery', 'images', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-molecules-product-gallery p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductGallery Story</h2>
      <ProductGallery
        images={sampleImages}
        mainImage={props.mainImage}
        onImageChange={(image) => console.log('Image changed:', image)}
      />
    </div>
  {/snippet}
</Story>

