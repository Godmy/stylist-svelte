<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import SuggestionsTagInput from './SuggestionsTagInput.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Добавьте навыки через Enter',
      description: 'Placeholder text for the input'
    },
    {
      name: 'allowCustom',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to allow custom tags'
    },
    {
      name: 'maxTags',
      type: 'number' as ControlType,
      defaultValue: 5,
      description: 'Maximum number of tags allowed'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the input is disabled'
    }
  ];

  const suggestions = [
    { id: 'ux', label: 'UX' },
    { id: 'motion', label: 'Motion' },
    { id: 'system', label: 'Design systems' },
    { id: 'research', label: 'Research' },
    { id: 'leadership', label: 'Leadership' }
  ];

  let value = ['ux', 'system'];

  function handleValueChange(newValue: string[]) {
    console.log('Selected tags:', newValue);
    value = newValue;
  }
</script>

<Story
  {controls}
  title="SuggestionsTagInput Component"
  description="Tag input component with suggestions and custom tag support"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <SuggestionsTagInput
      id="skills-tags"
      label="Командные навыки"
      value={value}
      suggestions={suggestions}
      placeholder={controlValues.placeholder}
      description="Используется в карточке профиля и подборе менторов."
      allowCustom={controlValues.allowCustom}
      maxTags={controlValues.maxTags}
      disabled={controlValues.disabled}
      onValueChange={handleValueChange}
    />
  </div>

  {/snippet}
</Story>