<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Small from './Small.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['small', 'span', 'div'], defaultValue: 'small' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-small"
  title="Small"
  component={Small}
  category="Atoms/Typography/Text"
  description="A small text component for displaying secondary or less important text."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Small {...props}>This is small text that demonstrates the small text component.</Small>
  {/snippet}
</Story>