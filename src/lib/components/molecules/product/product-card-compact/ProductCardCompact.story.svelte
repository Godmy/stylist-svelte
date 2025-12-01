<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductCardCompact from './ProductCardCompact.svelte';

  type Props = {
    title: string;
    price: number;
    currency: string;
    image: string;
    rating: number;
    badge: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Wireless Earbuds'
    },
    {
      name: 'price',
      type: 'number',
      defaultValue: 89.99,
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
      defaultValue: 'https://via.placeholder.com/150x150?text=Earbuds'
    },
    {
      name: 'rating',
      type: 'number',
      defaultValue: 4.5,
      min: 0,
      max: 5
    },
    {
      name: 'badge',
      type: 'text',
      defaultValue: 'New'
    }
  ];
</script>

<Story
  id="molecules-product-card-compact"
  title="ProductCardCompact"
  component={ProductCardCompact}
  category="Molecules"
  description="A compact card component for displaying product information."
  tags={['product', 'card', 'compact', 'ecommerce']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCardCompact Story</h2>
      <ProductCardCompact
        title={props.title}
        price={props.price}
        currency={props.currency}
        image={props.image}
        rating={props.rating}
        badge={props.badge}
      />
    </div>
  {/snippet}
</Story>
