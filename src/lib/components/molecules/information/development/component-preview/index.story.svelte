<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ComponentPreview from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Button Component' },
    { name: 'description', type: 'text', defaultValue: 'Primary action button with variants' },
    { name: 'code', type: 'text', defaultValue: '<Button variant="primary">Click me</Button>' },
    { name: 'language', type: 'text', defaultValue: 'svelte' },
    { name: 'showCode', type: 'boolean', defaultValue: false }
  ];
</script>

<Story
  id="molecules-component-preview"
  title="Molecules / Information / Development / ComponentPreview"
  component={ComponentPreview}
  category="Molecules/Information/Development"
  description="Component preview with code and demo"
  controls={controls}
>
  {#snippet children(args: any)}
    <div class="sb-molecules-component-preview">
      <h1 class="text-lg font-semibold mb-4">ComponentPreview</h1>
      <p>Component preview with code and demo</p>

      <h2 class="text-md font-semibold mb-2">Primary Button</h2>
      <div class="p-4 border rounded-lg max-w-2xl">
        <ComponentPreview
          title={args.title}
          description={args.description}
          code={args.code}
          language={args.language}
          showCode={args.showCode}
        >
          {#snippet componentDemo()}
            <button type="button" class="rounded bg-blue-600 px-3 py-1.5 text-white">Click me</button>
          {/snippet}
        </ComponentPreview>
      </div>
    </div>
  {/snippet}
</Story>

