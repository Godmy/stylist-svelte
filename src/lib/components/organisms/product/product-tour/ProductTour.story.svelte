<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import ProductTour from './ProductTour.svelte';

  type ProductTourStoryProps = {
    showTour: boolean;
    currentStep: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'showTour',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'currentStep',
      type: 'number',
      defaultValue: 0
    }
  ];
</script>

<Story
  id="molecules-product-tour"
  title="ProductTour"
  component={ProductTour}
  category="Molecules"
  description="A product tour component to guide users."
  tags={['tour', 'guide', 'onboarding']}
  controls={controls}
>
  {#snippet children(props: ProductTourStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductTour Story</h2>
      <ProductTour
        showTour={props.showTour}
        currentStep={props.currentStep}
        steps={[
          {
            title: "Welcome to Our Product",
            content: "This is the first step of the tour. We'll guide you through the main features."
          },
          {
            title: "Key Features",
            content: "Here you'll find our most important features that make our product stand out."
          },
          {
            title: "Get Started",
            content: "Now that you know the basics, you're ready to start using our product!"
          }
        ]}
        onComplete={() => console.log('Tour completed')}
      />
    </div>
  {/snippet}
</Story>