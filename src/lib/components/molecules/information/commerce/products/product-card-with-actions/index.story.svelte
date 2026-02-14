<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductCardWithActions from './index.svelte';
  import { Button } from '$stylist/components/atoms'; // Assuming Button atom is available

  type Props = {
    title: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
    reviewCount: number;
    description: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Smart Watch'
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
      defaultValue: 'https://via.placeholder.com/300x200?text=Smartwatch'
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 4.3,
      min: 0,
      max: 5
    },
    {
      name: 'reviewCount',
      type: 'number',
      defaultValue: 87,
      min: 0
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Track your fitness goals with this advanced smartwatch.'
    }
  ];
</script>

<Story
  id="molecules-product-card-with-actions"
  title="Molecules / Information / Commerce / Products / ProductCardWithActions"
  component={ProductCardWithActions}
  category="Molecules/Information/Commerce/Products"
  description="A product card component with integrated action buttons."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-product-card-with-actions p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCardWithActions Story</h2>
      <ProductCardWithActions
        title={args.title ?? 'Smart Watch'}
        price={args.price ?? 199.99}
        currency={args.currency ?? '$'}
        image={args.image ?? 'https://via.placeholder.com/300x200?text=Smartwatch'}
        rating={args.rating ?? 4.3}
        reviewCount={args.reviewCount ?? 87}
        description={args.description ?? 'Track your fitness goals with this advanced smartwatch.'}
      >
        {#snippet actions()}
          <div class="flex space-x-2 mt-4">
            <Button variant="primary">Buy Now</Button>
            <Button variant="secondary">Add to Wishlist</Button>
          </div>
        {/snippet}
      </ProductCardWithActions>
    </div>
  {/snippet}
</Story>


