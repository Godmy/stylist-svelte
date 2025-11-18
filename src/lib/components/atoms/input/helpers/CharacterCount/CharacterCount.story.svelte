<script>
  import { Story } from '$lib/playground';
  import CharacterCount from './CharacterCount.svelte';

  // Define the meta information for the story
  const meta = {
    title: 'Atoms/Input/Helpers/CharacterCount',
    component: CharacterCount,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'A character count component that displays the current/max character count with color indication.'
        }
      }
    }
  };

  // Define controls for the story
  const controls = [
    { name: 'current', label: 'Current', type: 'number', defaultValue: 50 },
    { name: 'max', label: 'Max', type: 'number', defaultValue: 100 },
    { name: 'showPercentage', label: 'Show Percentage', type: 'boolean', defaultValue: false },
    { name: 'class', label: 'CSS Classes', type: 'text' }
  ];
</script>

<Story
  meta={meta}
  {controls}
  docs={'Default CharacterCount component showing 50/100 characters.'}
>
  <CharacterCount current={50} max={100} />
</Story>