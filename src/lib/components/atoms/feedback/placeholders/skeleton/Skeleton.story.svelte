<script>
  import { Story } from '$lib/playground';
  import Skeleton from './Skeleton.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Feedback/Placeholders/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'A skeleton component that serves as a loading placeholder with different variants.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'variant', label: 'Variant', type: 'select', options: ['text', 'circular', 'rectangular'] },
    { name: 'width', label: 'Width', type: 'text', defaultValue: '100%' },
    { name: 'height', label: 'Height', type: 'text' },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default Skeleton component with text variant.'}
>
  <Skeleton />
</Story>