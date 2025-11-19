<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Superscript from './Superscript.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['sup', 'span'], defaultValue: 'sup' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-superscript"
  title="Superscript"
  component={Superscript}
  category="Atoms/Typography/Text"
  description="A superscript component for displaying text positioned above the normal line."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Superscript {...props}>This text appears as superscript.</Superscript>
  {/snippet}
</Story>