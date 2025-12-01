<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductCardExtended from './ProductCardExtended.svelte';
  import { Button } from '$lib/components/atoms'; // Assuming Button atom is available

  type Props = {
    title: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
    reviewCount: number;
    description: string;
    features: string; // Comma-separated string for features
    badge: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Premium Wireless Headphones'
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 299.99,
      min: 0
    },
    {
      name: 'currency',
      type: 'text',
      defaultValue: '$'
    },
    {
      name: 'image',
      type: 'text',
      defaultValue: 'https://via.placeholder.com/400x300?text=Headphones'
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 4.7,
      min: 0,
      max: 5
    },
    {
      name: 'reviewCount',
      type: 'number',
      defaultValue: 342,
      min: 0
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Experience crystal clear sound with our premium wireless headphones featuring active noise cancellation and 30-hour battery life.'
    },
    {
      name: 'features',
      type: 'text',
      defaultValue: 'Active Noise Cancellation,30-hour battery life,Bluetooth 5.0,Memory foam ear cushions'
    },
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'Sale'
    }
  ];

  function parseFeatures(featuresString: string): string[] {
    return featuresString.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }
</script>

<Story
  id="molecules-product-card-extended"
  title="ProductCardExtended"
  component={ProductCardExtended}
  category="Molecules"
  description="An extended product card component with detailed information and actions."
  tags={['product', 'card', 'extended', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCardExtended Story</h2>
      <ProductCardExtended
        title={props.title}
        price={props.price}
        currency={props.currency}
        image={props.image}
        rating={props.rating}
        reviewCount={props.reviewCount}
        description={props.description}
        features={parseFeatures(props.features)}
        badge={props.badge}
        onAddToCart={() => console.log('Add to Cart clicked')}
        onWishlist={() => console.log('Add to Wishlist clicked')}
      />
    </div>
  {/snippet}
</Story>
