<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ProductCardCompact from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Wireless Earbuds' },
    { name: 'price', type: 'number', defaultValue: 89.99, min: 0 },
    { name: 'currency', type: 'text', defaultValue: '$' },
    { name: 'image', type: 'text', defaultValue: 'https://placehold.co/220x220?text=Earbuds' },
    { name: 'rating', type: 'number', defaultValue: 4.5, min: 0, max: 5, step: 0.1 },
    { name: 'badge', type: 'select', options: ['', 'sale', 'new', 'popular'], defaultValue: 'new' }
  ];
</script>

<Story
  id="molecules-product-card-compact"
  title="Molecules / Information / Commerce / Products / ProductCardCompact"
  component={ProductCardCompact}
  category="Molecules/Information/Commerce/Products"
  description="Compact product card for dense lists and carousels."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 bg-gray-50 rounded-xl">
      <div class="max-w-xs">
        <ProductCardCompact
          title={args.title}
          price={args.price}
          currency={args.currency}
          image={args.image}
          rating={args.rating}
          badge={args.badge}
        />
      </div>
    </div>
  {/snippet}
</Story>
