<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import { ProductSorting } from '.';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'sortBy', type: 'select', options: ['price-asc', 'price-desc', 'rating', 'newest'], defaultValue: 'price-asc' }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  const options = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  function handleChange(value: string) {
    console.log('Sort changed:', value);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ProductSorting}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props)}
    <section class="sb-organisms-product-sorting grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Product Sorting Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive product sorting with customizable options.</p>

        <div class="mt-6">
          <ProductSorting
            {options}
            value={props.sortBy}
            onChange={handleChange}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Product Sorting Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different product sorting configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Price Descending</p>
            <div>
              <ProductSorting
                {options}
                value="price-desc"
                onChange={handleChange}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Top Rated</p>
            <div>
              <ProductSorting
                {options}
                value="rating"
                onChange={handleChange}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

