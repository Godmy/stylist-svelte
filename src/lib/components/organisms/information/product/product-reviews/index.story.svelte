<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import ProductReviews from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'averageRating', type: 'number', defaultValue: 4.2 },
      { name: 'totalReviews', type: 'number', defaultValue: 128 },
      { name: 'showAddReview', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type Review = {
    id: string;
    author: string;
    rating: number;
    title: string;
    content: string;
    date: string;
    verified?: boolean;
  };

  const reviews: Review[] = [
    { id: '1', author: 'John D.', rating: 5, title: 'Great product!', content: 'Highly recommend this product.', date: new Date().toISOString(), verified: true },
    { id: '2', author: 'Jane S.', rating: 4, title: 'Good value', content: 'Good quality for the price.', date: new Date().toISOString(), verified: false }
  ];

  function handleAddReview(review: { title: string; content: string; rating: number }) {
    console.log('Review added:', review);
  }

  function handleHelpful(reviewId: string) {
    console.log('Helpful:', reviewId);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ProductReviews}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-product-reviews grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Product Reviews Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive product reviews with customizable options.</p>

        <div class="mt-6">
          <ProductReviews
            reviews={reviews}
            averageRating={values.averageRating}
            totalReviews={values.totalReviews}
            showAddReview={values.showAddReview}
            onAddReview={handleAddReview}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Product Reviews Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different product reviews configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Add Review</p>
            <div>
              <ProductReviews
                reviews={reviews}
                showAddReview={false}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Verified Only</p>
            <div>
              <ProductReviews
                reviews={reviews.filter(r => r.verified)}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

