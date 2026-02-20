<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import PromoBanner from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Limited Time Offer' },
    { name: 'description', type: 'text', defaultValue: 'Get 30% off on all premium plans. Offer ends soon!' },
    { name: 'cta', type: 'text', defaultValue: 'Claim Offer' },
    { name: 'variant', type: 'select', options: ['primary', 'secondary', 'success', 'warning', 'danger'], defaultValue: 'success' },
    { name: 'image', type: 'text', defaultValue: 'https://placehold.co/150x80/3B82F6/FFFFFF?text=Promo' }
  ];
</script>

<Story
  id="atoms-promo-banner"
  title="Promo Banner"
  component={PromoBanner}
  category="Atoms"
  description="A promotional banner component."
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Promo Banner Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">A promotional banner component.</p>

        <div class="mt-6">
          <PromoBanner
            title={values.title}
            description={values.description}
            cta={values.cta}
            variant={values.variant}
            image={values.image}
            onCtaClick={() => console.log('CTA clicked')}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Banner Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different banner configurations with various properties.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Success Banner</p>
            <PromoBanner
              title="Special Offer"
              description="Get 50% off on selected items"
              cta="Shop Now"
              variant="success"
              image="https://placehold.co/150x80/10B981/FFFFFF?text=Sale"
              onCtaClick={() => console.log('CTA clicked')}
            />
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Warning Banner</p>
            <PromoBanner
              title="Limited Stock"
              description="Only a few items left in stock"
              cta="Buy Soon"
              variant="warning"
              image="https://placehold.co/150x80/F59E0B/FFFFFF?text=Hurry"
              onCtaClick={() => console.log('CTA clicked')}
            />
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>



