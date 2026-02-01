<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Spinner from './spinner/index.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'size', description: 'Size', type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    { name: 'variant', description: 'Variant', type: 'select', options: ['primary', 'white', 'gray'] },
    { name: 'label', description: 'Label', type: 'text', defaultValue: 'Loading...' },
    { name: 'class', description: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  id="atoms-feedback-process-spinner"
  title="Spinner"
  component={Spinner}
  category="Atoms/Feedback/Process"
  description="A spinner component that displays a rotating loading indicator with different sizes and variants."
  tags={[]}
  controls={controls}
>
  {#snippet children()}
    <Spinner />
  {/snippet}
</Story>
