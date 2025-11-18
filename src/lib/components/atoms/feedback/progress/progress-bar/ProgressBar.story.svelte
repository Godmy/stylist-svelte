<script>
  import { Story } from '$lib/playground';
  import ProgressBar from '../ProgressBar.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Feedback/Progress/ProgressBar',
    component: ProgressBar,
    tags: ['autodocs'],
    parameters: {
      layout: 'padded',
      docs: {
        description: {
          component: 'A progress bar component that visually indicates the completion status of a task.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'value', label: 'Value', type: 'number', min: 0, max: 100, defaultValue: 50 },
    { name: 'max', label: 'Max', type: 'number', min: 1, defaultValue: 100 },
    { name: 'label', label: 'Label', type: 'text' },
    { name: 'showPercentage', label: 'Show Percentage', type: 'boolean', defaultValue: true },
    { name: 'size', label: 'Size', type: 'select', options: ['sm', 'md', 'lg'] },
    { name: 'variant', label: 'Variant', type: 'select', options: ['primary', 'success', 'warning', 'danger'] },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default ProgressBar component with 50% value and primary variant.'}
>
  <ProgressBar value={50} />
</Story>