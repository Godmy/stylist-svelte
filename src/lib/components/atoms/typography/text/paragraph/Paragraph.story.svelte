<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Paragraph from './Paragraph.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['p', 'div', 'span'], defaultValue: 'p' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-paragraph"
  title="Paragraph"
  component={Paragraph}
  category="Atoms/Typography/Text"
  description="A paragraph component for displaying body text."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Paragraph {...props}>This is a sample paragraph text that demonstrates the usage of the paragraph component. It shows how the text is formatted and styled according to the component's specifications.</Paragraph>
  {/snippet}
</Story>