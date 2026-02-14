<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductCard from './index.svelte';
  import { Button } from '$stylist/components/atoms'; // Assuming Button atom is available

  type Props = {
    title: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
    reviewCount: number;
    badge: string;
    description: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Wireless Headphones'
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 199.99,
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
      defaultValue: 'https://via.placeholder.com/300x200?text=Product+Image'
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 4.2,
      min: 0,
      max: 5
    },
    {
      name: 'reviewCount',
      type: 'number',
      defaultValue: 128,
      min: 0
    },
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'Sale'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'High-quality wireless headphones with noise cancellation'
    }
  ];
</script>

<Story
  id="molecules-product-card"
  title="Molecules / Information / Commerce / Products / ProductCard"
  component={ProductCard}
  category="Molecules/Information/Commerce/Products"
  description="A versatile card component to display product information."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-product-card p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCard Story</h2>
      <ProductCard
        title={args.title ?? 'Wireless Headphones'}
        price={args.price ?? 199.99}
        currency={args.currency ?? '$'}
        image={args.image ?? 'https://via.placeholder.com/300x200?text=Product+Image'}
        rating={args.rating ?? 4.2}
        reviewCount={args.reviewCount ?? 128}
        badge={args.badge ?? 'Sale'}
        description={args.description ?? 'High-quality wireless headphones with noise cancellation'}
      >
        {#snippet actions()}
          <div class="flex space-x-2 mt-4">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="secondary">View Details</Button>
          </div>
        {/snippet}
      </ProductCard>
    </div>
  {/snippet}
</Story>


