<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import ComponentPreview from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Primary Button' },
    { name: 'description', type: 'text', defaultValue: 'Button used for key actions in forms.' },
    { name: 'code', type: 'text', defaultValue: '<Button variant="primary">Save</Button>' },
    { name: 'language', type: 'select', options: ['svelte', 'typescript', 'html'], defaultValue: 'svelte' },
    { name: 'showCode', type: 'boolean', defaultValue: false },
    { name: 'demoVariant', type: 'select', options: ['primary', 'secondary', 'danger'], defaultValue: 'primary' }
  ];

  function variantClass(variant: string): string {
    if (variant === 'secondary') return 'bg-gray-800 text-white';
    if (variant === 'danger') return 'bg-red-600 text-white';
    return 'bg-blue-600 text-white';
  }
</script>

<Story
  id="molecules-component-preview"
  title="Molecules / Information / Development / ComponentPreview"
  component={ComponentPreview}
  category="Molecules/Information/Development"
  description="Preview card with demo/codetab switch and configurable snippet text."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50">
      <ComponentPreview
        title={args.title}
        description={args.description}
        code={args.code}
        language={args.language}
        showCode={args.showCode}
      >
        {#snippet componentDemo()}
          <button class={`px-4 py-2 rounded text-sm ${variantClass(args.demoVariant)}`} type="button">Preview action</button>
        {/snippet}
      </ComponentPreview>
    </div>
  {/snippet}
</Story>
