<script>
  import { Story } from '$lib/playground';
  import Spinner from './Spinner.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Feedback/Process/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'A spinner component that displays a rotating loading indicator with different sizes and variants.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    { name: 'variant', label: 'Variant', type: 'select', options: ['primary', 'white', 'gray'] },
    { name: 'label', label: 'Label', type: 'text', defaultValue: 'Loading...' },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default Spinner component with medium size and primary variant.'}
>
  <Spinner />
</Story>