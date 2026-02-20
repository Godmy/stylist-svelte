<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import TagInput from './index.svelte';

  type Props = {
    placeholder: string;
    disabled: boolean;
    maxTags: number;
    delimiter: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter tags...'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'maxTags',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'delimiter',
      type: 'text',
      defaultValue: ','
    }
  ];

  let currentTags = $state<string[]>(['svelte', 'design-system']);
  
  function handleInputChange(tags: string[]) {
    currentTags = tags;
    console.log('Tags changed:', tags);
  }
</script>

<Story
  id="organisms-tag-input"
  title="Organisms / Interaction / Input / Tag Input"
  component={TagInput}
  category="Organisms/Interaction/Input"
  description="A tag input component for managing tags."
  tags={['input', 'tags', 'multiselect']}
  controls={controls}
>
  {#snippet children(props)}
    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">Current Tags: {currentTags.join(', ')}</h3>
      <TagInput 
        tags={currentTags}
        placeholder={props.placeholder}
        disabled={props.disabled}
        maxTags={props.maxTags}
        delimiter={props.delimiter}
        onChange={handleInputChange}
      />
    </div>
  {/snippet}
</Story>

