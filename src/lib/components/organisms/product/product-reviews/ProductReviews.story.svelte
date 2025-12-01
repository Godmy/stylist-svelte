<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductReviews from './ProductReviews.svelte';

  type Review = {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
    verified?: boolean;
  };

  type Props = {
    averageRating: number;
    totalReviews: number;
    showAddReview: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'averageRating',
      type: 'number',
      defaultValue: 4.2,
      min: 0,
      max: 5
    },
    {
      name: 'totalReviews',
      type: 'number',
      defaultValue: 128,
      min: 0
    },
    {
      name: 'showAddReview',
      type: 'boolean',
      defaultValue: true
    }
  ];

  const sampleReviews: Review[] = [
    {
      id: '1',
      author: 'John D.',
      rating: 5,
      title: 'Excellent Product!',
      content: 'This product exceeded my expectations. Great quality and fast shipping.',
      date: '2023-10-15',
      verified: true
    },
    {
      id: '2',
      author: 'Sarah M.',
      rating: 4,
      title: 'Good Value',
      content: 'Overall satisfied with the purchase. Would recommend to others.',
      date: '2023-10-20',
      verified: true
    }
  ];
</script>

<Story
  id="molecules-product-reviews"
  title="ProductReviews"
  component={ProductReviews}
  category="Molecules"
  description="Displays product reviews and allows users to submit new reviews."
  tags={['product', 'reviews', 'rating', 'feedback']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductReviews Story</h2>
      <ProductReviews
        reviews={sampleReviews}
        averageRating={props.averageRating}
        totalReviews={props.totalReviews}
        showAddReview={props.showAddReview}
        onAddReview={(review) => console.log('New review submitted:', review)}
      />
    </div>
  {/snippet}
</Story>
