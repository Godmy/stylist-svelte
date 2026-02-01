<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Breadcrumb from './breadcrumb/index.svelte';

  type Props = {
    currentPage: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'currentPage',
      type: 'text',
      defaultValue: 'Current Page'
    }
  ];
</script>

<Story
  id="molecules-breadcrumb"
  title="Breadcrumb"
  component={Breadcrumb}
  category="Molecules"
  description="A navigation component that shows the user's location in the site hierarchy."
  tags={['navigation', 'path', 'hierarchy']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Breadcrumb</h2>
      <div class="max-w-2xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category', href: '/products/category' },
            { label: props.currentPage, href: '#' }
          ]}
        />
      </div>
    </div>
  {/snippet}
</Story>
