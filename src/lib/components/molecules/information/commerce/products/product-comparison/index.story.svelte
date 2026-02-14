<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductComparison from './index.svelte';

  type Product = {
    id: string;
    name: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
  };

  type Props = {
    features: string; // Comma-separated string for features
  };

  const controls: ControlConfig[] = [
    {
      name: 'features',
      type: 'text',
      defaultValue: 'Wireless,Noise Cancelling,Battery Life,Water Resistant,Microphone Quality'
    }
  ];

  const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Headphones A',
      price: 199.99,
      currency: '$',
      image: 'https://via.placeholder.com/100x100?text=HP-A',
      rating: 4.5
    },
    {
      id: '2',
      name: 'Headphones B',
      price: 179.99,
      currency: '$',
      image: 'https://via.placeholder.com/100x100?text=HP-B',
      rating: 4.2
    }
  ];

  function parseFeatures(featuresString: string): string[] {
    return featuresString.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }
</script>

<Story
  id="molecules-product-comparison"
  title="ProductComparison"
  component={ProductComparison}
  category="Molecules"
  description="Compares key features and specifications of multiple products."
  tags={['product', 'comparison', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-molecules-product-comparison p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductComparison Story</h2>
      <ProductComparison
        products={sampleProducts}
        features={parseFeatures(props.features)}
      />
    </div>
  {/snippet}
</Story>

