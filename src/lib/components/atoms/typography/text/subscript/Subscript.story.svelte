<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Subscript from './Subscript.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'as', description: 'Render element', type: 'select', options: ['sub', 'span'], defaultValue: 'sub' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-subscript"
  title="Subscript"
  component={Subscript}
  category="Atoms/Typography/Text"
  description="A subscript component for displaying text positioned below the normal line."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { as: string; class: string; })}
    <Subscript {...props}>This text appears as subscript.</Subscript>
  {/snippet}
</Story>