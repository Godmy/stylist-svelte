<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import ProductDemo from './index.svelte';

  let demoClicks = $state(0);

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Interactive Product Demo' },
    { name: 'description', type: 'text', defaultValue: 'Experience key features in a realistic flow.' },
    { name: 'features', type: 'text', defaultValue: 'Easy setup,Live preview,Secure storage,Team sharing' }
  ];

  function parseFeatures(featuresString: string): string[] {
    return featuresString.split(',').map((f) => f.trim()).filter((f) => f.length > 0);
  }
</script>

<Story
  id="molecules-product-demo"
  title="ProductDemo"
  component={ProductDemo}
  category="Molecules"
  description="Showcases a product with an interactive demonstration."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-[var(--color-background-secondary)] rounded-lg">
      <ProductDemo
        title={values.title}
        description={values.description}
        features={parseFeatures(values.features)}
        onDemo={() => (demoClicks += 1)}
      >
        {#snippet demoContent()}
          <div class="text-[var(--color-text-secondary)] italic">Interactive demo area</div>
        {/snippet}
      </ProductDemo>
      <p class="mt-3 text-sm text-[var(--color-text-secondary)]">Demo started: {demoClicks} times</p>
    </div>
  {/snippet}
</Story>




