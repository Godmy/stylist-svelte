<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CharacterCount from './CharacterCount.svelte';
  import type { ICharacterCountProps } from './types';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ICharacterCountProps & HTMLAttributes<HTMLDivElement>;

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'current', description: 'Current characters', type: 'number', defaultValue: 50 },
    { name: 'max', description: 'Maximum characters', type: 'number', defaultValue: 100 },
    { name: 'showPercentage', description: 'Show as percentage', type: 'boolean', defaultValue: false },
    { name: 'class', description: 'Additional CSS classes', type: 'text', defaultValue: '' }
  ];
</script>

<Story
  id="atoms-input-helpers-charactercount"
  title="CharacterCount"
  component={CharacterCount}
  category="Atoms/Input/Helpers"
  description="A character count component that displays the current/max character count with color indication."
  tags={[]}
  controls={controls}
>
  {#snippet children(props: Props)}
    <CharacterCount {...props} />
  {/snippet}
</Story>