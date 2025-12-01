<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductWishlist from './ProductWishlist.svelte';

  type ProductWishlistStoryProps = {
    showEmptyWishlist: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showEmptyWishlist',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="molecules-product-wishlist"
  title="ProductWishlist"
  component={ProductWishlist}
  category="Molecules"
  description="A wishlist component for products."
  tags={['wishlist', 'product', 'cart']}
  controls={controls}
>
  {#snippet children(props: ProductWishlistStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductWishlist Story</h2>
      <ProductWishlist
        items={props.showEmptyWishlist ? [] : [
          {
            id: '1',
            title: 'Wireless Headphones',
            price: 199.99,
            currency: '$',
            image: 'https://placehold.co/100x100',
            rating: 4.5
          },
          {
            id: '2',
            title: 'Smart Watch',
            price: 249.99,
            currency: '$',
            image: 'https://placehold.co/100x100',
            rating: 4.2
          }
        ]}
        onRemove={(id) => console.log(`Removed item with id: ${id}`)}
        onMoveToCart={(id) => console.log(`Moved item with id: ${id} to cart`)}
      />
    </div>
  {/snippet}
</Story>