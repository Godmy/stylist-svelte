<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductCardWithActions from './ProductCardWithActions.svelte';
  import { Button } from '$lib/components/atoms'; // Assuming Button atom is available

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
  title="ProductCardWithActions"
  component={ProductCardWithActions}
  category="Molecules"
  description="A product card component with integrated action buttons."
  tags={['product', 'card', 'actions', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCardWithActions Story</h2>
      <ProductCardWithActions
        title={props.title}
        price={props.price}
        currency={props.currency}
        image={props.image}
        rating={props.rating}
        reviewCount={props.reviewCount}
        description={props.description}
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
