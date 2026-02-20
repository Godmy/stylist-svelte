<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ProductDemo from './index.svelte';

  type Props = {
    title: string;
    description: string;
    features: string; // Comma-separated string for features
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Interactive Product Demo'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Experience our product firsthand with this interactive demonstration. See how our features work in a real-world scenario.'
    },
    {
      name: 'features',
      type: 'text',
      defaultValue: 'Easy to use interface,Real-time updates,Customizable options,Secure and reliable'
    }
  ];

  function parseFeatures(featuresString: string): string[] {
    return featuresString.split(',').map(f => f.trim()).filter(f => f.length > 0);
  }
</script>

<Story
  id="molecules-product-demo"
  title="ProductDemo"
  component={ProductDemo}
  category="Molecules"
  description="Showcases a product with a live, interactive demonstration."
  tags={['product', 'demo', 'interactive', 'showcase']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-molecules-product-demo p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">ProductDemo Story</h2>
      <ProductDemo
        title={values.title}
        description={values.description}
        features={parseFeatures(values.features)}
        onDemo={() => console.log('Try Demo clicked')}
      >
        {#snippet demoContent()}
          <div class="text-gray-600 italic">
            Your interactive demo content here.
            <button class="px-3 py-1 bg-blue-500 text-white rounded mt-2">Interact</button>
          </div>
        {/snippet}
      </ProductDemo>
    </div>
  {/snippet}
</Story>


