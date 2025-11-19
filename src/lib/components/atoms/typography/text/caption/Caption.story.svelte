<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Caption from './Caption.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['p', 'div', 'span', 'figcaption'], defaultValue: 'p' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-caption"
  title="Caption"
  component={Caption}
  category="Atoms/Typography/Text"
  description="A caption component for displaying subtext or descriptive text."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Caption {...props}>This is a sample caption text</Caption>
  {/snippet}
</Story>