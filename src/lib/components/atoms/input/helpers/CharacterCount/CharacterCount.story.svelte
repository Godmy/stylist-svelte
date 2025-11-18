<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import CharacterCount from './CharacterCount.svelte';

  // Define controls for the story
  const controls: ControlConfig[] = [
    { name: 'current', description: 'Current', type: 'number', defaultValue: 50 },
    { name: 'max', description: 'Max', type: 'number', defaultValue: 100 },
    { name: 'showPercentage', description: 'Show Percentage', type: 'boolean', defaultValue: false },
    { name: 'class', description: 'CSS Classes', type: 'text' }
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
  {#snippet children(props: { current: number; max: number; showPercentage: boolean; class: string; })}
    <CharacterCount current={props.current} max={props.max} showPercentage={props.showPercentage} />
  {/snippet}
</Story>