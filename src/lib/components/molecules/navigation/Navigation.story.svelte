<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type Props = {
    showLabels: boolean;
    variant: 'horizontal' | 'vertical';
  };

  const controls: ControlConfig[] = [
    {
      name: 'showLabels',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical']
    }
  ];
</script>

<Story
  id="molecules-navigation"
  title="Navigation"
  category="Molecules"
  description="A navigation component for site or application navigation."
  tags={['navigation', 'menu', 'routing']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Navigation</h2>
      <div class="max-w-2xl mx-auto">
        <nav class={`flex ${props.variant === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-4'}`}>
          <button type="button" class={`px-3 py-2 rounded ${props.showLabels ? 'block' : 'inline-block'}`}>Home</button>
          <button type="button" class={`px-3 py-2 rounded ${props.showLabels ? 'block' : 'inline-block'}`}>About</button>
          <button type="button" class={`px-3 py-2 rounded ${props.showLabels ? 'block' : 'inline-block'}`}>Services</button>
          <button type="button" class={`px-3 py-2 rounded ${props.showLabels ? 'block' : 'inline-block'}`}>Contact</button>
        </nav>
      </div>
    </div>
  {/snippet}
</Story>