<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductCardCompact from './index.svelte';

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
  title="Molecules / Information / Commerce / Products / ProductCardCompact"
  component={ProductCardCompact}
  category="Molecules/Information/Commerce/Products"
  description="A compact card component for displaying product information."
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-product-card-compact p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductCardCompact Story</h2>
      <ProductCardCompact
        title={args.title ?? 'Wireless Earbuds'}
        price={args.price ?? 89.99}
        currency={args.currency ?? '$'}
        image={args.image ?? 'https://via.placeholder.com/150x150?text=Earbuds'}
        rating={args.rating ?? 4.5}
        badge={args.badge ?? 'New'}
      />
    </div>
  {/snippet}
</Story>


