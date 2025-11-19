<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Heading from './Heading.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'size', description: 'Render element', type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], defaultValue: 'h1' },
    { name: 'level', description: 'Logical heading level', type: 'select', options: [1, 2, 3, 4, 5, 6], defaultValue: 1 },
    { name: 'className', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-heading"
  title="Heading"
  component={Heading}
  category="Atoms/Typography/Text"
  description="A heading component for displaying hierarchical titles."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; level?: 1 | 2 | 3 | 4 | 5 | 6; className?: string; })}
    <Heading {...props}>Sample Heading Text</Heading>
  {/snippet}
</Story>