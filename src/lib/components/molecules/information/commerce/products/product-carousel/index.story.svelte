<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductCarousel from './index.svelte';

  type ProductCarouselStoryProps = {
    showNavigation: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showNavigation',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-product-carousel"
  title="ProductCarousel"
  component={ProductCarousel}
  category="Molecules"
  description="A carousel component for displaying products."
  tags={['carousel', 'product', 'slider']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="sb-molecules-product-carousel p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCarousel Story</h2>
      <ProductCarousel
        products={[
          {
            title: "Wireless Headphones",
            price: 199.99,
            currency: "$",
            image: "https://placehold.co/100x100",
            rating: 4.5
          },
          {
            title: "Smart Watch",
            price: 249.99,
            currency: "$",
            image: "https://placehold.co/100x100",
            rating: 4.2
          },
          {
            title: "Bluetooth Speaker",
            price: 89.99,
            currency: "$",
            image: "https://placehold.co/100x100",
            rating: 4.7
          }
        ]}
      />
    </div>
  {/snippet}
</Story>

