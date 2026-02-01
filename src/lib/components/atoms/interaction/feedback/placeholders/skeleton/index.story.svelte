<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Skeleton from './index.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'variant', description: 'Variant', type: 'select', options: ['text', 'circular', 'rectangular'] },
    { name: 'width', description: 'Width', type: 'text', defaultValue: '100%' },
    { name: 'height', description: 'Height', type: 'text' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-feedback-placeholders-skeleton"
  title="Skeleton"
  component={Skeleton}
  category="Atoms/Feedback/Placeholders"
  description="A skeleton component that serves as a loading placeholder with different variants."
  tags={[]}
  controls={controls}
>
  {#snippet children()}
    <Skeleton />
  {/snippet}
</Story>
