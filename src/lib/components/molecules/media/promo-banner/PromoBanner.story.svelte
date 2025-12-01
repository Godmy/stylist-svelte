<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import PromoBanner from './PromoBanner.svelte';

  const variantOptions = ['primary', 'secondary', 'success', 'warning', 'danger'] as const;

  type PromoBannerStoryProps = {
    title: string;
    description: string;
    cta: string;
    variant: (typeof variantOptions)[number];
    image: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Limited Time Offer'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Get 30% off on all premium plans. Offer ends soon!'
    },
    {
      name: 'cta',
      type: 'text',
      defaultValue: 'Claim Offer'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'success',
      options: [...variantOptions]
    },
    {
      name: 'image',
      type: 'text',
      defaultValue: 'https://placehold.co/150x80/3B82F6/FFFFFF?text=Promo'
    }
  ];
</script>

<Story
  id="molecules-promo-banner"
  title="PromoBanner"
  component={PromoBanner}
  category="Molecules"
  description="A promotional banner component."
  tags={['banner', 'promotion', 'marketing']}
  controls={controls}
>
  {#snippet children(props: PromoBannerStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PromoBanner Story</h2>
      <PromoBanner
        title={props.title}
        description={props.description}
        cta={props.cta}
        variant={props.variant}
        image={props.image}
        onCtaClick={() => console.log('CTA clicked')}
      />
    </div>
  {/snippet}
</Story>