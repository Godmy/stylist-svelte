<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Loader from './loader/index.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Feedback/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'A loading spinner component that indicates an ongoing process.'
        }
      }
    }
  };

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'class', description: 'CSS Classes', type: 'text' },
    { name: 'role', description: 'ARIA Role', type: 'select', options: ['status', 'progressbar', 'alert', 'alertdialog'] }
  ];
</script>

<Story
  id="atoms-feedback-loader"
  title="Loader"
  component={Loader}
  category="Atoms/Feedback"
  description="A loading spinner component that indicates an ongoing process."
  tags={[]}
  controls={controls}
>
  {#snippet children()}
    <Loader />
  {/snippet}
</Story>
