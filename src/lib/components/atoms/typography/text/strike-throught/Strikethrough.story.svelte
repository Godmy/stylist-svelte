<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Strikethrough from './Strikethrough.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['s', 'del', 'span', 'p'], defaultValue: 's' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-strikethrough"
  title="Strikethrough"
  component={Strikethrough}
  category="Atoms/Typography/Text"
  description="A strikethrough component for displaying text with a horizontal line through it."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Strikethrough {...props}>This text has a strikethrough effect applied to it.</Strikethrough>
  {/snippet}
</Story>