<script>
  import { Story } from '$lib/playground';
  import Loader from './Loader.svelte';

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
  const controls = [
    { name: 'class', label: 'CSS Classes', type: 'text' },
    { name: 'role', label: 'ARIA Role', type: 'select', options: ['status', 'progressbar', 'alert', 'alertdialog'] }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default Loader component with standard spinning animation.'}
>
  <Loader />
</Story>