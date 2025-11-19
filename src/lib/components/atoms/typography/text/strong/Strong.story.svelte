<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Strong from './Strong.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['strong', 'b', 'span'], defaultValue: 'strong' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-strong"
  title="Strong"
  component={Strong}
  category="Atoms/Typography/Text"
  description="A strong component for displaying bold or emphasized text."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Strong {...props}>This text has strong/emphasized formatting applied to it.</Strong>
  {/snippet}
</Story>