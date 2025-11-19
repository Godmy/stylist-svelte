<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SectionHeading from './SectionHeading.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'level', description: 'Heading level', type: 'select', options: [1, 2, 3, 4, 5, 6], defaultValue: 2 },
    { name: 'size', description: 'Size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], defaultValue: 'lg' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-typography-text-sectionheading"
  title="SectionHeading"
  component={SectionHeading}
  category="Atoms/Typography/Text"
  description="A section heading component for displaying section titles."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: { level?: 1 | 2 | 3 | 4 | 5 | 6; size?: 'sm' | 'md' | 'lg' | 'xl'; class?: string; })}
    <SectionHeading {...props}>Sample Section Heading</SectionHeading>
  {/snippet}
</Story>