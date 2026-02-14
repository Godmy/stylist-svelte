<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductRecommendation from './index.svelte';

  type Product = {
    id: string;
    title: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
  };

  type Props = {
    title: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Recommended for You'
    }
  ];

  const sampleProducts: Product[] = [
    {
      id: '1',
      title: 'Wireless Headphones',
      price: 199.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x150/3B82F6/FFFFFF?text=Headphones',
      rating: 4.5
    },
    {
      id: '2',
      title: 'Smart Watch',
      price: 249.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x150/10B981/FFFFFF?text=Watch',
      rating: 4.2
    },
    {
      id: '3',
      title: 'Bluetooth Speaker',
      price: 89.99,
      currency: '$',
      image: 'https://via.placeholder.com/200x150/F59E0B/FFFFFF?text=Speaker',
      rating: 4.7
    }
  ];
</script>

<Story
  id="molecules-product-recommendation"
  title="ProductRecommendation"
  component={ProductRecommendation}
  category="Molecules"
  description="Displays a list of recommended products."
  tags={['product', 'recommendation', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="sb-molecules-product-recommendation p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductRecommendation Story</h2>
      <ProductRecommendation
        products={sampleProducts}
        title={props.title}
        onProductClick={(id) => console.log('Product clicked:', id)}
      />
    </div>
  {/snippet}
</Story>

